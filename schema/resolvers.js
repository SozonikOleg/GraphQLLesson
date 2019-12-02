const { Movies, Director } = require('../mongoDB/userSchema');

const resolvers = {
  Query: {
    movie: (parent, args) => Movies.findByID(args.id),
    director: (parent, args) => { Director.findById(args.id); },
    movies: () => { Movies.find({}); },
    directors: () => { Director.find({}); },
  },
  Mutation: {
    addDirector: (parent, args) => {
      const director = new Director({
        name: args.name,
        age: args.age,
      });
      director.save();
    },
    addMovie: (parent, args) => {
      const movie = new Movies({
        name: args.name,
        genre: args.genre,
        directorId: args.directorId,
      });
      return movie.save();
    },
    deleteDirector: (parent, args) => { Director.findByIdAndRemove(args.id); },
    deleteMovie: (parent, args) => { Movies.findByIdAndRemove(args.id); },
    updateDirector: (parent, args) => Director.findByIdAndUpdate(
      args.id,
      { $set: { name: args.name, age: args.age } },
      { new: true },
    ),
    updateMovie: (parent, args) => {
      Movies.findByIdAndUpdate(
        args.id,
        { $set: { name: args.name, genre: args.genre, directorId: args.directorId } },
        { new: true },
      );
    },
  },
};

module.exports = resolvers;
