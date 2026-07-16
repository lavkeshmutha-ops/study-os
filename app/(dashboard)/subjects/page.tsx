"use client";

import { useEffect, useState } from "react";

import SubjectHeader from "@/components/subjects/SubjectHeader";
import SubjectGrid from "@/components/subjects/SubjectGrid";
import AddSubjectDialog from "@/components/subjects/dialog/AddSubjectDialog";

import {
    Subject,
    defaultSubjects,
} from "@/lib/defaultSubjects";

export default function SubjectsPage() {
    const [subjects, setSubjects] = useState<Subject[]>([]);

    const [open, setOpen] = useState(false);
    useEffect(() => {
        const savedSubjects = localStorage.getItem("subjects");

        if (savedSubjects) {
            setSubjects(JSON.parse(savedSubjects));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "subjects",
            JSON.stringify(subjects)
        );
    }, [subjects]);

    const handleAddSubject = (
        name: string,
        examDate?: string
    ) => {
        const newSubject: Subject = {
            id: Date.now(),
            name,
            examDate,
            completedTopics: 0,
            totalTopics: 0,
        };

        setSubjects((prev) => [...prev, newSubject]);

        setOpen(false);
    };
    return (
        <main className="container mx-auto px-6 py-8">

            <SubjectHeader
                onAddClick={() => setOpen(true)}
            />

            <SubjectGrid
                subjects={subjects}
            />

            <AddSubjectDialog
                open={open}
                onOpenChange={setOpen}
                onAddSubject={handleAddSubject}
            />

        </main>
    );
}