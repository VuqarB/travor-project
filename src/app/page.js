import Destinations from "@/components/Destinations";
import Offers from "@/components/Offers";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";
import Discount from "@/components/Discount";
import Testimonals from "@/components/Testimonals";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <>
      <Hero />
      <Services padding='py-[60px] md:py-[80px] cLg:py-[100px] xl:py-[120px]' />
      <Destinations />
      <Welcome />
      <Packages />
      <Discount />
      <Offers />
      <Testimonals />
      <Newsletter />
    </>
  );
}
