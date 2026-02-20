const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, default: "" },
    interest: { type: String, required: true },
    service: { type: String, required: true },
    projectBrief: { type: String, required: true },
    budget: { type: String, default: "" },
    timeline: { type: String, default: "" },
    submittedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["new", "contacted", "closed"], default: "new" },
    source: { type: String, default: "stacli" }
}, {
    // Crucial: Forces save to stacli_contacts to prevent mixing with VentureMond
    collection: 'stacli_contacts'
});

module.exports = mongoose.model('Contact', ContactSchema);
