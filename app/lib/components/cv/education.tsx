import { lusitana } from "@/app/ui/fonts";
import { fetchEducation } from '@/app/lib/data';

export async function Education() {

    const education = await fetchEducation()

    return (
        <div className="flex flex-col gap-2">
            <strong className={`${lusitana.className} text-xl`}>Education</strong>
            {
              education.map((item) => (
                <div key={item.title} className={`${lusitana.className} flex flex-col`}>
                  <div className='font-bold'>{ item.name }</div>
                  <div className='text-xs'>{ item.title }</div>
                  <div className='font-semibold pt-1'>{ item.school }</div>
                  <div className='text-xs'>{ item.location }</div>
                </div>
              ))
            }
          </div>
    ) 
}