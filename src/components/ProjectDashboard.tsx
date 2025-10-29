import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  X,
  Plus,
  Calendar,
  CheckSquare,
  Users,
  Target
} from "lucide-react";

interface ProjectDashboardProps {
  onClose: () => void;
}

export function ProjectDashboard({ onClose }: ProjectDashboardProps) {
  // Project State
  const [projectName, setProjectName] = useState("");
  const [status, setStatus] = useState("active");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [progress, setProgress] = useState(0);

  // Team Members
  const [teamMembers, setTeamMembers] = useState([
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Field Coordinator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    }
  ]);

  const [showAddMember, setShowAddMember] = useState(false);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("");

  const handleAddMember = () => {
    if (!newMemberName || !newMemberRole) return;
    setTeamMembers([
      ...teamMembers,
      {
        id: Date.now().toString(),
        name: newMemberName,
        role: newMemberRole,
        avatar: "https://via.placeholder.com/150"
      }
    ]);
    setNewMemberName("");
    setNewMemberRole("");
    setShowAddMember(false);
  };

  const handleRemoveMember = (id: string) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const handleSave = () => {
    console.log("Project saved:", {
      projectName,
      status,
      description,
      startDate,
      endDate,
      totalHours,
      tasksCompleted,
      totalTasks,
      progress,
      teamMembers
    });
    onClose();
  };

  return (
    <div className="h-full bg-gradient-to-br from-background via-muted/30 to-background overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Project Dashboard</h2>
            <p className="text-sm text-muted-foreground">
              Create and manage your project details
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Form Body */}
      <div className="p-6 space-y-8 max-w-5xl mx-auto">
        {/* Project Information */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="shadow-sm hover:shadow-md transition-all border-muted/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-primary" />
                Project Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Project Name</Label>
                  <Input
                    placeholder="Enter project name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="planning">Planning</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="on-hold">On Hold</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Enter a short description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline & Progress */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Card className="shadow-sm hover:shadow-md transition-all border-muted/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-primary" />
                Timeline & Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Total Hours</Label>
                  <Input
                    type="number"
                    placeholder="e.g. 120"
                    value={totalHours}
                    onChange={(e) => setTotalHours(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Overall Progress (%)</Label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setProgress(Number(e.target.value))}
                  />
                </div>
              </div>
              <div>
                <Progress value={progress} className="h-3 rounded-full" />
                <p className="text-sm text-muted-foreground mt-2 text-right">
                  {progress}% complete
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tasks */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Card className="shadow-sm hover:shadow-md transition-all border-muted/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckSquare className="h-5 w-5 text-primary" />
                Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Tasks Completed</Label>
                  <Input
                    type="number"
                    value={tasksCompleted}
                    onChange={(e) => setTasksCompleted(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Total Tasks</Label>
                  <Input
                    type="number"
                    value={totalTasks}
                    onChange={(e) => setTotalTasks(Number(e.target.value))}
                  />
                </div>
              </div>
              {totalTasks > 0 && (
                <div className="mt-4">
                  <Label>Task Completion</Label>
                  <Progress
                    value={(tasksCompleted / totalTasks) * 100}
                    className="h-2 rounded-full mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    {tasksCompleted} / {totalTasks} completed
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Card className="shadow-sm hover:shadow-md transition-all border-muted/40">
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-primary" />
                  Team Members
                </CardTitle>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowAddMember(!showAddMember)}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Member
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add Member Input */}
              {showAddMember && (
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Input
                    placeholder="Member Name"
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                  />
                  <Input
                    placeholder="Role"
                    value={newMemberRole}
                    onChange={(e) => setNewMemberRole(e.target.value)}
                  />
                  <Button
                    className="bg-primary text-primary-foreground"
                    onClick={handleAddMember}
                  >
                    Add
                  </Button>
                </div>
              )}

              {/* Team Members Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center gap-3 p-3 border rounded-xl hover:bg-muted/30 transition"
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{member.name}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {member.role}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveMember(member.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Actions */}
        <div className="flex justify-end gap-3 pt-6 sticky bottom-0 bg-background/80 backdrop-blur border-t border-border pb-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-primary text-primary-foreground" onClick={handleSave}>
            Save Project
          </Button>
        </div>
      </div>
    </div>
  );
}
