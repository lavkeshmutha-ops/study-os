import { BookOpen, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";


interface SubjectCardProps {
    id: number;
    name: string;
    progress: number;
    completedTopics: number;
    totalTopics: number;
    nextRevision: string;
    examDate: string;
}

export default function SubjectCard({
    id,
    name,
    progress,
    completedTopics,
    totalTopics,
    nextRevision,
    examDate,
}: SubjectCardProps) {

    return (
        <Card className="rounded-2xl transition-all hover:shadow-md">
            <CardContent className="space-y-6 p-6">
                <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-3">
                        <BookOpen className="h-6 w-6 text-primary" />
                    </div>

                    <h2 className="text-xl font-semibold">
                        {name}
                    </h2>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{progress}%</span>
                    </div>

                    <Progress value={progress} />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-muted-foreground">
                            Topics
                        </p>

                        <p className="font-semibold">
                            {completedTopics} / {totalTopics}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Next Revision
                        </p>

                        <p className="font-semibold">
                            {nextRevision}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Exam
                        </p>

                        <p className="font-semibold">
                            {examDate}
                        </p>
                    </div>
                </div>

                <Link href={`/subjects/${id}`}>
                    <Button className="w-full justify-between">
                        Open Subject
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}