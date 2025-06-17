import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import BestSellingProducts from "@/components/BestSellingProducts";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import "./globals.css"; // relative path from /app folder


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <Header />
        <HeroSection />
        <BestSellingProducts />
         <FAQSection />
          <Footer />
        {children}
      </body>
    </html>
  );
}
