const express = require("express");
const router = express.Router();
const reservationController = require("./../controlleres/reservationController");
const authController = require("./../controlleres/authController");

router.get("/success", reservationController.createReservation);
router.get("/stats", reservationController.stats);
router.use(authController.protect);

router.delete("/:id", reservationController.deleteReservation);
router.get("/me", reservationController.getMyReservations);
router.post("/", reservationController.payment);

router.use(authController.restrictTo("admin"));

router.get("/user/:id", reservationController.getReservationsByUserId);
router.get("/house/:id", reservationController.getReservationsByHouseId);
router.get("/", reservationController.getAllReservations);

module.exports = router;
