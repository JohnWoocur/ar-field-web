import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {
  People,
  CheckCircleFill,
  XCircleFill,
  Calendar3,
  GeoAltFill,
  ClockFill,
  Download,
} from "react-bootstrap-icons";
import avatar1 from "../Assets/image.png";
import avatar2 from "../Assets/image.png";
import avatar3 from "../Assets/image.png";
import avatar4 from "../Assets/image.png";
import avatar5 from "../Assets/image.png";
import "./Attendance.css";

const Attendance = () => {
  const [date, setDate] = useState(new Date());

  const attendanceData = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Main Office",
      time: "8:45 AM",
      status: "present",
      type: "Biometric",
      avatar: avatar1,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Field Office - North",
      time: "9:00 AM",
      status: "present",
      type: "Mobile GPS",
      avatar: avatar2,
    },
    {
      id: 3,
      name: "Priya Sharma",
      location: "Community Center",
      time: "8:30 AM",
      status: "present",
      type: "Manual",
      avatar: avatar3,
    },
    {
      id: 4,
      name: "David Okafor",
      location: "Remote",
      time: "-",
      status: "absent",
      type: "-",
      avatar: avatar4,
    },
    {
      id: 5,
      name: "Emma Williams",
      location: "Main Office",
      time: "-",
      status: "leave",
      type: "-",
      avatar: avatar5,
    },
  ];

  const weeklySchedule = [
    { day: "Monday", date: "Sep 30", assigned: 42, total: 45, percentage: 93 },
    { day: "Tuesday", date: "Oct 1", assigned: 45, total: 48, percentage: 94 },
    { day: "Wednesday", date: "Oct 2", assigned: 46, total: null, percentage: null },
    { day: "Thursday", date: "Oct 3", assigned: 47, total: null, percentage: null },
    { day: "Friday", date: "Oct 4", assigned: 48, total: null, percentage: null },
  ];

  return (
    <div className="attendance-container p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h4 fw-semibold">Attendance & Work Tracking</h1>
          <p className="text-muted small">
            Monitor daily attendance and track work hours
          </p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">
            <Download className="me-1" /> Export Report
          </button>
          <button className="btn btn-success btn-sm">
            <CheckCircleFill className="me-1" /> Mark Attendance
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col">
          <div className="stat-card text-center p-3">
            <People size={24} className="text-primary mb-2" />
            <div className="h4 mb-1">172</div>
            <div className="text-muted small">Total Staff</div>
          </div>
        </div>
        <div className="col">
          <div className="stat-card text-center p-3">
            <CheckCircleFill size={24} className="text-success mb-2" />
            <div className="h4 mb-1">156</div>
            <div className="text-muted small">Present Today</div>
          </div>
        </div>
        <div className="col">
          <div className="stat-card text-center p-3">
            <XCircleFill size={24} className="text-danger mb-2" />
            <div className="h4 mb-1">8</div>
            <div className="text-muted small">Absent</div>
          </div>
        </div>
        <div className="col">
          <div className="stat-card text-center p-3">
            <Calendar3 size={24} className="text-warning mb-2" />
            <div className="h4 mb-1">8</div>
            <div className="text-muted small">On Leave</div>
          </div>
        </div>
        <div className="col">
          <div className="stat-card text-center p-3 highlight-card">
            <div className="h4 mb-1 text-success">90.7%</div>
            <div className="text-muted small">Attendance Rate</div>
          </div>
        </div>
      </div>

      {/* Attendance + Calendar */}
      <div className="row g-4 mb-4">
        {/* Attendance List */}
        <div className="col-md-8">
          <div className="content-card p-3">
            <h5 className="mb-3 fw-semibold">Today's Attendance</h5>
            {attendanceData.map((person) => (
              <div
                key={person.id}
                className="d-flex justify-content-between align-items-center border-bottom py-2"
              >
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="rounded-circle"
                    width={40}
                    height={40}
                  />
                  <div>
                    <div>{person.name}</div>
                    <div className="text-muted small d-flex gap-2">
                      <span className="d-flex align-items-center gap-1">
                        <GeoAltFill size={12} />
                        {person.location}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <ClockFill size={12} />
                        {person.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted small">{person.type}</span>
                  <span
                    className={`badge ${
                      person.status === "present"
                        ? "bg-success"
                        : person.status === "absent"
                        ? "bg-danger"
                        : "bg-primary"
                    }`}
                  >
                    {person.status === "present"
                      ? "Present"
                      : person.status === "absent"
                      ? "Absent"
                      : "On Leave"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="col-md-4">
          <div className="content-card p-3 calendar-card">
            <h5 className=" px-5 mb-3 fw-semibold">Calendar</h5>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded"
            />
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="content-card p-3 mb-4">
        <h5 className="mb-3 fw-semibold">Weekly Schedule</h5>
        {weeklySchedule.map((day) => (
          <div key={day.day} className="d-flex align-items-center mb-2">
            <div className="me-3" style={{ width: "100px" }}>
              <div className="fw-medium small">{day.day}</div>
              <div className="text-muted small">{day.date}</div>
            </div>
            <div className="flex-grow-1 d-flex align-items-center gap-2">
              <div className="text-muted small" style={{ minWidth: "60px" }}>
                {day.total
                  ? `${day.assigned} / ${day.total}`
                  : `${day.assigned} assigned`}
              </div>
              <div className="progress flex-grow-1" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{
                    width: day.percentage ? `${day.percentage}%` : "0%",
                  }}
                ></div>
              </div>
              {day.percentage && (
                <div
                  className="text-end small"
                  style={{ minWidth: "40px" }}
                >{`${day.percentage}%`}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Field Worker Locations */}
      <div className="content-card p-3">
        <h5 className="mb-3 fw-semibold">Field Worker Locations</h5>
        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-light rounded">
          <GeoAltFill size={48} className="text-muted mb-2" />
          <div className="fw-medium mb-1">GPS Map View</div>
          <div className="text-muted small">
            Real-time location tracking for field workers
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
