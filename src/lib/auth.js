import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.DB_NAME);

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL, //!this line is newly added
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  user: {
    additionalFields: {
      role: {
        defaultValue: "attendee",
      },
      isBlocked: {
        defaultValue: false,
      },

      isPremium: {
        defaultValue: false,
      },
    },
  },
});
