import { Card } from '@/app/ui/dashboard/cards';
import { 
    fetchDashboardData
} from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {

    const {
        numbersOfJobs,
        numbersOfEducation
    } = await fetchDashboardData()

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <Card
                    title="Jobs"
                    value={numbersOfJobs}
                    type="jobs"
                />

                <Card
                    title="Education"
                    value={numbersOfEducation}
                    type="education"
                />
            </div>
        </main>
    )
}