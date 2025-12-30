import { useState, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import TabNavigation from "@/components/TabNavigation";
import SectionHeader from "@/components/SectionHeader";
import FilterBar from "@/components/FilterBar";
import EventGrid from "@/components/EventGrid";
import {
  conferences,
  podcasts,
  publications,
  volunteering,
  television,
  years,
  allOrganizations,
} from "@/data/speakingData";

const sectionTitles: Record<string, string> = {
  conferences: "CONFERENCE & EVENTS TALKS",
  podcasts: "PODCAST APPEARANCES",
  publications: "PUBLICATIONS",
  volunteering: "VOLUNTEERING EXPERIENCE",
  television: "TELEVISION APPEARANCES",
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("conferences");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedOrg, setSelectedOrg] = useState("All");

  // Get events based on active tab
  const currentEvents = useMemo(() => {
    switch (activeTab) {
      case "conferences":
        return conferences;
      case "podcasts":
        return podcasts;
      case "publications":
        return publications;
      case "volunteering":
        return volunteering;
      case "television":
        return television;
      default:
        return conferences;
    }
  }, [activeTab]);

  // Get unique organizations for current tab
  const currentOrganizations = useMemo(() => {
    const orgs = new Set(currentEvents.map((e) => e.organization));
    return ["All", ...Array.from(orgs).sort()];
  }, [currentEvents]);

  // Filter events
  const filteredEvents = useMemo(() => {
    return currentEvents.filter((event) => {
      const yearMatch =
        selectedYear === "All" || event.year.toString() === selectedYear;
      const orgMatch =
        selectedOrg === "All" || event.organization === selectedOrg;
      return yearMatch && orgMatch;
    });
  }, [currentEvents, selectedYear, selectedOrg]);

  // Reset filters when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedYear("All");
    setSelectedOrg("All");
  };

  return (
    <main className="min-h-screen dotted-bg">
      {/* Hero Section */}
      <HeroSection />

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Section Header */}
      <SectionHeader title={sectionTitles[activeTab]} />

      {/* Filter Bar */}
      <div className="px-4 py-6">
        <FilterBar
          years={years}
          organizations={currentOrganizations}
          selectedYear={selectedYear}
          selectedOrg={selectedOrg}
          onYearChange={setSelectedYear}
          onOrgChange={setSelectedOrg}
        />
      </div>

      {/* Events Grid */}
      <section className="pb-16">
        <EventGrid events={filteredEvents} />
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t-4 border-foreground bg-card">
        <p className="font-mono text-sm text-muted-foreground">
          © 2025 Wildew3rks - All Rights Reserved
        </p>
      </footer>
    </main>
  );
};

export default Index;
