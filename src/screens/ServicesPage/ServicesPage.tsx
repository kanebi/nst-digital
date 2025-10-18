import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/Header";
import { 
  CheckCircle,
  ArrowRight,
  Globe,
  Palette,
  ShoppingCart,
  Database,
  Bot,
  Smartphone,
  Search,
  Settings,
  Cloud,
  Code,
  Users,
  FileText,
  Zap,
  Shield,
  Target,
  Lightbulb,
  Clock,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import type { JSX } from "react";

export const ServicesPage = (): JSX.Element => {
  const mainServices = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom, responsive websites that convert visitors into customers. Built with modern technologies and optimized for performance.",
      features: [
        "Custom responsive design",
        "Mobile-first approach",
        "Fast loading optimization",
        "SEO-friendly structure",
        "Content management systems",
        "E-commerce integration",
        "Security implementation",
        "Performance monitoring"
      ],
      packages: ["Business Starter", "Nonstandard Growth", "Premium Enterprise"]
    },
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete brand identity packages that make your business memorable and professional across all touchpoints.",
      features: [
        "Logo design & variations",
        "Brand color palette",
        "Typography system",
        "Brand style guide",
        "Business card design",
        "Email signature templates",
        "Social media graphics",
        "Brand asset library"
      ],
      packages: ["Business Starter", "Nonstandard Growth", "Premium Enterprise"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store setup with payment processing, inventory management, and customer experience optimization.",
      features: [
        "Online store setup",
        "Payment gateway integration",
        "Inventory management",
        "Order processing automation",
        "Customer account system",
        "Shipping & tax calculation",
        "Product catalog management",
        "Analytics & reporting"
      ],
      packages: ["Nonstandard Growth", "Premium Enterprise"]
    },
    {
      icon: Database,
      title: "CRM & ERP Systems",
      description: "Customer relationship management and enterprise resource planning systems to streamline your business operations.",
      features: [
        "Customer database setup",
        "Lead management system",
        "Sales pipeline automation",
        "Contact segmentation",
        "Email marketing integration",
        "Reporting & analytics",
        "Team collaboration tools",
        "Mobile app access"
      ],
      packages: ["Nonstandard Growth", "Premium Enterprise"]
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions including chatbots, AI phone agents, and workflow automation to save time and improve efficiency.",
      features: [
        "AI chatbot development",
        "AI phone agent setup",
        "Workflow automation",
        "Email automation",
        "Lead qualification",
        "Customer support automation",
        "Sentiment analysis",
        "Predictive analytics"
      ],
      packages: ["Premium Enterprise"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that extend your business reach and improve customer engagement.",
      features: [
        "iOS & Android development",
        "Cross-platform solutions",
        "User interface design",
        "Backend integration",
        "Push notifications",
        "Offline functionality",
        "App store optimization",
        "Maintenance & updates"
      ],
      packages: ["Premium Enterprise"]
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Search engine optimization and digital marketing strategies to increase your online visibility and drive qualified traffic.",
      features: [
        "Keyword research & strategy",
        "On-page SEO optimization",
        "Technical SEO audit",
        "Content marketing",
        "Google Ads management",
        "Social media advertising",
        "Email marketing campaigns",
        "Analytics & reporting"
      ],
      packages: ["Nonstandard Growth", "Premium Enterprise"]
    },
    {
      icon: Settings,
      title: "Business Process Optimization",
      description: "Streamline your business operations with automated workflows and optimized processes that save time and reduce errors.",
      features: [
        "Process analysis & mapping",
        "Workflow automation",
        "Integration development",
        "Document automation",
        "Task management systems",
        "Performance monitoring",
        "Team training",
        "Continuous improvement"
      ],
      packages: ["Premium Enterprise"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and infrastructure management to support your business growth and ensure reliability.",
      features: [
        "Cloud migration",
        "Server setup & management",
        "Database optimization",
        "Backup & disaster recovery",
        "Security implementation",
        "Performance monitoring",
        "Cost optimization",
        "24/7 support"
      ],
      packages: ["Premium Enterprise"]
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built specifically for your business needs and requirements.",
      features: [
        "Custom application development",
        "API development & integration",
        "Database design",
        "User interface design",
        "Testing & quality assurance",
        "Documentation",
        "Training & support",
        "Maintenance & updates"
      ],
      packages: ["Premium Enterprise"]
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Complete social media strategy and management to build your brand presence and engage with your audience.",
      features: [
        "Social media strategy",
        "Content creation & curation",
        "Post scheduling & automation",
        "Community management",
        "Influencer partnerships",
        "Social media advertising",
        "Analytics & reporting",
        "Crisis management"
      ],
      packages: ["Business Starter", "Nonstandard Growth", "Premium Enterprise"]
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description: "Strategic content creation and management to attract, engage, and convert your target audience.",
      features: [
        "Content strategy development",
        "Blog writing & management",
        "Video content creation",
        "Email newsletter design",
        "Case study development",
        "White paper creation",
        "Content calendar management",
        "Performance tracking"
      ],
      packages: ["Nonstandard Growth", "Premium Enterprise"]
    }
  ];

  const serviceCategories = [
    {
      title: "Web Development",
      services: ["Website Development", "E-commerce Solutions", "Custom Software Development"],
      icon: Globe,
      color: "text-blue-400"
    },
    {
      title: "Design & Branding",
      services: ["Brand Identity Design", "Social Media Management", "Content Strategy"],
      icon: Palette,
      color: "text-purple-400"
    },
    {
      title: "Business Automation",
      services: ["CRM & ERP Systems", "AI Automation", "Business Process Optimization"],
      icon: Zap,
      color: "text-green-400"
    },
    {
      title: "Marketing & Growth",
      services: ["SEO & Digital Marketing", "Social Media Management", "Content Strategy"],
      icon: Target,
      color: "text-orange-400"
    },
    {
      title: "Technology Solutions",
      services: ["Mobile App Development", "Cloud Infrastructure", "Custom Software Development"],
      icon: Code,
      color: "text-cyan-400"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and current challenges to create a tailored strategy.",
      icon: Lightbulb
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team creates detailed plans, wireframes, and designs that align with your brand and business objectives.",
      icon: Palette
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "We build and implement your solution using the latest technologies and best practices for optimal performance.",
      icon: Code
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Thorough testing ensures everything works perfectly, followed by optimization for the best user experience.",
      icon: Shield
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "We launch your solution and provide ongoing support to ensure continued success and growth.",
      icon: Award
    }
  ];

  return (
    <div className="bg-[#111204] min-h-screen">
      <Header currentPage="/services" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-[127px] pb-[100px] px-4">
        <div className="absolute top-[166px] left-[calc(50%_-_208px)] w-[416px] h-[309px] bg-[#b9fd5066] rounded-[208px/154.5px] blur-[174px] hidden md:block" />

        <h1 className="relative z-10 w-full max-w-[983px] [font-family:'Outfit',Helvetica] text-4xl md:text-6xl lg:text-8xl text-center tracking-[-2.88px] leading-tight">
          <span className="font-bold text-white tracking-[-2.76px]">
            We Can Help You{" "}
          </span>
          <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#b9fd50] tracking-[-2.76px]">
            With Everything
          </span>
        </h1>

        <p className="relative z-10 w-full max-w-[700px] mt-[56px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg text-center tracking-[0] leading-[25.2px]">
          Whatever your business needs to thrive online, we've got the expertise and experience to deliver. Our multidisciplinary team brings together designers, developers, strategists, and automation specialists to solve your unique challenges.
        </p>
      </section>

      {/* Service Categories */}
      <section className="relative bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-4xl md:text-5xl mb-6">
              Our Service Categories
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg max-w-2xl mx-auto">
              We offer comprehensive digital solutions across multiple categories to meet all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="bg-[#f8f9fa] border border-[#e9ecef] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-[#111204]" />
                    </div>
                    <h3 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-xl">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#b9fd50] flex-shrink-0" />
                        <span className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="relative bg-[#1e1f08] py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-4xl md:text-5xl mb-6">
              Our Services
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions designed to transform your business and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="bg-[#222222] border border-[#b9fd4f5e] rounded-2xl p-8 hover:border-[#b9fd50] transition-colors h-full flex flex-col">
                <CardContent className="p-0 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#111204]" />
                    </div>
                    <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-xl">
                      {service.title}
                    </h3>
                  </div>

                  <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6 flex-1">
                    <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#b9fd50] text-sm mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#b9fd50] flex-shrink-0 mt-0.5" />
                          <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-4">
                      <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#b9fd50] text-sm mb-2">
                        Available in:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.packages.map((pkg, pkgIndex) => (
                          <span key={pkgIndex} className="px-3 py-1 bg-[#b9fd5020] text-[#b9fd50] rounded-full text-xs [font-family:'Outfit',Helvetica] font-medium">
                            {pkg}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link to="/pricing">
                      <Button className="w-full bg-transparent border-2 border-[#b9fd50] text-[#b9fd50] hover:bg-[#b9fd50] hover:text-[#111204] rounded-lg [font-family:'Outfit',Helvetica] font-medium text-sm transition-colors">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-4xl md:text-5xl mb-6">
              Our Process
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg max-w-2xl mx-auto">
              We follow a proven 5-step process to ensure your project is delivered on time, on budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#b9fd50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-[#111204]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#111204] rounded-full flex items-center justify-center">
                    <span className="[font-family:'Outfit',Helvetica] font-bold text-white text-sm">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-lg mb-3">
                  {step.title}
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-[#1e1f08] py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-4xl md:text-5xl mb-6">
              Why Choose NST Digital?
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg max-w-2xl mx-auto">
              We're not your typical digital agency. Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#222222] border border-[#b9fd4f5e] rounded-2xl p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-[#111204]" />
                </div>
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-xl mb-4">
                  Lightning-Fast Delivery
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                  Get your business online in just 14 days with our streamlined process. No more waiting months for results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#222222] border border-[#b9fd4f5e] rounded-2xl p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#111204]" />
                </div>
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-xl mb-4">
                  Complete Integration
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                  Everything works together seamlessly. Your website, CRM, and automation tools all connected and optimized.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#222222] border border-[#b9fd4f5e] rounded-2xl p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-[#111204]" />
                </div>
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-xl mb-4">
                  AI-Powered Solutions
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                  Stay ahead with cutting-edge AI automation that works 24/7 to grow your business and serve your customers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#222222] border border-[#b9fd4f5e] rounded-2xl p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-[#111204]" />
                </div>
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-xl mb-4">
                  Senior-Level Talent
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                  No juniors learning on your dime. Every project is handled by experienced professionals with 8+ years of expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#222222] border border-[#b9fd4f5e] rounded-2xl p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-[#111204]" />
                </div>
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-xl mb-4">
                  Transparent Pricing
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                  Fixed pricing, clear timelines, no surprises. You know exactly what you're getting and when you're getting it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#222222] border border-[#b9fd4f5e] rounded-2xl p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#111204]" />
                </div>
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-xl mb-4">
                  Results-Driven
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                  Your business growth is our success metric. We don't just build websites, we build digital growth engines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-4xl md:text-5xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your specific needs and create a custom solution that drives real results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
              Get Started Today
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-[#111204] text-[#111204] hover:bg-[#111204] hover:text-white h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">
              Limited Availability: We only take on 12 new projects per month to ensure quality. 7 slots remaining for November 2025.
            </p>
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
            <Link to="/about" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              About
            </Link>
            <Link to="/services" className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[26px] whitespace-nowrap">
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

export default ServicesPage;
