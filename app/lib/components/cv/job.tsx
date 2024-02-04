import { fetchCurrentJob } from "@/app/lib/data";
import { lusitana } from '@/app/ui/fonts';

export async function CurrentJob() {

    const currentJob = await fetchCurrentJob()
    return (
        <div>
            {
                (currentJob.isEmployed) ?
                <p className={`${lusitana.className} text-l`}>
                    Working for <strong>{currentJob.company}</strong> as <strong>{currentJob.title}</strong> at the moment. Hit me up, if you want to get some further information.
                </p> :
                
                <p className={`${lusitana.className} text-l`}>
                    I am open <strong>to work</strong>. Please reach out to me if you have <strong>any information.</strong>
                </p>
            }
        </div>
    )
}