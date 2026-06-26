import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      {/* Main Layout */}
      <Navbar></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
}
