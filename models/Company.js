const mongoose = require('mongoose');

const companyschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }],
    recruiters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});
module.exports = mongoose.model('Company',companyschema, 'companies');