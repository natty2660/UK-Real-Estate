import { useEffect, MouseEvent } from 'react';
import { PropertyImage } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: PropertyImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, images.length, onClose, onSelectIndex]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Property Image Gallery Lightbox"
      className="fixed inset-0 z-50 bg-[#141615]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-[#FDFCF7]"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close */}
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
        <div className="text-xs uppercase tracking-widest text-[#B89358] font-medium">
          Photograph {currentIndex + 1} of {images.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 bg-[#232726] hover:bg-[#343A37] text-[#FDFCF7] border border-[#3E4542] rounded-full transition-colors cursor-pointer"
          aria-label="Close Lightbox (Press Escape)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Stage with Large Image & Nav Chevrons */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-10 p-3 bg-[#1C1E1D]/80 hover:bg-[#1C1E1D] text-[#FDFCF7] border border-[#3E4542] rounded-full transition-colors cursor-pointer"
          aria-label="Previous image (Left Arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <div className="max-h-[75vh] max-w-full flex flex-col items-center justify-center">
          <img
            src={currentImage.url}
            alt={currentImage.alt || 'Property photograph'}
            className="max-h-[70vh] max-w-full object-contain shadow-2xl transition-opacity duration-300"
          />
          {currentImage.caption && (
            <p className="text-xs text-[#D5D1C6] text-center mt-3 font-light max-w-xl">
              {currentImage.caption}
            </p>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-10 p-3 bg-[#1C1E1D]/80 hover:bg-[#1C1E1D] text-[#FDFCF7] border border-[#3E4542] rounded-full transition-colors cursor-pointer"
          aria-label="Next image (Right Arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div
        className="max-w-4xl w-full mx-auto overflow-x-auto py-2 flex items-center justify-start sm:justify-center gap-2 px-2"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, idx) => (
          <button
            key={`thumb-${idx}`}
            onClick={() => onSelectIndex(idx)}
            className={`relative w-16 h-12 shrink-0 border overflow-hidden transition-all ${
              idx === currentIndex
                ? 'border-[#9E7D47] ring-1 ring-[#9E7D47] opacity-100 scale-105'
                : 'border-transparent opacity-50 hover:opacity-80'
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
