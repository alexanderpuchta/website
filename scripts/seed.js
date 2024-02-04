const { db } = require('@vercel/postgres');
const {
  education,
  jobs,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedEducation(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS education (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    school VARCHAR(255) NOT NULL,
    location VARCHAR(500) NOT NULL
  );
`;

    console.log(`Created "education" table`);

    const insertedEducation = await Promise.all(
      education.map(
        (education) => client.sql`
        INSERT INTO education (id, title, school, location)
        VALUES (${education.id}, ${education.title}, ${education.school}, ${education.location})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedEducation.length} educations`);

    return {
      createTable,
      education: insertedEducation,
    };
  } catch (error) {
    console.error('Error seeding education:', error);
    throw error;
  }
}

async function seedJobs(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS jobs (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(500) NOT NULL,
        skills VARCHAR(1111) NOT NULL,
        projects VARCHAR(1111) NOT NULL,
        startDate DATE NOT NULL,
        endDate DATE
      );
    `;

    console.log(`Created "jobs" table`);

    const insertedJobs = await Promise.all(
      jobs.map(
        (job) => client.sql`
        INSERT INTO jobs (id, name, title, description, skills, projects, startDate, endDate)
        VALUES (${job.id}, ${job.name}, ${job.title}, ${job.description}, ${job.skills.join()}, ${job.projects.join()}, ${job.start}, ${job.end})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedJobs.length} jobs`);

    return {
      createTable,
      jobs: insertedJobs,
    };
  } catch (error) {
    console.error('Error seeding jobs:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedJobs(client);
  await seedEducation(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
