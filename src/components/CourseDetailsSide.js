import React from 'react'
import List from './List';
import { ReactComponent as Fav } from "../assets/Icons/heart-svgrepo-com (1).svg";

const CourseDetailsSide = ({data:course}) => {

    const redirectPage = (url) => {
      window.location.href = url;
    };

  return (
    <div className="side-bar">
      <img
        onClick={() => redirectPage(course.promo)}
        src={course.photo}
        className="h-[200px] w-full cursor-pointer  mb-3"
        alt="course cover"
      />
      <div className="mx-4">
        <p className="text-[3.2rem] font-bold">${course.price}</p>
        {course.isEnroll ? (
            /* if user already enroll */
          <button className="w-full apply-button-style">Start Now</button>
        ) : (
            /* if not enroll  */
          <div className="w-full flex justify-between">
            <button className="w-[70%] apply-button-style">Buy Now</button>
            <button className="w-[20%] flex justify-center apply-button-style">
              <Fav width={20} className="relative " fill="#1c1d1f" />
            </button>
          </div>
        )}
        <List data={course.totalHouers} />
      </div>
    </div>
  );
}

export default CourseDetailsSide