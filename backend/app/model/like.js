var mongoose = require('mongoose');

var LikeSchema = mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId
    },
    idShow: {
        type: Number
    },
    state: {
        type: Boolean
    }
});

var Like = module.exports = mongoose.model('Like', LikeSchema);