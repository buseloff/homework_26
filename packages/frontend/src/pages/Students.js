import React from "react";
import StudentsList from "../components/StudentsList";
import StudentForm from "../components/StudentForm";

export default function Students() {
  return (
    <div>
      <StudentForm />
      <hr />
      <StudentsList />
    </div>
  );
}
