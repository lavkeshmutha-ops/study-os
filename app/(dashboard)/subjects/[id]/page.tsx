interface SubjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function SubjectPage({
    params,
}: SubjectPageProps) {
    const { id } = await params;

    return (
        <main className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold">
                Subject {id}
            </h1>

            <p className="mt-2 text-muted-foreground">
                Subject workspace coming soon.
            </p>
        </main>
    );
}