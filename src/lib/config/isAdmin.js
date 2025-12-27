import { currentUser } from "@clerk/nextjs/server";

export const isAdmin = async () => {
  const user = await currentUser();
  if (!user) return false;

  const email = user.emailAddresses[0]?.emailAddress;
  const admins = process.env.ADMIN_EMAILS?.split(",") || [];

  return admins.includes(email);
};
