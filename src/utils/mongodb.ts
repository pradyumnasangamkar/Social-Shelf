import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL || "mongodb://localhost:27017/Social";
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else if (process.env.MONGODB_URL) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
} else {
  clientPromise = new Promise(() => {});
}

export default clientPromise;
