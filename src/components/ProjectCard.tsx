import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MoreVertical, Plus } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  status: "active" | "completed" | "planning" | "on-hold";
  progress: number;
  startDate: string;
  endDate: string;
  totalHours: string;
  tasksCompleted: number;
  totalTasks: number;
  teamMembers: TeamMember[];
}

export function ProjectCard({
  title,
  description,
  status,
  progress,
  startDate,
  endDate,
  totalHours,
  tasksCompleted,
  totalTasks,
  teamMembers,
}: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-[hsl(var(--success))] text-white";
      case "completed":
        return "bg-[hsl(var(--success))] text-white";
      case "planning":
        return "bg-[hsl(var(--info))] text-white";
      case "on-hold":
        return "bg-[hsl(var(--warning))] text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="border-2">
      <CardContent className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <Badge className={getStatusColor(status)}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-semibold">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>Start Date</span>
            </div>
            <p className="text-sm font-medium">{startDate}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>End Date</span>
            </div>
            <p className="text-sm font-medium">{endDate}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>Total Hours</span>
            </div>
            <p className="text-sm font-medium">{totalHours}</p>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Tasks</div>
            <p className="text-sm font-medium">
              {tasksCompleted}/{totalTasks}
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Team Members ({teamMembers.length})</h4>
            <Button variant="ghost" size="sm" className="gap-2 h-8 text-xs">
              <Plus className="h-3.5 w-3.5" />
              Add Member
            </Button>
          </div>
          <div className="flex flex-wrap gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
