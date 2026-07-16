"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubjectHeaderProps {
    onAddClick: () => void;
}

export default function SubjectHeader({
    onAddClick,
}: SubjectHeaderProps) {
    return (
        <div className="mb-8 flex items-start justify-between">
            <div>
                <h1 className="text-4xl font-bold">
                    Subjects
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Manage your subjects, chapters, progress, and revisions.
                </p>
            </div>

            <Button onClick={onAddClick}>
                <Plus className="mr-2 h-4 w-4" />
                Add Subject
            </Button>
        </div>
    );
}