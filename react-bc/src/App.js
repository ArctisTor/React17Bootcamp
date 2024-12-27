import logo from './logo.svg';
import './App.css';

import Course from './components/Course'; 

const courses = {
  mostPopular: "Python",
  leastPopular: "VueJS",
  futureCourse: "Angular"
}

function App() {
  return (
    <>
    <div className='App'>
      <h2>Courses offered by Skillsoft</h2>
      <p></p>
      <Course courses={courses}/>
    </div>
    </>
  );
}

export default App;
