import moment from "moment";
import { Badge } from "./badge";

export function DateView({
    start,
    end
}: {
    start: Date;
    end?: Date;
}) {

    const dateFormat = "YYYY-MM-DD"
    const startDate = moment(start).format(dateFormat)
    const endDate = moment(end).format(dateFormat)

    return (
        <div className="text-xs flex flex-wrap" suppressHydrationWarning>
            <p className="p-1.5">{startDate}</p>
            <p className="p-1.5">-</p>
            {
                end === undefined ? 
                    <Badge
                        key={startDate}
                        text="now"
                        type={ 0 }
                    /> : 
                    <p className="p-1.5">
                    {endDate}
                    </p>
            }
        </div>
    )
}