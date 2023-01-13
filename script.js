"use strict";

fetch('movies.json')
    .then(response => response.json())
    .then(data => {
        var movies = "";
        for (var i = 0; i < data.movies.length; i++) {
            movies += "<div class='movie'>" +
                "<h2>" + data.movies[i].title + "</h2>" +
                "<p>Genre: " + data.movies[i].genre + "</p>" +
                "<p>Description: " + data.movies[i].description + "</p>" +
                "<p>Duration: " + data.movies[i].duration + "</p>" +
                "<p>Release Date: " + data.movies[i].release_date + "</p>" +
                "<p>Price: " + data.movies[i].price + " USD" + "</p>" +
                "</div>";
        }
        document.getElementById("movies-container").innerHTML = movies;
    });
fetch('shows.json')
    .then(response => response.json())
    .then(data => {
        var shows = "";
        for (var i = 0; i < data.shows.length; i++) {
            shows += "<div class='show'>" +
                "<h2>" + data.shows[i].title + "</h2>" +
                "<p>Genre: " + data.shows[i].genre + "</p>" +
                "<p>Description: " + data.shows[i].description + "</p>" +
                "<p>Number of Seasons: " + data.shows[i].seasons + "</p>" +
                "<p>Average episode lenght: " + data.shows[i].episode_length + " minutes" + "</p>" +
                "<p>Release Date: " + data.shows[i].release_date + "</p>" +
                "<p>Price: " + data.shows[i].price + " USD" + "</p>" +
                "</div>";
        }
        document.getElementById("shows-container").innerHTML = shows;
    });

fetch('music.json')
    .then(response => response.json())
    .then(data => {
        var music = "";
        for (var i = 0; i < data.music.length; i++) {
            music += "<div class='album'>" +
                "<h2>" + data.music[i].title + "</h2>" +
                "<p>Genre: " + data.music[i].genre + "</p>" +
                "<p>Artist: " + data.music[i].artist + "</p>" +
                "<p>Release Date: " + data.music[i].release_date + "</p>" +
                "<p>Price: " + data.music[i].price + " USD" + "</p>" +
                "</div>";
        }
        document.getElementById("music-container").innerHTML = music;
    });