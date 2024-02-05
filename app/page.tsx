import { inter, lusitana } from '@/app/ui/fonts';
import { fetchEducation, fetchJobs } from './lib/data';
import { CVJobCard } from '@/app/ui/cv-card';
import Link from 'next/link';
import { EmailIcon, InstagramIcon, LinkedInIcon } from '@/app/ui/icons';
export default async function Page() {

  const education = await fetchEducation()
  const jobs = await fetchJobs()
  const currentJob = jobs[0]

  const contact = [
    {
      type: "mail",
      text: "hi@alexanderpuchta.de",
      href: "mailto:hi@alexanderpuchta.de"
    },
    {
      type: "instagram",
      text: "alexandercreates",
      href: "https://instagram.com/alexandercreates"
    },
    {
      type: "linkedin",
      text: "Alexander Puchta",
      href: "https://www.linkedin.com/in/alexanderpuchta"
    }
  ]
  
  return (
    <main className="p-6">
      <div className="flex w-full">
        <div className="flex flex-col w-1/3 px-5 gap-5">
          <div>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <strong>Hi, i am alex.</strong> You will find my cv here.
            </p>
            <br/>
            <p className={`${lusitana.className} text-l`}>
              Interested in clean, reusable and maintainable code. Currently into lots of <strong>SwiftUI</strong> and <strong>concurrency</strong>.
            </p>
            <br/>
            <p className={`${lusitana.className} text-l`}>
              Working for <strong>{currentJob.name}</strong> as <strong>{currentJob.title}</strong> at the moment. Hit me up, if you want to get some further information.
            </p>
          </div>
          <div className='py-2'>
            <strong className={`${lusitana.className} text-xl`}>Contact information</strong>
            {
              contact.map((item) => (
                <Link
                    href={item.href}
                  >
                  <div className='flex flex-row gap-2 py-1'>
                  
                    {
                    item.type === "instagram" ?
                      <InstagramIcon/> : (item.type === "linkedin" ? 
                        <LinkedInIcon/> : 
                        <EmailIcon/>
                      )
                    }
                    <p className={`${lusitana.className}`}>
                      {
                        item.text
                      }
                    </p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col w-2/3">
          <p className={`${lusitana.className} m-10`}>will be live again soon...</p>
          {/* <div className='flex flex-col w-full'>
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
          </div> */}
        </div>
      </div>
    </main>
  );
}
