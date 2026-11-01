
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import type { Adapter } from "next-auth/adapters";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URL || "mongodb://localhost:27017/Social";
let clientPromise: Promise<MongoClient>;

if (process.env.MONGODB_URL) {
  const client = new MongoClient(uri);
  clientPromise = client.connect();
} else {
  clientPromise = new Promise(() => {});
}

export { clientPromise };

export function CustomMongoDBAdapter(): Adapter {
  return MongoDBAdapter(clientPromise, {
    databaseName: "Social",
    collections: {
      Users: "user",
      Accounts: "accounts",
      Sessions: "sessions",
      VerificationTokens: "verification_tokens",
    },
  });
}
