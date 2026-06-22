"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyTripsPage() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/trips"
      );

      const data = await response.json();

      setTrips(data.trips);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTrip = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/trips/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      alert(data.message);

      fetchTrips();
    } catch (error) {
      console.error(error);
      alert("Failed to delete trip");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          My Trips
        </h1>

        {trips.length === 0 ? (
          <p className="text-center text-gray-500">
            No Trips Found
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {trips.map((trip: any) => (
              <div
                key={trip._id}
                className="bg-white p-6 rounded-lg shadow-lg border flex flex-col"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-600">
                  {trip.destination}
                </h2>

                <p>
                  <strong>Start Date:</strong>{" "}
                  {trip.startDate || "N/A"}
                </p>

                <p>
                  <strong>End Date:</strong>{" "}
                  {trip.endDate || "N/A"}
                </p>

                <p>
                  <strong>Days:</strong>{" "}
                  {trip.days || "N/A"}
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

                {trip.itinerary && (
                  <div className="mt-4">
                    <h3 className="font-bold mb-2">
                      Itinerary
                    </h3>

                    <div className="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap max-h-40 overflow-auto">
                      {trip.itinerary}
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <Link href={`/trip/${trip._id}`}>
                    <button
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      VIEW DETAILS
                    </button>
                  </Link>

                  <Link href={`/edit-trip/${trip._id}`}>
                    <button
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      EDIT TRIP
                    </button>
                  </Link>

                  <button
                    onClick={() =>
                      handleDeleteTrip(trip._id)
                    }
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    DELETE TRIP
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}