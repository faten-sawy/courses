import {ReactComponent as Time} from "../assets/Icons/time-svgrepo-com.svg"
import {ReactComponent as Lang} from "../assets/Icons/language-svgrepo-com.svg"
import {ReactComponent as Video} from "../assets/Icons/video-lecture-svgrepo-com.svg"
import { courseType } from '../assets/helper'

const HorizontalList = ({data}) => {
    const { lang, hours, noOfVideos, category } = data;
  return (
    <div className="flex my-4">
      <p style={{ background: courseType[category] }} className="mr-4 p-1">{category}</p>
      <div className="flex mr-4 items-center">
        <Time width={20} className="mr-3 " height={20} />
        <p>{hours} hours</p>
      </div>
      <div className="flex mr-4 items-center">
        <Video width={20} className="mr-3 " height={20} />
        <p>{noOfVideos} ideos</p>
      </div>
      <div className="flex mr-4 items-center">
        <Lang width={20} className="mr-3 " height={20} />
        <p>{lang}</p>
      </div>
    </div>
  );
}

export default HorizontalList