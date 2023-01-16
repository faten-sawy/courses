
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Fav } from "../assets/Icons/heart-svgrepo-com (1).svg"
 import { courseType } from "../assets/helper";

const CourseCard = ({data}) => {
  const { photo, id, name, instractorName ,category} = data;
  const [flag,setFlag] = useState(false)
    
  return (
    <div
      className="card"
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
    >
      <div className="relative">
        <Link to={`/course-details/${id}`}>
          <img src={photo} alt="Book" className="w-full h-[200px] rounded-xl" />
        </Link>

        {flag && (
          <button className="heart-btn">
            <span className="hidden"></span>
            <Fav width={20} className="relative left-[20%]" fill="#ef3f37" />
          </button>
        )}
      </div>
      <div className="p-3">
        <p className="font-['Courgette'] text-lg mt-3">{name}</p>
        <p className="inst-nam">{instractorName[0]}</p>
        {name && (
          <p
            style={{
              background:
                courseType[category.name.replace(/(\r\n|\n|\r|\s+|&)/gm, "")],
            }}
            className="category"
          >
            {category.name}
          </p>
        )}
      </div>
    </div>
  );
}

export default CourseCard