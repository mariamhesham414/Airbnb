import React from "react";

const Comments = ({ review }) => {
  return (
    <div className=" flex flex-col text-left  py-3">
      <div className="flex md:items-center gap-2 md:gap-4">
        <img
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
          alt=""
          className="h-14 w-14 object-fit rounded-full mt-1"
        />
        <div className="flex flex-col text-left">
          <p className="font-semibold">{review.userId.name}</p>
          <p className="text-sm">{review.createdAt}</p>
        </div>
      </div>
      <div className="md:mt-4 text-gray-600">
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default Comments;
