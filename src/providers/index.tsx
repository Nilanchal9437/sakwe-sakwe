"use client";

import { ToastContainer } from "react-toastify";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}

export default Providers;
