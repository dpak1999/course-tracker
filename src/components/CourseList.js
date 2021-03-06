import React from "react";
import Course from "./Course";

export default function CourseList({ courses, refreshCourses }) {
  return (
    <div>
      <h2 className="mt-5 mb-3">In progress</h2>
      <div className="list-group">
        {courses
          .filter((course) => !course.purchased)
          .map((course) => (
            <Course
              course={course}
              key={course.id}
              refreshCourses={refreshCourses}
            />
          ))}
      </div>
      <h2 className="mt-5 mb-3">Completed</h2>
      {courses
        .filter((course) => course.purchased)
        .map((course) => (
          <Course
            course={course}
            key={course.id}
            refreshCourses={refreshCourses}
          />
        ))}
    </div>
  );
}
