import ExamCard from "./ExamCard";

const exams = [
    {
        id: 1,
        subject: "Database Management System",
        date: "18 Jul 2026",
        daysLeft: 18,
    },
    {
        id: 2,
        subject: "Java Programming",
        date: "25 Jul 2026",
        daysLeft: 12,
    },
    {
        id: 3,
        subject: "Mathematics",
        date: "30 Jul 2026",
        daysLeft: 5,
    },
];

const sortedExams = [...exams].sort(
    (a, b) => a.daysLeft - b.daysLeft
);

export default function UpcomingExams() {
    return (
        <div className="flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-semibold">
                    Upcoming Exams
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Stay prepared for your next exams.
                </p>
            </div>

            <div className="space-y-4">
                {sortedExams.map((exam) => (
                    <ExamCard
                        key={exam.id}
                        subject={exam.subject}
                        date={exam.date}
                        daysLeft={exam.daysLeft}
                    />
                ))}
            </div>
        </div>
    );
}