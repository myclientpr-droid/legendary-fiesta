import { ToastContainer } from 'react-toastify';
export default function AdminLayout({children}) {
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