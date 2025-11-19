import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { 
  Rocket, 
  Network, 
  Brain, 
  CheckCircle, 
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../components/Header";
import type { JSX } from "react";
import nstLogo from "../../assets/nst-logo.png";

const valuePropositions = [
  {
    icon: Rocket,
    title: "Lightning-Fast Launch",
    subtitle: "Your Business, Live in 2 Weeks",
    description:
      "Forget 3-month timelines and endless revisions. Our streamlined process gets your professional website, brand identity, and core systems up and running in just 14 days.",
    features: [
      "Rapid discovery and planning session",
      "Mobile-responsive website development", 
      "Professional brand design package",
      "Social media profile setup",
      "Basic SEO optimization",
      "Launch day support"
    ]
  },
  {
    icon: Network,
    title: "Complete Business Ecosystem", 
    subtitle: "Everything Connected, Nothing Forgotten",
    description:
      "Your website, CRM, appointment system, email marketing, and customer service tools all talking to each other seamlessly. We architect integrated digital ecosystems where data flows automatically.",
    features: [
      "Automated lead capture and follow-up",
      "Centralized customer data management",
      "Synchronized calendar and booking systems", 
      "Integrated payment processing",
      "Real-time analytics dashboard",
      "Cross-platform consistency"
    ]
  },
  {
    icon: Brain,
    title: "Future-Proof AI Integration",
    subtitle: "AI That Works For You 24/7", 
    description:
      "Don't get left behind in the AI revolution. Our premium solutions include intelligent chatbots, AI phone agents, and automated workflows that eliminate repetitive tasks.",
    features: [
      "24/7 intelligent customer support",
      "Automated appointment scheduling",
      "Smart lead qualification", 
      "Personalized customer interactions",
      "Predictive analytics and insights",
      "Natural language processing"
    ]
  },
];

const pricingPackages = [
  {
    name: "Business Starter",
    price: "$1,500",
    period: "One-Time Setup",
    tagline: "Everything You Need to Launch Your Digital Presence",
    perfectFor: "New businesses, startups, and entrepreneurs ready to launch",
    timeline: "14 business days",
    features: {
      website: [
        "Custom 5-page responsive website",
        "Mobile-optimized design", 
        "Fast loading speed optimization",
        "SSL security certificate",
        "Contact form integration",
        "Google Maps integration",
        "1 year domain registration",
        "1 year hosting included",
        "Basic on-page SEO setup",
        "Google Analytics integration"
      ],
      brand: [
        "Custom logo design (3 concepts, unlimited revisions)",
        "Brand color palette (5 colors)",
        "Typography system",
        "Brand style guide (PDF)",
        "Business card design",
        "Email signature design",
        "Social media profile graphics",
        "Brand assets kit (PNG, SVG, AI files)"
      ],
      social: [
        "Professional setup of 3 social platforms",
        "Profile optimization",
        "Bio writing",
        "Consistent branding across platforms",
        "Initial content calendar template",
        "Social media guidelines document"
      ]
    },
    bonus: [
      "2 weeks of email support after launch",
      "Basic website training session (1 hour)",
      "Minor content edits (first 30 days)"
    ]
  },
  {
    name: "Nonstandard Growth", 
    price: "$3,500",
    period: "One-Time Setup",
    tagline: "Everything in Starter Plus Powerful Automation & Marketing",
    perfectFor: "Growing businesses ready to automate and scale operations",
    timeline: "21 business days",
    includes: "Everything in Business Starter, PLUS:",
    features: {
      advanced: [
        "Up to 10 custom pages",
        "Blog setup with 5 starter posts",
        "Advanced SEO optimization",
        "Lead magnet/freebie integration",
        "Newsletter signup integration",
        "Live chat widget"
      ],
      marketing: [
        "Google Ads account setup and structure",
        "Facebook/Instagram Ads account setup", 
        "Conversion tracking pixel installation",
        "Google Search Console setup",
        "Google My Business optimization",
        "Retargeting pixel implementation"
      ],
      crm: [
        "Basic CRM setup (HubSpot, Zoho, or similar)",
        "Lead capture forms connected to CRM",
        "Email automation workflows (3 sequences)",
        "Contact segmentation setup",
        "Sales pipeline configuration",
        "Mobile app setup and training"
      ],
      scheduling: [
        "Calendar integration (Calendly, Acuity, or similar)",
        "Automated booking confirmations",
        "Reminder system setup (email & SMS)",
        "Sync with Google Calendar",
        "Buffer time and availability rules",
        "Payment collection for appointments"
      ]
    },
    bonus: [
      "FREE Virtual Assistant - 1 Month (20 hours/month)",
      "3 months priority email support",
      "Monthly performance review call",
      "2 hours of training/consultation"
    ]
  },
  {
    name: "Premium Enterprise",
    price: "$5,000", 
    period: "One-Time Setup",
    tagline: "The Ultimate Digital Business Operating System",
    perfectFor: "Established businesses ready for complete digital transformation",
    timeline: "35 business days",
    includes: "Everything in Nonstandard Growth, PLUS:",
    features: {
      ai: [
        "Custom AI chatbot for website (trained on your business)",
        "AI phone agent for customer service",
        "AI email responder (basic inquiry handling)",
        "Sentiment analysis and reporting"
      ],
      automation: [
        "Custom automated workflows (up to 10 processes)",
        "Multi-step automation sequences",
        "Conditional logic and branching",
        "Third-party app integrations",
        "Automated reporting and notifications",
        "Document generation automation"
      ],
      erp: [
        "Enterprise Resource Planning implementation",
        "Inventory management (if applicable)",
        "Order processing automation",
        "Financial tracking integration",
        "Multi-department coordination",
        "Resource allocation tools"
      ],
      premium: [
        "Up to 20 custom pages",
        "Advanced e-commerce integration (if needed)",
        "Membership/portal functionality",
        "Custom API integrations",
        "Advanced security features",
        "Automated backup systems"
      ]
    },
    bonus: [
      "Dedicated Virtual Assistants - 2 Months (2 VAs, 40 hours/month total)",
      "6 months priority support (24/7 emergency line)",
      "Bi-weekly strategy calls",
      "Quarterly comprehensive business review",
      "5 hours/month of consulting/adjustments included",
      "Dedicated account manager"
    ]
  }
];

const portfolioImages = [
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/dfat-poster-jpg.png",
    alt: "Dfat poster jpg",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/edo-square-02-jpg.png",
    alt: "Edo square jpg",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/key-insights-jpg.png",
    alt: "Key insights jpg",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/oxfam-appeal-square-jpg.png",
    alt: "Oxfam appeal square",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/dropbottle-square-jpg.png",
    alt: "Dropbottle square",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/cvgt-square-jpg.png",
    alt: "Cvgt square jpg",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/map-square-jpg.png",
    alt: "Map square jpg",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/unwrapped-animated-thumbnail-poster-jpg.png",
    alt: "Unwrapped animated",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/ader-square-jpg.png",
    alt: "Ader square jpg",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/rwh-square-04-jpg.png",
    alt: "Rwh square jpg",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/welcome-home-project-square-jpg.png",
    alt: "Welcome home project",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/bluegreen-square-jpg.png",
    alt: "Bluegreen square jpg",
  },
];

