import Link from "next/link";

const AdminHomePage = () => {
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
      <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">
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

export default AdminHomePage;