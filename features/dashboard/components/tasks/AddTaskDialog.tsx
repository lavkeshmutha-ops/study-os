"use client";

import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AddTaskDialogProps {
    onAddTask: (title: string) => void;
}

export default function AddTaskDialog({
    onAddTask,
}: AddTaskDialogProps) {
    const [title, setTitle] = useState("");
    const [open, setOpen] = useState(false);

    const handleAdd = () => {
        if (!title.trim()) return;

        onAddTask(title);

        setTitle("");
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                render={
                    <Button>
                        Add Task
                    </Button>
                }
            />

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                </DialogHeader>

                <Input
                    placeholder="Enter task name..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAdd();
                        }
                    }}
                />

                <DialogFooter>
                    <Button onClick={handleAdd}>
                        Add Task
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}