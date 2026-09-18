import React, { useState } from 'react';
import { Property, ViewingFormData } from '../types';
import { X, Calendar, Clock, CheckCircle2, Phone, Mail } from 'lucide-react';

interface RequestViewingModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

export function RequestViewingModal({
  property,
  isOpen,
  onClose
}: RequestViewingModalProps) {
  const [formData, setFormData] = useState<ViewingFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 – 12:00)',
    buyerStatus: property.listingType === 'rent' ? 'Tenant seeking home' : 'Existing homeowner looking to sell',
    message: `I would like to arrange an accompanied viewing for ${property.title} in ${property.location.area}.`
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Handle Escape key
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `NV-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="viewing-modal-title"
      className="fixed inset-0 z-50 bg-[#141615]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FDFCF7] border border-[#E8E5DD] max-w-lg w-full p-5 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200 my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-[#78766E] hover:text-[#1C1E1D] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#4E5D52]/10 border border-[#4E5D52]/30 rounded-full flex items-center justify-center mx-auto text-[#4E5D52]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#9E7D47] font-semibold">
                Viewing Request Received
              </span>
              <h2 id="viewing-modal-title" className="font-serif text-2xl font-normal text-[#1C1E1D] mt-1">
                Thank you, {formData.fullName}.
              </h2>
            </div>

            <p className="text-xs text-[#5A5955] leading-relaxed max-w-md mx-auto">
              Our prime residential team has registered your viewing request for <strong className="text-[#1C1E1D]">{property.title}</strong> on <span className="font-medium text-[#1C1E1D]">{formData.preferredDate || 'your selected date'}</span>.
            </p>

            <div className="p-4 bg-[#F4F2EB] border border-[#E8E5DD] text-left text-xs space-y-1.5 my-4">
              <div className="flex justify-between">
                <span className="text-[#78766E]">Reference:</span>
                <span className="font-mono font-medium text-[#1C1E1D]">{referenceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78766E]">Property:</span>
                <span className="text-[#1C1E1D] font-medium truncate max-w-[240px]">{property.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78766E]">Contact:</span>
                <span className="text-[#1C1E1D]">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78766E]">Slot:</span>
                <span className="text-[#1C1E1D]">{formData.preferredTime}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#78766E] italic">
              Demonstration note: A confirmation email would normally be dispatched to your inbox. A senior associate will confirm key access.
            </p>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 bg-[#1C1E1D] hover:bg-[#2F3331] text-[#FDFCF7] text-xs uppercase tracking-wider font-medium transition-colors"
              >
                Close &amp; Return to Property
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <div>
            <div className="border-b border-[#E8E5DD] pb-4 mb-5">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#9E7D47]">
                Accompanied Viewing
              </span>
              <h2 id="viewing-modal-title" className="font-serif text-2xl font-normal text-[#1C1E1D] mt-0.5">
                Arrange a Viewing
              </h2>
              <p className="text-xs text-[#5A5955] mt-1">
                {property.title} • {property.priceDisplay}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="viewing-fullname" className="block text-[11px] font-medium uppercase tracking-wider text-[#5A5955] mb-1">
                  Full Name *
                </label>
                <input
                  id="viewing-fullname"
                  type="text"
                  required
                  placeholder="e.g. Alistair Campbell"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="viewing-email" className="block text-[11px] font-medium uppercase tracking-wider text-[#5A5955] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="viewing-email"
                    type="email"
                    required
                    placeholder="name@example.co.uk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label htmlFor="viewing-phone" className="block text-[11px] font-medium uppercase tracking-wider text-[#5A5955] mb-1">
                    Telephone *
                  </label>
                  <input
                    id="viewing-phone"
                    type="tel"
                    required
                    placeholder="+44 7900 123456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="viewing-date" className="block text-[11px] font-medium uppercase tracking-wider text-[#5A5955] mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      id="viewing-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="viewing-time" className="block text-[11px] font-medium uppercase tracking-wider text-[#5A5955] mb-1">
                    Preferred Time
                  </label>
                  <select
                    id="viewing-time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                  >
                    <option value="Morning (10:00 – 12:00)">Morning (10:00 – 12:00)</option>
                    <option value="Afternoon (13:00 – 15:00)">Afternoon (13:00 – 15:00)</option>
                    <option value="Late Afternoon (16:00 – 18:00)">Late Afternoon (16:00 – 18:00)</option>
                    <option value="Saturday Morning">Saturday Morning</option>
                  </select>
                </div>
              </div>

              {/* Buyer / Tenant Status */}
              <div>
                <label htmlFor="viewing-status" className="block text-[11px] font-medium uppercase tracking-wider text-[#5A5955] mb-1">
                  Your Current Position
                </label>
                <select
                  id="viewing-status"
                  value={formData.buyerStatus}
                  onChange={(e) => setFormData({ ...formData, buyerStatus: e.target.value as any })}
                  className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                >
                  <option value="First-time buyer">First-time buyer with mortgage in principle</option>
                  <option value="Existing homeowner looking to sell">Homeowner looking to sell current residence</option>
                  <option value="Cash buyer">Cash purchaser / unencumbered</option>
                  <option value="Tenant seeking home">Tenant seeking relocation</option>
                  <option value="Investor">Private investor</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="viewing-message" className="block text-[11px] font-medium uppercase tracking-wider text-[#5A5955] mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="viewing-message"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FDFCF7] border border-[#E8E5DD] px-3 py-2 text-xs text-[#1C1E1D] focus:border-[#9E7D47] focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[44px] py-3 bg-[#1C1E1D] hover:bg-[#2F3331] text-[#FDFCF7] text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
                >
                  Submit Viewing Request
                </button>
              </div>

              <p className="text-[10px] text-[#78766E] text-center">
                Demonstration submission. By clicking submit you request an accompanied inspection with our London advisory desk.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
