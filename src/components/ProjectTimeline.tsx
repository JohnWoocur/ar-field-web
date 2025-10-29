import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface TimelineProject {
  name: string;
  dateRange: string;
  progress: number;
}

export function ProjectTimeline() {
  const projects: TimelineProject[] = [
    { name: "Water Sanitation Drive", dateRange: "Jan 15, 2024 - Dec 31, 2024", progress: 75 },
    { name: "Education Initiative", dateRange: "Mar 1, 2024 - Nov 30, 2024", progress: 60 },
    { name: "Health Camp 2024", dateRange: "Feb 1, 2024 - Aug 31, 2024", progress: 100 },
    { name: "IT Infrastructure", dateRange: "Oct 15, 2024 - Mar 31, 2025", progress: 15 },
  ];

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-lg">Project Timeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
              {index < projects.length - 1 && <div className="w-0.5 h-16 bg-border" />}
            </div>
            <div className="flex-1 pb-2">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold">{project.name}</h4>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>{project.progress}%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{project.dateRange}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
