import { inter } from "./fonts";
import { Badge } from "./badge";

export function DateView({
    start,
    end
}: {
    start: string;
    end?: string;
}) {

    return (
        <div className="flex flex-wrap gap-1.5">
            {
                start
            } - {
                end
            }
        </div>
    )
}