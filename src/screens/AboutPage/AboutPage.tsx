import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/Header";
import { 
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Lightbulb,
  Heart,
  Shield,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import type { JSX } from "react";

export const AboutPage = (): JSX.Element => {
  const values = [
    {
      icon: Award,
      title: "Quality Without Compromise",
      description: "Every deliverable meets our high standards. We don't ship until it's perfect."
    },
    {
      icon: Heart,
      title: "Partnership Over Transactions",
      description: "We're invested in your long-term success, not just completing projects."
    },
    {
      icon: Lightbulb,
      title: "Innovation as Standard",
      description: "We don't just keep up with technology, we lead and implement cutting-edge solutions."
    },
    {
      icon: Shield,
      title: "Honest Communication",
      description: "We tell you what you need to hear, not what you want to hear."
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "We build systems you can eventually manage yourself, giving you independence."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "25+", label: "Team Members" },
    { number: "8+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Success Rate" }
  ];

  return (
    <div className="bg-[#111204] min-h-screen">
      <Header currentPage="/about" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-[127px] pb-[100px] px-4">
        <div className="absolute top-[166px] left-[calc(50%_-_208px)] w-[416px] h-[309px] bg-[#b9fd5066] rounded-[208px/154.5px] blur-[174px] hidden md:block" />

        <h1 className="relative z-10 w-full max-w-[983px] [font-family:'Outfit',Helvetica] text-4xl md:text-6xl lg:text-8xl text-center tracking-[-2.88px] leading-tight">
          <span className="font-bold text-white tracking-[-2.76px]">
            We're Not Your Typical{" "}
          </span>
          <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#b9fd50] tracking-[-2.76px]">
            Digital Agency
          </span>
        </h1>

        <p className="relative z-10 w-full max-w-[700px] mt-[56px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg text-center tracking-[0] leading-[25.2px]">
          Nonstandard Digital was born from frustration. Our founders spent years watching talented entrepreneurs struggle with overpriced, overcomplicated digital services.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="relative bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-4xl md:text-5xl mb-8">
              Our Story
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg md:text-xl leading-relaxed mb-8">
              Agencies that promised the world and delivered mediocrity. Freelancers who disappeared mid-project. DIY solutions that ate up precious time better spent on the actual business.
            </p>
            <p className="[font-family:'Outfit',Helvetica] font-bold text-[#b9fd50] text-xl">
              We knew there had to be a better way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-3xl mb-6">
                Our Mission
              </h3>
              <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg leading-relaxed mb-6">
                To democratize enterprise-level digital solutions, making them accessible and affordable for businesses at every stage. We believe every entrepreneur deserves professional digital infrastructure without the enterprise price tag.
              </p>
              
              <h3 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-3xl mb-6">
                Our Approach
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#b9fd50] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#111204] text-lg mb-1">Transparent</h4>
                    <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">Fixed pricing, clear timelines, no surprises</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#b9fd50] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#111204] text-lg mb-1">Comprehensive</h4>
                    <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">Complete solutions, not piecemeal services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#b9fd50] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#111204] text-lg mb-1">Modern</h4>
                    <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">Cutting-edge AI and automation technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#b9fd50] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#111204] text-lg mb-1">Accessible</h4>
                    <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">Clear communication, no confusing jargon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#b9fd50] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#111204] text-lg mb-1">Results-Driven</h4>
                    <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">Your business growth is our success metric</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] rounded-2xl p-8">
              <h3 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-2xl mb-6">
                Our Team
              </h3>
              <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg leading-relaxed mb-6">
                We're a distributed team of 25+ designers, developers, strategists, and automation specialists located across the United States. Every project is handled by senior-level professionals with 8+ years of experience.
              </p>
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-[#b9fd50]" />
                <div>
                  <p className="[font-family:'Outfit',Helvetica] font-semibold text-[#111204] text-lg">No Juniors Learning on Your Dime</p>
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">Senior-level talent on every project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative bg-[#1e1f08] py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-4xl md:text-5xl mb-6">
              Our Values
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg max-w-2xl mx-auto">
              These core values guide everything we do and every decision we make for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-[#222222] border border-[#b9fd4f5e] rounded-2xl p-8 hover:border-[#b9fd50] transition-colors">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#b9fd50] rounded-full flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-[#111204]" />
                  </div>
                  <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-xl mb-4">
                    {value.title}
                  </h3>
                  <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="relative bg-[#1e1f08] py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-4xl md:text-5xl mb-6">
              Our Track Record
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg max-w-2xl mx-auto">
              Numbers don't lie. Here's what we've accomplished for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="[font-family:'Outfit',Helvetica] font-bold text-[#b9fd50] text-4xl md:text-5xl mb-2">
                  {stat.number}
                </div>
                <div className="[font-family:'Outfit',Helvetica] font-normal text-white text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-4xl md:text-5xl mb-6">
            Ready to Work With Us?
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that transformed their digital presence with Nonstandard Digital. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
              Get Started Today
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-[#111204] text-[#111204] hover:bg-[#111204] hover:text-white h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 md:px-[102px] py-24">
        <div className="relative w-full max-w-[1209px] h-auto min-h-[424px] bg-[#1e1f08] rounded-[35px] mb-[152px] mx-auto">
          <div className="absolute top-[71px] left-[420px] w-[365px] h-[271px] bg-[#b9fd5033] rounded-[182.5px/135.5px] blur-[174px]" />

          <div className="relative z-10 flex flex-col items-center pt-[59px]">
            <h2 className="w-full max-w-[600px] [font-family:'Outfit',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-[64px] text-center tracking-[-3.52px] leading-tight mb-[84px]">
              Become Part of the Digital Revolution
            </h2>

            <p className="w-full max-w-[600px] [font-family:'Outfit',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[25.2px] mb-[40px]">
              Join hundreds of successful businesses that transformed their digital presence with Nonstandard Digital. Your competition isn't waiting – why should you?
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
              <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-[39px] rounded-lg flex items-center gap-[11px]">
                <span className="[font-family:'Outfit',Helvetica] font-medium text-base tracking-[0] leading-[22px]">
                  Get Started Today
                </span>
                <ArrowRight className="w-[17.49px] h-[17.49px]" />
              </Button>
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

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-4 md:gap-8">
            <Link to="/" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              Home
            </Link>
            <Link to="/about" className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[26px] whitespace-nowrap">
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

export default AboutPage;
