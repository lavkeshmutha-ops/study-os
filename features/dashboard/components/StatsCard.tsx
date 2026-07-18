import { LucideIcon } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
}

export default function StatsCard({
    title,
    value,
    icon: Icon,
}: StatsCardProps) {
    return (
        <div className="rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-muted-foreground">
                        {title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        {value}
                    </h2>
                </div>

                <div className="rounded-xl bg-primary/10 p-3 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
            </div>
        </div>
    );
}