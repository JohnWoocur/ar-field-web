# NGO Manager - Leave & Holiday Management Dashboard

A modern, responsive admin dashboard for managing leave requests and holidays in an NGO environment.

## Features

- **Modern UI Design**: Clean, professional interface with Tailwind CSS
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Leave Management**: Track pending, approved, and rejected leave requests
- **Interactive Leave Cards**: Enhanced cards with action buttons (Approve/Reject)
- **Leave Request Modal**: Functional modal for submitting new leave requests
- **Statistics Dashboard**: Real-time stats for leave management
- **Calendar Widget**: Visual calendar for October 2025 with current date highlighted
- **Upcoming Holidays**: Holiday tracking with categorized events
- **User Profile**: Admin user information and logout functionality

## Tech Stack

- **React 19.2.0**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **React Icons**: Beautiful icons from Feather Icons
- **Create React App**: Development and build tools

## Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Sidebar.jsx         # Navigation sidebar
│   ├── Header.jsx          # Top header with title and modal trigger
│   ├── StatCard.jsx        # Statistics cards
│   ├── LeaveCard.jsx       # Enhanced leave request cards with actions
│   ├── LeaveRequestModal.jsx # Modal for submitting leave requests
│   ├── CalendarWidget.jsx  # Calendar component
│   └── UpcomingHolidays.jsx # Holiday tracking widget
├── pages/                  # Page components
│   └── Dashboard.jsx       # Main dashboard page
├── data/                   # Sample data
│   └── sampleData.js       # Mock data for leave requests and holidays
└── assets/                 # Static assets
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Open Browser**:
   Navigate to `http://localhost:3000`

## Components Overview

### Sidebar
- NGO Manager branding
- Navigation menu with active states
- User profile card with admin information
- Logout functionality

### Header
- Page title and subtitle
- "Request Leave" action button

### Dashboard
- Four statistics cards showing:
  - Pending Requests (8)
  - Approved This Month (12)
  - Rejected (2)
  - Average Leave Days (4.5)
- Recent leave requests with detailed information
- Calendar widget for October 2025

### Leave Cards
Each leave request card displays:
- Employee profile image
- Name and role
- Leave type and duration with icons
- Date range with calendar icon
- Reason for leave in highlighted box
- Status badge (Pending/Approved/Rejected)
- Action buttons (Approve/Reject) for pending requests

### Leave Request Modal
Functional modal for submitting new leave requests:
- Leave type dropdown (Sick, Annual, Personal, Emergency)
- Start and end date inputs
- Reason textarea
- Form validation
- Modern dark-green submit button

### Upcoming Holidays
Holiday tracking widget with:
- Holiday name and date
- Category badges (Public Holiday, Organization Event, etc.)
- Calendar icons and soft styling
- Color-coded categories

## Design Features

- **Soft Color Palette**: Light backgrounds with subtle shadows
- **Rounded Corners**: Modern `rounded-2xl` styling
- **Status Indicators**: Color-coded badges for leave status
- **Responsive Grid**: Adaptive layout for different screen sizes
- **Hover Effects**: Interactive elements with smooth transitions

## Sample Data

The application includes realistic sample data with:
- 6 different leave requests
- Various leave types (Sick, Annual, Personal, Emergency)
- Different statuses (Pending, Approved, Rejected)
- Employee profiles with photos from Unsplash

## Future Enhancements

- Add leave request form
- Implement approval/rejection workflow
- Add filtering and search functionality
- Export reports functionality
- User authentication
- Database integration
## License

This project is created for NGO Manager admin portal.