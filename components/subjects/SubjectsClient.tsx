"use client";

import { useState } from "react";

import SubjectHeader from "./SubjectHeader";
import SubjectGrid from "./SubjectGrid";
import AddSubjectDialog from "./dialog/AddSubjectDialog";

interface SubjectsClientProps {
    subjects: Record<string, unknown>[];
}

export default function SubjectsClient({
    subjects,
}: SubjectsClientProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <SubjectHeader
                onAddClick={() => setOpen(true)
                }
            />

            < SubjectGrid
                subjects={subjects}
            />

            <AddSubjectDialog
                open={open}
                onOpenChange={setOpen}
            />
        </>
    );
}