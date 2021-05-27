import React from "react";
import StudentsList from "../components/StudentsList";
import StudentForm from "../components/StudentForm";

export default function Superheroes() {
  return (
    <div>
      <StudentForm />
      <hr />
      <StudentsList />
    </div>
  );
}
