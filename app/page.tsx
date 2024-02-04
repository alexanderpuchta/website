import { lusitana } from '@/app/ui/fonts';
import { Contact } from '@/app/lib/components/cv/contact';
import { Education } from '@/app/lib/components/cv/education';
import { Jobs } from '@/app/lib/components/cv/jobs';
import { CurrentJob } from './lib/components/cv/job';

export default async function Page() { 
  return (
    <main className="p-6">
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='lg:w-1/2 flex flex-col gap-3'>
          <div>
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <strong>Hi, i am alex.</strong> You will find my cv here.
            </p>
          </div>
          <div> 
            <p className={`${lusitana.className} text-l`}>
              Interested in clean, reusable and maintainable code. Currently into lots of <strong>SwiftUI</strong> and <strong>concurrency</strong>.
            </p>
          </div>
          <CurrentJob/>
          <Contact/>
          <Education/>
        </div>
        <div className='w-full flex flex-col gap-5'>
          <Jobs/>
        </div>
      </div>
    </main>
  );
}
