import { Button } from "./ui/button";
import { CheckCircle, X } from "lucide-react";
import type { JSX } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps): JSX.Element => {
  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-slide-in-right">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="[font-family:'Outfit',Helvetica] font-bold text-2xl text-gray-900 mb-4">
            Message Received!
          </h3>
          <p className="[font-family:'Outfit',Helvetica] text-gray-600 mb-6 leading-relaxed">
            Thank you for reaching out! We've received your message and will get back to you within 24 hours. 
            Our team is excited to help bring your vision to life.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={onClose}
              className="flex-1 bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-12 rounded-lg [font-family:'Outfit',Helvetica] font-semibold transition-colors"
            >
              Close
            </Button>
            <Button
              onClick={() => {
                onClose();
                // Scroll to top of page
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              variant="outline"
              className="flex-1 border-[#b9fd50] text-[#b9fd50] hover:bg-[#b9fd50] hover:text-[#111204] h-12 rounded-lg [font-family:'Outfit',Helvetica] font-semibold transition-colors"
            >
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
