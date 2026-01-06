import { Github, Monitor } from "lucide-react";

const badges = [
  { text: "Founder & Lead Security Consultant (WildeW3rks)", variant: "coral" },
  { text: "BugCrowd Security Researcher | Freelance Penetration Tester", variant: "coral" },
  { text: "HackerOne", variant: "yellow", icon: "🏆" },
];

const HeroSection = () => {
  return (
    <section className="relative py-12 px-4">
      {/* Main hero card */}
      <div className="max-w-5xl mx-auto comic-card bg-card p-8 md:p-12 rounded-lg relative">
        {/* GitHub icon */}
        <a
          href="https://github.com/w1ld3w0rks"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 p-3 bg-foreground text-background rounded-full hover:scale-110 transition-transform"
        >
          <Github className="w-6 h-6" />
        </a>

        {/* Name */}
        <h1 className="font-orbitron text-6xl md:text-8xl text-secondary text-center mb-4 font-bold tracking-wider">
          W1LD3F0X
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
            Breaking networks, modeling threats, and making attackers work harder than it's worth.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://wildew3rks.com"
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
