const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    //name: String,  here is gonna be all the data you wanna the user fill in
});

module.exports = mongoose.model('Spot', SpotSchema);