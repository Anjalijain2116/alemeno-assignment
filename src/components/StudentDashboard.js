import React, { useState, useEffect } from "react";
import "./studentdash.css";
// import courseModel from './data'; // Import the sample course data

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/thestudents");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setStudents(data);  
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  // Function to mark a course as completed
  // const markCourseCompleted = (courseId) => {
  //   setCompletedCourses((prevCompletedCourses) => [...prevCompletedCourses, courseId]);
  // };
  // console.log("Student ", course.enrollerd_course)

  return (
    <div>
      <div className="the_nav">
        <h2 className="my_heading">Student Dashboard</h2>
      </div>

      {students.map((student) => (
        <div className="st_dash" key={student.id}>
          <h2>{student.name}</h2>
          <p>Email Id: {student.email}</p>
          <h4>Enrolled courses</h4>

          {student.enrollerd_course.map((my_course) => (
            <div className="enrolled_course">
              <div className="photo">
                <img className="img" src={my_course.thumbnali} alt="Course Thumbnail" />
              </div>
              <div>
                <div>{my_course.course_name}</div>
                <div>Instructor: {my_course.instructor}</div>
                <div>Due date: 21/05/2024</div>
                <progress
                  id="file"
                  value={my_course.progress}
                  max="100"
                ></progress>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
