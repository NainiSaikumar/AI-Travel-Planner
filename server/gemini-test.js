require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testGemini() {
  try {
    console.log("API KEY:", process.env.GEMINI_API_KEY);

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const result = await model.generateContent(
      "Say Hello"
    );

    console.log("SUCCESS:");
    console.log(result.response.text());
  } catch (error) {
    console.log("GEMINI ERROR:");
    console.log(error);
  }
}

testGemini();