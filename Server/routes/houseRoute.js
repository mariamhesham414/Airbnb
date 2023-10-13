const express = require("express");
const router = express.Router();
const houseController = require("../controlleres/houseController");
const authController = require("../controlleres/authController");

const protectAdminRoutes = [
  authController.protect,
  authController.restrictTo("admin"),
];
const House = require("../models/houseModel");
router.get("/search", async (req, res) => {
  try {
    const { name, minPrice, maxPrice, minRooms, maxRooms, region } = req.query;

    const query = {};

    if (name) {
      query.name = new RegExp(name, "i");
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseInt(minPrice);
      if (maxPrice) query.price.$lte = parseInt(maxPrice);
    }

    if (minRooms || maxRooms) {
      query.numberOfRooms = {};
      if (minRooms) query.numberOfRooms.$gte = parseInt(minRooms);
      if (maxRooms) query.numberOfRooms.$lte = parseInt(maxRooms);
    }

    if (region) {
      query.region = region; // Add region as a search parameter
    }

    const houses = await House.find(query).populate("category");

    res.json({ houses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router
  .route("/")
  .get(houseController.getAllHouses)
  .post(
    ...protectAdminRoutes,
    houseController.uploadHouseImages,
    houseController.resizeHouseImages,
    houseController.createHouse
  );

router
  .route("/:id")
  .get(houseController.getHouse)
  .patch(...protectAdminRoutes, houseController.updateHouse)
  .delete(...protectAdminRoutes, houseController.deleteHouse);

router.route("/category/:Id").get(houseController.getHousesByCategory);
module.exports = router;
