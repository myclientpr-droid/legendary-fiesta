import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/config/db";
import User from "@/lib/models/UserModel";

// The list of emails allowed to reach /admin and the write API routes.
// Read inside the callbacks so edits to ADMIN_EMAILS apply without a rebuild.
const adminEmails = () =>
  (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

export const { handlers, auth, signIn, signOut } = NextAuth({
  // A credentials provider cannot use database sessions
  session: { strategy: "jwt" },
  trustHost: true,
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;

        if (!email || !password) return null;

        await connectDB();
        const user = await User.findOne({ email }).select("+passwordHash").lean();
        if (!user) return null;

        const passwordMatches = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatches) return null;

        return {
          id: String(user._id),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    // Runs on every session read, so isAdmin always reflects the current allowlist
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
        session.user.name = token.name;
        session.user.email = token.email ?? null;
        session.user.isAdmin = !!token.email && adminEmails().includes(token.email);
      }
      return session;
    },
  },
});