const benefitsData = [
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-13.svg",
    title: "On-demand requests",
    description:
      "Put all your requests in the design queue in Trello, and we'll knock them out 1 by 1.",
  },
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-6.png",
    title: "Top-notch quality",
    description:
      "High-end work from a dedicated team of senior designers that's always available when you need it.",
  },
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/group-427320479.png",
    title: "Best Design Stacks",
    description:
      "We use the best available technology stack based on your specific needs. From WordPress to custom React applications, we choose the perfect solution for your business goals.",
  },
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-4.png",
    title: "Fast. Responsive. Reliable.",
    description:
      "Get regular updates on your projects and can expect to receive your designs within 2-3 days.",
  },
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-7.png",
    title: "No Lock in contracts",
    description:
      "Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime.",
  },
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-9.png",
    title: "Great value for money",
    description:
      "Get the power of dedicated design team at fraction of the cost of full-time employee. ($54k/yr vs. $112k/yr).",
  },
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-8.png",
    title: "Customized for you",
    description:
      "We design and build custom for you. We're never starting from a template unless you want that? You don't, right?",
  },
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-5.png",
    title: "Creative paying",
    description:
      "We're here when you need us and not on payroll when you don't.",
  },
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-10.png",
    title: "Expert turnovers",
    description:
      "You're getting 10+ years of design experience with every request. No hand-holding required.",
  },
];

const servicesTags = [
  "Website Development",
  "Brand Identity Design",
  "E-commerce Solutions",
  "CRM & ERP Systems",
  "AI Automation",
  "Mobile App Development",
  "SEO & Digital Marketing",
  "Business Process Optimization",
  "Cloud Infrastructure",
  "Custom Software Development",
  "Social Media Management",
  "Content Strategy",
];

const testimonials = [
  {
    client: "Sarah Mitchell",
    business: "Luxe Beauty Spa",
    package: "Nonstandard Growth",
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here.png",
    quote: "Working with NST was a game-changer for my spa business. They built our website, set up our booking system, and integrated everything with our CRM in just three weeks. The automated appointment reminders alone have reduced no-shows by 40%. I'm now spending time on my business instead of drowning in administrative tasks. Best investment I've made!",
    results: [
      "40% reduction in no-shows",
      "3x increase in online bookings", 
      "5-star Google rating maintained"
    ]
  },
  {
    client: "Marcus Johnson",
    business: "Johnson & Associates Law Firm",
    package: "Premium Enterprise",
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-3.png",
    quote: "As a law firm, we needed security, professionalism, and efficiency. NST delivered on all fronts. The AI phone agent handles initial consultations, the CRM keeps our case pipeline organized, and the automated workflows have cut our administrative time by 60%. Our clients love the 24/7 availability, and we love the increased conversion rate. This is the future of legal practice.",
    results: [
      "60% reduction in admin time",
      "45% increase in qualified leads",
      "ROI achieved in 3 months"
    ]
  },
  {
    client: "Jennifer Lee",
    business: "FitLife Personal Training",
    package: "Business Starter (then upgraded to Growth)",
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-2.png",
    quote: "I started with the Business Starter package just to get my training business online. The website looked so professional that my bookings doubled in the first month! I upgraded to the Growth package after 60 days, and now with the CRM and automated follow-ups, I'm running a six-figure business. NST made it all possible and surprisingly affordable.",
    results: [
      "Bookings doubled in first month",
      "Scaled to 6-figure revenue in 8 months",
      "98% client retention rate"
    ]
  },
  {
    client: "David Rodriguez",
    business: "Coastal Construction Co.",
    package: "Nonstandard Growth",
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-4.png",
    quote: "Construction companies aren't known for being tech-savvy, but NST changed that for us. They created a beautiful website that showcases our projects, set up a system where clients can request quotes online, and integrated it all with our project management software. We've gone from local word-of-mouth to serving clients three counties over. The virtual assistant help was incredible too—we kept her on after the first month!",
    results: [
      "Expanded service area by 200%",
      "80% of new leads from website",
      "Streamlined quote-to-contract process"
    ]
  }
];

