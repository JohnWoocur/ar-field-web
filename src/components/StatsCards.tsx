import { Card, CardContent } from "@/components/ui/card";
import { FolderKanban, Users, Target, Clock } from "lucide-react";

export function StatsCards() {
  const stats = [
    {
      label: "Active Projects",
      value: "18",
      icon: FolderKanban,
      color: "text-[hsl(var(--info))]",
      bgColor: "bg-[hsl(var(--info))]/10",
    },
    {
      label: "Total Team Members",
      value: "142",
      icon: Users,
      color: "text-[hsl(var(--success))]",
      bgColor: "bg-[hsl(var(--success))]/10",
    },
    {
      label: "Completion Rate",
      value: "78%",
      icon: Target,
      color: "text-[hsl(175,60%,45%)]",
      bgColor: "bg-[hsl(175,60%,45%)]/10",
    },
    {
      label: "Total Hours",
      value: "4.2K",
      icon: Clock,
      color: "text-[hsl(var(--warning))]",
      bgColor: "bg-[hsl(var(--warning))]/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="border-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`h-12 w-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
