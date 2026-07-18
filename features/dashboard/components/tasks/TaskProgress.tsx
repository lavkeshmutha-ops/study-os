interface TaskProgressProps {
    completed: number;
    total: number;
}

export default function TaskProgress({
    completed,
    total,
}: TaskProgressProps) {
    const percentage =
        total === 0 ? 0 : Math.round((completed / total) * 100);

    return (
        <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-medium">
                    {completed} of {total} completed
                </p>

                <span className="text-sm text-muted-foreground">
                    {percentage}%
                </span>
            </div>

            <div className="h-2 w-full rounded-full bg-muted">
                <div
                    className="h-2 rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}