import { auth } from "@/lib/config/auth";

// The ADMIN_EMAILS allowlist is evaluated into session.user.isAdmin by the
// NextAuth session callback, so every caller shares one source of truth.
export const isAdmin = async () => {
  const session = await auth();

  return !!session?.user?.isAdmin;
};
