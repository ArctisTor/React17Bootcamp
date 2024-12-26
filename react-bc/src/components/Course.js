import React from "react";
import Future from "./Future";

function Course(prop) {
  return (
    <>
      <div>Most Popular: {prop.courses.mostPopular}</div>
      <div>Least Popular: {prop.courses.leastPopular}</div>
      <Future futureCourse={prop.courses.futureCourse}/>
    </>
  );
}

export default Course;
