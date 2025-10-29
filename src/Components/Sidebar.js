// src/components/Sidebar.jsx
import React from "react";
import logo from "../Assets/logo.png"; // your logo image
import {
  LayoutTextSidebar,
  People,
  Calendar3,
  Folder,
  BarChart,
  Gear,
  BoxArrowRight,
  ChevronRight,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-white border-end"
      style={{ width: "240px", height: "138vh" }}
    >
      {/* Logo Section */}
      <div className="p-4 border-bottom">
        <div className="d-flex align-items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="rounded"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <div>
            <h5 className="mb-0 fw-semibold">NGO Manager</h5>
            <small className="text-muted">Admin Portal</small>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-grow-1 p-3">
        <div className="d-flex flex-column gap-2">
          <a
            href="/"
            className="d-flex align-items-center gap-3 px-3 py-2 rounded text-dark text-decoration-none hover-bg"
          >
            <LayoutTextSidebar size={18} />
            <span>Dashboard</span>
          </a>

          <a
            href="/"
            className="d-flex align-items-center justify-content-between px-3 py-2 rounded text-white text-decoration-none"
            style={{ backgroundColor: "#13806F" }}
          >
            <div className="d-flex align-items-center gap-3">
              <People size={18} />
              <span>Team Members</span>
            </div>
            <ChevronRight size={14} />
          </a>

          <a
            href="/"
            className="d-flex align-items-center gap-3 px-3 py-2 rounded text-dark text-decoration-none hover-bg"
          >
            <Calendar3 size={18} />
            <span>Attendance</span>
          </a>

          <a
            href="/"
            className="d-flex align-items-center gap-3 px-3 py-2 rounded text-dark text-decoration-none hover-bg"
          >
            <Folder size={18} />
            <span>Projects</span>
          </a>

          <a
            href="/"
            className="d-flex align-items-center gap-3 px-3 py-2 rounded text-dark text-decoration-none hover-bg"
          >
            <BarChart size={18} />
            <span>Reports</span>
          </a>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-top">
        <div className="d-flex align-items-center gap-3 mb-2 px-2">
          <div
            className="d-flex align-items-center justify-content-center text-white rounded-circle"
            style={{ width: "36px", height: "36px", backgroundColor: "#13806F" }}
          >
            A
          </div>
          <div>
            <p className="mb-0 fw-semibold small">Admin User</p>
            <small className="text-muted">admin@ngo.org</small>
          </div>
        </div>

        <a
          href="/"
          className="d-flex align-items-center gap-3 px-3 py-2 rounded text-dark text-decoration-none hover-bg"
        >
          <Gear size={18} />
          <span>Settings</span>
        </a>

        <a
          href="/"
          className="d-flex align-items-center gap-3 px-3 py-2 rounded text-danger text-decoration-none hover-bg"
        >
          <BoxArrowRight size={18} />
          <span>Log out</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
