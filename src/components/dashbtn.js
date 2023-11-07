import React from 'react';
import { Link } from 'react-router-dom';
import "./dashbtn.css"

const StudentDashboardButton = () => {
  return (
    <Link to="/dashboard">
      <button className='btn'>Student Dashboard</button>
     </Link>
  );
};

export default StudentDashboardButton;
