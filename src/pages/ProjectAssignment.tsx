import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { StatsCards } from "@/components/StatsCards";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Plus, MoreVertical, TrendingUp } from "lucide-react";

const ProjectAssignment = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "Water Sanitation Drive",
      description: "Installing clean water systems in rural communities",
      status: "Active",
      progress: 75,
      startDate: "Jan 15, 2024",
      endDate: "Dec 31, 2024",
      totalHours: 1248,
      tasksCompleted: 45,
      totalTasks: 60,
      teamMembers: [
        { name: "Sarah Johnson", role: "Project Manager" },
        { name: "Michael Chen", role: "Field Coordinator" },
        { name: "Priya Sharma", role: "Health Volunteer" },
      ],
    },
    {
      id: "2",
      title: "Education Initiative",
      description: "Providing educational resources and training to schools",
      status: "Active",
      progress: 60,
      startDate: "Mar 1, 2024",
      endDate: "Nov 30, 2024",
      totalHours: 892,
      tasksCompleted: 32,
      totalTasks: 54,
      teamMembers: [
        { name: "James Rodriguez", role: "Education Coordinator" },
        { name: "Emma Williams", role: "Donor Relations" },
      ],
    },
    {
      id: "3",
      title: "Health Camp 2024",
      description: "Free medical checkups and awareness programs",
      status: "Completed",
      progress: 100,
      startDate: "Feb 1, 2024",
      endDate: "Aug 31, 2024",
      totalHours: 2156,
      tasksCompleted: 72,
      totalTasks: 72,
      teamMembers: [
        { name: "Dr. Patel", role: "Medical Lead" },
        { name: "Lisa Wong", role: "Nurse Coordinator" },
        { name: "Ahmed Khan", role: "Logistics" },
      ],
    },
    {
      id: "4",
      title: "IT Infrastructure",
      description: "Setting up IT systems and digital literacy programs",
      status: "Planning",
      progress: 15,
      startDate: "Oct 15, 2024",
      endDate: "Mar 31, 2025",
      totalHours: 124,
      tasksCompleted: 3,
      totalTasks: 28,
      teamMembers: [{ name: "David Okafor", role: "IT Specialist" }],
    },
  ]);

  const [newMember, setNewMember] = useState({ name: "", role: "" });
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const handleAddMember = (projectId: string) => {
    if (!newMember.name || !newMember.role) return;

    setProjects((prev) =>
      prev.map((proj) =>
        proj.id === projectId
          ? { ...proj, teamMembers: [...proj.teamMembers, newMember] }
          : proj
      )
    );

    setNewMember({ name: "", role: "" });
    setActiveProjectId(null); // close the input form
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b bg-card backdrop-blur-md">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Project Assignment
              </h1>
              <p className="text-sm text-muted-foreground">
                Manage projects and assign team members
              </p>
            </div>
            <Button
              className="gap-2 bg-primary hover:bg-primary/90 shadow-md transition-transform hover:scale-105"
              onClick={() => navigate("/project-dashboard")}
            >
              <Plus className="h-4 w-4" />
              Add Project
            </Button>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-8">
          <StatsCards />

          {/* Projects */}
          <div className="grid gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`transition-all duration-300 hover:shadow-lg ${
                  hoveredProject === project.id ? "scale-[1.01]" : ""
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <CardHeader className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle>{project.title}</CardTitle>
                      <Badge
                        variant={
                          project.status === "Active"
                            ? "default"
                            : project.status === "Completed"
                            ? "secondary"
                            : "outline"
                        }
                        className={
                          project.status === "Active"
                            ? "bg-green-500 text-white"
                            : ""
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => navigate("/project-dashboard")}
                      >
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Project</DropdownMenuItem>
                      <DropdownMenuItem>Assign Members</DropdownMenuItem>
                      <DropdownMenuItem>Generate Report</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Archive Project
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">
                        Overall Progress
                      </span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress
                      value={project.progress}
                      className="h-2 bg-muted-foreground/20"
                    />
                  </div>

                  {/* Dates + Hours + Tasks */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">Start Date</p>
                      <p className="text-sm font-medium mt-1">{project.startDate}</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">End Date</p>
                      <p className="text-sm font-medium mt-1">{project.endDate}</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">Total Hours</p>
                      <p className="text-sm font-medium mt-1">{project.totalHours}h</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">Tasks</p>
                      <p className="text-sm font-medium mt-1">
                        {project.tasksCompleted}/{project.totalTasks}
                      </p>
                    </div>
                  </div>

                  {/* Team Members */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium">
                        Team Members ({project.teamMembers.length})
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setActiveProjectId(
                            activeProjectId === project.id ? null : project.id
                          )
                        }
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Add Member
                      </Button>
                    </div>

                    {/* Add Member Form */}
                    {activeProjectId === project.id && (
                      <div className="flex gap-2 mb-3">
                        <input
                          type="text"
                          placeholder="Name"
                          value={newMember.name}
                          onChange={(e) =>
                            setNewMember({ ...newMember, name: e.target.value })
                          }
                          className="border p-2 rounded flex-1"
                        />
                        <input
                          type="text"
                          placeholder="Role"
                          value={newMember.role}
                          onChange={(e) =>
                            setNewMember({ ...newMember, role: e.target.value })
                          }
                          className="border p-2 rounded flex-1"
                        />
                        <Button
                          onClick={() => handleAddMember(project.id)}
                          className="bg-green-500 text-white"
                        >
                          Add
                        </Button>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      {project.teamMembers.map((member, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg"
                        >
                          <Avatar className="h-9 w-9">
                            <AvatarImage
                              src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`}
                            />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{member.name}</p>
                            <p className="text-xs text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectAssignment;
