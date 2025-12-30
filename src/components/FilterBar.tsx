interface FilterBarProps {
  years: string[];
  organizations: string[];
  selectedYear: string;
  selectedOrg: string;
  onYearChange: (year: string) => void;
  onOrgChange: (org: string) => void;
}

const FilterBar = ({
  years,
  organizations,
  selectedYear,
  selectedOrg,
  onYearChange,
  onOrgChange,
}: FilterBarProps) => {
  return (
    <div className="comic-card max-w-5xl mx-auto p-6 rounded-lg mb-8">
      {/* Year filter */}
      <div className="mb-4">
        <span className="font-bebas text-lg tracking-wider mr-4">FILTER BY YEAR:</span>
        <div className="inline-flex flex-wrap gap-2 mt-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={`filter-btn rounded-md ${
                selectedYear === year ? "filter-btn-active" : "filter-btn-inactive"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Organization filter */}
      <div>
        <span className="font-bebas text-lg tracking-wider mr-4">FILTER BY NAME:</span>
        <div className="inline-flex flex-wrap gap-2 mt-2">
          {organizations.slice(0, 12).map((org) => (
            <button
              key={org}
              onClick={() => onOrgChange(org)}
              className={`filter-btn rounded-md text-sm ${
                selectedOrg === org ? "filter-btn-active" : "filter-btn-inactive"
              }`}
            >
              {org.length > 15 ? `${org.substring(0, 12)}...` : org}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
