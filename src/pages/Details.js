import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import HorizontalList from "../components/HorizontalList";
import Comments from "../components/Comments";
import InstructorCard from "../components/InstructorCard";
import CourseDetailsSide from "../components/CourseDetailsSide";


const CourseDetails = ()=>{
  const [course,setCourse]=useState({})  
  const {id} = useParams()

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwicm9sZSI6WyJEaXN0cmlidXRvciIsIjQiXSwibmJmIjoxNjczODczNjE4LCJleHAiOjE2NzM4ODA4MTgsImlhdCI6MTY3Mzg3MzYxOH0.NgftzcO55AiyEUuQRCdSIppgvFqqdOS6sMPWW_KYWaM";

  useEffect(() => {

    getAuth(token)

    axios
      .get(
        `https://test.plan-b-eg.com/api/Courses/GetCourseDetails?courseId=${id}`
      )
      .then((res) => {setCourse(res.data) ;console.log(res.data)});
  }, []);

  const getAuth = (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
   
  return (
    <div className="course-details-container max-[1026px]:flex-row-reverse">
      {Object.keys(course).length !== 0 && (
        <>
          <div className="left-side-details">
            <h1 className="course-name">{course.name}</h1>
            <HorizontalList
              data={{
                hours: course.totalHouers,
                noOfVideos: course.noOfVideos,
                lang: course.language,
                category: course?.category.name.replace(
                  /(\r\n|\n|\r|\s+|&)/gm,
                  ""
                ),
              }}
            />
            <p className="my-6">{course.fullDesc}</p>
            <div>
              <h2 className="course-instructor">Instructor</h2>
              <InstructorCard instructor={course.instructors[0]} />
            </div>
            <div className="comments-container">
              <Comments data={course.comments} />
            </div>
          </div>
          <CourseDetailsSide data={course} />
        </>
      )}
    </div>
  );
}

export default CourseDetails