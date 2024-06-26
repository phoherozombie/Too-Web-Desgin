const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllTickets() {
  try {
    const tickets = await prisma.ticket.findMany();
    return tickets;
  } catch (error) {
    console.error('Error retrieving tickets:', error);
    throw error;
  }
}

async function getTicketById(id) {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id }
    });
    return ticket;
  } catch (error) {
    console.error(`Error retrieving ticket with id ${id}:`, error);
    throw error;
  }
}

async function createTicket(data) {
  try {
    const ticket = await prisma.ticket.create({
      data
    });
    return ticket;
  } catch (error) {
    console.error('Error creating ticket:', error);
    throw error;
  }
}

async function updateTicket(id, data) {
  try {
    const ticket = await prisma.ticket.update({
      where: { id },
      data
    });
    return ticket;
  } catch (error) {
    console.error(`Error updating ticket with id ${id}:`, error);
    throw error;
  }
}

async function deleteTicket(id)
