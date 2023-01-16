import React from 'react'

import { ReactComponent as Board } from "../assets/Icons/blackboard-svgrepo-com.svg";
import { ReactComponent as Talk } from "../assets/Icons/dialogue-svgrepo-com.svg";
import { ReactComponent as Students } from "../assets/Icons/group-svgrepo-com.svg";

const InstructorCard = ({instructor}) => {
  return (
    <div>
      <p className="text-[1.4rem] font-semibold">{instructor.name}</p>
      <p className="instructor-jop-title">{instructor.jopTitle}</p>
      <div className="flex">
        <img src={instructor.photo} alt="instructor img" />
        <div className="ml-10">
          <div className="icons-container">
            <Board width={20} height={20} className="icon" />
            <p>{instructor.numberOfCourses} Courses</p>
          </div>
          <div className="icons-container">
            <Talk width={20} height={20} className="icon" />
            <p>{instructor.numberOfTalks} Talks</p>
          </div>
          <div className="icons-container">
            <Students width={20} height={20} className="icon" />
            <p>{instructor.numberOfStudent} Student</p>
          </div>
        </div>
      </div>
      <p className="my-12">{instructor.about}</p>
    </div>
  );
}

export default InstructorCard