import moment from 'moment';
import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
import {
  Education,
  EducationTable,
  Job,
  JobTable,
  User,
  UserTable
} from './definitions';

export async function fetchDashboardData() {

  noStore();

  try {

    const educationCount = sql`SELECT COUNT(*) FROM education`;
    const jobsCount = sql`SELECT COUNT(*) FROM jobs`;

    const data = await Promise.all([
      educationCount,
      jobsCount
    ])

    const numbersOfEducation = Number(data[0].rows[0].count ?? '0')
    const numbersOfJobs = Number(data[1].rows[0].count ?? '0')

    return {
      numbersOfEducation,
      numbersOfJobs
    }
  } catch (error) {

    console.log("Database Error", error);
    throw new Error("Failed to fetch dashbaord data.");
  }
}
export async function fetchEducation() {

  noStore();

  try {

    const data = await sql<EducationTable>`SELECT * FROM education`;
    return data.rows
  } catch (error) {

    console.log("Database Error", error);
    throw new Error("Failed to fetch education data.");
  }
}

export async function fetchJobs() {

  moment.locale('de');
  noStore();

  try {

    const data = await sql<JobTable>`
      SELECT * FROM jobs
      ORDER BY startDate DESC
    `;

    data.rows.forEach((job) => {
      const date = moment().format(job.startDate)
      console.log("***", date)
    })

    const jobs = data.rows.map((job) => ({
      id: job.id,
      name: job.name,
      title: job.title,
      description: job.description,
      skills: job.skills.split(","),
      projects: job.projects.split(","),
      startDate: job.startDate,
      endDate: job.endDate
    }))
    return jobs
  } catch (error) {

    console.log("Database Error", error);
    throw new Error("Failed to fetch jobs data.");
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
