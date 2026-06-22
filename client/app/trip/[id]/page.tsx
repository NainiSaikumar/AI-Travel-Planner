"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function TripDetailsPage() {
  const [trip, setTrip] = useState<any>(null);

  const params = useParams();
  const tripId = params.id;

  useEffect(() => {
    if (tripId) {
      fetchTrip();
    }
  }, [tripId]);

  const fetchTrip = async () => {
    try {
      const response = await fetch(
  `https://ai-travel-planner-jhd4.onrender.com/api/trips/${tripId}`
);

      const data = await response.json();

      if (data.success) {
        setTrip(data.trip);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!trip) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          {trip.destination}
        </h1>

        <p>
          <strong>Start Date:</strong> {trip.startDate}
        </p>

        <p>
          <strong>End Date:</strong> {trip.endDate}
        </p>

        <p>
          <strong>Days:</strong> {trip.days || "N/A"}
        </p>

        <p>
          <strong>Budget Type:</strong>{" "}
          {trip.budgetType || "N/A"}
        </p>

        <p>
          <strong>Travelers:</strong>{" "}
          {trip.travelers || "N/A"}
        </p>

        <p>
          <strong>Interests:</strong>{" "}
          {trip.interests?.join(", ") ||
            trip.interests ||
            "N/A"}
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-3">
            Travel Itinerary
          </h2>

          <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-lg overflow-auto">
            {trip.itinerary || "No itinerary available"}
          </pre>
        </div>
      </div>
    </main>
  );
}