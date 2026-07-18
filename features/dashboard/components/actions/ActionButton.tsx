import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
    title: string;
    icon: LucideIcon;
    onClick?: () => void;
}

export default function ActionButton({
    title,
    icon: Icon,
    onClick,
}: ActionButtonProps) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-3 rounded-xl border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-muted/50 hover:shadow-md"
        >
            <div className="rounded-lg bg-primary/10 p-2">
                <Icon className="h-5 w-5 text-primary" />
            </div>

            <span className="font-medium">
                {title}
            </span>
        </button>
    );
}