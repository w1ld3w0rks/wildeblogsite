import EventCard from "./EventCard";
import type { SpeakingEvent } from "@/data/speakingData";

interface EventGridProps {
  events: SpeakingEvent[];
}

const EventGrid = ({ events }: EventGridProps) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="font-mono text-muted-foreground text-lg">
          No events found matching your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </div>
  );
};

export default EventGrid;
