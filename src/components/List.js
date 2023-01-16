import { ReactComponent as Infinity } from "../assets/Icons/infinity-thin-svgrepo-com.svg";
import { ReactComponent as Cup } from "../assets/Icons/award-cup-trophy-svgrepo-com.svg";
import { ReactComponent as Mobile } from "../assets/Icons/mobile-svgrepo-com.svg";
import { ReactComponent as Video } from "../assets/Icons/video-lecture-svgrepo-com.svg";

const List = ({data:totalHouers}) => {    
  return (
    <div className="my-4">
      <div className="flex my-2">
        <Video width={20} className="mr-4 " height={20} />
        <p>{totalHouers} hours on-demand video</p>
      </div>
      <div className="flex my-2">
        <Infinity width={20} className="mr-4" height={20} />
        <p>Full lifetime access</p>
      </div>
      <div className="flex my-2">
        <Mobile width={20} className="mr-4" height={20} />
        <p>Access on mobile and TV</p>
      </div>
      <div className="flex my-2">
        <Cup width={20} className="mr-4" height={20} />
        <p>Certificate of completion</p>
      </div>
    </div>
  );
}

export default List