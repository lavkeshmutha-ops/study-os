"use client";

import { ReactNode, useState } from "react";

import TopNavbar from "./TopNavbar";
import AppSidebar from "./AppSidebar";

interface DashboardShellProps {
    children: ReactNode;
}

export default function DashboardShell({
    children,
}: DashboardShellProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background">
            <TopNavbar
                isOpen={sidebarOpen}
                onMenuClick={() => setSidebarOpen((prev) => !prev)}
            />

            <div className="flex">
                <AppSidebar isOpen={sidebarOpen} />

                {sidebarOpen && (
                    <div
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 top-16 z-30 bg-transparent"
                    />
                )}

                <main
                    className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"
                        }`}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}