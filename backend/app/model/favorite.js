var mongoose = require('mongoose');

var FavoriteSchema = mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId
    },
    idShow: {
        type: Number
    }
});

var Favorite = module.exports = mongoose.model('Favorite', FavoriteSchema);