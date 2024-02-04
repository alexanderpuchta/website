import { fetchEducation } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/dashboard/breadcrumbs";

export default async function Page() {

    const education = await fetchEducation();
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Ausbildug',
                        href: '/dashboard/education',
                        active: true
                    },
                    {
                        label: 'Ausbildung anlegen',
                        href: '/dashboard/education/create',
                    }
                ]}
            />
            <div className="mt-6 flow-root">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-9">
                        <div className="md:hidden">
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
                        <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Abschluss
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                    Schule
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                    Ort
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {education.map((item) => (
                    <tr
                    key={item.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                        <p>{item.title}</p>
                        </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                        {item.school}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                        {item.location}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

                    </div>
                </div>
            </div>
        </main>
    );
}