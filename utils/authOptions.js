import GoogleProvider from "next-auth/providers/google";

import connectDb from "@/config/database";

import User from "@/models/User";

console.log(process.env.GOOGLE_CLIENT_ID);
console.log(process.env.GOOGLE_CLIENT_SECRET);
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful signin

    async signin({ profile }) {
      await connectDb();

      const userExists = await User.findOne({ email: profile.email });

      if (!userExists) {
        // Truncate user name if too long
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }

      return true;
    },

    // Modifies the session object

    async session({ session }) {
      const user = await User.findOne({ email: session.user.email });

      session.user.id = user._id.toString();

      return session;
    },
  },
};
