import SubjectCard from "./SubjectCard";
import { Subject } from "@/lib/defaultSubjects";

interface SubjectGridProps {
    subjects: Subject[];
}

export default function SubjectGrid({
    subjects,
}: SubjectGridProps) {
    return (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {subjects.map((subject) => (
                <SubjectCard
                    key={subject.id}
                    id={subject.id}
                    name={subject.name}
                    progress={0}
                    completedTopics={subject.completedTopics}
                    totalTopics={subject.totalTopics}
                    nextRevision="Not Scheduled"
                    examDate={subject.examDate ?? "Not Set"}
                />
            ))}
        </div>
    );
}