import { getSubjects } from "@/app/actions/subject";
import SubjectsClient from "@/components/subjects/SubjectsClient";

export default async function SubjectsPage() {
    const subjects = await getSubjects();

    return (
        <div className="max-w-7xl mx-auto">
            <SubjectsClient subjects={subjects} />
        </div>
    );
}