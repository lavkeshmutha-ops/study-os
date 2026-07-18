import {
    Greeting,
    StatsCard,
    TodayTasks,
    UpcomingExams,
    QuickActions,
} from "@/features/dashboard";
import { syncUser } from "@/app/actions/user";

import {
    BookOpen,
    Flame,
    CalendarDays,
} from "lucide-react";

export default async function DashboardPage() {
    await syncUser();
    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* Greeting */}
            <Greeting />

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <StatsCard
                    title="Subjects"
                    value="6"
                    icon={BookOpen}
                />

                <StatsCard
                    title="Study Streak"
                    value="14 Days"
                    icon={Flame}
                />

                <StatsCard
                    title="Next Exam"
                    value="12 Days"
                    icon={CalendarDays}
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-2 items-stretch">
                <TodayTasks />
                <UpcomingExams />
            </div>
            <QuickActions />


        </div>
    );
}