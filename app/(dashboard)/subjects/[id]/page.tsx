import { notFound } from "next/navigation";

import { getSubjectById } from "@/app/actions/subject";
import SubjectWorkspace from "@/components/subjects/SubjectWorkspace";

interface SubjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function SubjectPage({
    params,
}: SubjectPageProps) {
    const { id } = await params;

    const subject = await getSubjectById(id);

    if (!subject) {
        notFound();
    }

    return (
        <SubjectWorkspace
            subject={subject}
        />
    );
}