"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState("");
  const [budgetType, setBudgetType] = useState("Medium");
  const [interests, setInterests] = useState("");
  const [travelers, setTravelers] = useState("");
  const [itinerary, setItinerary] = useState("");

  const handleCreateTrip = async () => {
    try {
      const response = await fetch(
        "https://ai-travel-planner-jhd4.onrender.com/api/trips/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination,
            startDate,
            endDate,
            days,
            budgetType,
            interests: interests
              .split(",")
              .map((item) => item.trim()),
            travelers,
            itinerary,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Trip Creation Failed");
    }
  };

  const handleGenerateItinerary = async () => {
    try {
      const response = await fetch(
        "https://ai-travel-planner-jhd4.onrender.com/api/trips/generate-itinerary",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination,
            days,
            budgetType,
            interests,
            travelers,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setItinerary(data.itinerary);
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Your Trip
        </h1>

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="number"
          placeholder="Number of Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <select
          value={budgetType}
          onChange={(e) => setBudgetType(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        >
          <option value="Low">Low Budget</option>
          <option value="Medium">Medium Budget</option>
          <option value="High">High Budget</option>
        </select>

        <input
          type="text"
          placeholder="Interests (Adventure, Food, Nature)"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="number"
          placeholder="Number of Travelers"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          onClick={handleCreateTrip}
          className="w-full bg-blue-600 text-white p-3 rounded mb-3"
        >
          Create Trip
        </button>

        <button
          onClick={handleGenerateItinerary}
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Generate AI Itinerary
        </button>

        {itinerary && (
          <div className="mt-8 p-6 border rounded-lg bg-white shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              AI Travel Itinerary
            </h2>

            <pre className="whitespace-pre-wrap break-words text-gray-800 leading-8 overflow-auto">
              {itinerary}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}