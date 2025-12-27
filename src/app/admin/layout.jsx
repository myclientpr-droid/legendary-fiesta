import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ToastContainer } from 'react-toastify';

const ADMIN_EMAILS = process.env.ADMIN_EMAILS.split(",");
  
export default async function AdminLayout({children}) {
   // Get the full user object with email
  const user = await currentUser();
  
  const email = user?.emailAddresses[0]?.emailAddress

  if (!ADMIN_EMAILS.includes(email)) {
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