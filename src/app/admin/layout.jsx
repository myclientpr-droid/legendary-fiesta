import { redirect } from "next/navigation";
import { ToastContainer } from 'react-toastify';


export const metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};
  
export default async function AdminLayout({children}) {
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