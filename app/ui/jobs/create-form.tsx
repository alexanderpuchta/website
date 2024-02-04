import { createJob } from '@/app/lib/actions';
import { JobField } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import Link from 'next/link';

export default function Form({ jobs }: { jobs: JobField[] }) {
    return (
        <form action={createJob}>
            <div className='rounded-md bg-gray-50 p-4 md:p-6'>
            <div className='mb-4'>
                    <label htmlFor="title" className='mb-2 block text-sm font-medium'>
                       Jobbezeichnung:
                    </label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input
                                id="title"
                                name="title" 
                                type="text"
                                placeholder='iOS Entwickler'
                                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="name" className='mb-2 block text-sm font-medium'>
                        Firma:
                    </label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input
                                id="name"
                                name="name" 
                                type="text"
                                placeholder='Aktion Mensch e.V.'
                                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="description" className='mb-2 block text-sm font-medium'>
                        Beschreibung der Tätigkeit:
                    </label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input
                                id="description"
                                name="description" 
                                type="text"
                                placeholder='Ein paar Details der getätigten Aufgaben.'
                                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="skills" className='mb-2 block text-sm font-medium'>
                        Skills:
                    </label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input
                                id="skills"
                                name="skills" 
                                type="text"
                                placeholder='SwiftUI, REST, etc.'
                                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="projects" className='mb-2 block text-sm font-medium'>
                        Projekte:
                    </label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input
                                id="projects"
                                name="projects" 
                                type="text"
                                placeholder='Mobility, Health, etc.'
                                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="dates" className='mb-2 block text-sm font-medium'>
                        Zeitraum der Beschäftigung:
                    </label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input
                                id="startDate"
                                name="startDate" 
                                type="date"
                                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                            />
                        </div>
                    </div>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input
                                id="endDate"
                                name="endDate" 
                                type="date"
                                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/education"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Abbrechen
                </Link>
                <Button type='submit'>
                    Jetzt anlegen
                </Button>
            </div>
        </form>
    )
}