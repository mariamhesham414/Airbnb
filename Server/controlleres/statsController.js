const Reservation = require("../models/reservationModel");
const User = require("../models/userModel");
const House = require("../models/houseModel");
const Category = require("../models/categoryModel");
const Review = require("../models/reviewModel");

exports.getAllStats = async (req, res) => {
  try {
    const totalReservations = await Reservation.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalHouses = await House.countDocuments();
    const categories = await Category.find();
    const categoriesWithCounts = await Promise.all(
      categories.map(async (category) => {
        const count = await House.countDocuments({ category: category._id });
        return {
          category: category.name,
          count: count,
        };
      })
    );
    const mostReviewedHouses = await Review.aggregate([
      {
        $group: {
          _id: "$houseId",
          reviewCount: { $sum: 1 },
        },
      },
      {
        $sort: {
          reviewCount: -1,
        },
      },
      {
        $limit: 3,
      },
      {
        $lookup: {
          from: "houses",
          localField: "_id",
          foreignField: "_id",
          as: "house",
        },
      },
      {
        $unwind: "$house",
      },
      {
        $project: {
          houseId: "$house._id",
          name: "$house.name",
          reviewCount: 1,
        },
      },
    ]);

    const topRatedHouses = await House.aggregate([
      {
        $match: {
          rate: { $exists: true },
        },
      },
      {
        $sort: {
          rate: -1,
        },
      },
      {
        $limit: 3,
      },
    ]);

    const totalReservationPrice = await Reservation.aggregate([
      {
        $group: {
          _id: null,
          totalPrice: { $sum: "$price" },
        },
      },
    ]);

    const housesByRegion = await House.aggregate([
      {
        $group: {
          _id: "$region",
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      totalReservations: totalReservations,
      totalUsers: totalUsers,
      totalHouses: totalHouses,
      categories: categoriesWithCounts,
      mostReviewedHouses: mostReviewedHouses[0],
      topRatedHouses: topRatedHouses,
      totalReservationPrice: totalReservationPrice[0].totalPrice,
      housesByRegion: housesByRegion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
