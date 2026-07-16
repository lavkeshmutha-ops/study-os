import {
    Plus,
    BookOpen,
    NotebookPen,
    Timer,
} from "lucide-react";

import ActionButton from "./ActionButton";

export default function QuickActions() {
    return (
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-semibold">
                    Quick Actions
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Jump into your most common tasks.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <ActionButton
                    title="Add Task"
                    icon={Plus}
                />

                <ActionButton
                    title="Add Subject"
                    icon={BookOpen}
                />

                <ActionButton
                    title="Add Notes"
                    icon={NotebookPen}
                />

                <ActionButton
                    title="Start Focus"
                    icon={Timer}
                />
            </div>
        </div>
    );
}