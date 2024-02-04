import { clsx } from 'clsx';
import { inter } from "./fonts";

export function Badge({
    text,
    type
}: {
    text: string;
    type: string;
}) {
    return (
        <p className={
            `${inter.className} 
            rounded-lg p-1.5 text-white text-xs bg-slate-400
            `
        }>
            {
                text
            }
        </p>
    )
}