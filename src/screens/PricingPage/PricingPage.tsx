import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/Header";
import { 
  CheckCircle,
  ArrowRight,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import type { JSX } from "react";

export const PricingPage = (): JSX.Element => {
  const pricingPackages = [
    {
      name: "Business Starter",
      price: "$1,500",
      period: "One-Time Setup",
      tagline: "Everything You Need to Launch Your Digital Presence",
      perfectFor: "New businesses, startups, and entrepreneurs ready to launch",
      timeline: "14 business days",
      cta: "Get Started Now",
      popular: false,
      features: {
        "Website Development": [
          "Custom 5-page responsive website (Home, About, Services, Portfolio/Products, Contact)",
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
        "Brand Design Package": [
          "Custom logo design (3 concepts, unlimited revisions)",
          "Brand color palette (5 colors)",
          "Typography system",
          "Brand style guide (PDF)",
          "Business card design",
          "Email signature design",
          "Social media profile graphics (Facebook, Instagram, LinkedIn covers)",
          "Brand assets kit (PNG, SVG, AI files)"
        ],
        "Social Media Setup": [
          "Professional setup of 3 social platforms",
          "Profile optimization",
          "Bio writing",
          "Consistent branding across platforms",
          "Initial content calendar template",
          "Social media guidelines document"
        ],
        "Bonus Inclusions": [
          "2 weeks of email support after launch",
          "Basic website training session (1 hour)",
          "Minor content edits (first 30 days)"
        ]
      }
    },
    {
      name: "Nonstandard Growth",
      price: "$3,500",
      period: "One-Time Setup",
      tagline: "Everything in Starter Plus Powerful Automation & Marketing",
      perfectFor: "Growing businesses ready to automate and scale operations",
      timeline: "21 business days",
      cta: "Scale Your Business",
      popular: true,
      features: {
        "Everything in Business Starter": ["All features from Business Starter package"],
        "Advanced Website Features": [
          "Up to 10 custom pages",
          "Blog setup with 5 starter posts",
          "Advanced SEO optimization",
          "Lead magnet/freebie integration",
          "Newsletter signup integration",
          "Live chat widget"
        ],
        "Advertising & Marketing Setup": [
          "Google Ads account setup and structure",
          "Facebook/Instagram Ads account setup",
          "Conversion tracking pixel installation",
          "Google Search Console setup",
          "Google My Business optimization",
          "Retargeting pixel implementation"
        ],
        "Social Media Verification & Growth": [
          "Blue check verification assistance (where applicable)",
          "Verified badge application submission",
          "Social media audit and optimization",
          "Content strategy consultation",
          "3 months of scheduled posts template"
        ],
        "CRM System Integration": [
          "Basic CRM setup (HubSpot, Zoho, or similar)",
          "Lead capture forms connected to CRM",
          "Email automation workflows (3 sequences)",
          "Contact segmentation setup",
          "Sales pipeline configuration",
          "Mobile app setup and training"
        ],
        "Scheduling & Appointment System": [
          "Calendar integration (Calendly, Acuity, or similar)",
          "Automated booking confirmations",
          "Reminder system setup (email & SMS)",
          "Sync with Google Calendar",
          "Buffer time and availability rules",
          "Payment collection for appointments"
        ],
        "FREE Virtual Assistant - 1 Month": [
          "20 hours/month of VA support",
          "Task management assistance",
          "Email management",
          "Appointment scheduling",
          "Customer follow-ups",
          "Administrative support"
        ],
        "Additional Support": [
          "3 months priority email support",
          "Monthly performance review call",
          "2 hours of training/consultation"
        ]
      }
    },
    {
      name: "Premium Enterprise",
      price: "$5,000",
      period: "One-Time Setup",
      tagline: "The Ultimate Digital Business Operating System",
      perfectFor: "Established businesses ready for complete digital transformation",
      timeline: "35 business days",
      cta: "Transform Your Business",
      popular: false,
      features: {
        "Everything in Nonstandard Growth": ["All features from Nonstandard Growth package"],
        "AI-Powered Automation": [
          "Custom AI chatbot for website (trained on your business)",
          "AI phone agent for customer service",
          "Handles incoming calls 24/7",
          "Answers FAQs automatically",
          "Books appointments",
          "Escalates complex issues to human",
          "Call recording and transcription",
          "AI email responder (basic inquiry handling)",
          "Sentiment analysis and reporting"
        ],
        "Advanced Workflow Automation": [
          "Custom automated workflows (up to 10 processes)",
          "Multi-step automation sequences",
          "Conditional logic and branching",
          "Third-party app integrations (Slack, WhatsApp, etc.)",
          "Automated reporting and notifications",
          "Document generation automation",
          "Invoice and payment reminders"
        ],
        "ERP System Setup": [
          "Enterprise Resource Planning implementation",
          "Inventory management (if applicable)",
          "Order processing automation",
          "Financial tracking integration",
          "Multi-department coordination",
          "Resource allocation tools",
          "Comprehensive reporting dashboards"
        ],
        "Advanced CRM with Sales Intelligence": [
          "Enterprise CRM setup (Salesforce, Microsoft Dynamics, or custom)",
          "AI-powered lead scoring",
          "Advanced sales funnel automation",
          "Custom reporting and analytics",
          "Team collaboration features",
          "Mobile CRM app configuration",
          "Integration with accounting software"
        ],
        "Premium Website Features": [
          "Up to 20 custom pages",
          "Advanced e-commerce integration (if needed)",
          "Membership/portal functionality",
          "Custom API integrations",
          "Advanced security features",
          "Automated backup systems",
          "Performance monitoring tools"
        ],
        "Dedicated Virtual Assistants - 2 Months": [
          "2 VAs assigned to your account",
          "40 hours/month total support (80 hours over 2 months)",
          "Customized to your specific needs",
          "Process documentation",
          "Standard operating procedure creation",
          "Team training support"
        ],
        "Premium Support Package": [
          "6 months priority support (24/7 emergency line)",
          "Bi-weekly strategy calls",
          "Quarterly comprehensive business review",
          "5 hours/month of consulting/adjustments included",
          "Dedicated account manager",
          "Priority feature requests"
        ],
        "Strategic Consulting": [
          "Digital transformation roadmap",
          "Competitor analysis",
          "Customer journey mapping",
          "Conversion rate optimization plan",
          "Growth strategy consultation"
        ]
      }
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic Maintenance",
      price: "$299",
      period: "/month",
      features: [
        "2 hours of updates/changes",
        "Security updates",
        "Backup monitoring",
        "Uptime monitoring",
        "Priority email support",
        "Monthly performance report"
      ]
    },
    {
      name: "Growth Maintenance",
      price: "$599",
      period: "/month",
      features: [
        "5 hours of updates/changes",
        "Everything in Basic",
        "SEO monitoring",
        "Content updates",
        "A/B testing support",
        "Bi-weekly check-ins"
      ]
    },
    {
      name: "Premium Maintenance",
      price: "$999",
      period: "/month",
      features: [
        "10 hours of updates/changes",
        "Everything in Growth",
        "Priority support (4-hour response)",
        "Strategic consulting",
        "Advanced analytics",
        "Weekly optimization",
        "Dedicated account manager"
      ]
    }
  ];

  const payAsYouGoRates = [
    { service: "Development work", rate: "$150/hour" },
    { service: "Design updates", rate: "$100/hour" },
    { service: "Content updates", rate: "$75/hour" }
  ];

  return (
    <div className="bg-[#111204] min-h-screen">
      <Header currentPage="/pricing" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-[127px] pb-[100px] px-4">
        <div className="absolute top-[166px] left-[calc(50%_-_208px)] w-[416px] h-[309px] bg-[#b9fd5066] rounded-[208px/154.5px] blur-[174px] hidden md:block" />

        <h1 className="relative z-10 w-full max-w-[983px] [font-family:'Outfit',Helvetica] text-4xl md:text-6xl lg:text-8xl text-center tracking-[-2.88px] leading-tight">
          <span className="font-bold text-white tracking-[-2.76px]">
            Simple Pricing to{" "}
          </span>
          <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#b9fd50] tracking-[-2.76px]">
            Transform Your Brand
          </span>
        </h1>

        <p className="relative z-10 w-full max-w-[700px] mt-[56px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg text-center tracking-[0] leading-[25.2px]">
          Choose the package that matches your business stage. Upgrade anytime as you grow. No hidden fees. No surprise charges. Just transparent, powerful digital infrastructure.
        </p>
      </section>

      {/* Main Pricing Packages */}
      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-4xl md:text-5xl mb-6">
              Choose Your Package
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg max-w-2xl mx-auto">
              All packages include everything you need to launch and grow your digital presence. Upgrade anytime as your business grows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <Card key={index} className={`relative bg-[#222222] rounded-2xl border border-[#b9fd4f5e] overflow-visible h-full flex flex-col ${pkg.popular ? 'border-[#b9fd50] shadow-lg shadow-[#b9fd5020]' : ''}`}>
                <CardContent className="p-8 flex flex-col flex-1">
                  {pkg.popular && (
                    <div className="absolute -top-4 left-8 inline-flex items-center justify-center px-4 py-2 bg-[#b9fd50] text-[#111204] rounded-lg">
                      <div className="[font-family:'Outfit',Helvetica] font-semibold text-sm text-center tracking-[0] leading-[20px] whitespace-nowrap">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-2xl mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="[font-family:'Outfit',Helvetica] font-bold text-[#b9fd50] text-4xl">
                        {pkg.price}
                      </span>
                      <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-lg ml-2">
                        {pkg.period}
                      </span>
                    </div>
                    <p className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg mb-2">
                      {pkg.tagline}
                    </p>
                    <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm mb-4">
                      {pkg.perfectFor}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-[#b9fd50] text-sm">
                      <Clock className="w-4 h-4" />
                      <span className="[font-family:'Outfit',Helvetica] font-medium">
                        {pkg.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8 flex-1">
                    {Object.entries(pkg.features).map(([category, features]) => (
                      <div key={category}>
                        <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-[#b9fd50] text-sm tracking-[0] leading-[20px] mb-3 capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <ul className="space-y-2">
                          {features.map((feature: string, featureIndex: number) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#b9fd50] flex-shrink-0 mt-0.5" />
                              <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-sm leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button className={`w-full h-14 rounded-lg [font-family:'Outfit',Helvetica] font-semibold text-base transition-colors ${pkg.popular ? 'bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f]' : 'bg-transparent border-2 border-[#b9fd50] text-[#b9fd50] hover:bg-[#b9fd50] hover:text-[#111204]'}`}>
                      {pkg.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="relative bg-[#1e1f08] py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-4xl md:text-5xl mb-6">
              Feature Comparison
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg max-w-2xl mx-auto">
              See exactly what's included in each package to make the right choice for your business.
            </p>
          </div>

          <div className="bg-[#222222] rounded-2xl overflow-hidden border border-[#b9fd4f5e]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#333333]">
                  <tr>
                    <th className="px-6 py-4 text-left [font-family:'Outfit',Helvetica] font-semibold text-white text-sm">Feature</th>
                    <th className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-semibold text-white text-sm">Starter</th>
                    <th className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-semibold text-[#b9fd50] text-sm">Growth</th>
                    <th className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-semibold text-white text-sm">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#444444]">
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Custom Website</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">5 pages</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">10 pages</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">20 pages</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Brand Design</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">CRM System</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">Basic</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Enterprise</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Appointment System</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Advanced</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Virtual Assistant</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">1 month</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">2 months (2 VAs)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">AI Chatbot</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">AI Phone Agent</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Support Duration</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">2 weeks</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">3 months</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">6 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Support Section */}
      <section className="relative bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-4xl md:text-5xl mb-6">
              We're Here Long After Launch
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg max-w-2xl mx-auto">
              Your one-time setup is just the beginning. As your business grows and evolves, you'll need updates, enhancements, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pay-As-You-Go */}
            <div className="bg-[#f8f9fa] rounded-2xl p-8">
              <h3 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-2xl mb-6">
                Pay-As-You-Go
              </h3>
              <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm mb-6">
                Perfect for occasional updates and changes. Minimum 2-hour blocks.
              </p>
              <div className="space-y-4">
                {payAsYouGoRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">
                      {rate.service}
                    </span>
                    <span className="[font-family:'Outfit',Helvetica] font-semibold text-[#b9fd50] text-sm">
                      {rate.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Maintenance Plans */}
            <div>
              <h3 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-2xl mb-6">
                Monthly Maintenance Plans
              </h3>
              <div className="space-y-6">
                {maintenancePlans.map((plan, index) => (
                  <Card key={index} className="bg-[#f8f9fa] border border-[#e9ecef] rounded-xl p-6">
                    <CardContent className="p-0">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-lg mb-1">
                            {plan.name}
                          </h4>
                          <div className="flex items-baseline gap-1">
                            <span className="[font-family:'Outfit',Helvetica] font-bold text-[#b9fd50] text-2xl">
                              {plan.price}
                            </span>
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">
                              {plan.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#b9fd50] flex-shrink-0 mt-0.5" />
                            <span className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-[#1e1f08] py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-4xl md:text-5xl mb-6">
              Pricing FAQ
            </h2>
            <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg max-w-2xl mx-auto">
              Common questions about our pricing and packages.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-[#222222] border border-[#b9fd4f5e] rounded-xl">
              <CardContent className="p-6">
                <h3 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg mb-3">
                  Can I upgrade my package later?
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                  Yes! Many of our clients start with Business Starter and upgrade as they grow. If you upgrade within 6 months, we'll credit your initial package cost toward the higher tier. You only pay the difference.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#222222] border border-[#b9fd4f5e] rounded-xl">
              <CardContent className="p-6">
                <h3 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg mb-3">
                  Do you offer payment plans?
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                  Yes! For packages over $3,000, we offer payment plans: 50% due at project start, 50% due upon completion. For the Premium Enterprise package, we can arrange monthly payment terms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#222222] border border-[#b9fd4f5e] rounded-xl">
              <CardContent className="p-6">
                <h3 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg mb-3">
                  Is hosting and domain included?
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                  Yes! Your first year of hosting and domain registration is included in all packages. After the first year, hosting costs typically range from $15-50/month depending on your traffic and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#222222] border border-[#b9fd4f5e] rounded-xl">
              <CardContent className="p-6">
                <h3 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg mb-3">
                  What if I'm not satisfied with the design?
                </h3>
                <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm leading-relaxed">
                  Your satisfaction is our priority. Each package includes multiple revision rounds. We start with a detailed discovery session and provide mockups for your approval before development begins. In 500+ projects, we've never had a client walk away unsatisfied.
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
            Ready to Get Started?
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-lg mb-8 max-w-2xl mx-auto">
            Choose your package and let's transform your digital presence. All packages include a free consultation to ensure we're the right fit for your business.
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
            <Link to="/services" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              Services
            </Link>
            <a href="#portfolio" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              Portfolio
            </a>
            <Link to="/pricing" className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[26px] whitespace-nowrap">
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

export default PricingPage;
