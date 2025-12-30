import { ExternalLink } from "lucide-react";
import type { SpeakingEvent } from "@/data/speakingData";

interface EventCardProps {
  event: SpeakingEvent;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <article
      className="event-card animate-slide-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Organization badge */}
      <span className="badge-coral text-xs mb-3 inline-block">
        {event.organization}
      </span>

      {/* Title */}
      <h3 className="font-bebas text-xl md:text-2xl tracking-wide mb-2 text-foreground">
        {event.title}
      </h3>

      {/* Description */}
      <p className="font-mono text-sm text-muted-foreground mb-4">
        {event.description}
      </p>

      {/* Year and link */}
      <div className="flex items-center justify-between">
        <span className="badge-yellow text-sm">{event.year}</span>
        
        {event.readMoreLink && (
          <a
            href={event.readMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-sm text-primary hover:underline"
          >
            Read More <ExternalLink className="w-4 h-4" />
          </a>
        )}
        
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-sm text-primary hover:underline"
          >
            Watch <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
};

export default EventCard;
