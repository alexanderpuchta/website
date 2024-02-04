import { inter, lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { fetchEducation, fetchJobs } from './lib/data';
import { CVJobCard } from '@/app/ui/cv-card';

export default async function Page() {

  const education = await fetchEducation()
  const jobs = await fetchJobs()

  return (
    <main className="p-6">
      <div className="flex w-full">
        <div className="flex w-1/3">
          <div className="flex w-full p-5">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Hi, i am alex.</strong> You will find my cv here.
          </p>
          </div>
        </div>
        <div className="flex flex-col w-2/3">
          <div className='flex flex-col w-full'>
            <strong className={`${inter.className} text-xl pl-3`}>Jobs</strong>
            {
              jobs.map((item) => (
                <CVJobCard
                  key={item.id}
                  job={item.title}
                  company={item.name} 
                  description={item.description}
                  skills={item.skills}
                  start="{item.startDate}"
                  end="{item.endDate}"
                />
              ))
            }
          </div>

          <div className='flex flex-col w-full'>
            <strong className={`${inter.className} text-xl pl-3`}>Education</strong>
            {
              education.map((item) => (
                <div 
                  key={item.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        {item.title}
                      </div>
                      <p className="text-sm text-gray-500">
                        {item.school}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}
