const express = require("express");

const {
  createTrip,
  getTrips,
  generateTripItinerary,
  deleteTrip,
  getTripById,
  updateTrip,
} = require("../controllers/tripController");

const router = express.Router();

router.post("/create", createTrip);

router.get("/", getTrips);

router.get("/:id", getTripById);

router.put("/:id", updateTrip);

router.post("/generate-itinerary", generateTripItinerary);

router.delete("/:id", deleteTrip);

module.exports = router;