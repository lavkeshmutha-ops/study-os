"use client";

import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EditTaskDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialTitle: string;
    onSave: (title: string) => void;
}

export default function EditTaskDialog({
    open,
    onOpenChange,
    initialTitle,
    onSave,
}: EditTaskDialogProps) {
    const [title, setTitle] = useState(initialTitle);
    const [prevInitial, setPrevInitial] = useState(initialTitle);

    if (initialTitle !== prevInitial) {
        setPrevInitial(initialTitle);
        setTitle(initialTitle);
    }

    const handleSave = () => {
        if (!title.trim()) return;

        onSave(title.trim());
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                </DialogHeader>

                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSave();
                        }
                    }}
                />

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button onClick={handleSave}>
                        Save Changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}