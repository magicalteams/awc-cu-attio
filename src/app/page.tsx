import { Hero } from "@/components/Hero";
import { ByTheNumbers } from "@/components/ByTheNumbers";
import { TimelineSection } from "@/components/TimelineSection";
import { WhatYouAskedFor } from "@/components/WhatYouAskedFor";
import { BenefitCardGrid } from "@/components/BenefitCardGrid";
import { DataInsights } from "@/components/DataInsights";
import { TrackSections } from "@/components/TrackSection";
import { Scenarios } from "@/components/Scenarios";
import { OutstandingSection } from "@/components/OutstandingSection";
import { BlockedByPlatform } from "@/components/BlockedByPlatform";
import { DeferredSection } from "@/components/DeferredSection";
import { MaintenanceSection } from "@/components/MaintenanceSection";
import { Footer } from "@/components/Footer";
import { StickyNav } from "@/components/StickyNav";

import { heroCards } from "@/content/hero";
import { tracks } from "@/content/tracks";
import { items } from "@/content/items";
import { outstandingItems } from "@/content/outstanding";
import { clientAsks } from "@/content/what-you-asked-for";
import { scenarios } from "@/content/scenarios";
import { deferredItems } from "@/content/deferred";
import { blockedItems } from "@/content/blocked-by-platform";
import { timelineEntries } from "@/content/timeline";
import { maintenanceTopics } from "@/content/maintenance";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <Hero />
      <ByTheNumbers />
      <TimelineSection entries={timelineEntries} />
      <WhatYouAskedFor items={clientAsks} />
      <BenefitCardGrid cards={heroCards} items={items} />
      <DataInsights />
      <TrackSections tracks={tracks} items={items} />
      <Scenarios items={scenarios} />
      <OutstandingSection items={outstandingItems} />
      <BlockedByPlatform items={blockedItems} />
      <DeferredSection items={deferredItems} />
      <MaintenanceSection topics={maintenanceTopics} />
      <Footer />
    </main>
  );
}
