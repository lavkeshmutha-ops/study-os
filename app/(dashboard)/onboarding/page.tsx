import { GraduationCap } from "lucide-react";
import { AcademicProgramForm } from "@/features/onboarding";

export default function OnboardingPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
            <div className="w-full max-w-2xl rounded-2xl border bg-card p-8 shadow-lg">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-3">
                        <GraduationCap className="h-7 w-7 text-primary" />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            Welcome to StudyOS
                        </h1>

                        <p className="mt-1 text-muted-foreground">
                            Let&apos;s set up your academic profile.
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <AcademicProgramForm />
                </div>
            </div>
        </div>
    );
}