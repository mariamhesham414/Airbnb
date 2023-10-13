import React, { useEffect, useState } from "react";
import Photogrid from "../Components/HomeDetails/Photogrid";
import MiddleSection from "../Components/HomeDetails/MiddleSection";
import Line from "../Components/HomeDetails/Line";
import Review from "../Components/HomeDetails/Review";
import Comments from "../Components/HomeDetails/Comments";
import Maps from "../Components/HomeDetails/Maps";
import Footer from "../Components/HomeDetails/Footer";
import Rate from "../Components/HomeDetails/Rate";
import { FaStar, FaMapMarkerAlt, FaShareAlt, FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axiosInstance from "../AxiosConfig/instance";
import { useUser } from "../Context/UserContext";
import { useTranslation } from "react-i18next";
const UpperPart = ({ house, reviews }) => {
  return (
    <>
      <div className="text-left font-semibold text-xl lg:text-3xl">
        <p>{house.name}</p>
      </div>

      <div className="hidden md:flex justify-between items-center font-semibold mt-1 text-sm lg:text-xl">
        <div className="flex items-center justify-center space-x-2">
          {house.rate ? (
            <div className="fond-semibold flex gap-1">
              <span className="">
                <FaStar />
              </span>
              <p>{house.rate}</p>
            </div>
          ) : (
            <span>New</span>
          )}
          {reviews.lenght > 0 && (
            <p className="underline">{reviews.length} review</p>
          )}

          <span className="mb-3">
            {" "}
            <FaMapMarkerAlt />
          </span>
          <p className="font-normal">Superhost</p>
          <p className="underline">{house.address}</p>
        </div>

        <div className="flex items-center gap-5 mr-6">
          <div className="flex items-center gap-1 p-1 hover:bg-gray-100 cursor-pointer hover:rounded-md">
            <FaShareAlt />

            <p className="mb-1 underline">share</p>
          </div>
          <div className="flex items-center gap-1 p-1 hover:bg-gray-100 cursor-pointer hover:rounded-md">
            <FaHeart color="black" />

            <p className="mb-1 underline">
              <button>WishList!</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const HomeDetails = () => {
  const { t, i18n } = useTranslation();
  const { user } = useUser();
  const lanuguage = localStorage.getItem("selectedLanguage");

  const [house, setHouse] = useState({});
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const fetchdata = () => {
    axiosInstance
      .get(`/houses/${id}`)
      .then((res) => {
        setHouse(() => res.data.data.house);
        console.log(res.data.data.house);
        fetchReviews();
      })
      .catch(() => navigate(-1));
  };
  useEffect(() => {
    fetchdata();
  }, [id]);

  const fetchReviews = () => {
    axiosInstance
      .get(`/reviews/house/${id}/`)
      .then((res) => {
        setReviews(() => res.data.data.reviews);
        // console.log(res.data.data.rivews);
      })
      .catch(() => navigate(-1));
  };

  const deleteReview = (id) => {
    console.log(id);
    axiosInstance
      .delete(`/reviews/${id}`)
      .then((res) => {
        console.log(res);
        fetchReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    house && (
      <div
        className="p-2"
        style={lanuguage === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <div className="md:px-20 mt-9">
          <UpperPart house={house} reviews={reviews} />

          <div className="mt-5 ">
            <Photogrid images={house.images} />
          </div>

          <div className="">
            {Object.keys(house).length > 0 && <MiddleSection house={house} />}
          </div>

          <div className="w-full h-[1px] bg-gray-500 mt-24"></div>

          <div className="mt-10 p-2 ">
            {reviews.length > 0 && (
              <div className="flex items-center gap-2 text-xl font-semibold">
                <h1>
                  <span className="">
                    <FaStar size={20} />
                  </span>
                  {house.rate}
                </h1>
                <p> {reviews.length} reviews</p>
              </div>
            )}

            {house.rate && (
              <>
                <div className="mt-5">
                  <Review rate={house.rate} />
                </div>
                <div className="w-full h-[1px] bg-gray-500 mt-24"></div>
              </>
            )}

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2  md:gap-x-10">
              {reviews &&
                reviews.map((rev) => {
                  return (
                    <Comments
                      review={rev}
                      user={user}
                      deleteReview={deleteReview}
                    />
                  );
                })}
              {/* 
              <Comments />

              <Comments /> */}
            </div>

            {Object.keys(house).length > 0 && user && (
              <Rate
                id={house._id}
                fetchReviews={fetchReviews}
                reviews={reviews}
                fetchdata={fetchdata}
              />
            )}
            <div className="mt-9">
              <Line />
            </div>

            <div className="w-full p-0 md:p-8 mt-9 overflow-hidden">
              <h1 className="text-black text-xl font-semibold text-left">
                Where you’ll be
              </h1>
              <div className="mt-6">
                {Object.keys(house).length > 0 && <Maps house={house} />}
              </div>
            </div>

            <div className="text-left mt-3 flex flex-col gap-3">
              <p className="font-bold">{house.address}</p>
              <p>{house.description}</p>
              <p>
                The HATCH is directly on HIN KONG BEACH FRONT! Ocean views, on
                the beach - sandy feet very welcome!!
              </p>
              <p className="underline font-semibold">Show More</p>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <Footer />
        </div>
      </div>
    )
  );
};

export default HomeDetails;
