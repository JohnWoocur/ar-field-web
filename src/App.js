import React from "react";
import Attendance from "./Components/Attendance";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App d-flex" >
      {/* Sidebar */}
      <div style={{ flex: "0 0 50px" }}>
        <Sidebar />
      </div>

      {/* Attendance */}
      <div style={{ flex: "1", padding: "2px" }}>
        <Attendance />
      </div>
    </div>
  );
}

export default App;
