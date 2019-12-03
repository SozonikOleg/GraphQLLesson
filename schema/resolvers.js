/* eslint-disable no-underscore-dangle */
const { Movie, Director } = require('../mongoDB/userSchema');

const resolvers = {
  Query: {
    movie: async (parent, args) => {
      const res = await Movie.findById(args._id);
      return res;
    },
    director: async (parent, args) => {
      const res = await Director.findById(args._id);
      return res;
    },
    movies: async () => {
      const res = await Movie.find({});
      return res;
    },
    directors: async () => {
      const res = await Director.find({});
      return res;
    },
  },
  Mutation: {
    addDirector: async (parent, args) => {
      const director = new Director({
        name: args.name,
        age: args.age,
      });

      const res = await director.save();
      return res;
    },
    addMovie: async (parent, args) => {
      const movie = new Movie({
        name: args.name,
        genre: args.genre,
        directorId: args.directorId,
      });
      const res = await movie.save();
      return res;
    },
    deleteDirector: async (parent, args) => {
      const delDirector = await Director.findByIdAndRemove(args._id);
      return delDirector;
    },
    deleteMovie: async (parent, args) => {
      const delMovie = await Movie.findByIdAndRemove(args._id);
      return delMovie;
    },
    updateDirector: async (parent, args) => {
      const updateDirector = await Director.findByIdAndUpdate(
        args._id,
        { $set: { name: args.name, age: args.age } },
        { new: true },
      );
      return updateDirector;
    },
    updateMovie: async (parent, args) => {
      const updateMovie = await Movie.findByIdAndUpdate(
        args._id,
        { $set: { name: args.name, genre: args.genre, directorId: args.directorId } },
        { new: true },
      );
      return updateMovie;
    },
  },
};

module.exports = resolvers;
