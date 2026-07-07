import Hero from "@/components/sections/Hero";
import Treatment from "@/components/sections/Treatment";
import IMCCalculator from "@/components/sections/IMCCalculator";

export default function Home() {
  return (
    <main>
      <Hero />
      <Treatment />
      <IMCCalculator />
    </main>
  );
}