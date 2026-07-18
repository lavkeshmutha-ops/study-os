import { CalendarDays } from "lucide-react";
import ExamBadge from "./ExamBadge";

interface ExamCardProps {
    subject: string;
    date: string;
    daysLeft: number;
}

export default function ExamCard({
    subject,
    date,
    daysLeft,
}: ExamCardProps) {
    return (
        <div className="flex items-center justify-between rounded-xl border bg-card p-4 transition-all duration-300 hover:border-primary hover:bg-muted/50 hover:shadow-md">
            <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                    <CalendarDays className="h-5 w-5 text-primary" />
                </div>

                <div>
                    <h3 className="font-semibold text-foreground">
                        {subject}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        {date}
                    </p>
                </div>
            </div>

            <ExamBadge daysLeft={daysLeft} />
        </div>
    );
}