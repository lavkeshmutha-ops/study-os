"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SubjectCardProps {
    id: string;
    name: string;
    code: string | null;
    color: string | null;
}

export default function SubjectCard({
    id,
    name,
    code,
    color,
}: SubjectCardProps) {
    return (
        <Card className="rounded-2xl">
            <CardContent className="space-y-6 p-6">
                <div className="flex items-center gap-3">
                    <div
                        className="rounded-lg p-3"
                        style={{
                            backgroundColor:
                                color ?? "#6366f1",
                        }}
                    >
                        <BookOpen className="h-6 w-6 text-white" />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">
                            {name}
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            {code ?? "No Code"}
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