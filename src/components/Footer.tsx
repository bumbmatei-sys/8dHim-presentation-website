import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest text-frost py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12 text-center md:text-left">
        <img 
          src="https://github.com/bumbmatei-sys/8dHim-presentation-website/blob/main/Assets/8DHIM-LOGO-BLACK.png?raw=true" 
          alt="8TH DAY HOPE INTERNATIONAL MINISTRIES" 
          className="h-10 w-auto invert"
        />
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-frost/80">Ready for your new beginning?</span>
          <button className="bg-teal text-white px-6 py-2 rounded-full font-medium hover:bg-mint hover:text-forest transition-colors duration-300">
            Enroll for Free
          </button>
        </div>

        <div className="flex flex-row justify-center gap-8 md:gap-16 w-full md:w-auto">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <Link to="/#vision" className="text-frost/80 hover:text-mint transition-colors font-medium">Vision</Link>
            <Link to="/#challenge" className="text-frost/80 hover:text-mint transition-colors font-medium">Challenge</Link>
            <Link to="/terms" className="text-frost/80 hover:text-mint transition-colors font-medium">Terms of Use</Link>
          </div>
          <div className="flex flex-col gap-3 text-center md:text-left">
            <Link to="/#solution" className="text-frost/80 hover:text-mint transition-colors font-medium">Solution</Link>
            <Link to="/#who" className="text-frost/80 hover:text-mint transition-colors font-medium">Who It's For</Link>
            <Link to="/privacy" className="text-frost/80 hover:text-mint transition-colors font-medium">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-frost/50 text-sm border-t border-white/10 pt-8 flex justify-center">
        <span>&copy; 2026 8TH DAY HOPE INTERNATIONAL MINISTRIES. All rights reserved.</span>
      </div>
    </footer>
  );
};
