import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./coursedetail.css";
// import courseModel from './data'; // Import the sample course data

const CourseDetail = () => {
  const { courseId } = useParams(); // Get the course ID from the URL parameters
  //   const course = courseModel.find((c) => c.id === parseInt(courseId, 10));

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
      setCourse(data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  //   console.log("CourseDetails",course); // Use your data as needed

  return (
    <>
      <div className="head">
        <h2 class="F1">Course Details</h2>
      </div>

      <div className="container">

      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>
        Pre-requisites:{" "}
        {course.prerequisites && course.prerequisites.join(", ")}
      </p>
      <details>
        <summary>Syllabus</summary>
        <ul>
          {course.syllabus?.map((item) => (
            <li key={item.week}>
              <strong>Week {item.week}:</strong> {item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </details>
      </div>
    </>
  );
};

export default CourseDetail;
