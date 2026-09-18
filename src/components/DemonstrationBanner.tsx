import { useState } from 'react';
import { Info, X } from 'lucide-react';

export function DemonstrationBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-[#1C1E1D] text-[#E8E5DD] text-xs px-4 py-2 border-b border-[#9E7D47]/30 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#9E7D47]/30 text-[#D5D1C6] text-[10px] font-semibold shrink-0">
            <Info className="w-3 h-3 text-[#B89358]" />
          </span>
          <p className="tracking-wide">
            <strong className="text-[#FDFCF7] font-medium">Portfolio Demonstration #3</strong> for <span className="text-[#B89358]">Zaza Digital</span> — Fictional London Estate &amp; Letting Agency. All listings and team details are illustrative demonstrations.
          </p>
        </div>
        <div className="flex items-center gap-2.5 shrink-0 ml-auto">
          <button
            onClick={() => setIsDismissed(true)}
            className="text-[#B8B2A4] hover:text-[#FDFCF7] p-1 transition-colors cursor-pointer"
            aria-label="Dismiss portfolio demonstration notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}