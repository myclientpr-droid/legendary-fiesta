import Link from "next/link";
import { auth } from "@/lib/config/auth";

export default async function AdminHomePage() {
  const session = await auth();
  
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
    {
      title: "Manage Academy",
      description: "View, update, and delete ASH Online Academy activities",
      href: "/admin/academy",
    },
    {
      title: "Post Academy Activity",
      description: "Create a new online academy activity post",
      href: "/admin/post/academy",
    },
    {
      title: "Manage Team",
      description: "View, update, and delete team members",
      href: "/admin/team",
    },
    {
      title: "Add Team Member",
      description: "Add a member with picture, name, position and social link",
      href: "/admin/post/team",
    },
  ];

  return (
    <section className="p-6">
            <div className='py-2 px-4'>
      <h1 className='py2'>Hi {session?.user?.name || "Admin"} 👋</h1>
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
