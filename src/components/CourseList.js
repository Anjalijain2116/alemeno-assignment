import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
// import courseModel from "./data"; // Import the sample course data
import StudentDashboardButton from "./dashbtn";
import "./courselist.css";

const CourseList = () => {
  //   const initialCourses = courseModel;
  const [original, setOriginal] = useState([]);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/courses");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCourse(data);
      setOriginal(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    console.log(term);
    // Filter courses based on the search term
    const filteredCourses = original.filter(
      (course1) =>
        course1.name.toLowerCase().includes(term) ||
        course1.instructor.toLowerCase().includes(term)
    );

    setCourse(filteredCourses);
  };

  return (
    <div className="courselist">
      {/* <StudentDashboardButton /> */}
      <div className="list">
        <h2 className="heading">Course List</h2>
        <input
          type="text"
          className="search"
          placeholder="Search by course name or instructor"
          value={searchTerm}
          onChange={handleSearch}
        />
        <StudentDashboardButton />
      </div>

      {/* <div className="course-overview">  */}
        <div className="course-overview"
        //   style={{
        //     overflowY: "scroll",
        //     maxHeight: "400px",
        //     border: "1px solid #ccc",
        //     width: "450px",
        //     backgroundColor: "white",
        //   }}
        >
          {course.map((course) => (
            <div style={{ padding: "10px" }}>
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Description: {course.description}</p>
              <p>Enrollment Status: {course.enrollmentStatus}</p>
              <p>Duration: {course.duration}</p>
              <Link
                to={`/course/${course.id}`}
                key={course.id}
                style={{ color: "blue" }}
              >
                <span>see more...</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default CourseList;
