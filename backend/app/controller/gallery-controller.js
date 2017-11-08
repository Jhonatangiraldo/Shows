let gallery = require('./../domain/gallery/gallery-shows.js');

function getShows(request, response) {
    gallery.galleryShows(request, response);
}

function likeShow(request, response) {
    gallery.likeShow(request, response);
}

module.exports = { "getShows" : getShows, "likeShow" : likeShow };