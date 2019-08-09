const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    url: String,
    description: String
    
});

const Video = mongoose.model('video',schema,'videos');
module.exports = Video