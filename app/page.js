import BestSelling from "@/components/Home/BestSelling";
import Categories from "@/components/Home/Categories";
import ExploreProducts from "@/components/Home/ExploreProducts";
import FlashSales from "@/components/Home/FlashSale";
import HeroSection from "@/components/Home/HeroSection";
import MiddleBanner from "@/components/Home/MiddleBanner";
import NewArrival from "@/components/Home/NewArrival";
import ServiceFeatures from "@/components/Home/ServicesFeatures";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col gap-10">
      <HeroSection />
      <FlashSales />
      <Categories />
      <BestSelling />
      <MiddleBanner />
      <ExploreProducts />
      <NewArrival />
      <ServiceFeatures />
    </div>
  );
}
