"use client";

import { Menu, X } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
    isOpen: boolean;
    onMenuClick: () => void;
}

export default function TopNavbar({
    isOpen,
    onMenuClick,
}: NavbarProps) {

    return (
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-zinc-800 bg-black px-6">
            {/* Left */}
            <div className="flex items-center gap-3">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onMenuClick}
                    className="text-white hover:bg-zinc-900"
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </Button>

                <h1 className="text-xl font-bold text-white">
                    StudyOS
                </h1>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
                <ThemeToggle />

                <UserButton
                    afterSignOutUrl="/sign-in"
                    appearance={{
                        elements: {
                            avatarBox: "h-10 w-10",
                        },
                    }}
                />
            </div>
        </header>
    );
}