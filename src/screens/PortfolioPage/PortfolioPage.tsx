import { Header } from "../../components/Header";
import type { JSX } from "react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  frameUrl?: string;
  imageUrl?: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "DFAT Campaign",
    description: "Digital campaign design for government initiative",
    category: "Brand Design",
    frameUrl: "https://example.com/portfolio/dfat", // Example frame URL - will use image if frame fails
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/dfat-poster-jpg.png",
    tags: ["Branding", "Campaign", "Government"]
  },
  {
    id: "2",
    title: "EDO Square",
    description: "Modern e-commerce platform with integrated payment solutions",
    category: "Web Development",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/edo-square-02-jpg.png",
    tags: ["E-commerce", "Web Design", "Development"]
  },
  {
    id: "3",
    title: "Key Insights Dashboard",
    description: "Analytics dashboard with real-time data visualization",
    category: "Web Application",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/key-insights-jpg.png",
    tags: ["Dashboard", "Analytics", "UI/UX"]
  },
  {
    id: "4",
    title: "Oxfam Appeal",
    description: "Charity campaign website with donation integration",
    category: "Web Development",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/oxfam-appeal-square-jpg.png",
    tags: ["Non-profit", "Campaign", "Web Design"]
  },
  {
    id: "5",
    title: "Dropbottle",
    description: "E-commerce platform for sustainable water bottles",
    category: "E-commerce",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/dropbottle-square-jpg.png",
    tags: ["E-commerce", "Sustainability", "Branding"]
  },
  {
    id: "6",
    title: "CVGT Platform",
    description: "Corporate training and development platform",
    category: "Web Application",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/cvgt-square-jpg.png",
    tags: ["Education", "Platform", "Corporate"]
  },
  {
    id: "7",
    title: "Interactive Map",
    description: "Custom mapping solution with location-based services",
    category: "Web Application",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/map-square-jpg.png",
    tags: ["Maps", "Interactive", "Development"]
  },
  {
    id: "8",
    title: "Unwrapped Animation",
    description: "Animated promotional content for product launch",
    category: "Animation",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/unwrapped-animated-thumbnail-poster-jpg.png",
    tags: ["Animation", "Marketing", "Video"]
  },
  {
    id: "9",
    title: "ADER Fashion",
    description: "Fashion e-commerce with AR try-on features",
    category: "E-commerce",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/ader-square-jpg.png",
    tags: ["Fashion", "E-commerce", "AR"]
  },
  {
    id: "10",
    title: "RWH Healthcare",
    description: "Healthcare management system with patient portal",
    category: "Web Application",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/rwh-square-04-jpg.png",
    tags: ["Healthcare", "Portal", "Management"]
  },
  {
    id: "11",
    title: "Welcome Home Project",
    description: "Real estate platform with virtual tours",
    category: "Web Development",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/welcome-home-project-square-jpg.png",
    tags: ["Real Estate", "Virtual Tours", "Platform"]
  },
  {
    id: "12",
    title: "BlueGreen Sustainability",
    description: "Environmental initiative website with impact tracking",
    category: "Web Development",
    imageUrl: "https://c.animaapp.com/mgh4p85n7yJIrM/img/bluegreen-square-jpg.png",
    tags: ["Sustainability", "Non-profit", "Impact"]
  }
];

export const PortfolioPage = (): JSX.Element => {
  return (
    <div className="bg-[#111204] min-h-screen w-full">
      <Header currentPage="/portfolio" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-[80px] md:pt-[127px] pb-[60px] md:pb-[100px] px-4">
        <div className="absolute top-[166px] left-[calc(50%_-_208px)] w-[416px] h-[309px] bg-[#b9fd5066] rounded-[208px/154.5px] blur-[174px] hidden md:block" />

        <h1 className="relative z-10 w-full max-w-[983px] [font-family:'Outfit',Helvetica] text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center tracking-[-2.88px] leading-tight">
          <span className="font-bold text-white tracking-[-2.76px]">
            Our Portfolio of{" "}
          </span>
          <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#b9fd50] tracking-[-2.76px]">
            Success Stories
          </span>
        </h1>

        <p className="relative z-10 w-full max-w-[700px] mt-[40px] md:mt-[56px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-base md:text-lg text-center tracking-[0] leading-[25.2px] px-4">
          Explore our collection of transformative digital projects. From stunning websites to complete business ecosystems, each project represents our commitment to excellence and innovation.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="relative px-4 md:px-[150px] py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#b9fd5033]"
            >
              {/* Display Frame or Image */}
              <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden bg-[#0a0a0a]">
                {item.frameUrl ? (
                  <iframe
                    src={item.frameUrl}
                    title={item.title}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111204] via-[#11120466] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#b9fd50] text-xs font-medium tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>

                <h3 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-xl md:text-2xl mb-2 group-hover:text-[#b9fd50] transition-colors">
                  {item.title}
                </h3>

                <p className="[font-family:'Outfit',Helvetica] font-light text-[#ffffffcc] text-sm md:text-base mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#b9fd5020] text-[#b9fd50] text-xs rounded-full border border-[#b9fd5033] hover:bg-[#b9fd5033] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 md:px-[150px] py-16 md:py-24">
        <div className="bg-gradient-to-r from-[#b9fd5020] to-[#b9fd5010] rounded-3xl p-8 md:p-16 text-center border border-[#b9fd5033]">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-2xl md:text-4xl mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-base md:text-lg mb-8 max-w-[600px] mx-auto">
            Let's create something amazing together. Get in touch to discuss your project and see how we can help transform your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-12 md:h-14 px-6 md:px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#b9fd5033]">
                Get Started Today
              </button>
            </a>
            <a href="/pricing">
              <button className="border-2 border-[#b9fd50] text-[#b9fd50] hover:bg-[#b9fd5020] h-12 md:h-14 px-6 md:px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-sm md:text-base transition-all duration-300">
                View Pricing
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 md:px-[150px] py-8 border-t border-[#b9fd5033]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm text-center md:text-left">
            © 2025 Nonstandard Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#ffffffcc] hover:text-[#b9fd50] transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-[#ffffffcc] hover:text-[#b9fd50] transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-[#ffffffcc] hover:text-[#b9fd50] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
