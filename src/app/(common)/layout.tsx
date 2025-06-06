import Navbar from "@/Layout/Navbar";
import Footer from "@/Layout/Footer";

export default function CommonLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      {modal}
      {/* <Footer /> */}
    </>
  );
}
