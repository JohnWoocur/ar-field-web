// src/pages/Reports.jsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  FileText,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  PieChart,
  Clock,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sidebar } from "@/components/Sidebar";

export function Reports() {
  const reportTypes = [
    {
      title: "Attendance Summary",
      description:
        "Monthly attendance records with present, absent, and leave details.",
      icon: Calendar,
      color: "bg-blue-500",
      lastGenerated: "Sep 30, 2024",
      format: ["PDF", "Excel"],
    },
    {
      title: "Employee Performance",
      description:
        "Individual performance metrics, tasks completed, and hours worked.",
      icon: TrendingUp,
      color: "bg-green-500",
      lastGenerated: "Sep 28, 2024",
      format: ["PDF", "Excel"],
    },
    {
      title: "Project Contribution",
      description:
        "Hours and tasks contributed by each employee across all projects.",
      icon: BarChart3,
      color: "bg-purple-500",
      lastGenerated: "Sep 25, 2024",
      format: ["PDF", "Excel"],
    },
    {
      title: "Volunteer Activity",
      description:
        "Volunteer participation, hours, and impact metrics across programs.",
      icon: Users,
      color: "bg-amber-500",
      lastGenerated: "Sep 20, 2024",
      format: ["PDF", "Excel"],
    },
    {
      title: "Leave Analysis",
      description:
        "Leave trends, patterns, and utilization by department and role.",
      icon: PieChart,
      color: "bg-pink-500",
      lastGenerated: "Sep 15, 2024",
      format: ["PDF", "Excel"],
    },
    {
      title: "Work Hours Summary",
      description: "Total work hours by employee, project, and time period.",
      icon: Clock,
      color: "bg-indigo-500",
      lastGenerated: "Sep 30, 2024",
      format: ["PDF", "Excel"],
    },
  ];

  const recentReports = [
    {
      name: "Monthly Attendance Report - September 2024",
      type: "Attendance",
      generatedOn: "Oct 1, 2024, 9:00 AM",
      size: "2.4 MB",
      format: "PDF",
    },
    {
      name: "Project Contributions Q3 2024",
      type: "Project",
      generatedOn: "Sep 30, 2024, 5:30 PM",
      size: "1.8 MB",
      format: "Excel",
    },
    {
      name: "Volunteer Impact Report - August 2024",
      type: "Volunteer",
      generatedOn: "Sep 28, 2024, 2:15 PM",
      size: "3.1 MB",
      format: "PDF",
    },
    {
      name: "Employee Performance Review - Q3",
      type: "Performance",
      generatedOn: "Sep 25, 2024, 11:00 AM",
      size: "4.2 MB",
      format: "PDF",
    },
  ];

  const summaryStats = [
    {
      label: "Total Reports Generated",
      value: "248",
      change: "+12 this month",
      icon: FileText,
    },
    {
      label: "Active Projects Tracked",
      value: "18",
      change: "5 completing soon",
      icon: BarChart3,
    },
    {
      label: "Total Work Hours",
      value: "12.4K",
      change: "This quarter",
      icon: Clock,
    },
    {
      label: "Team Members",
      value: "172",
      change: "48 employees, 124 volunteers",
      icon: Users,
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Reports & Performance
            </h1>
            <p className="text-muted-foreground mt-1">
              Generate, analyze, and download detailed performance insights.
            </p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {summaryStats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-muted/30"
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.change}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="generate" className="space-y-6">
          <TabsList className="w-fit bg-muted/30 rounded-xl p-1">
            <TabsTrigger value="generate" className="rounded-lg">
              Generate Report
            </TabsTrigger>
            <TabsTrigger value="recent" className="rounded-lg">
              Recent Reports
            </TabsTrigger>
          </TabsList>

          {/* Generate Reports */}
          <TabsContent value="generate" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Report Filters</CardTitle>
              </CardHeader>
               <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Time Period</label>
                  <Select defaultValue="month">
                    <SelectTrigger className="bg-white border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Department</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="bg-white border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="field">Field Operations</SelectItem>
                      <SelectItem value="admin">Administration</SelectItem>
                      <SelectItem value="health">Health Services</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Format</label>
                  <Select defaultValue="pdf">
                    <SelectTrigger className="bg-white border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Document</SelectItem>
                      <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                      <SelectItem value="csv">CSV Data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Detail Level</label>
                  <Select defaultValue="detailed">
                    <SelectTrigger className="bg-white border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="summary">Summary</SelectItem>
                      <SelectItem value="detailed">Detailed</SelectItem>
                      <SelectItem value="comprehensive">Comprehensive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            </Card>

            {/* Report Types */} 
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {reportTypes.map((report, index) => (
    <Card
      key={index}
      className="hover:shadow-lg hover:scale-[1.02] transition-all border-muted/30"
    >
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className={`${report.color} p-3 rounded-lg`}>
            <report.icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-base">
              {report.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {report.description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Last: {report.lastGenerated}</span>
        </div>
        <div className="flex gap-2">
          {report.format.map((fmt, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {fmt}
            </Badge>
          ))}
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 transition-colors">
          <Download className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </CardContent>
    </Card>
  ))}
</div>
          </TabsContent>

          {/* Recent Reports */}
          <TabsContent value="recent" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recently Generated Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/20 transition-all"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{report.name}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>{report.type}</span>•<span>{report.generatedOn}</span>•<span>{report.size}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{report.format}</Badge>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats Horizontal */}
            <div className="flex flex-wrap gap-4">
              <Card className="flex-1 min-w-[200px] bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="pt-6">
                  <p className="text-sm text-blue-700">Attendance Rate</p>
                  <p className="text-3xl font-bold text-blue-900 mt-2">94.5%</p>
                  <p className="text-xs text-blue-600 mt-1">Average this quarter</p>
                </CardContent>
              </Card>

              <Card className="flex-1 min-w-[200px] bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="pt-6">
                  <p className="text-sm text-green-700">Project Completion</p>
                  <p className="text-3xl font-bold text-green-900 mt-2">78%</p>
                  <p className="text-xs text-green-600 mt-1">On-time delivery rate</p>
                </CardContent>
              </Card>

              <Card className="flex-1 min-w-[200px] bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="pt-6">
                  <p className="text-sm text-purple-700">Volunteer Hours</p>
                  <p className="text-3xl font-bold text-purple-900 mt-2">8.2K</p>
                  <p className="text-xs text-purple-600 mt-1">Total this quarter</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Reports;
