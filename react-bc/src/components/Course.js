import React from "react";
import Future from "./Future";
import { useState } from "react";

function Course(prop) {

  const [mostPopularChecked, setMostPopularChecked] = useState(false);
  const [leastPopularChecked, setLeastPopularChecked] = useState(false);

  const handleOnChange = (event) => {
    //console.log(`${event.target.id} checkbox was clicked: ${event.target.checked}`);
    if (event.target.id === 'mostPopular') {
      setMostPopularChecked(event.target.checked)
    } else if (event.target.id === 'leastPopular') {
      setLeastPopularChecked(event.target.checked)
    } else {
      console.log('Unknown');
    }
  };



  return (
    <>
      <div>
        <p>
          Most Popular Course Name: {prop.courses.mostPopular}
          <input id="mostPopular" checked={mostPopularChecked} type="checkbox" onChange={handleOnChange}/>
        </p>
        <p>
          Least Popular Course Name: {prop.courses.leastPopular}
          <input id="leastPopular" checked={leastPopularChecked} type="checkbox" onChange={handleOnChange}/>
        </p>
        <Future futureCourse={prop.courses.futureCourse} />
      </div>
    </>
  );
}

export default Course;
