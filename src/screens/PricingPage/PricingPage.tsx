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
      tagline: "Everything You Need to Launch Your Digital Presence",
      perfectFor: "New businesses, startups, and entrepreneurs ready to launch",
      timeline: "14 business days",
      cta: "Contact Us",
      popular: false,
      features: [
        "Custom responsive website (5 pages)",
        "Mobile-optimized design",
        "Custom logo & brand design",
        "Social media setup (3 platforms)",
        "SSL security & hosting (1 year)",
        "Basic SEO optimization"
      ]
    },
    {
      name: "Nonstandard Growth",
      tagline: "Everything in Starter Plus Powerful Automation & Marketing",
      perfectFor: "Growing businesses ready to automate and scale operations",
      timeline: "21 business days",
      cta: "Get in Touch",
      popular: true,
      features: [
        "Everything in Business Starter",
        "Advanced website (up to 10 pages)",
        "CRM system integration",
        "Appointment scheduling system",
        "Marketing automation setup",
        "FREE Virtual Assistant (1 month)"
      ]
    },
    {
      name: "Premium Enterprise",
      tagline: "The Ultimate Digital Business Operating System",
      perfectFor: "Established businesses ready for complete digital transformation",
      timeline: "35 business days",
      cta: "Contact Us",
      popular: false,
      features: [
        "Everything in Nonstandard Growth",
        "AI chatbot & phone agent",
        "Advanced workflow automation",
        "ERP system implementation",
        "Enterprise CRM setup",
        "Dedicated Virtual Assistants (2 months)"
      ]
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic Maintenance",
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
    { service: "Development work" },
    { service: "Design updates" },
    { service: "Content updates" }
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
                    <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-2xl mb-4">
                      {pkg.name}
                    </h3>
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

                  <div className="space-y-3 mb-8 flex-1">
                    <ul className="space-y-3">
                      {pkg.features.map((feature: string, featureIndex: number) => (
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
                    <Link to="/contact">
                      <Button className={`w-full h-14 rounded-lg [font-family:'Outfit',Helvetica] font-semibold text-base transition-colors ${pkg.popular ? 'bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f]' : 'bg-transparent border-2 border-[#b9fd50] text-[#b9fd50] hover:bg-[#b9fd50] hover:text-[#111204]'}`}>
                        {pkg.cta}
                      </Button>
                    </Link>
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
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Brand Design Package</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Logo Design (Concepts & Revisions)</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">3 concepts</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">3 concepts</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">3 concepts</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Social Media Setup</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">3 platforms</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">3 platforms</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">3 platforms</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">SEO Optimization</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Basic</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">Advanced</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Advanced</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Blog Setup</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">5 posts</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">5 posts</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">CRM System</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">Basic</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Enterprise</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Email Automation Workflows</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">3 sequences</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Appointment System</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Advanced</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Marketing Ads Setup</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">Google & Facebook</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Google & Facebook</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Virtual Assistant</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">1 month (20hrs)</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">2 months (40hrs)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">AI Chatbot</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">AI Phone Agent (24/7)</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Workflow Automation</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Up to 10 processes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">ERP System</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">E-commerce Integration</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Advanced</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Support Duration</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">2 weeks</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">3 months</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-white text-sm">6 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 [font-family:'Outfit',Helvetica] font-normal text-white text-sm">Dedicated Account Manager</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center [font-family:'Outfit',Helvetica] font-normal text-[#666666] text-sm">—</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-[#b9fd50] mx-auto" /></td>
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
                Perfect for occasional updates and changes. Contact us for custom hourly rates.
              </p>
              <div className="space-y-4 mb-6">
                {payAsYouGoRates.map((rate, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#b9fd50] flex-shrink-0" />
                    <span className="[font-family:'Outfit',Helvetica] font-normal text-[#111204] text-sm">
                      {rate.service}
                    </span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-12 px-6 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-sm w-full">
                  Get in Touch
                </Button>
              </Link>
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
                          <Link to="/contact">
                            <Button variant="outline" className="mt-2 border-[#b9fd50] text-[#b9fd50] hover:bg-[#b9fd50] hover:text-[#111204] h-10 px-4 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-sm">
                              Contact Us
                            </Button>
                          </Link>
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
            <Link to="/contact">
              <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
                Contact Us Today
              </Button>
            </Link>
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
              <Link to="/contact">
                <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-[39px] rounded-lg flex items-center gap-[11px]">
                  <span className="[font-family:'Outfit',Helvetica] font-medium text-base tracking-[0] leading-[22px]">
                    Contact Us Today
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
