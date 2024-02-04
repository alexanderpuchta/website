import { clsx } from 'clsx';
import { lusitana } from "./fonts";

enum BadgeType {
    DATE,
    SKILL
}

export function Badge({
    text,
    type
}: {
    text: string;
    type: BadgeType;
}) {
    return (
        <p className={clsx(
            type === 0 ? "text-red-500" : "text-slate-500",
            "${lusitana.className} rounded-lg p-1.5  text-xs bg-slate-50"
        )
        }>
            {
                text
            }
        </p>
    )
}