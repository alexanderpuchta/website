import { lusitana } from "./fonts";
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
    start: Date;
    end?: Date;
}) {
    return (
        <div className={`${lusitana.className} flex-col`}>
            <div className="mb-2">
                <strong className="text-slate-700 text-xl">{job}</strong> at <strong className="text-slate-900 text-xl">{company}</strong>
                <DateView
                    start={start}
                    end={end}
                />
                <p className="text-sm">{description}</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
                {
                    skills.map((skill) => (
                        <Badge
                            key={skill}
                            text={skill}
                            type={ 1 }
                        />
                    ))
                }
            </div>
        </div>
    )
}