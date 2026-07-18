"use client";

import TaskCard from "./TaskCard";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TaskList({
    tasks,
    onToggle,
    onEdit,
    onDelete,
}: TaskListProps) {
    return (
        <div className="space-y-3">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    title={task.title}
                    completed={task.completed}
                    onToggle={() => onToggle(task.id)}
                    onEdit={() => onEdit(task.id)}
                    onDelete={() => onDelete(task.id)}
                />
            ))}
        </div>
    );
}