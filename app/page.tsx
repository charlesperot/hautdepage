import { Hero } from "@/components/Hero";
import { TopicsMarquee } from "@/components/TopicsMarquee";
import { FactsStrip } from "@/components/FactsStrip";
import { Benefits } from "@/components/Benefits";
import { BeforeAfter } from "@/components/BeforeAfter";
import { SampleIssue } from "@/components/SampleIssue";
import { ForWhom } from "@/components/ForWhom";
import { Author } from "@/components/Author";
import { Archive } from "@/components/Archive";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TopicsMarquee />
        <FactsStrip />
        <Benefits />
        <BeforeAfter />
        <SampleIssue />
        <ForWhom />
        <Author />
        <Archive />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
