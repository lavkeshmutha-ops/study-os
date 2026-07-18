"use client";

import { createAcademicProgram } from "@/app/actions/academicProgram";

export default function AcademicProgramForm() {
    return (
        <form action={createAcademicProgram} className="space-y-6">
            {/* College */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    College
                </label>
                <input
                    name="college"
                    type="text"
                    placeholder="Enter your college name"
                    required
                    className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2"
                />
            </div>

            {/* Program */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Program
                </label>
                <select
                    name="program"
                    required
                    className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2"
                >
                    <option value="">Select Program</option>
                    <option value="Diploma">Diploma</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="Integrated B.Tech">Integrated B.Tech</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option value="Custom">Custom</option>
                </select>
            </div>

            {/* Specialization */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Specialization
                </label>
                <input
                    name="specialization"
                    type="text"
                    placeholder="e.g. Computer Science"
                    required
                    className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2"
                />
            </div>

            {/* Total Semesters */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Total Semesters
                </label>
                <input
                    name="totalSemesters"
                    type="number"
                    min={1}
                    max={20}
                    placeholder="10"
                    required
                    className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2"
                />
            </div>

            {/* Current Semester */}
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Current Semester
                </label>
                <select
                    name="currentSemester"
                    required
                    className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2"
                >
                    <option value="">Select Current Semester</option>

                    {Array.from({ length: 20 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            Semester {i + 1}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
                Continue
            </button>
        </form>
    );
}