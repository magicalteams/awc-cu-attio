import { Hero } from "@/components/Hero";
import { ByTheNumbers } from "@/components/ByTheNumbers";
import { BenefitCardGrid } from "@/components/BenefitCardGrid";
import { DataInsights } from "@/components/DataInsights";
import { TrackSections } from "@/components/TrackSection";
import { OutstandingSection } from "@/components/OutstandingSection";
import { Footer } from "@/components/Footer";
import { StickyNav } from "@/components/StickyNav";

import { heroCards } from "@/content/hero";
import { tracks } from "@/content/tracks";
import { items } from "@/content/items";
import { outstandingItems } from "@/content/outstanding";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <Hero />
      <ByTheNumbers />
      <BenefitCardGrid cards={heroCards} items={items} />
      <DataInsights />
      <TrackSections tracks={tracks} items={items} />
      <OutstandingSection items={outstandingItems} />
      <Footer />
    </main>
  );
}