// Blog posts data - commented out for later implementation
/*
const blogPosts = [
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here.png",
    category: "AI AUTOMATION",
    title: "How AI Chatbots Are Revolutionizing Small Business Customer Service",
    excerpt: "Discover how businesses are saving 30+ hours per week with AI-powered customer support while improving response times and customer satisfaction...",
    date: "October 15, 2025",
    readTime: "5 min read"
  },
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-3.png",
    category: "WEBSITE OPTIMIZATION",
    title: "5 Website Mistakes That Are Costing You Customers (And How to Fix Them)",
    excerpt: "Your website might be driving potential customers away without you realizing it. Learn the critical errors we find in 80% of small business websites and simple solutions...",
    date: "October 10, 2025",
    readTime: "7 min read"
  },
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-1.png",
    category: "BUSINESS GROWTH",
    title: "From Idea to Launch: The 14-Day Website Development Timeline",
    excerpt: "Think you need months to launch your business online? Here's our proven two-week process that gets startups from concept to live website...",
    date: "October 3, 2025",
    readTime: "6 min read"
  },
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-4.png",
    category: "CRM INTEGRATION",
    title: "CRM Integration: Why Your Business Can't Afford to Wait",
    excerpt: "Spreadsheets are costing you money. Learn how proper CRM implementation transforms chaotic customer data into predictable revenue growth...",
    date: "September 28, 2025",
    readTime: "8 min read"
  },
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-2.png",
    category: "BUSINESS STRATEGY",
    title: "The Real Cost of DIY: When to Hire Professionals for Your Digital Presence",
    excerpt: "Trying to do everything yourself? Here's the hidden costs of DIY solutions and when investing in professional help actually saves money...",
    date: "September 20, 2025",
    readTime: "6 min read"
  },
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-5.png",
    category: "BRAND IDENTITY",
    title: "Brand Identity vs. Logo: Understanding What Your Business Really Needs",
    excerpt: "A logo isn't a brand. Discover the comprehensive elements that make up a powerful brand identity and why it matters for growth...",
    date: "September 15, 2025",
    readTime: "5 min read"
  }
];
*/

const faqItems = [
  {
    question: "Do you have specific pricing plans to show?",
    answer: "Yes! We offer three comprehensive packages: Business Starter ($1,500 one-time), Nonstandard Growth ($2,500 one-time), and Premium Enterprise ($4,500 one-time). Each package includes everything you need to launch and scale your digital presence. All packages come with unlimited revisions, 30-day support, and source files. You can upgrade anytime as your business grows.",
  },
  {
    question: "How many years of experience do you have?",
    answer: "Our team has over 10 years of combined experience in web development, digital marketing, and business automation. We've worked with 500+ businesses across various industries, from startups to established enterprises. Our senior developers and designers bring expertise from top agencies and tech companies.",
  },
  {
    question: "What companies have you worked with?",
    answer: "We've worked with businesses across multiple industries including healthcare, e-commerce, professional services, and technology startups. Our clients range from local businesses to international companies. We maintain strict confidentiality agreements, but we can provide case studies and references during our consultation call.",
  },
  {
    question: "Am I safe leaving my company in your hands?",
    answer: "Absolutely! We're fully insured, use industry-standard security practices, and maintain complete transparency throughout the process. All work is backed by our satisfaction guarantee, and you retain full ownership of your digital assets. We provide regular updates, detailed documentation, and comprehensive training to ensure you're comfortable with your new systems.",
  }
];

const brandLogos = [
  {
    logomark: "https://c.animaapp.com/mgh4p85n7yJIrM/img/logomark.svg",
    logotype: "https://c.animaapp.com/mgh4p85n7yJIrM/img/logotype-2.svg",
  },
  {
    logomark: "https://c.animaapp.com/mgh4p85n7yJIrM/img/logomark-2.svg",
    logotype: "https://c.animaapp.com/mgh4p85n7yJIrM/img/logotype.svg",
  },
  {
    logomark: "https://c.animaapp.com/mgh4p85n7yJIrM/img/logomark-1.svg",
    logotype: "https://c.animaapp.com/mgh4p85n7yJIrM/img/logotype-3.svg",
  },
  {
    logomark: "https://c.animaapp.com/mgh4p85n7yJIrM/img/logomark-4.svg",
    logotype: "https://c.animaapp.com/mgh4p85n7yJIrM/img/logotype-1.svg",
  },
  {
    logomark: "https://c.animaapp.com/mgh4p85n7yJIrM/img/logomark-3.svg",
    logotype: "https://c.animaapp.com/mgh4p85n7yJIrM/img/logotype-4.svg",
  },
];

