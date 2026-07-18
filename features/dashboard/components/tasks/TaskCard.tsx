"use client";

import { CheckCircle2, Circle, Pencil, Trash2 } from "lucide-react";

interface TaskCardProps {
    title: string;
    completed: boolean;
    onToggle: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

export default function TaskCard({
    title,
    completed,
    onToggle,
    onEdit,
    onDelete,
}: TaskCardProps) {
    return (
        <div className="group flex items-center justify-between rounded-xl border bg-card p-4 transition-all duration-300 hover:border-primary hover:shadow-md">
            <div className="flex items-center gap-3">
                <button onClick={onToggle}>
                    {completed ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                    ) : (
                        <Circle className="h-6 w-6 text-muted-foreground hover:text-primary" />
                    )}
                </button>

                <span
                    className={`text-base ${completed
                            ? "line-through text-muted-foreground"
                            : "text-foreground"
                        }`}
                >
                    {title}
                </span>
            </div>

            <div className="flex items-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <button
                    onClick={onEdit}
                    className="rounded-lg p-2 hover:bg-muted"
                >
                    <Pencil className="h-4 w-4" />
                </button>

                <button
                    onClick={onDelete}
                    className="rounded-lg p-2 hover:bg-red-100 dark:hover:bg-red-900/30"
                >
                    <Trash2 className="h-4 w-4 text-red-500" />
                </button>
            </div>
        </div>
    );
}