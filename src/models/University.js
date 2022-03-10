const conn = require('../database/connection')

const UniversitySchema = new conn.Schema({
    country: {
        type: String,
        require: true
    },

    name: {
        type: String,
        require: true
    },

    domains: {
        type: Array,
        require: true
    },

    alpha_two_code: {
        type: String,

    },

    'state-provice': {
        type: String,
        require: false
    },

    web_pages: {    
        type: Array,
        require: false
    }
})

const University = conn.model('University', UniversitySchema);

module.exports = University