import { ClipboardList } from "lucide-react";

export default function EmptyTasks() {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-12 text-center">
            <ClipboardList className="mb-4 h-12 w-12 text-muted-foreground" />

            <h3 className="text-lg font-semibold">
                No tasks for today
            </h3>

            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                You&apos;re all caught up! Add a new task or enjoy your free time.
            </p>
        </div>
    );
}