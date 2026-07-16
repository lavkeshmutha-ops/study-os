interface SubjectWorkspaceProps {
    id: string;
}

export default function SubjectWorkspace({
    id,
}: SubjectWorkspaceProps) {
    return (
        <main className="container mx-auto px-6 py-8">

            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    Subject
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Manage chapters, revisions, notes and AI assistance.
                </p>
            </div>

            <div className="rounded-2xl border p-8">
                <h2 className="text-2xl font-semibold">
                    Subject ID
                </h2>

                <p className="mt-2 text-muted-foreground">
                    {id}
                </p>
            </div>

        </main>
    );
}