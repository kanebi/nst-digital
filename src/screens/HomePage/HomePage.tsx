import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import type { JSX } from "react";
const navigationItems = [
  { label: "Process" },
  { label: "Benefits" },
  { label: "Services" },
  { label: "Portfolio" },
  { label: "FAQ" },
];

const processSteps = [
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group.png",
    title: "Subscribe & get started",
    description:
      "Submit as many design tasks as you need without worrying about individual project fees.",
  },
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-1.png",
    title: "Polished designs - on time",
    description:
      "Our designers get to work to deliver your request. Receive your design within a few days.",
  },
  {
    icon: "https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-2.png",
    title: "Revisions made simple",
    description:
      "Custom designs, prompt replies and as many revisions as you need.",
  },
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
    title: "Powered by - Webflow",
    description:
      "We build every site on Webflow, making them dynamic, accessible, and easily scalable. It's easy for you like Squarespace but better.",
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
  "Web design & UI",
  "Social media visuals",
  "Infographics",
  "Design system",
  "Email design",
  "Stationery",
  "Icons",
  "Packaging & merch",
  "Signage",
  "Brochures",
  "Logos & branding",
  "Digital ads",
  "Wireframes",
];

const pricingPlans = [
  {
    name: "Standard",
    price: "$2,995/m",
    description:
      "One request at a time. For companies who need on-going design support.",
    badge: "Most Popular",
    badgeColor: "bg-[#b9fd50]",
    features: [
      "1x active task at a time",
      "Unlimited revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "Work with senior designers",
      "2-3 days turn around time",
      "Top tier design",
    ],
  },
  {
    name: "Growth",
    price: "$4,795/m",
    description:
      "Double the requests. For companies with increasing design needs. Limited spots.",
    badge: "Best value",
    badgeColor: "bg-white",
    features: [
      "2x active task at a time",
      "Unlimited revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "Work with senior designers",
      "2-3 days turn around time",
      "Top tier design",
    ],
  },
  {
    name: "Basic - Weekly",
    price: "$890/m",
    description:
      "Perfect if you want to try the subscription out or only have a few one-off tasks.",
    badge: null,
    badgeColor: "",
    features: [
      "Fixed Scope of work",
      "2 rounds of revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "1x designer",
      "2-5 days turn around time",
      "Top tier design",
    ],
  },
];

const blogPosts = [
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here.png",
    category: "BRANDING",
    title: "What is the branding, \nand what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
  },
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-3.png",
    category: "TIKTOK",
    title: "What is the branding, \nand what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
  },
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-1.png",
    category: "LOGO DESIGN",
    title: "What is the branding, \nand what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
  },
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-4.png",
    category: "FB",
    title: "What is the branding, \nand what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
  },
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-2.png",
    category: "AI",
    title: "What is the branding, \nand what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
  },
  {
    image: "https://c.animaapp.com/mgh4p85n7yJIrM/img/place-image-here-5.png",
    category: "NFT",
    title: "What is the branding, \nand what we need it?",
    excerpt: "On the other hand, we denounce with righteous indignation and…",
  },
];

