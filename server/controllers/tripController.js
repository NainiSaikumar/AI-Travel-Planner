console.log("TRIP CONTROLLER FILE LOADED");

const Trip = require("../models/Trip");
const { generateItinerary } = require("../services/geminiService");

const createTrip = async (req, res) => {
  try {
    console.log("CREATE TRIP CALLED");

    const trip = await Trip.create(req.body);

    res.status(201).json({
      success: true,
      message: "Trip Created Successfully",
      trip,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      trips,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip Not Found",
      });
    }

    res.status(200).json({
      success: true,
      trip,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Trip Updated Successfully",
      trip,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const generateTripItinerary = async (req, res) => {
  try {
    console.log("TRIP CONTROLLER CALLED");

    const {
      destination,
      days,
      budgetType,
      interests,
      travelers,
    } = req.body;

    const itinerary = await generateItinerary(
      destination,
      days,
      budgetType,
      interests,
      travelers
    );

    res.status(200).json({
      success: true,
      itinerary,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip Not Found",
      });
    }

    await Trip.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Trip Deleted Successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTrip,
  getTrips,
  getTripById,
  updateTrip,
  generateTripItinerary,
  deleteTrip,
};