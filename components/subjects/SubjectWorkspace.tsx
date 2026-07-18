import { Subject } from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FolderArchive, GraduationCap, LayoutList, PenSquare, Sparkles } from "lucide-react";

interface SubjectWorkspaceProps {
    subject: Subject;
}

export default function SubjectWorkspace({
    subject,
}: SubjectWorkspaceProps) {
    const placeholders = [
        { title: "Chapters", description: "Manage subject chapters and topics", icon: LayoutList, color: "text-blue-500", bg: "bg-blue-500/10" },
        { title: "Resources", description: "Files, links, and reference materials", icon: FolderArchive, color: "text-amber-500", bg: "bg-amber-500/10" },
        { title: "Notes", description: "Personal study notes and summaries", icon: PenSquare, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { title: "Assignments", description: "Track homework and projects", icon: GraduationCap, color: "text-purple-500", bg: "bg-purple-500/10" },
        { title: "Revision", description: "Flashcards and spaced repetition", icon: Sparkles, color: "text-pink-500", bg: "bg-pink-500/10" },
    ];

    return (
        <main className="container mx-auto space-y-8">
            {/* Header Section */}
            <div className="flex items-center gap-4">
                <div 
                    className="p-4 rounded-2xl flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: subject.color || "#6366f1" }}
                >
                    <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold tracking-tight">
                        {subject.name}
                    </h1>
                    <div className="flex items-center gap-3 mt-2 text-muted-foreground">
                        {subject.code && (
                            <span className="font-medium bg-secondary px-2.5 py-0.5 rounded-md text-sm">
                                {subject.code}
                            </span>
                        )}
                        {subject.credits && (
                            <span className="text-sm">
                                {subject.credits} Credits
                            </span>
                        )}
                        {subject.instructor && (
                            <>
                                <span>&bull;</span>
                                <span className="text-sm">Instructor: {subject.instructor}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Description */}
            {subject.description && (
                <p className="text-muted-foreground max-w-3xl leading-relaxed">
                    {subject.description}
                </p>
            )}

            {/* Placeholder Sections */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {placeholders.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <Card key={idx} className="hover:border-primary/50 transition-colors cursor-pointer group">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className={`p-3 rounded-xl ${item.bg}`}>
                                    <Icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {item.title}
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-sm">
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </main>
    );
}