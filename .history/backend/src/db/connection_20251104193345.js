import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URI, {
    dbName: "studentAssistant",
  });
  console.log("✅ Connected to MongoDB");
} catch (err) {
  console.error("❌ DB Connection Error:", err);
}

const db = mongoose.connection;

export default db;
