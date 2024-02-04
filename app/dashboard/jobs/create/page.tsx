import Form from '@/app/ui/jobs/create-form';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
import { fetchJobs } from '@/app/lib/data';

export default async function Page() {

    const jobs = await fetchJobs();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Arbeitsstätten',
                        href: '/dashboard/jobs'
                    },
                    {
                        label: 'Arbeitsplatz anlegen',
                        href: '/dashboard/jobs/create',
                        active: true
                    }
                ]}
            />
            <Form jobs={jobs}></Form>
        </main>
    )
}