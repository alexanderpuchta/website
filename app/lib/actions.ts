'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { z } from 'zod';

const CreateEducationSchema = z.object({
    id: z.string(),
    title: z.string(),
    school: z.string(),
    location: z.string()
})
const CreateEducation = CreateEducationSchema.omit({ id: true })

const CreateJobSchema = z.object({
    id: z.string(),
    name: z.string(),
    title: z.string(),
    description: z.string(),
    skills: z.string(),
    projects: z.string(),
    startDate: z.string(),
    endDate: z.string(),
})
const CreateJob = CreateJobSchema.omit({ id: true })

export async function createEducation(formData: FormData) {
    
    const {
        title,
        school,
        location
    } = CreateEducation.parse({
        title: formData.get('title'),
        school: formData.get('school'),
        location: formData.get('location')
    })
    
    await sql`
        INSERT INTO education (title, school, location)
        VALUES (${title}, ${school}, ${location})
    `

    revalidatePath('/dashboard/education');
    redirect('/dashboard/education');
}

export async function createJob(formData: FormData) {

    const {
        name,
        title,
        description,
        skills,
        projects,
        startDate,
        endDate
    } = CreateJob.parse({
        name: formData.get('name'),
        title: formData.get('title'),
        description: formData.get('description'),
        skills: formData.get('skills'),
        projects: formData.get('projects'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate')
    })

    await sql`
        INSERT INTO jobs (name, title, description, skills, projects, startDate, endDate)
        VALUES (${name}, ${title}, ${description}, ${skills}, ${projects}, ${startDate}, ${endDate})
    `

    revalidatePath('/dashboard/jobs');
    redirect('/dashboard/jobs');
}