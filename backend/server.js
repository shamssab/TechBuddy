import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const PORT = 4000;
const mongoURL = "mongodb://localhost:27017";
const dbName = "techBuddy";

// Connect to MongoDB
let db;

async function connectToMongo() {
  const client = new MongoClient(mongoURL);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    db = client.db(dbName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongo();

// Open Port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

// Collections to manage
const COLLECTIONS = {
    tips: "tips",
  };

// Get all tips available
app.get("/getAllTips", express.json(), async (req, res) => {
    try {
      // Find tips
      const collection = db.collection(COLLECTIONS.tips);
      const data = await collection.find().toArray();
      res.json({ response: data });
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  })

// Post a tip
app.post("/postTip", express.json(), async (req, res) => {
    try {
      // Basic body request check
      const { title, content } = req.body;
      if (!title || !content) {
        return res
          .status(400)
          .json({ error: "Title and content are both required." });
      }
        // Send tip to database
        const collection = db.collection(COLLECTIONS.tips);
        const result = await collection.insertOne({
            title,
            content
        });
        res.json({
            response: "Note added succesfully.",
            insertedId: result.insertedId,
        });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });