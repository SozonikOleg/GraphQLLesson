const mongoose = require('mongoose');

const { Schema } = mongoose;

const moviesSchema = new Schema({
  id: String,
  name: String,
  genre: String,
  directorId: String,
});

const directorSchema = new Schema({
  id: String,
  name: String,
  age: String,
  directorId: String,
});


const Movie = mongoose.model('movies', moviesSchema);
const Director = mongoose.model('director', directorSchema);

module.exports = {
  Movie,
  Director,
};
