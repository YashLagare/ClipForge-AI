interface ResultTabsProps {
  activeTab: 'preview' | 'details' | 'analytics';
  onTabChange: (tab: 'preview' | 'details' | 'analytics') => void;
}

/**
 * Tab navigation for result page
 */
export const ResultTabs = ({ activeTab, onTabChange }: ResultTabsProps) => {
  const tabs = [
    { id: 'preview' as const, label: 'Preview' },
    { id: 'details' as const, label: 'Details' },
    { id: 'analytics' as const, label: 'Analytics' },
  ];

  return (
    <div className="flex items-center gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === tab.id
              ? 'bg-indigo-500/20 text-indigo-400'
              : 'hover:bg-white/5'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
