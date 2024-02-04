import { lusitana } from "@/app/ui/fonts";
import { fetchJobs } from '@/app/lib/data';
import { CVJobCard } from '@/app/ui/cv-card';

export async function Jobs() {

    const jobs = await fetchJobs()

    return (
        <div className='flex flex-col w-full gap-5'>
            <strong className={`${lusitana.className} text-xl md:text-3xl`}>Jobs</strong>
            {
              jobs.map((item) => (
                <CVJobCard
                  key={item.id}
                  job={item.title}
                  company={item.name} 
                  description={item.description}
                  skills={item.skills}
                  start={item.startDate}
                  end={item.endDate}
                />
              ))
            }
          </div>
    )
}