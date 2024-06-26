const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedDatabase() {
  console.log('Seeding database...');

  try {
    // Seed data
    const movie1 = await prisma.movie.create({
      data: {
        title: 'Inception',
        genre: 'Science Fiction',
        director: 'Christopher Nolan',
        cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
        duration: 148,
        releaseDate: new Date('2010-07-16'),
        language: 'English',
        rating: 'PG-13',
        synopsis: 'A thief who enters the dreams of others to steal their secrets.'
      }
    });

    const theater1 = await prisma.theater.create({
      data: {
        name: 'Main Theater',
        location: 'New York City',
        numberOfScreens: 5
      }
    });

    const screen1 = await prisma.screen.create({
      data: {
        theaterId: theater1.id,
        screenNumber: 1,
        capacity: 100,
        type: 'Standard'
      }
    });

    const showtime1 = await prisma.showtime.create({
      data: {
        movieId: movie1.id,
        screenId: screen1.id,
        startTime: new Date('2024-07-01T18:00:00Z'),
        endTime: new Date('2024-07-01T20:30:00Z')
      }
    });

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
