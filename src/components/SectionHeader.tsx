interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="text-center py-6">
      <h2 className="section-title text-4xl md:text-5xl text-foreground inline-block px-8 py-2 bg-accent border-4 border-foreground rounded-lg">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
