const got = require('got');

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

module.exports = getShows;