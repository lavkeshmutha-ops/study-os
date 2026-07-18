"use client";

import { BookOpen } from "lucide-react";

import { createSubject } from "@/app/actions/subject";

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
}

export default function AddSubjectDialog({
    open,
    onOpenChange,
}: AddSubjectDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl rounded-2xl border bg-background p-8 shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-xl font-semibold">
                        <BookOpen className="h-6 w-6 text-primary" />
                        Add New Subject
                    </DialogTitle>

                    <p className="text-sm text-muted-foreground">
                        Create a new subject. You can always edit it later.
                    </p>
                </DialogHeader>

                <form
                    action={async (formData) => {
                        await createSubject(formData);
                        onOpenChange(false);
                    }}
                    className="mt-6 space-y-6"
                >
                    <div>
                        <Label htmlFor="name" className="mb-2 block">
                            Subject Name
                        </Label>

                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter subject name"
                            className="h-12 rounded-xl"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="code" className="mb-2 block">
                            Subject Code
                        </Label>

                        <Input
                            id="code"
                            name="code"
                            placeholder="e.g. CSE501"
                            className="h-12 rounded-xl"
                        />
                    </div>

                    <div>
                        <Label htmlFor="description" className="mb-2 block">
                            Description
                        </Label>

                        <Input
                            id="description"
                            name="description"
                            placeholder="Optional description"
                            className="h-12 rounded-xl"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="credits" className="mb-2 block">
                                Credits
                            </Label>

                            <Input
                                id="credits"
                                name="credits"
                                type="number"
                                className="h-12 rounded-xl"
                            />
                        </div>

                        <div>
                            <Label htmlFor="instructor" className="mb-2 block">
                                Instructor
                            </Label>

                            <Input
                                id="instructor"
                                name="instructor"
                                placeholder="Faculty name"
                                className="h-12 rounded-xl"
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="color" className="mb-2 block">
                            Subject Color
                        </Label>

                        <Input
                            id="color"
                            name="color"
                            type="color"
                            className="h-12 rounded-xl"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            id="isElective"
                            name="isElective"
                            type="checkbox"
                        />

                        <Label htmlFor="isElective">
                            Elective Subject
                        </Label>
                    </div>

                    <DialogFooter className="mt-8 flex justify-end gap-3">
                        <Button
                            type="button"
                            variant="ghost"
                            className="h-11 rounded-xl"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            className="h-11 rounded-xl px-6"
                        >
                            Add Subject
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}