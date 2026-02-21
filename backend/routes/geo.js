const express = require('express');
const router = express.Router();

const COUNTRY_CURRENCY_MAP = {
    'US': 'USD', 'GB': 'GBP', 'CA': 'CAD', 'AU': 'AUD',
    'DE': 'EUR', 'FR': 'EUR', 'IT': 'EUR', 'ES': 'EUR', 'NL': 'EUR', 'IE': 'EUR',
    'AE': 'AED', 'SG': 'SGD', 'JP': 'JPY', 'IN': 'INR'
};

router.get('/', async (req, res) => {
    try {
        // 1. Detect Country from Proxy Headers
        let country = req.headers['x-vercel-ip-country'] || req.headers['cf-ipcountry'];

        if (!country) {
            // Determine Client IP
            const forwardedFor = req.headers['x-forwarded-for'];
            const realIp = req.headers['x-real-ip'];
            let clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : (realIp || req.ip);

            // Strip IPv4-mapped IPv6 prefix so APIs don't get confused
            if (clientIp && clientIp.startsWith('::ffff:')) {
                clientIp = clientIp.substring(7);
            }

            console.log("Geo Debug - Client IP:", clientIp || "Not Detected");

            let fetchIp = clientIp || '';
            if (fetchIp === '::1' || fetchIp === '127.0.0.1' || fetchIp.startsWith('192.168.') || fetchIp.startsWith('10.')) {
                fetchIp = ''; // Use empty string to let IP APIs detect the server's public IP
            }

            // PRIMARY: ipwho.is
            try {
                let geoUrl = fetchIp ? `https://ipwho.is/${fetchIp}` : 'https://ipwho.is/';
                console.log("Geo Debug - Trying IP Service 1:", geoUrl);

                const ipRes = await fetch(geoUrl);
                if (ipRes.ok) {
                    const ipData = await ipRes.json();
                    if (ipData.country_code) {
                        country = ipData.country_code;
                        console.log("Geo Debug - Detected Country (Service 1):", country);
                    }
                }
            } catch (e) {
                console.warn('Geo Debug - Service 1 failed:', e.message);
            }

            // BACKUP 1: ipapi.co
            if (!country) {
                try {
                    console.log("Geo Debug - Trying IP Service 2: https://ipapi.co/json/");
                    const backupRes = await fetch('https://ipapi.co/json/');
                    if (backupRes.ok) {
                        const backupData = await backupRes.json();
                        if (backupData.country_code) {
                            country = backupData.country_code;
                            console.log("Geo Debug - Detected Country (Service 2):", country);
                        }
                    }
                } catch (e) {
                    console.warn('Geo Debug - Service 2 failed:', e.message);
                }
            }

            // BACKUP 2: ip-api.com
            if (!country) {
                try {
                    console.log("Geo Debug - Trying IP Service 3: http://ip-api.com/json/");
                    const backup2Res = await fetch('http://ip-api.com/json/');
                    if (backup2Res.ok) {
                        const backup2Data = await backup2Res.json();
                        if (backup2Data.countryCode) {
                            country = backup2Data.countryCode;
                            console.log("Geo Debug - Detected Country (Service 3):", country);
                        }
                    }
                } catch (e) {
                    console.warn('Geo Debug - Service 3 failed:', e.message);
                }
            }
        }

        country = country || 'US'; // Final Fallback

        // 2. Determine Currency
        let currency = COUNTRY_CURRENCY_MAP[country];

        if (!currency) {
            try {
                const countryRes = await fetch(`https://restcountries.com/v3.1/alpha/${country}?fields=currencies`);
                if (countryRes.ok) {
                    const countryData = await countryRes.json();
                    const data = Array.isArray(countryData) ? countryData[0] : countryData;
                    if (data?.currencies) {
                        currency = Object.keys(data.currencies)[0];
                    }
                }
            } catch (e) {
                console.warn('Country currency fetch failed', e);
            }
        }

        currency = currency || 'USD';

        // 3. Get Exchange Rate
        let rate = 1;

        if (currency !== 'USD') {
            try {
                const rateRes = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                if (rateRes.ok) {
                    const rateData = await rateRes.json();
                    rate = rateData.rates[currency] || (currency === 'INR' ? 88 : 1);
                }
            } catch (e) {
                console.error('Exchange rate fetch failed', e);
            }
        }

        res.json({
            country,
            currency,
            rate,
            source: 'live'
        });

    } catch (error) {
        console.error('Geo API Critical Error:', error);
        res.status(200).json({
            country: 'US',
            currency: 'USD',
            rate: 1,
            source: 'fallback_error'
        });
    }
});

module.exports = router;
