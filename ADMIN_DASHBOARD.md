# NGO Manager Admin Dashboard

This is a modern, responsive admin dashboard built for NGO management using React, Tailwind CSS, and ShadCN UI components.

## Features

### 🎯 Dashboard Overview
- **Welcome Header**: Personalized greeting with quick action buttons
- **Statistics Cards**: Real-time metrics for employees, volunteers, attendance, and projects
- **Recent Activity Feed**: Live updates of team activities and system events
- **Calendar Widget**: Interactive calendar with upcoming events and meetings

### 🧭 Navigation
- **Sidebar Navigation**: Clean, organized menu with icons
- **Active State Indicators**: Visual feedback for current page
- **Quick Actions**: Add Employee, Approve Leave, Assign Project buttons

### 📊 Key Metrics
- **Active Employees**: Current team size with growth trends
- **Volunteers**: Volunteer count and engagement metrics
- **Attendance Today**: Real-time attendance tracking
- **Ongoing Projects**: Active project count and status

### 🎨 Design System
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface
- **Consistent Styling**: Tailwind CSS with custom color scheme
- **Interactive Elements**: Hover effects and smooth transitions

## File Structure

```
src/pages/AdminDashboard/
├── index.jsx              # Main dashboard component
├── Sidebar.jsx            # Navigation sidebar
├── DashboardHeader.jsx    # Top header with actions
├── StatsCards.jsx         # Statistics overview cards
├── RecentActivity.jsx     # Activity feed component
└── CalendarWidget.jsx     # Calendar and events widget
```

## Components Used

- **Lucide React**: Modern icon library
- **Tailwind CSS**: Utility-first CSS framework
- **ShadCN UI**: Reusable component library
- **React Router**: Client-side routing

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Navigate to `/admin` to view the dashboard

## Customization

### Colors
The dashboard uses a custom color scheme defined in `src/index.css`. You can modify the CSS variables to change the theme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other colors */
}
```

### Adding New Features
1. Create new components in the `AdminDashboard` folder
2. Import and use them in the main `index.jsx` file
3. Follow the existing component structure and styling patterns

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the NGO Field Web application.
