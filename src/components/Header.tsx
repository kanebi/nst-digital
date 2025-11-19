import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { JSX } from "react";
import nstLogo from "../assets/nst-logo.png";

interface HeaderProps {
  currentPage?: string;
}

export const Header = ({ currentPage = "" }: HeaderProps): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && currentPage === "") return true;
    return currentPage === path;
  };

  return (
    <>
      <header className="relative z-50 flex items-center justify-between px-4 md:px-[148px] pt-[39px] pb-8 translate-y-[-1rem] animate-fade-in opacity-0">
        <Link to="/" className="flex items-center">
          <img src={nstLogo} alt="NST Digital Logo" className="h-[45px] md:h-14 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`[font-family:'Outfit',Helvetica] font-normal text-base tracking-[0] leading-[26px] whitespace-nowrap transition-colors ${
              isActive("/") ? "text-[#b9fd50]" : "text-white hover:text-[#b9fd50]"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`[font-family:'Outfit',Helvetica] font-normal text-base tracking-[0] leading-[26px] whitespace-nowrap transition-colors ${
              isActive("/about") ? "text-[#b9fd50]" : "text-white hover:text-[#b9fd50]"
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`[font-family:'Outfit',Helvetica] font-normal text-base tracking-[0] leading-[26px] whitespace-nowrap transition-colors ${
              isActive("/services") ? "text-[#b9fd50]" : "text-white hover:text-[#b9fd50]"
            }`}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className={`[font-family:'Outfit',Helvetica] font-normal text-base tracking-[0] leading-[26px] whitespace-nowrap transition-colors ${
              isActive("/portfolio") ? "text-[#b9fd50]" : "text-white hover:text-[#b9fd50]"
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/pricing"
            className={`[font-family:'Outfit',Helvetica] font-normal text-base tracking-[0] leading-[26px] whitespace-nowrap transition-colors ${
              isActive("/pricing") ? "text-[#b9fd50]" : "text-white hover:text-[#b9fd50]"
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className={`[font-family:'Outfit',Helvetica] font-normal text-base tracking-[0] leading-[26px] whitespace-nowrap transition-colors ${
              isActive("/contact") ? "text-[#b9fd50]" : "text-white hover:text-[#b9fd50]"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/pricing">
            <Button className="hidden md:block bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-4 md:px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-sm md:text-base">
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-10 w-10 p-0 rounded-lg flex items-center justify-center transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 bg-[#111204] border-l border-[#b9fd4f5e] shadow-2xl animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#b9fd4f5e] animate-menu-item">
                <img src={nstLogo} alt="NST Digital Logo" className="h-8 w-auto" />
                <Button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-8 w-8 p-0 rounded-lg flex items-center justify-center transition-all duration-300 hover:rotate-90"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6">
                <div className="space-y-2">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-lg transition-all duration-300 transform hover:translate-x-2 animate-menu-item-delay-1 ${
                      isActive("/") ? "bg-[#b9fd5020] text-[#b9fd50]" : "text-white hover:bg-[#b9fd5020] hover:text-[#b9fd50]"
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-lg transition-all duration-300 transform hover:translate-x-2 animate-menu-item-delay-2 ${
                      isActive("/about") ? "bg-[#b9fd5020] text-[#b9fd50]" : "text-white hover:bg-[#b9fd5020] hover:text-[#b9fd50]"
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-lg transition-all duration-300 transform hover:translate-x-2 animate-menu-item-delay-3 ${
                      isActive("/services") ? "bg-[#b9fd5020] text-[#b9fd50]" : "text-white hover:bg-[#b9fd5020] hover:text-[#b9fd50]"
                    }`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/portfolio"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-lg transition-all duration-300 transform hover:translate-x-2 animate-menu-item-delay-4 ${
                      isActive("/portfolio") ? "bg-[#b9fd5020] text-[#b9fd50]" : "text-white hover:bg-[#b9fd5020] hover:text-[#b9fd50]"
                    }`}
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-lg transition-all duration-300 transform hover:translate-x-2 animate-menu-item-delay-5 ${
                      isActive("/pricing") ? "bg-[#b9fd5020] text-[#b9fd50]" : "text-white hover:bg-[#b9fd5020] hover:text-[#b9fd50]"
                    }`}
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-lg transition-all duration-300 transform hover:translate-x-2 animate-menu-item-delay-6 ${
                      isActive("/contact") ? "bg-[#b9fd5020] text-[#b9fd50]" : "text-white hover:bg-[#b9fd5020] hover:text-[#b9fd50]"
                    }`}
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Menu Footer */}
              <div className="p-6 border-t border-[#b9fd4f5e] animate-menu-item-delay-6">
                <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-12 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#b9fd5050]">
                    Get Started
                  </Button>
                </Link>
                <p className="text-center text-[#ffffffcc] text-xs mt-4 [font-family:'Outfit',Helvetica] animate-pulse">
                  Transform your business today
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
