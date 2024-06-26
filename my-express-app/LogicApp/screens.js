const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllScreens() {
  try {
    const screens = await prisma.screen.findMany();
    return screens;
  } catch (error) {
    console.error('Error retrieving screens:', error);
    throw error;
  }
}

async function getScreenById(id) {
  try {
    const screen = await prisma.screen.findUnique({
      where: { id }
    });
    return screen;
  } catch (error) {
    console.error(`Error retrieving screen with id ${id}:`, error);
    throw error;
  }
}

async function createScreen(data) {
  try {
    const screen = await prisma.screen.create({
      data
    });
    return screen;
  } catch (error) {
    console.error('Error creating screen:', error);
    throw error;
  }
}

async function updateScreen(id, data) {
  try {
    const screen = await prisma.screen.update({
      where: { id },
      data
    });
    return screen;
  } catch (error) {
    console.error(`Error updating screen with id ${id}:`, error);
    throw error;
  }
}

async function deleteScreen(id) {
  try {
    const screen = await prisma.screen.delete({
      where: { id }
    });
    return screen;
  } catch (error) {
    console.error(`Error deleting screen with id ${id}:`, error);
    throw error;
  }
}

module.exports = {
  getAllScreens,
  getScreenById,
  createScreen,
  updateScreen,
  deleteScreen
};
