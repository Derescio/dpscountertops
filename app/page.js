import Approach from "@/components/Approach";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Projects from "@/components/Projects";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Hero />
     
      <Projects />
      <Offers />
      <Approach />
      <Slider />
    </div>
  );
}