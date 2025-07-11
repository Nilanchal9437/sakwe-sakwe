import "./globals.css";
import "keen-slider/keen-slider.min.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Sakwe Sakwe",
  description: "Generated by Sakwe Sakwe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
