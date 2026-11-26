import { redirect } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import { auth } from "@/lib/config/auth";
  
export default async function AdminLayout({children}) {
  const session = await auth();

  // Signed out: send them to the custom login page, back to /admin afterwards
  if (!session?.user) {
    redirect("/login?callbackUrl=/admin");
  }

  // Signed in, but not on the ADMIN_EMAILS allowlist
  if (!session.user.isAdmin) {
    return (
  <p className="section-padding container-custom font-semibold text-xl text-red-500">
    Access denied. This section is restricted to authorized administrators only.
  </p>
);
  }
  
  return (
    <div>
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"/>
          {children}
          </div>
    )
}