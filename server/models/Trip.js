const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    destination: {
      type: String,
      required: true,
    },

    startDate: {
      type: String,
    },

    endDate: {
      type: String,
    },

    days: {
      type: Number,
    },

    budgetType: {
      type: String,
      enum: ["Low", "Medium", "High"],
    },

    interests: {
      type: [String],
      default: [],
    },

    travelers: {
      type: Number,
    },

    itinerary: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trip", tripSchema);