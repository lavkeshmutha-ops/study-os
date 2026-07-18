"use client";

import { useState } from "react";

import SubjectHeader from "./SubjectHeader";
import SubjectGrid from "./SubjectGrid";
import AddSubjectDialog from "./dialog/AddSubjectDialog";

import { Subject } from "./SubjectGrid";

interface SubjectsClientProps {
    subjects: Subject[];
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