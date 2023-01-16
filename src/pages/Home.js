import React,{useEffect,useState} from 'react'
import CourseCard from '../components/CourseCard';
import axios from 'axios'
import NotFound from '../components/NotFound';
const Home = ()=> {
  const [courses, setCourses] = useState([]);
  const [pageNumber,setPageNumber] = useState(1)
  const [notFoundFlag,setNotFoundFlag] = useState(false)

  useEffect(() => {
    axios
      .get(
        `https://test.plan-b-eg.com/api/Courses/GetAllCourses?latest=true&limit=10&page=${pageNumber}`
      )
      .then((res) => {
        /* Handle if data return or not */
      if(res.data.length > 0) {
        setCourses(res.data)
        setNotFoundFlag(false)
      }
      else {
        setNotFoundFlag(true);
      }      
      });
    }, [pageNumber]);

    /* Handle pagination if increase or decrease */
  const handlePagination = (status) => {
    if(status === "increase"){
      setPageNumber(pageNumber+1)
    }
    else if (status === "decrease"){
      if(pageNumber === 1){
        return
      }
      else{
        setPageNumber(pageNumber-1)
      }
    }
    };

  return (
    <div className="container">
      <div className="cards-container">
        {notFoundFlag ? (
          <NotFound text="It looks like you are lost..." />
        ) : (
          courses?.map((item) => <CourseCard data={item} />)
        )}
      </div>

      <div className="pagination-btns-container">
        <button
          onClick={() => handlePagination("decrease")}
          className="pagination-btn"
        >
          &lt;
        </button>
        <button
          disabled={notFoundFlag}
          onClick={() => handlePagination("increase")}
          className="pagination-btn"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Home