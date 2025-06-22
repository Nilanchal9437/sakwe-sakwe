"use client";

import { ToastContainer } from "react-toastify";
import { LoaderProvider } from "@/context/LoaderContext";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoaderProvider>{children}</LoaderProvider>
      <ToastContainer />
    </>
  );
}

export default Providers;
