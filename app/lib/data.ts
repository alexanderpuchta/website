import { unstable_noStore as noStore } from 'next/cache';
import { db } from './db';

export async function fetchDashboardData() {

  noStore();

  try {

    const educationCount = db.education.count
    const jobsCount = db.job.count

    return {
      educationCount,
      jobsCount
    }
  } catch (error) {

    console.log("Database Error", error);
    throw new Error("Failed to fetch dashbaord data.");
  }
}

export async function fetchEducation() {

  noStore();

  try {

    const data = await db.education.findMany()
    return data
  } catch (error) {

    console.log("Database Error", error);
    throw new Error("Failed to fetch education data.");
  }
}

export async function fetchCurrentJob() {
  const jobs = await fetchJobs()
  
  if (jobs.length === 0) {
    return {
      company: "",
      title: "",
      isEmployed: false
    }
  } else {
    const current = jobs[0]

    if (current.endDate === undefined) {
      return {
        company: current.name,
        title: current.title,
        isEmployed: true
      }
    } else {
      return {
        company: "",
        title: "",
        isEmployed: false
      }
    }
  }
}

export async function fetchJobs() {

  noStore();

  try {

    const data = await db.job.findMany({
      orderBy: {
        start: 'desc'
      }
    })

    const allJobs = data.map((job) => ({
      id: job.id,
      name: job.name,
      title: job.title,
      description: job.description,
      skills: job.skills.split(","),
      projects: job.projects.split(","),
      startDate: job.start,
      endDate: job.end ?? undefined
    }))
    return allJobs
  } catch (error) {

    console.log("Database Error", error);
    throw new Error("Failed to fetch jobs data.");
  }
}

export async function fetchLinks() {

  noStore();

  try {
    return await db.link.findMany()
  } catch (error) {

    console.log("Database error", error)
    throw new Error("Failed to fetch links data.")
  }
}
