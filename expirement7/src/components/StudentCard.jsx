import React from "react";
import "./StudentCard.css";

function StudentCard({ student }) {
  return (
    <div className="card">
      <h2>{student.name}</h2>
      <p>Course: {student.course}</p>
      <p>Marks: {student.marks}</p>
    </div>
  );
}

export default StudentCard;