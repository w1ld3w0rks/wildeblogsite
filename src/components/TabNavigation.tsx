import { Mic, Podcast, FileText, Heart, Tv } from "lucide-react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "conferences", label: "Conferences", icon: Mic },
  { id: "podcasts", label: "Podcasts", icon: Podcast },
  { id: "publications", label: "Publications", icon: FileText },
  { id: "volunteering", label: "Volunteering", icon: Heart },
  { id: "television", label: "Television", icon: Tv },
];

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <nav className="flex flex-wrap justify-center gap-3 px-4 py-8">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`tab-btn rounded-lg ${
              isActive ? "tab-btn-active" : "tab-btn-inactive"
            }`}
          >
            <Icon className="w-5 h-5" />
            {tab.label.toUpperCase()}
          </button>
        );
      })}
    </nav>
  );
};

export default TabNavigation;
