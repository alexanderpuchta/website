import { inter, lusitana } from "./fonts";
import { Badge } from "@/app/ui/badge";
import { DateView } from "@/app/ui/date-view";

export function CVJobCard({
    job,
    company,
    description,
    skills,
    start,
    end
}: {
    job: string;
    company: string;
    description: string;
    skills: string[];
    start: string;
    end?: string;
}) {
    return (
        <div className={`${inter.className} flex-col bg-gray-100 m-3 p-3 rounded-lg`}>
            <div className="mb-2">
                <strong className="text-red-700 text-xl">{job}</strong> at <strong className="text-red-900 text-xl">{company}</strong>
                {/* <DateView
                    start={start}
                    end={end}
                /> */}
                <p className="text-sm">{description}</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
                {
                    skills.map((skill) => (
                        <Badge
                            key={skill}
                            text={skill}
                            type={skill}
                        />
                    ))
                }
            </div>
        </div>
    )
}