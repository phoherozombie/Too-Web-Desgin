const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllMovies() {
  try {
    const movies = await prisma.movie.findMany();
    return movies;
  } catch (error) {
    console.error('Error retrieving movies:', error);
    throw error;
  }
}

async function getMovieById(id) {
  try {
    const movie = await prisma.movie.findUnique({
      where: { id }
    });
    return movie;
  } catch (error) {
    console.error(`Error retrieving movie with id ${id}:`, error);
    throw error;
  }
}

async function createMovie(data) {
  try {
    const movie = await prisma.movie.create({
      data
    });
    return movie;
  } catch (error) {
    console.error('Error creating movie:', error);
    throw error;
  }
}

async function updateMovie(id, data) {
  try {
    const movie = await prisma.movie.update({
      where: { id },
      data
    });
    return movie;
  } catch (error) {
    console.error(`Error updating movie with id ${id}:`, error);
    throw error;
  }
}

async function deleteMovie(id) {
  try {
    const movie = await prisma.movie.delete({
      where: { id }
    });
    return movie;
  } catch (error) {
    console.error(`Error deleting movie with id ${id}:`, error);
    throw error;
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};
