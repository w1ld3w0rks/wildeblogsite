import { Github, Monitor } from "lucide-react";

const badges = [
  { text: "Founder & Lead Security Consultant (OffSecNoose)", variant: "coral" },
  { text: "BugCrowd Bench Security Researcher | Freelance Penetration Tester", variant: "coral" },
  { text: "#1 HackerOne Up & Comer Q4 2025", variant: "yellow", icon: "🏆" },
  { text: "BugCrowd Hacker Advisory Board Member", variant: "cyan" },
  { text: "Caido Hacker Ambassador", variant: "coral" },
  { text: "AI Native LLM Security Book Author", variant: "coral" },
  { text: "OWASP GenAI Security & LLM Applications Board Member and Technical Lead", variant: "coral" },
  { text: "OWASP Toronto Chapter Lead", variant: "coral" },
];

const HeroSection = () => {
  return (
    <section className="relative py-12 px-4">
      {/* Main hero card */}
      <div className="max-w-5xl mx-auto comic-card bg-card p-8 md:p-12 rounded-lg relative">
        {/* GitHub icon */}
        <a
          href="https://github.com/GangGreenTemperTatum"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 p-3 bg-foreground text-background rounded-full hover:scale-110 transition-transform"
        >
          <Github className="w-6 h-6" />
        </a>

        {/* Name */}
        <h1 className="hero-title text-6xl md:text-8xl text-secondary text-center mb-4">
          W1ld3F0x
        </h1>

        {/* Subtitle */}
        <h2 className="font-bebas text-2xl md:text-3xl text-secondary text-center tracking-wider mb-8">
          Network Engineer and IT Specialist
        </h2>

        {/* Badges grid */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {badges.map((badge, index) => {
            const variantClasses = {
              coral: "badge-coral",
              yellow: "badge-yellow",
              cyan: "badge-cyan",
            };
            return (
              <span
                key={index}
                className={`${variantClasses[badge.variant as keyof typeof variantClasses]} text-xs md:text-sm animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {badge.icon && <span className="mr-1">{badge.icon}</span>}
                {badge.text}
              </span>
            );
          })}
        </div>

        {/* Speech bubble tagline */}
        <div className="speech-bubble max-w-3xl mx-auto text-center mb-12">
          <p className="font-mono text-foreground text-sm md:text-base">
            Breaking apps for fun and profit, jailbreaking AI, and teaching the world how to hack responsibly.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://ganggreentempertatum.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <Monitor className="w-5 h-5" />
            VIEW TECH PORTFOLIO
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
