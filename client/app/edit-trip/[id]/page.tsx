"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditTripPage() {
  const params = useParams();
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budgetType, setBudgetType] = useState("Medium");
  const [travelers, setTravelers] = useState("");

  useEffect(() => {
    fetchTrip();
  }, []);

  const fetchTrip = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/trips/${params.id}`
      );

      const data = await response.json();

      if (data.success) {
        setDestination(data.trip.destination || "");
        setDays(data.trip.days || "");
        setBudgetType(data.trip.budgetType || "Medium");
        setTravelers(data.trip.travelers || "");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTrip = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/trips/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination,
            days,
            budgetType,
            travelers,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      router.push("/my-trips");
    } catch (error) {
      console.error(error);
      alert("Failed to update trip");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Edit Trip
        </h1>

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="number"
          placeholder="Days"
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
          type="number"
          placeholder="Travelers"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          onClick={handleUpdateTrip}
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          SAVE CHANGES
        </button>
      </div>
    </main>
  );
}