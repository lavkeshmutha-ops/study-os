"use client";

import { useEffect, useState } from "react";
import TaskList from "./tasks/TaskList";
import AddTaskDialog from "./tasks/AddTaskDialog";
import TaskProgress from "./tasks/TaskProgress";
import EditTaskDialog from "./tasks/EditTaskDialog";
import EmptyTasks from "./tasks/EmptyTasks";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const defaultTasks: Task[] = [
    {
        id: 1,
        title: "Complete React Dashboard",
        completed: false,
    },
    {
        id: 2,
        title: "Revise DBMS",
        completed: true,
    },
    {
        id: 3,
        title: "Study Calculus",
        completed: false,
    },
];

export default function TodayTasks() {

    const [tasks, setTasks] = useState<Task[]>(defaultTasks);

    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleToggle = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const handleEdit = (id: number) => {
        const task = tasks.find((task) => task.id === id);

        if (!task) return;

        setEditingTask(task);
        setIsEditOpen(true);
    };
    const handleDelete = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const handleAddTask = (title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false,
        };

        setTasks((prev) => [...prev, newTask]);
    };

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const handleSaveEdit = (title: string) => {
        if (!editingTask) return;

        setTasks((prev) =>
            prev.map((task) =>
                task.id === editingTask.id
                    ? { ...task, title }
                    : task
            )
        );

        setEditingTask(null);
        setIsEditOpen(false);
    };

    return (
        <div className="flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h2 className="text-xl font-semibold">
                        Today's Tasks
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Stay focused. Finish today's priorities.
                    </p>
                </div>

                <AddTaskDialog onAddTask={handleAddTask} />
            </div>

            {tasks.length > 0 && (
                <>
                    <TaskProgress
                        completed={completedTasks}
                        total={tasks.length}
                    />
                </>
            )}

            {tasks.length === 0 ? (
                <EmptyTasks />
            ) : (
                <div className="mt-4 max-h-80 overflow-y-auto">
                    <TaskList
                        tasks={tasks}
                        onToggle={handleToggle}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </div>
            )}

            <EditTaskDialog
                open={isEditOpen}
                onOpenChange={setIsEditOpen}
                initialTitle={editingTask?.title ?? ""}
                onSave={handleSaveEdit}
            />


            {editingTask && (
                <EditTaskDialog
                    open={isEditOpen}
                    onOpenChange={setIsEditOpen}
                    initialTitle={editingTask.title}
                    onSave={(title) => {
                        setTasks((prev) =>
                            prev.map((t) =>
                                t.id === editingTask.id ? { ...t, title } : t
                            )
                        );
                        setEditingTask(null);
                        setIsEditOpen(false);
                    }}
                />
            )}
        </div>
    );
}