import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

export default async function AdminHomePage() {
  const user = await currentUser();
  
  const adminRoutes = [
    {
      title: "Manage News",
      description: "View, update, and delete news articles",
      href: "/admin/news",
    },
    {
      title: "Post News",
      description: "Create a new news article",
      href: "/admin/post/news",
    },
    {
      title: "Manage Programs",
      description: "View, update, and delete programs",
      href: "/admin/programs",
    },
    {
      title: "Post Program",
      description: "Create a new program",
      href: "/admin/post/programs",
    },
  ];

  return (
    <section className="p-6">
            <div className='py-2 px-4'>
      <h1 className='py2'>Hi {user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}` 
      : user?.firstName
        ? user.firstName 
        : user?.lastName 
          ? user.lastName 
          : "Admin"} 👋</h1>
      <h3 className='pt-2'>Welcome backe to the Admin Dashboard</h3>
      </div>
      <p className="text-gray-600 px-4 mb-6">
        Manage all admin resources from one place
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {adminRoutes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="border rounded-lg p-5 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-1">
              {route.title}
            </h2>
            <p className="text-sm text-gray-600">
              {route.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
