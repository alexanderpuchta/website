import { EducationField } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createEducation } from '@/app/lib/actions';

export default function Form({ education }: { education: EducationField[] }) {
    return (
        <form action={createEducation}>
            <div className='rounded-md bg-gray-50 p-4 md:p-6'>
            <div className='mb-4'>
                    <label htmlFor="title" className='mb-2 block text-sm font-medium'>
                        Erzielter Schulabschluss:
                    </label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input
                                id="title"
                                name="title" 
                                type="text"
                                placeholder='Mittlere Reife'
                                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="school" className='mb-2 block text-sm font-medium'>
                        Name der Schule:
                    </label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input
                                id="school"
                                name="school" 
                                type="text"
                                placeholder='JGA-Wirt Realschule'
                                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                            />
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="location" className='mb-2 block text-sm font-medium'>
                        Ort der Schule:
                    </label>
                    <div className='relative mt-2 rounded-md'>
                        <div className='relative'>
                            <input
                                id="location"
                                name="location" 
                                type="text"
                                placeholder='Max-Reger Straße 71, 95030 Hof'
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