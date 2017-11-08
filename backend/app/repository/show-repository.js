const Like = require('./../model/like.js');

function saveLike(like, callback, response) {
    let responseRequest = { "response" : response };
    Like.create(like, callback.bind(responseRequest));
}

function updateLike(like, callback, response) {
    let responseRequest = { "response" : response };
    Like.findByIdAndUpdate(
        like._id,
        { $set: { state: like.state }},
        { new: true },
        callback.bind(responseRequest)
    );
}

function findLikeByIdShow(id, successCallback, response) {
    let responseRequest = { "response" : response, 'idShow' : id };
    Like.findOne()
        .where('idShow').equals(id)
        .exec(successCallback.bind(responseRequest));
}

let showRepository = { 'saveLike': saveLike, 'updateLike' : updateLike,
                       'findLikeByIdShow' : findLikeByIdShow };
module.exports = showRepository;
