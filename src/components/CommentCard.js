import moment from 'moment/moment';
import React from 'react'
import StarRatings from "react-star-ratings";

const CommentCard = ({data:comment}) => {
    const { avatar, by: name, comment: text, rate, createdAt } = comment;
  return (
    <div>
      <div className="flex justify-between">
        <img src={avatar} alt="user Img" className="mr-6" />
        <div>
          <p>{name}</p>
          <div className="flex">
            <StarRatings
              rating={rate}
              starDimension="15px"
              starSpacing="1px"
              starRatedColor="#ffb400"
              starEmptyColor="#d3d3d3"
            />
            <p className="ml-2 text-[1rem] font-bold text-[#6a6f73]">
              {moment(createdAt).fromNow()}
            </p>
          </div>
        </div>
      </div>
      <p className='mt-2 text-right'>{text}</p>
    </div>
  );
}

export default CommentCard