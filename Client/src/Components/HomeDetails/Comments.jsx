import React from "react";

const Comments = ({ review }) => {
  const color = "#fcc419";
  const options = { year: "numeric", month: "long", day: "numeric" };
  console.log(review);
  const formattedDate = (inputDateString) => {
    const inputDate = new Date(inputDateString);

    return inputDate.toLocaleDateString("en-US", options);
  };
  return (
    <div className=" flex flex-col text-left  py-3 border border-1">
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
        <div>
          {Array.from({ length: review.rate }, (_, i) => {
            return (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill={color}
                stroke={color}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          })}
        </div>
      </div>
      <div className="md:mt-4 text-gray-600 ">
        <p className="ml-3">{review.review}</p>
      </div>
    </div>
  );
};

export default Comments;
