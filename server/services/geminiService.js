console.log("NEW GEMINI SERVICE LOADED");

const generateItinerary = async (
  destination,
  days,
  budgetType,
  interests,
  travelers
) => {
  console.log("GEMINI FUNCTION CALLED");

  let hotelCost = "₹2000";
  let totalBudget = "₹15000";

  if (budgetType === "Medium") {
    hotelCost = "₹4000";
    totalBudget = "₹30000";
  }

  if (budgetType === "High") {
    hotelCost = "₹8000";
    totalBudget = "₹60000";
  }

  return `
🌍 Trip to ${destination}

📅 Number of Days: ${days}
💰 Budget Type: ${budgetType}
👥 Travelers: ${travelers}

🎯 Interests:
${interests}

================================

📍 Day 1
• Visit famous tourist attractions
• Explore local culture
• Photography and sightseeing

📍 Day 2
• Food street exploration
• Shopping centers
• Cultural experiences

📍 Day 3
• Relaxation
• Local experiences
• Evening city tour

================================

🏨 HOTEL RECOMMENDATIONS

1. Budget Hotel
⭐ Rating: 4.2
💵 Cost Per Night: ${hotelCost}

2. Premium Resort
⭐ Rating: 4.7
💵 Cost Per Night: ₹7000

3. Family Stay
⭐ Rating: 4.5
💵 Cost Per Night: ₹5000

================================

💰 BUDGET BREAKDOWN

🚕 Transport: ₹5000
🍔 Food: ₹4000
🏨 Accommodation: ₹6000
🎟 Activities: ₹3000

💵 Total Estimated Budget:
${totalBudget}

================================

🧳 PACKING CHECKLIST

☑ Passport / ID Proof
☑ Mobile Charger
☑ Power Bank
☑ Clothes
☑ Medicines
☑ Water Bottle
☑ Camera

================================

🌦 WEATHER SUGGESTIONS

• Check weather before travel
• Carry umbrella if rain expected
• Carry sunscreen for summer
• Carry jackets for cold places

================================

🧳 TRAVEL TIPS

• Book hotels in advance
• Keep emergency contacts handy
• Carry valid ID proof
• Keep extra cash for emergencies

✅ Have a Safe Journey!
`;
};

module.exports = {
  generateItinerary,
};