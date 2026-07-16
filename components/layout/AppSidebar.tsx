import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
    LayoutDashboard,
    BookOpen,
    Calendar,
    FileText,
    RotateCcw,
    Settings,
} from "lucide-react";

interface AppSidebarProps {
    isOpen: boolean;
}


const menuItems = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Subjects",
        href: "/subjects",
        icon: BookOpen,
    },
    {
        name: "Calendar",
        href: "/calendar",
        icon: Calendar,
    },
    {
        name: "Notes",
        href: "/notes",
        icon: FileText,
    },
    {
        name: "Revision",
        href: "/revision",
        icon: RotateCcw,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

export default function AppSidebar({
    isOpen,
}: AppSidebarProps) {

    const pathname = usePathname();

    return (
        <aside className={cn(
            "fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-72 bg-white border-r shadow-lg transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
            <h1>StudyOS 🚀</h1>
            <nav className="mt-8 px-3 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
                                pathname === item.href 
                                    ? "bg-blue-600 text-white shadow-md" 
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <Icon className="h-5 w-5" />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside >
    );
}