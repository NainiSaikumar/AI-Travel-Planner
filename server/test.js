require("dotenv").config();

const { MongoClient } = require("mongodb");

const uri =
  "mongodb://nainisaikumar75_db_user:wAczjiKyZzM1Vf1T@" +
  "ac-bwdwsjk-shard-00-00.n3p61l1.mongodb.net:27017," +
  "ac-bwdwsjk-shard-00-01.n3p61l1.mongodb.net:27017," +
  "ac-bwdwsjk-shard-00-02.n3p61l1.mongodb.net:27017/" +
  "travelplanner?ssl=true&replicaSet=atlas-4d7jmk-shard-0&authSource=admin&retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function testConnection() {
  try {
    await client.connect();
    console.log("MongoDB Connected Successfully!");
    await client.close();
  } catch (error) {
    console.log("Connection Error:", error);
  }
}

testConnection();