const faqItems = [
  {
    question: "Do you have specific princing plans to show?",
    answer: null,
  },
  {
    question: "How many years of experience do you have?",
    answer:
      "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.",
  },
  {
    question: "What companies have you worked with?",
    answer: null,
  },
  {
    question: "Am I safe leaving my company in your hands?",
    answer: null,
  },
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
  return (
    <div
      className="bg-[#111204] overflow-hidden w-full min-w-[1440px] relative"
      data-model-id="1:2276"
    >
      <header className="relative z-10 flex items-center justify-between px-[148px] pt-[39px] pb-8 translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="[font-family:'Outfit',Helvetica] font-bold text-[32px] tracking-[0] leading-[44.8px] whitespace-nowrap">
          <span className="text-white">Kro</span>
          <span className="text-[#b9fd50]">nix</span>
        </div>

        <nav className="flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.label.toLowerCase()}`}
              className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
          Get Started
        </Button>
      </header>

      <section className="relative flex flex-col items-center pt-[127px] pb-[100px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="absolute top-[166px] left-[calc(50%_-_208px)] w-[416px] h-[309px] bg-[#b9fd5066] rounded-[208px/154.5px] blur-[174px]" />

        <h1 className="relative z-10 w-[983px] [font-family:'Outfit',Helvetica] text-8xl text-center tracking-[-2.88px] leading-[103px]">
          <span className="font-bold text-white tracking-[-2.76px]">
            Bringing Your&nbsp;&nbsp;
            <br />
            dream Into{" "}
          </span>
          <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#b9fd50] tracking-[-2.76px]">
            Reality
          </span>
        </h1>

        <p className="relative z-10 w-[522px] mt-[56px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg text-center tracking-[0] leading-[25.2px]">
          We increase revenue and ensure sustainable long-term growth for your
          business through powerful Webflow websites.
        </p>

        <Button className="relative z-10 mt-[92px] bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
          Book A Meeting
        </Button>

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

      <section className="relative px-[150px] py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[22.4px] mb-[38px]">
          HOW WE WORK
        </div>

        <h2 className="w-[606px] [font-family:'Outfit',Helvetica] font-semibold text-white text-[54px] tracking-[-0.81px] leading-[58px] mb-[53px]">
          Get a dedicated design team at fraction of the cost.
        </h2>

        <p className="w-[500px] [font-family:'Outfit',Helvetica] font-light text-[#ffffffcc] text-2xl tracking-[0] leading-[33.6px] mb-[172px]">
          Grow your brand with high-quality design for a flat monthly fee. Work
          with senior designers. Subscribe and make as many requests as you need
          - no limits.
        </p>

        <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base mb-[181px]">
          See Pricing
        </Button>

        <div className="grid grid-cols-3 gap-[146px]">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-[93px] h-[93px] bg-[#b9fd50] rounded-full flex items-center justify-center mb-[41px]">
                <img className="w-[45px] h-[45px]" alt="Icon" src={step.icon} />
              </div>
              <h3 className="[font-family:'Outfit',Helvetica] font-medium text-white text-[26px] tracking-[-0.26px] leading-[normal] mb-[28px]">
                {step.title}
              </h3>
              <p className="w-[283px] [font-family:'Outfit',Helvetica] font-light text-[#ffffffcc] text-lg tracking-[0] leading-[25.2px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-white py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="flex flex-col items-center mb-16">
          <h2 className="w-[450px] [font-family:'Outfit',Helvetica] font-bold text-[#111204] text-5xl text-center tracking-[-2.64px] leading-[58px] mb-[27px]">
            Our Beautiful Works
          </h2>
          <p className="w-[462px] [font-family:'Outfit',Helvetica] font-normal text-[#111204cc] text-lg text-center tracking-[0] leading-[25.2px]">
            We help our clients grow their bottom-line with clear and
            professional websites.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-[1px] px-0">
          {portfolioImages.map((image, index) => (
            <div key={index} className="w-[340px] h-[340px] overflow-hidden">
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
            <img
              className="w-[25px] h-[25px] mr-3"
              alt="Mask group"
              src="https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-11.png"
            />
            Load More
          </Button>
        </div>
      </section>

      <section className="relative px-[152px] py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[22.4px] mb-[38px]">
          OUR CAPABILITIES
        </div>

        <h2 className="w-[606px] mx-auto [font-family:'Outfit',Helvetica] font-semibold text-white text-[54px] text-center tracking-[-0.81px] leading-[58px] mb-[106px]">
          We can help you with...
        </h2>

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
            <img
              className="w-[25px] h-[25px] mr-3"
              alt="Mask group"
              src="https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-3.png"
            />
            <span className="[font-family:'Inter',Helvetica] font-light text-white text-lg">
              Load More
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
            TESTIMONIAL
          </div>
          <h2 className="w-[484px] [font-family:'Outfit',Helvetica] font-bold text-[#111204] text-5xl text-center tracking-[-0.72px] leading-[58px] mb-[27px]">
            Customer is Our Top Priority
          </h2>
          <p className="w-[462px] [font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg text-center tracking-[0] leading-[25.2px]">
            We survey all of our clients, the results of which go directly to
            our CEO.
          </p>
        </div>

        <div className="flex justify-center px-[216px]">
          <Card className="relative w-[1000px] bg-[#f8f8f8] rounded-[40px] border border-[#d9d9d9] shadow-[0px_6px_12px_#0000000d] overflow-hidden">
            <CardContent
              className="p-
[73px] pt-[73px]"
            >
              <img
                className="w-[159px] h-8 mb-[74px]"
                alt="Rating"
                src="https://c.animaapp.com/mgh4p85n7yJIrM/img/mask-group-12.png"
              />

              <h3 className="w-[495px] [font-family:'Outfit',Helvetica] font-bold text-s-2 text-[26px] tracking-[0] leading-[31px] mb-[78px]">
                Kornix Is The Best Digital Agency I Have Ever Seen! Highly
                Recommended!
              </h3>

              <p className="w-[478px] [font-family:'Outfit',Helvetica] font-normal text-[#111203c7] text-lg tracking-[0] leading-[26px] mb-[66px]">
                I recently hired <span className="font-bold">Ideapeel</span> for
                a custom web development project and couldn't be happier with
                the results. The team was able to bring my unique ideas to life
                and create a website that truly stands out.
              </p>

              <div className="flex flex-col">
                <div className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-xl tracking-[0] leading-[22px] mb-2">
                  Diana Loreza
                </div>
                <div className="[font-family:'Outfit',Helvetica] font-normal text-base tracking-[0] leading-[25.6px]">
                  <span className="text-[#111204cc]">Director of </span>
                  <span className="font-bold text-[#111204cc]">GYMSTORY</span>
                </div>
              </div>

              <img
                className="absolute top-[94px] right-[59px] w-[325px] h-[325px] object-cover"
                alt="Testimonial"
                src="https://c.animaapp.com/mgh4p85n7yJIrM/img/ellipse-232.png"
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="ghost"
            className="w-[104px] h-[104px] p-0 hover:bg-transparent"
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
          >
            <img
              className="w-full h-full"
              alt="Next"
              src="https://c.animaapp.com/mgh4p85n7yJIrM/img/button---next-slide.svg"
            />
          </Button>
        </div>
      </section>

      <section className="relative px-[150px] py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="flex flex-col items-center mb-16">
          <div className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[22.4px] mb-[30px]">
            CLEAR & SIMPLE PRICING
          </div>
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-5xl text-center tracking-[-2.64px] leading-[58px] mb-[27px] whitespace-nowrap">
            Simple pricing to level up your brand.
          </h2>
          <p className="w-[462px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg text-center tracking-[0] leading-[25.2px]">
            Senior experts. On-demand requests. Fast <br />
            turnarounds. Flat monthly fee. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[30px]">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className="relative bg-[#222222] rounded-2xl border border-[#b9fd4f5e] overflow-visible"
            >
              <CardContent className="p-9">
                {plan.badge && (
                  <div
                    className={`absolute -top-[10px] left-9 inline-flex items-center justify-center px-5 py-1.5 ${plan.badgeColor} ${plan.badgeColor === "bg-white" ? "text-[#111204]" : "text-[#111204]"} rounded-lg`}
                  >
                    <div className="[font-family:'Outfit',Helvetica] font-light text-sm text-center tracking-[0] leading-[25.2px] whitespace-nowrap">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <h3 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-[34px] tracking-[-0.68px] leading-[34px] mb-[66px] mt-[41px]">
                  {plan.name}
                </h3>

                <p className="w-[265px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[-0.28px] leading-[normal] mb-[50px]">
                  {plan.description}
                </p>

                <div className="[font-family:'Outfit',Helvetica] font-semibold text-[#b9fd50] text-[48.5px] text-center tracking-[-0.97px] leading-[normal] mb-[50px]">
                  {plan.price}
                </div>

                <div className="w-[265px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[-0.28px] leading-[normal] mb-[43px]">
                  Pause or cancel anytime
                </div>

                <img
                  className="w-full h-px object-cover mb-[43px]"
                  alt="Divider"
                  src="https://c.animaapp.com/mgh4p85n7yJIrM/img/vector-285.svg"
                />

                <div className="flex flex-col gap-[42px] mb-[93px]">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="[font-family:'Outfit',Helvetica] font-normal text-white text-[20.5px] tracking-[0] leading-[40.8px]"
                    >
                      {feature.includes("2x active task") ? (
                        <>
                          <span className="font-semibold text-[#b9fd50]">
                            2x active task
                          </span>
                          <span> at a time</span>
                        </>
                      ) : (
                        feature
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  <Button
                    variant="outline"
                    className="w-full h-14 border border-[#b9fd50] text-white hover:bg-[#b9fd50] hover:text-[#111204] rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base transition-colors"
                  >
                    Book A Call
                  </Button>
                  <Button className="w-full h-14 bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
                    Click to buy
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="flex flex-col items-center mb-16">
          <div className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base text-center tracking-[0] leading-[22.4px] mb-[11px]">
            BLOGS
          </div>
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-5xl text-center tracking-[-2.64px] leading-[58px] mb-[15px]">
            News & Articles
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[25.2px]">
            Best Articles to get started
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
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ababb2] text-base tracking-[0] leading-6">
                  {post.excerpt}
                </p>
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

      <section className="relative bg-white py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="flex flex-col items-center px-[441px]">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-5xl text-center tracking-[-2.64px] leading-[58px] mb-3">
            FAQ's
          </h2>

          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#00000099] text-lg text-center tracking-[0] leading-[25.2px] mb-16">
            Providing answers to your questions
          </p>

          <Accordion type="single" collapsible className="w-[543px] mb-16">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-[27px]"
              >
                <AccordionTrigger className="bg-[url(https://c.animaapp.com/mgh4p85n7yJIrM/img/holder.svg)] bg-[100%_100%] h-[86px] px-[33px] [font-family:'Poppins',Helvetica] font-medium text-white text-lg tracking-[0] leading-[30px] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="bg-[url(https://c.animaapp.com/mgh4p85n7yJIrM/img/holder-6.svg)] bg-[100%_100%] px-[33px] pt-[57px] pb-[33px] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[30px]">
                    {item.answer}
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>

          <div className="relative w-[540px] h-[134px] rounded-[14px] border-[1.5px] border-solid border-[#111204] mb-[26px]">
            <Input
              placeholder="Ask us what you want to know..."
              className="absolute top-[23px] left-[22px] w-[496px] border-0 bg-transparent opacity-60 [font-family:'Outfit',Helvetica] font-normal text-[#8d8d8d] text-base tracking-[-0.16px] leading-7 placeholder:text-[#8d8d8d]"
            />
          </div>

          <div className="flex items-start justify-between w-[543px]">
            <p className="w-[242px] [font-family:'Outfit',Helvetica] font-normal text-[#11120499] text-sm tracking-[-0.14px] leading-[24.5px]">
              We will answer your questions via email within 48 hours.
            </p>
            <Button className="w-[140px] h-12 bg-[#b9fd50] hover:bg-[#a5d96f] rounded-[30px] [font-family:'Outfit',Helvetica] font-semibold text-[#111204] text-base text-center tracking-[-0.32px]">
              Send
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative px-[102px] py-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="relative w-[1209px] h-[424px] bg-[#1e1f08] rounded-[35px] mb-[152px]">
          <div className="absolute top-[71px] left-[420px] w-[365px] h-[271px] bg-[#b9fd5033] rounded-[182.5px/135.5px] blur-[174px]" />

          <div className="relative z-10 flex flex-col items-center pt-[59px]">
            <h2 className="w-[506px] [font-family:'Outfit',Helvetica] font-bold text-white text-[64px] text-center tracking-[-3.52px] leading-[65px] mb-[84px]">
              Become part of the design revolution
            </h2>

            <p className="w-[462px] [font-family:'Outfit',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[25.2px] mb-[99px]">
              Jump on a membership and start <br />
              requesting designs right away!
            </p>

            <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-[39px] rounded-lg flex items-center gap-[11px]">
              <span className="[font-family:'Outfit',Helvetica] font-medium text-base tracking-[0] leading-[22px]">
                See Pricing
              </span>
              <img
                className="w-[17.49px] h-[17.49px]"
                alt="Arrow"
                src="https://c.animaapp.com/mgh4p85n7yJIrM/img/vector.svg"
              />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-start mb-[122px]">
          <div className="flex flex-col">
            <div className="[font-family:'Outfit',Helvetica] font-bold text-[32px] tracking-[0] leading-[44.8px] mb-[64px]">
              <span className="text-white">Kro</span>
              <span className="text-[#b9fd50]">nix</span>
            </div>

            <p className="w-[311px] [font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[19.5px]">
              Kornix - the leading digital agency based in the UK, working with
              top-tier clients, from start-ups to enterprises.
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
                (001) 1231 3435
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                className="w-5 h-5"
                alt="Email"
                src="https://c.animaapp.com/mgh4p85n7yJIrM/img/frame-2.svg"
              />
              <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0.50px] leading-[normal]">
                info@kronix.com
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

        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.label.toLowerCase()}`}
                className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            © 2023 shantogfx - All Right Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;