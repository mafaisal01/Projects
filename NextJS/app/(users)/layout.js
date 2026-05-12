import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <>
    {/* Navigation Component */}
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
