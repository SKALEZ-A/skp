import Image from "next/image";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-5xl xl:max-w-5xl md:container">
      <Hero />
    </div>
  );
}
