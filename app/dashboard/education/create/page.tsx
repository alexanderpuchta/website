import Form from '@/app/ui/education/create-form';
import Breadcrumbs from '@/app/ui/dashboard/breadcrumbs';
import { fetchEducation } from '@/app/lib/data';

export default async function Page() {
    
    const education = await fetchEducation();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Ausbildug',
                        href: '/dashboard/education'
                    },
                    {
                        label: 'Ausbildung anlegen',
                        href: '/dashboard',
                        active: true
                    }
                ]}
            />
            <Form education={education}/>
        </main>
    )
}