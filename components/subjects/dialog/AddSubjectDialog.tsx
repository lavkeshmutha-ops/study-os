"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddSubjectDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onAddSubject: (
        subject: string,
        examDate?: string
    ) => void;
}

export default function AddSubjectDialog({
    open,
    onOpenChange,
    onAddSubject,
}: AddSubjectDialogProps) {
    const [subject, setSubject] = useState("");
    const [examDate, setExamDate] = useState("");

    const handleSubmit = () => {
        if (!subject.trim()) return;

        onAddSubject(
            subject.trim(),
            examDate || undefined
        );

        setSubject("");
        setExamDate("");

        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>

            <DialogContent className="sm:max-w-2xl rounded-2xl border bg-background p-8 shadow-2xl">

                <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-xl font-semibold">
                        <BookOpen className="h-6 w-6 text-primary" />
                        Add New Subject
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground">
                        Create a new subject. You can always add the syllabus and exam date later.
                    </p>
                </DialogHeader>

                <div className="mt-6 space-y-6">

                    <div>
                        <Label className="mb-2 block text-sm font-medium">
                            Subject Name
                        </Label>

                        <Input
                            className="h-12 rounded-xl"
                            placeholder="Enter subject name"
                            value={subject}
                            onChange={(e) =>
                                setSubject(e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <Label className="mb-2 block text-sm font-medium">
                            Exam Date
                            <span className="ml-2 text-xs text-muted-foreground">
                                (Optional)
                            </span>
                        </Label>

                        <Input
                            className="h-12 rounded-xl"
                            type="date"
                            value={examDate}
                            onChange={(e) =>
                                setExamDate(e.target.value)
                            }
                        />

                        <p className="mt-2 text-xs text-muted-foreground">
                            Optional. Add it now or update it anytime later.
                        </p>
                    </div>

                </div>

                <DialogFooter className="mt-8 flex justify-end gap-3">
                    <Button
                        variant="ghost"
                        className="h-11 rounded-xl"
                    >
                        Cancel
                    </Button>

                    <Button
                        className="h-11 rounded-xl px-6"
                        onClick={handleSubmit}

                    >
                        Add Subject
                    </Button>

                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}