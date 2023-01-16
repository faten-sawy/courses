import React from 'react'
import CommentCard from './CommentCard';

const Comments = ({ data: courseComments }) => {
   courseComments.length = 8
  return (
    <>
      {courseComments.map((item) => (
        <div key={item.id} className="comment-container">
          <CommentCard data={item} />
        </div>
      ))}
    </>
  );
};

export default Comments