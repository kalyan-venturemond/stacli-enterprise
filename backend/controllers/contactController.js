const Contact = require('../models/Contact');
const transporter = require('../utils/mailer');

exports.submitContact = async (req, res) => {
    const { name, email, company, interest, service, projectBrief, budget, timeline } = req.body;

    // Validate required fields
    if (!name || !email || !interest || !service || !projectBrief) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        // 1. Save to MongoDB
        const contact = new Contact({
            name,
            email,
            company,
            interest,
            service,
            projectBrief,
            budget,
            timeline
        });

        await contact.save();
        console.log(`✅ Stacli contact saved to database: ${contact._id}`);

        // Email Configuration & Branding
        const adminEmail = process.env.ADMIN_EMAIL_ADDRESS || 'hello@stacli.com';
        const fromEmail = process.env.FROM_EMAIL_ADDRESS || process.env.SMTP_USER || 'hello@stacli.com';
        const stacliGreen = '#10b981';

        // 2. Construct Email Content (HTML) - TEAM NOTIFICATION
        const adminEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width:600px; margin:0 auto; border:2px solid ${stacliGreen}; border-radius:8px; overflow:hidden; background:#ffffff;">
            
            <!-- Header -->
            <div style="background:#0a0a0a; padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:28px; letter-spacing:3px;">STACLI</h1>
            </div>

            <!-- Body -->
            <div style="padding:24px; color:#333;">
              <h2 style="margin-top:0; color:#0a0a0a; font-size: 20px;">New Website Inquiry</h2>
              
              <table style="width:100%; border-collapse:collapse; margin-top:16px;">
                <tr><td style="padding:8px; font-weight:bold; width: 30%; border-bottom:1px solid #eee;">Name</td><td style="padding:8px; border-bottom:1px solid #eee;">${name}</td></tr>
                <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Email</td><td style="padding:8px; border-bottom:1px solid #eee;">${email}</td></tr>
                <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Company</td><td style="padding:8px; border-bottom:1px solid #eee;">${company || '—'}</td></tr>
                <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Interest</td><td style="padding:8px; border-bottom:1px solid #eee;">${interest || '—'}</td></tr>
                <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Service</td><td style="padding:8px; border-bottom:1px solid #eee;">${service || '—'}</td></tr>
                <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Budget</td><td style="padding:8px; border-bottom:1px solid #eee;">${budget || '—'}</td></tr>
                <tr><td style="padding:8px; font-weight:bold; border-bottom:1px solid #eee;">Timeline</td><td style="padding:8px; border-bottom:1px solid #eee;">${timeline || '—'}</td></tr>
              </table>

              <div style="margin-top:20px; padding:15px; background:#f9f9f9; border-left:4px solid ${stacliGreen};">
                <strong>Project Brief</strong>
                <p style="margin-top:8px; white-space:pre-wrap;">${projectBrief}</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background:#f4f4f4; padding:14px; text-align:center; font-size:12px;">
              <p style="margin:4px;">Stacli Internal Notification (A VentureMond Company)</p>
              <a href="https://stacli.com" style="color:${stacliGreen}; text-decoration: none;">www.stacli.com</a>
            </div>
          </div>
        `;

        // SEND ADMIN EMAIL (Background - Fire and Forget)
        const adminMailOptions = {
            from: `"Stacli Web" <${fromEmail}>`,
            to: adminEmail,
            subject: `New Inquiry from ${name} (${company || 'Individual'})`,
            html: adminEmailHtml
        };

        transporter.sendMail(adminMailOptions)
            .then(() => console.log('✅ Admin email sent via SMTP'))
            .catch(err => console.error('⚠️ Admin SMTP failed:', err));

        // 3. Send Confirmation Email to User
        if (email) {
            const userMailOptions = {
                from: `"Stacli" <${fromEmail}>`,
                to: email,
                subject: `Thanks for Reaching Out to Stacli`,
                html: `
                  <div style="font-family: Arial, sans-serif; max-width:600px; margin:0 auto; border:2px solid ${stacliGreen}; border-radius:8px; overflow:hidden; background:#ffffff;">
                    
                    <!-- Header -->
                    <div style="background:#0a0a0a; padding:20px; text-align:center;">
                      <h1 style="color:#ffffff; margin:0; font-size:28px; letter-spacing:3px;">STACLI</h1>
                    </div>

                    <!-- Body -->
                    <div style="padding:30px; color:#333;">
                      <p style="font-size:18px; font-weight:bold; margin-top: 0;">Hello ${name},</p>
                      
                      <p style="font-size:15px; line-height:1.6;">
                        Thank you for reaching out to us.<br>
                        We have received your message regarding <strong>${service || 'your project'}</strong> and <strong>${interest || 'services'}</strong>.
                      </p>

                      <p style="font-size:15px; line-height:1.6;">
                        Our engineering team is currently reviewing your requirements. We will analyze your project brief and get back to you shortly to discuss next steps.
                      </p>
                      
                      <p style="font-size:15px;">
                        We appreciate your interest in Stacli and look forward to building something extraordinary together.
                      </p>
                    </div>

                    <!-- Footer (Left Aligned) -->
                    <div style="background:#f4f4f4; padding:20px; text-align:left;">
                      <p style="margin:6px 0; font-weight:bold;">Stacli Engineering Team</p>
                      <p style="margin:6px 0;">
                        <a href="mailto:${fromEmail}" style="color:${stacliGreen}; text-decoration:none;">
                          ${fromEmail}
                        </a>
                      </p>
                      <p style="margin:6px 0;">
                        <a href="https://stacli.com" style="color:${stacliGreen}; text-decoration:none;">
                          www.stacli.com
                        </a>
                      </p>
                    </div>
                  </div>
                `
            };

            transporter.sendMail(userMailOptions)
                .then(() => console.log('✅ User confirmation email sent'))
                .catch(err => console.error('⚠️ User SMTP failed:', err));
        }

        // Respond immediately to Frontend
        res.status(200).json({
            success: true,
            message: 'Inquiry received successfully!',
            contactId: contact._id
        });

    } catch (error) {
        console.error('❌ Database/Server Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to process inquiry',
            error: error.message
        });
    }
};
