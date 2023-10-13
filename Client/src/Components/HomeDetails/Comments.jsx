import React from "react";
import { AiFillStar } from "react-icons/ai";

const Comments = ({ review, user, deleteReview }) => {
  console.log(user);
  const color = "#fcc419";
  const options = { year: "numeric", month: "long", day: "numeric" };
  console.log(review);
  const formattedDate = (inputDateString) => {
    const inputDate = new Date(inputDateString);

    return inputDate.toLocaleDateString("en-US", options);
  };

  return (
    <div className=" flex flex-col text-left  py-3 border border-1">
      <div className="flex justify-content-between">
        <div className="flex md:items-center gap-2 md:gap-4">
          <img
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
            alt=""
            className="h-14 w-14 object-fit rounded-full mt-1"
          />
          <div className="flex flex-col text-left">
            <p className="font-semibold">{review.userId.name}</p>
            <p className="text-sm">{formattedDate(review.createdAt)}</p>
          </div>
        </div>
        {user && user._id == review.userId._id && (
          <span onClick={() => deleteReview(review._id)} className="mx-3">
            X
          </span>
        )}
      </div>
      <div className="md:mt-4 text-gray-600 ">
        <p className="ml-3">{review.review}</p>
      </div>
    </div>
  );
};

export default Comments;
