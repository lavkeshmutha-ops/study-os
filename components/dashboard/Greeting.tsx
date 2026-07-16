export default function Greeting() {
    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    }

    return (
        <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
                {greeting}, Lavkesh 👋
            </h1>

            <p className="text-muted-foreground text-lg">
                Here's your study overview today.
            </p>
        </div>
    );
}