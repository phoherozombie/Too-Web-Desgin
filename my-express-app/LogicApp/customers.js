const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllCustomers() {
  try {
    const customers = await prisma.customer.findMany();
    return customers;
  } catch (error) {
    console.error('Error retrieving customers:', error);
    throw error;
  }
}

async function getCustomerById(id) {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id }
    });
    return customer;
  } catch (error) {
    console.error(`Error retrieving customer with id ${id}:`, error);
    throw error;
  }
}

async function createCustomer(data) {
  try {
    const customer = await prisma.customer.create({
      data
    });
    return customer;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
}

async function updateCustomer(id, data) {
  try {
    const customer = await prisma.customer.update({
      where: { id },
      data
    });
    return customer;
  } catch (error) {
    console.error(`Error updating customer with id ${id}:`, error);
    throw error;
  }
}

async function deleteCustomer(id) {
  try {
    const customer = await prisma.customer.delete({
      where: { id }
    });
    return customer;
  } catch (error) {
    console.error(`Error deleting customer with id ${id}:`, error);
    throw error;
  }
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
