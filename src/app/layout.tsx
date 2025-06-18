import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import BestSellingProducts from "@/components/BestSellingProducts";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhyOurProducts from "@/components/WhyOurProducts";
import FeelBeautifulSection from "@/components/FeelBeautifulSection";
import "./globals.css"; // relative path from /app folder


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <Header />
        <HeroSection />
        <WhyOurProducts />
        <BestSellingProducts />
        <FeelBeautifulSection />
         <FAQSection />
          <Footer />
        {children}
      </body>
    </html>
  );
}
