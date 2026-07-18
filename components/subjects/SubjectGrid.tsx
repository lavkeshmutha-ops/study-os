import SubjectCard from "./SubjectCard";

interface Subject {
    id: string;
    name: string;
    code: string | null;
    color: string | null;
}

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
                    code={subject.code}
                    color={subject.color}
                />
            ))}
        </div>
    );
}