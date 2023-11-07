import logo from "./logo.svg";
import "./App.css";

import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import StudentDashboard from "./components/StudentDashboard";
// import StudentDashboardButton from './components/dashbtn';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<CourseList />} />

          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
