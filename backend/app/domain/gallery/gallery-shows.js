const got = require('got');
const Like = require('./../../model/like.js');
const showRepository = require('./../../repository/show-repository.js');

const showsUrl = 'http://api.tvmaze.com/shows';
const gotJsonFormat = { json: true };

function getShows(req, res) {
    got( showsUrl, gotJsonFormat ).then( response => {
        res.json(response.body);
    }).catch(error => {
        console.log(error.response.body);
        res.json(error.response.body);
    });
};

function likeShow(request, response) {
    showRepository.findLikeByIdShow(request.query.id, likesGot, response);
}

function likesGot(error, result) {
        let responseRequest = this.response;
        let idShow = this.idShow;
        if (result) {
            result.set({ state: !result.state });
            showRepository.updateLike(result, responseLike, responseRequest);
        } else {
            let like = new Like({
                idUser: '59fa274fb101bb1c1c878cfe',
                idShow: idShow,
                state: true
            });
            showRepository.saveLike(like, responseLike, responseRequest);
        }
}

function responseLike(error, result) {
    let responseObject = {
        'result': result
    }
    responseObject.success = error ? 0 : 1;
    this.response.json(responseObject);
}

module.exports = { 'getShows': getShows, 'likeShow': likeShow };