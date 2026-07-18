interface ExamBadgeProps {
    daysLeft: number;
}

export default function ExamBadge({
    daysLeft,
}: ExamBadgeProps) {
    let bg = "";
    let text = "";

    if (daysLeft < 0) {
        bg = "bg-gray-500/10 text-gray-500";
        text = "Completed";
    } else if (daysLeft === 0) {
        bg = "bg-red-500/10 text-red-500";
        text = "Today";
    } else if (daysLeft === 1) {
        bg = "bg-red-500/10 text-red-500";
        text = "Tomorrow";
    } else if (daysLeft <= 3) {
        bg = "bg-orange-500/10 text-orange-500";
        text = `${daysLeft} Days Left`;
    } else if (daysLeft <= 7) {
        bg = "bg-yellow-500/10 text-yellow-500";
        text = `${daysLeft} Days Left`;
    } else if (daysLeft <= 15) {
        bg = "bg-blue-500/10 text-blue-500";
        text = "Prepare";
    } else {
        bg = "bg-green-500/10 text-green-500";
        text = "Plenty of Time";
    }

    return (
        <span
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-200 ${bg}`}
        >
            {text}
        </span>
    );
}