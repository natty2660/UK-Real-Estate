import { useState } from 'react';
import { Info, X, Download, Check } from 'lucide-react';
import { PROJECT_ZIP_BASE64, PROJECT_ZIP_FILENAME } from '../data/projectArchive';

export function DemonstrationBanner() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    try {
      const binaryString = atob(PROJECT_ZIP_BASE64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/zip' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = PROJECT_ZIP_FILENAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (err) {
      console.error('Download error:', err);
      window.open('/north-and-vale-property.zip', '_blank');
    }
  };

  if (isDismissed) return null;

  return (
    <div className="bg-[#1C1E1D] text-[#E8E5DD] text-xs px-4 py-2 border-b border-[#9E7D47]/30 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#9E7D47]/30 text-[#D5D1C6] text-[10px] font-semibold shrink-0">
            <Info className="w-3 h-3 text-[#B89358]" />
          </span>
          <p className="tracking-wide">
            <strong className="text-[#FDFCF7] font-medium">Portfolio Demonstration #3</strong> for <span className="text-[#B89358]">Zaza Digital</span> — Fictional London Estate &amp; Letting Agency.
          </p>
        </div>
        <div className="flex items-center gap-2.5 shrink-0 ml-auto">
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 bg-[#9E7D47] hover:bg-[#8A6C3B] text-white px-2.5 py-1 rounded text-[11px] font-semibold tracking-wider uppercase transition-colors shadow-xs cursor-pointer"
            title="Download full project source code as a ZIP archive"
          >
            {downloaded ? <Check className="w-3 h-3 text-white" /> : <Download className="w-3 h-3" />}
            <span>{downloaded ? 'Saved!' : 'Download ZIP'}</span>
          </button>
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
