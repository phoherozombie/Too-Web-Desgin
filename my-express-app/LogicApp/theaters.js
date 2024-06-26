const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllTheaters() {
  try {
    const theaters = await prisma.theater.findMany();
    return theaters;
  } catch (error) {
    console.error('Error retrieving theaters:', error);
    throw error;
  }
}

async function getTheaterById(id) {
  try {
    const theater = await prisma.theater.findUnique({
      where: { id }
    });
    return theater;
  } catch (error) {
    console.error(`Error retrieving theater with id ${id}:`, error);
    throw error;
  }
}

async function createTheater(data) {
  try {
    const theater = await prisma.theater.create({
      data
    });
    return theater;
  } catch (error) {
    console.error('Error creating theater:', error);
    throw error;
  }
}

async function updateTheater(id, data) {
  try {
    const theater = await prisma.theater.update({
      where: { id },
      data
    });
    return theater;
  } catch (error) {
    console.error(`Error updating theater with id ${id}:`, error);
    throw error;
  }
}

async function deleteTheater(id) {
  try {
    const theater = await prisma.theater.delete({
      where: { id }
    });
    return theater;
  } catch (error) {
    console.error(`Error deleting theater with id ${id}:`, error);
    throw error;
  }
}

module.exports = {
  getAllTheaters,
  getTheaterById,
  createTheater,
  updateTheater,
  deleteTheater
};
