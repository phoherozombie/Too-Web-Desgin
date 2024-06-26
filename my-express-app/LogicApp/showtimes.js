const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllShowtimes() {
  try {
    const showtimes = await prisma.showtime.findMany();
    return showtimes;
  } catch (error) {
    console.error('Error retrieving showtimes:', error);
    throw error;
  }
}

async function getShowtimeById(id) {
  try {
    const showtime = await prisma.showtime.findUnique({
      where: { id }
    });
    return showtime;
  } catch (error) {
    console.error(`Error retrieving showtime with id ${id}:`, error);
    throw error;
  }
}

async function createShowtime(data) {
  try {
    const showtime = await prisma.showtime.create({
      data
    });
    return showtime;
  } catch (error) {
    console.error('Error creating showtime:', error);
    throw error;
  }
}

async function updateShowtime(id, data) {
  try {
    const showtime = await prisma.showtime.update({
      where: { id },
      data
    });
    return showtime;
  } catch (error) {
    console.error(`Error updating showtime with id ${id}:`, error);
    throw error;
  }
}

async function deleteShowtime(id) {
  try {
    const showtime = await prisma.showtime.delete({
      where: { id }
    });
    return showtime;
  } catch (error) {
    console.error(`Error deleting showtime with id ${id}:`, error);
    throw error;
  }
}

module.exports = {
  getAllShowtimes,
  getShowtimeById,
  createShowtime,
  updateShowtime,
  deleteShowtime
};