const socialIcons = [
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/frame-5.svg",
    alt: "Frame",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/frame-4.svg",
    alt: "Frame",
  },
  {
    src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/frame-1.svg",
    alt: "Frame",
  },
  { src: "https://c.animaapp.com/mgh4p85n7yJIrM/img/frame.svg", alt: "Frame" },
];

export const HomePage = (): JSX.Element => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div
      className="bg-[#111204] overflow-hidden w-full relative"
      data-model-id="1:2276"
    >
      <Header currentPage="/" />

      <section className="relative flex flex-col items-center pt-[80px] md:pt-[127px] pb-[60px] md:pb-[100px] px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="absolute top-[166px] left-[calc(50%_-_208px)] w-[416px] h-[309px] bg-[#b9fd5066] rounded-[208px/154.5px] blur-[174px] hidden md:block" />

        <h1 className="relative z-10 w-full max-w-[983px] [font-family:'Outfit',Helvetica] text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-center tracking-[-2.88px] leading-tight">
          <span className="font-bold text-white tracking-[-2.76px]">
            Bringing Your Business&nbsp;&nbsp;
            <br className="hidden sm:block" />
            Vision Into{" "}
          </span>
          <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#b9fd50] tracking-[-2.76px]">
            Digital Reality
          </span>
        </h1>

        <p className="relative z-10 w-full max-w-[700px] mt-[40px] md:mt-[56px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-base md:text-lg text-center tracking-[0] leading-[25.2px] px-4">
          Transform your business idea into a thriving digital presence. From stunning websites to complete business automation, we provide everything you need to launch, scale, and dominate your market.
        </p>

        <div className="relative z-10 mt-[40px] md:mt-[60px] flex  sm:flex-row gap-4 w-full mx-auto max-w-[400px] sm:max-w-none md:justify-center">
          <Link to="/pricing">
            <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-12 md:h-14 px-6 md:px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-sm md:text-base">
              Get Started Today
            </Button>
          </Link>
          <a href="#portfolio">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#111204] h-12 md:h-14 px-6 md:px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-sm md:text-base">
              View Our Work
            </Button>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="relative z-10 mt-[60px] md:mt-[80px] flex flex-wrap justify-center gap-3 md:gap-8 text-center px-4">
          <div className="flex flex-col items-center min-w-[80px]">
            <div className="text-xl md:text-2xl font-bold text-[#b9fd50]">500+</div>
            <div className="text-xs md:text-sm text-[#ffffffcc]">Projects Delivered</div>
          </div>
          <div className="flex flex-col items-center min-w-[80px]">
            <div className="text-xl md:text-2xl font-bold text-[#b9fd50]">98%</div>
            <div className="text-xs md:text-sm text-[#ffffffcc]">Client Satisfaction</div>
          </div>
          <div className="flex flex-col items-center min-w-[80px]">
            <div className="text-xl md:text-2xl font-bold text-[#b9fd50]">24/7</div>
            <div className="text-xs md:text-sm text-[#ffffffcc]">Support Available</div>
          </div>
          <div className="flex flex-col items-center min-w-[80px]">
            <div className="text-xl md:text-2xl font-bold text-[#b9fd50]">AI</div>
            <div className="text-xs md:text-sm text-[#ffffffcc]">Powered Solutions</div>
          </div>
          <div className="flex flex-col items-center min-w-[80px]">
            <div className="text-xl md:text-2xl font-bold text-[#b9fd50]">Enterprise</div>
            <div className="text-xs md:text-sm text-[#ffffffcc]">Grade Security</div>
          </div>
        </div>

        <img
          className="absolute top-44 right-[237px] w-[159px] h-[159px]"
          alt="Star"
          src="https://c.animaapp.com/mgh4p85n7yJIrM/img/star.svg"
        />

        <img
          className="absolute top-[558px] right-[375px] w-[34px] h-[34px]"
          alt="Star"
          src="https://c.animaapp.com/mgh4p85n7yJIrM/img/star.svg"
        />

        <img
          className="absolute top-[539px] left-[363px] w-[23px] h-[23px]"
          alt="Star"
          src="https://c.animaapp.com/mgh4p85n7yJIrM/img/star.svg"
        />
      </section>

      <section className="relative flex flex-col items-center py-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex items-center gap-[39px] mb-12">
          <div className="w-[50px] h-0.5 bg-[#b9fd50]" />
          <div className="[font-family:'Outfit',Helvetica] font-bold text-white text-[15px] tracking-[1.43px] leading-6 whitespace-nowrap">
            TRUSTED BY AMAZING BRANDS
          </div>
          <div className="w-[50px] h-0.5 bg-[#b9fd50]" />
        </div>

        <div className="flex items-center justify-center gap-[42px] px-[170px] py-8 bg-[#222222] rounded-[22px] w-[1279px]">
          {brandLogos.map((logo, index) => (
            <div key={index} className="relative h-12">
              <img
                className="absolute top-[4.17%] left-0 h-[91.67%]"
                alt="Logomark"
                src={logo.logomark}
              />
              <img
                className="absolute top-[24%] left-[30%] h-[55%]"
                alt="Logotype"
                src={logo.logotype}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-4 md:px-[150px] py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[22.4px] mb-[38px] text-center">
          OUR APPROACH
        </div>

        <h2 className="w-full max-w-[700px] [font-family:'Outfit',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-[54px] tracking-[-0.81px] leading-tight mb-[53px] text-left">
          Get a Dedicated Digital Transformation Team at Fraction of the Cost
        </h2>

        <p className="w-full max-w-[600px] [font-family:'Outfit',Helvetica] font-light text-[#ffffffcc] text-lg md:text-xl lg:text-2xl tracking-[0] leading-[33.6px] mb-[172px] text-left">
          Starting or scaling a business shouldn't mean breaking the bank on scattered freelancers and disconnected services. At Nonstandard Digital, we're your all-in-one digital business partner – combining web development, brand design, automation systems, and AI integration into comprehensive packages that actually work together.
        </p>

        <div className="flex justify-center">
        <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base mb-[181px]">
            Schedule Free Consultation
        </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[146px]">
          {valuePropositions.map((proposition, index) => {
            const IconComponent = proposition.icon;
            return (
              <div key={index} className="flex flex-col text-center md:text-left">
                <div className="w-[93px] h-[93px] bg-[#b9fd50] rounded-full flex items-center justify-center mb-[41px] mx-auto md:mx-0">
                  <IconComponent className="w-[45px] h-[45px] text-[#111204]" />
              </div>
                <h3 className="[font-family:'Outfit',Helvetica] font-medium text-white text-[26px] tracking-[-0.26px] leading-[normal] mb-[16px]">
                  {proposition.title}
              </h3>
                <h4 className="[font-family:'Outfit',Helvetica] font-medium text-[#b9fd50] text-[20px] tracking-[-0.2px] leading-[normal] mb-[16px]">
                  {proposition.subtitle}
                </h4>
                <p className="w-full max-w-[283px] [font-family:'Outfit',Helvetica] font-light text-[#ffffffcc] text-lg tracking-[0] leading-[25.2px] mb-[20px] mx-auto md:mx-0">
                  {proposition.description}
                </p>
                <ul className="w-full max-w-[283px] space-y-2 mx-auto md:mx-0">
                  {proposition.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#b9fd50] mt-1 flex-shrink-0" />
                      <span className="[font-family:'Outfit',Helvetica] font-light text-[#ffffffcc] text-sm tracking-[0] leading-[20px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative bg-white py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="flex flex-col items-center mb-16 px-4">
          <h2 className="w-full max-w-[600px] [font-family:'Outfit',Helvetica] font-bold text-[#111204] text-3xl md:text-4xl lg:text-5xl text-center tracking-[-2.64px] leading-tight mb-[27px]">
            Our Work Speaks Louder Than Words
          </h2>
          <p className="w-full max-w-[600px] [font-family:'Outfit',Helvetica] font-normal text-[#111204cc] text-lg text-center tracking-[0] leading-[25.2px]">
            From bold startups to established brands, we've helped hundreds of businesses transform their digital presence and multiply their revenue. Each project showcases our commitment to beautiful design, seamless functionality, and measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] px-0">
          {portfolioImages.map((image, index) => (
            <div key={index} className="w-full h-[200px] md:h-[340px] overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                alt={image.alt}
                src={image.src}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button
            variant="outline"
            className="h-16 px-8 rounded-lg border border-[#111204] [font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg hover:bg-[#111204] hover:text-white transition-colors"
          >
            <ArrowRight className="w-[25px] h-[25px] mr-3" />
            View Full Portfolio
          </Button>
        </div>
      </section>

      <section className="relative px-4 md:px-[152px] py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[22.4px] mb-[38px]">
          OUR SERVICES
        </div>

        <h2 className="w-full max-w-[700px] mx-auto [font-family:'Outfit',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-[54px] text-center tracking-[-0.81px] leading-tight mb-[50px]">
          We Can Help You With...
        </h2>

        <p className="w-full max-w-[600px] mx-auto [font-family:'Outfit',Helvetica] font-light text-[#ffffffcc] text-lg md:text-xl text-center tracking-[0] leading-[28px] mb-[106px]">
          Whatever your business needs to thrive online, we've got the expertise and experience to deliver. Our multidisciplinary team brings together designers, developers, strategists, and automation specialists to solve your unique challenges.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-[107px]">
          {servicesTags.map((tag, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center px-[35px] py-[11px] bg-[#b9fd50] rounded-lg"
            >
              <div className="[font-family:'Outfit',Helvetica] font-light text-[#111204] text-[17px] text-center tracking-[0] leading-[25.2px] whitespace-nowrap">
                {tag}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
            <ArrowRight className="w-[25px] h-[25px] mr-3 text-white" />
            <span className="[font-family:'Inter',Helvetica] font-light text-white text-lg">
              See All Services
            </span>
          </Button>
        </div>
      </section>

      <section className="relative px-[152px] py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[22.4px] mb-[38px]">
          BENEFITS
        </div>

        <h2 className="w-[606px] [font-family:'Outfit',Helvetica] font-semibold text-white text-[54px] tracking-[-0.81px] leading-[58px] mb-[53px]">
          The design subscription that connects you to your dream team
        </h2>

        <p className="w-[536px] [font-family:'Outfit',Helvetica] font-light text-[#ffffffcc] text-2xl tracking-[0] leading-[33.6px] mb-[172px]">
          A subscription can alleviate the stress of staffing, managing
          expenses, or make design calls like a Creative Director. We partner
          with you to ensure that your design elevates your brand to new levels.
        </p>

        <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base mb-[181px]">
          See Pricing
        </Button>

        <div className="grid grid-cols-3 gap-x-[97px] gap-y-[113px]">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-col">
              <img className="w-10 h-10 mb-6" alt="Icon" src={benefit.icon} />
              <h3 className="[font-family:'Outfit',Helvetica] font-medium text-white text-xl tracking-[-0.20px] leading-[normal] mb-[37px]">
                {benefit.title}
              </h3>
              <p className="w-[292px] [font-family:'Outfit',Helvetica] font-normal text-[#9593a4] text-base tracking-[-0.16px] leading-[23px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-white py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex flex-col items-center mb-16">
          <div className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-base text-center tracking-[0] leading-[22.4px] mb-[30px]">
            CUSTOMER TESTIMONIALS
          </div>
          <h2 className="w-[600px] [font-family:'Outfit',Helvetica] font-bold text-[#111204] text-5xl text-center tracking-[-0.72px] leading-[58px] mb-[27px]">
            Customer Is Our Top Priority
          </h2>
          <p className="w-[600px] [font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg text-center tracking-[0] leading-[25.2px]">
            Don't just take our word for it. Here's what real business owners say about working with Nonstandard Digital.
          </p>
        </div>

        <div className="flex justify-center px-4 md:px-[216px]">
          <div className="relative w-full max-w-[1000px]">
            <Card className="relative w-full bg-[#f8f8f8] rounded-[40px] border border-[#d9d9d9] shadow-[0px_6px_12px_#0000000d] overflow-hidden">
              <CardContent className="p-8 md:p-[73px] pt-8 md:pt-[73px]">
              <img
                className="w-[159px] h-8 mb-[74px]"
                alt="Rating"
                src="https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-12.png"
              />

                {(() => {
                  const testimonial = testimonials[currentTestimonial];
                  return (
                    <>
                      <h3 className="w-full max-w-[495px] [font-family:'Outfit',Helvetica] font-bold text-s-2 text-[26px] tracking-[0] leading-[31px] mb-[78px]">
                        {testimonial.quote.split('.')[0]}!
              </h3>

                      <p className="w-full max-w-[478px] [font-family:'Outfit',Helvetica] font-normal text-[#111203c7] text-lg tracking-[0] leading-[26px] mb-[66px]">
                        {testimonial.quote}
                      </p>

                      <div className="flex flex-col mb-4">
                <div className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-xl tracking-[0] leading-[22px] mb-2">
                          {testimonial.client}
                </div>
                <div className="[font-family:'Outfit',Helvetica] font-normal text-base tracking-[0] leading-[25.6px]">
                          <span className="text-[#111204cc]">Owner of </span>
                          <span className="font-bold text-[#111204cc]">{testimonial.business}</span>
                        </div>
                        <div className="[font-family:'Outfit',Helvetica] font-normal text-sm tracking-[0] leading-[20px] text-[#b9fd50] mt-2">
                          Package: {testimonial.package}
                </div>
              </div>

                      <div className="flex flex-wrap gap-2">
                        {testimonial.results.map((result, index) => (
                          <div key={index} className="bg-[#b9fd50] text-[#111204] px-3 py-1 rounded-full text-sm font-medium">
                            {result}
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}

                <img
                  className="absolute top-[94px] right-[59px] w-[325px] h-[325px] object-cover hidden md:block"
                alt="Testimonial"
                src="https://c.animaapp.com/mgh4p85n7yJIrM/img/ellipse-232.png"
              />
            </CardContent>
          </Card>

          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="ghost"
            className="w-[104px] h-[104px] p-0 hover:bg-transparent"
            onClick={prevTestimonial}
          >
            <img
              className="w-full h-full"
              alt="Previous"
              src="https://c.animaapp.com/mgh4p85n7yJIrM/img/button---previous-slide.svg"
            />
          </Button>
          <Button
            variant="ghost"
            className="w-[104px] h-[104px] p-0 hover:bg-transparent"
            onClick={nextTestimonial}
          >
            <img
              className="w-full h-full"
              alt="Next"
              src="https://c.animaapp.com/mgh4p85n7yJIrM/img/button---next-slide.svg"
            />
          </Button>
        </div>
      </section>

      <section className="relative px-4 md:px-[150px] py-48 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="flex flex-col items-center mb-16">
          <div className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[22.4px] mb-[30px] text-center">
            SIMPLE PRICING TO TRANSFORM YOUR BRAND
          </div>
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[-2.64px] leading-tight mb-[27px]">
            Choose the package that matches your business stage. Upgrade anytime as you grow.
          </h2>
          <p className="w-full max-w-[600px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg text-center tracking-[0] leading-[25.2px]">
            Transparent pricing with no hidden fees. Each package includes everything you need to launch and scale your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {pricingPackages.map((plan, index) => (
            <Card
              key={index}
              className="relative bg-[#222222] rounded-2xl border border-[#b9fd4f5e] overflow-visible h-[1400px] flex flex-col"
            >
              <CardContent className="p-9 flex flex-col flex-1">
                {index === 1 && (
                  <div className="absolute -top-[10px] left-9 inline-flex items-center justify-center px-5 py-1.5 bg-[#b9fd50] text-[#111204] rounded-lg">
                    <div className="[font-family:'Outfit',Helvetica] font-light text-sm text-center tracking-[0] leading-[25.2px] whitespace-nowrap">
                      Most Popular
                    </div>
                  </div>
                )}

                <h3 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-[34px] tracking-[-0.68px] leading-[34px] mb-[20px] mt-[41px]">
                  {plan.name}
                </h3>

                <div className="[font-family:'Outfit',Helvetica] font-semibold text-[#b9fd50] text-[48.5px] text-center tracking-[-0.97px] leading-[normal] mb-[10px]">
                  {plan.price}
                </div>

                <div className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm text-center tracking-[-0.28px] leading-[normal] mb-[20px]">
                  {plan.period}
                </div>

                <p className="w-full max-w-[265px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[-0.28px] leading-[normal] mb-[20px]">
                  {plan.tagline}
                </p>

                <div className="w-full max-w-[265px] [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm tracking-[-0.28px] leading-[normal] mb-[20px]">
                  Perfect for: {plan.perfectFor}
                </div>

                <div className="w-full max-w-[265px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[-0.28px] leading-[normal] mb-[43px]">
                  Timeline: {plan.timeline}
                </div>

                <img
                  className="w-full h-px object-cover mb-[43px]"
                  alt="Divider"
                  src="https://c.animaapp.com/mgh4p85n7yJIrM/img/vector-285.svg"
                />

                <div className="flex flex-col gap-[20px] pb-[180px] flex-1 min-h-0">
                  {Object.entries(plan.features).map(([category, features]) => (
                    <div key={category} className="mb-4">
                      <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#b9fd50] text-sm tracking-[0] leading-[20px] mb-2 capitalize">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <ul className="space-y-1">
                        {features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-[#b9fd50] mt-1 flex-shrink-0" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-xs tracking-[0] leading-[16px]">
                              {feature}
                          </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-9 left-9 right-9 flex flex-col gap-4">
                  <Link to="/pricing">
                    <Button
                      variant="outline"
                      className="w-full h-14 border border-[#b9fd50] text-white hover:bg-[#b9fd50] hover:text-[#111204] rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base transition-colors"
                    >
                      Get Started Now
                    </Button>
                  </Link>
                  <Button className="w-full h-14 bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
                    Choose This Package
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog section - commented out for later implementation
      <section className="relative py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="flex flex-col items-center mb-16">
          <div className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base text-center tracking-[0] leading-[22.4px] mb-[11px]">
            BLOGS
          </div>
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-5xl text-center tracking-[-2.64px] leading-[58px] mb-[15px]">
            News & Insights
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[25.2px]">
            Stay informed with the latest in digital transformation, AI integration, and business growth strategies.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-[436px] gap-y-[243px] px-[149px]">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex gap-[31px]">
              <img
                className="w-[223px] h-[212px] object-cover"
                alt={post.category}
                src={post.image}
              />
              <div className="flex flex-col">
                <div className="[font-family:'Outfit',Helvetica] font-semibold text-[#b9fd50] text-sm tracking-[0] leading-[normal] mb-[30px]">
                  {post.category}
                </div>
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal] mb-[24px] whitespace-pre-line">
                  {post.title}
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ababb2] text-base tracking-[0] leading-6 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#ababb2]">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button
            variant="outline"
            className="h-[71px] px-[35px] py-[15px] rounded-2xl border border-[#b9fd50] [font-family:'Outfit',Helvetica] font-bold text-[#a5d96f] text-sm text-center hover:bg-[#b9fd50] hover:text-[#111204] transition-colors"
          >
            LOAD MORE
          </Button>
        </div>
      </section>
      */}

      <section className="relative bg-white py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="relative w-[543px] h-[947px] mx-auto px-4">
          {/* FAQ's Title */}
          <h2 className="absolute w-[435px] h-[58px] left-[calc(50%_-_435px/2_-_6.5px)] top-0 [font-family:'Outfit',Helvetica] font-bold text-[48px] text-center tracking-[-0.055em] leading-[58px] text-[#111204]">
            FAQ's
          </h2>

          {/* Subtitle */}
          <p className="absolute w-[333px] h-[25px] left-[calc(50%_-_333px/2_-_8.5px)] top-[70px] [font-family:'Outfit',Helvetica] font-normal text-[18px] text-center leading-[140%] text-[rgba(0,0,0,0.6)]">
            Providing answers to your questions
          </p>

          {/* FAQ Items Container */}
          <div className="absolute w-[543px] h-[788px] left-[calc(50%_-_543px/2_-_7.5px)] top-[159px]">
            <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-[27px]"
              >
                  <AccordionTrigger className="relative w-[543px] h-[86px] bg-[#111204] rounded-lg px-[33px] [font-family:'Poppins',Helvetica] font-medium text-white text-[18px] leading-[30px] hover:no-underline">
                    <div className="absolute w-[48px] h-[48px] left-[33px] top-[20px] bg-[#B9FD50] rounded-full flex items-center justify-center">
                      <svg className="w-[24px] h-[16px] text-[#111204]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <span className="absolute left-[100px] top-[29px] w-[400px] h-[30px] text-left">
                  {item.question}
                    </span>
                </AccordionTrigger>
                {item.answer && (
                    <AccordionContent className="bg-[#111204] rounded-lg px-[33px] pt-[20px] pb-[33px] [font-family:'Poppins',Helvetica] font-normal text-white text-[16px] leading-[30px] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=closed]:opacity-0 data-[state=open]:opacity-100 transition-opacity duration-200 overflow-hidden">
                      <div className="text-left">
                    {item.answer}
                      </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
          </div>

          {/* Question Input Form */}
          <div className="absolute w-[539px] h-[132px] left-[2px] top-[815px] border-[1.5px] border-solid border-[#111204] rounded-[14px]">
            <Input
              placeholder="Ask us what you want to know..."
              className="absolute w-[219px] h-[11px] left-[18px] top-[18px] border-0 bg-transparent [font-family:'Outfit',Helvetica] font-normal text-[16px] leading-[175%] tracking-[-0.01em] text-[#8D8D8D] opacity-60 placeholder:text-[#8D8D8D]"
            />
          </div>

          {/* Info Text and Send Button */}
          <p className="absolute w-[242px] h-[50px] left-[7px] top-[897px] [font-family:'Outfit',Helvetica] font-normal text-[14px] leading-[175%] tracking-[-0.01em] text-[rgba(17,18,4,0.6)]">
              We will answer your questions via email within 48 hours.
            </p>

          <Button className="absolute w-[140px] h-[48px] left-[403px] top-[897px] bg-[#B9FD50] rounded-[30px] [font-family:'Outfit',Helvetica] font-semibold text-[16px] leading-[20px] text-center tracking-[-0.02em] text-[#111204] hover:bg-[#a5d96f]">
              Send
            </Button>
        </div>
      </section>

      <footer className="relative px-4 md:px-[102px] py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="relative w-full max-w-[1209px] h-auto min-h-[424px] bg-[#1e1f08] rounded-[35px] mb-[152px] mx-auto">
          <div className="absolute top-[71px] left-[420px] w-[365px] h-[271px] bg-[#b9fd5033] rounded-[182.5px/135.5px] blur-[174px]" />

          <div className="relative z-10 flex flex-col items-center pt-[59px]">
            <h2 className="w-full max-w-[600px] [font-family:'Outfit',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-[64px] text-center tracking-[-3.52px] leading-tight mb-[84px]">
              Become Part of the Digital Revolution
            </h2>

            <p className="w-full max-w-[600px] [font-family:'Outfit',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[25.2px] mb-[40px]">
              Join hundreds of successful businesses that transformed their digital presence with Nonstandard Digital. Your competition isn't waiting – why should you?
            </p>

            <p className="w-full max-w-[600px] [font-family:'Outfit',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[22px] mb-[40px]">
              The difference between struggling businesses and thriving ones often comes down to digital infrastructure. Stop losing customers to competitors with better websites. Stop wasting hours on manual tasks that could be automated. Stop leaving money on the table because your systems don't talk to each other.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-[40px] text-sm text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#b9fd50]" />
                <span>Zero risk – clear deliverables and timelines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#b9fd50]" />
                <span>Transparent pricing – no hidden costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#b9fd50]" />
                <span>Expert team – senior-level talent</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/pricing">
              <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-[39px] rounded-lg flex items-center gap-[11px]">
                <span className="[font-family:'Outfit',Helvetica] font-medium text-base tracking-[0] leading-[22px]">
                    Get Started Today
                </span>
                  <ArrowRight className="w-[17.49px] h-[17.49px]" />
              </Button>
            </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#111204] h-14 px-[39px] rounded-lg">
                  <span className="[font-family:'Outfit',Helvetica] font-medium text-base tracking-[0] leading-[22px]">
                    Schedule Free Consultation
                  </span>
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <p className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm tracking-[0] leading-[20px]">
                Limited Availability: We only take on 12 new projects per month to ensure quality. 7 slots remaining for November 2025.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-[122px] gap-8">
          <div className="flex flex-col">
            <Link to="/" className="mb-[64px]">
              <img src={nstLogo} alt="NST Digital Logo" className="h-10 w-auto" />
            </Link>

            <p className="w-full max-w-[311px] [font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[19.5px]">
              Your complete digital business partner. From websites to AI automation, we build the digital infrastructure that grows businesses.
            </p>
          </div>

          <div className="flex flex-col gap-[49px]">
            <div className="flex items-center gap-3">
              <img
                className="w-5 h-5"
                alt="Phone"
                src="https://c.animaapp.com/mgh4p85n7yJIrM/img/frame-3.svg"
              />
              <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0.50px] leading-[normal]">
                +1 (555) 123-4567
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                className="w-5 h-5"
                alt="Email"
                src="https://c.animaapp.com/mgh4p85n7yJIrM/img/frame-2.svg"
              />
              <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0.50px] leading-[normal]">
                hello@nst.digital
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img className="w-6 h-6" alt={icon.alt} src={icon.src} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <img
          className="w-full h-px object-cover mb-[30px]"
          alt="Line"
          src="https://c.animaapp.com/mgh4p85n7yJIrM/img/line-6.svg"
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-4 md:gap-8">
            <Link to="/" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              Home
            </Link>
            <Link to="/about" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              About
            </Link>
            <Link to="/services" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              Services
            </Link>
            <a href="#portfolio" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              Portfolio
            </a>
            <Link to="/pricing" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-[normal] text-center md:text-left">
            © 2025 Nonstandard Digital (NST). All rights reserved. Proudly building the future of digital business.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;