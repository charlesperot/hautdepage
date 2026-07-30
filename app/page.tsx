import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Author } from "@/components/Author";
import { Archive } from "@/components/Archive";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="pb-8">
        <Hero />
        <Benefits />
        <Author />
        <Archive />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
