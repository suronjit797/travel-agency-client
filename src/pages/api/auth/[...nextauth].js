import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch("http://localhost:5000/api/v1/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
          });

          const data = await response.json();

          if (data.success) {
            const { data: user } = await axios.get("http://localhost:5000/api/v1/users", {
              headers: { Authorization: data.data?.accessToken },
            });

            if (user.success) {
              return {
                ...user.data,
                accessToken: data?.data?.accessToken,
              };
            } else {
              return null;
            }
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: { jwt: true },
  jwt: { secret: process.env.JWT_SECRET },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    // async session({ session, token, user }) {
    async session(session, token, user) {
      session.user = token;

      return session;
    },
  },
});
