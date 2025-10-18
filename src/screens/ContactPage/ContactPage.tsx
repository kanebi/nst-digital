import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Header } from "../../components/Header";
import { SuccessModal } from "../../components/SuccessModal";
import { useContactForm } from "../../hooks/useContactForm";
import { 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Send,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { JSX } from "react";

export const ContactPage = (): JSX.Element => {
  const { isSubmitting, submitStatus, errorMessage, submitContactForm, resetForm } = useContactForm();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    business_name: '',
    package_interest: '',
    project_description: '',
    how_did_you_hear: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.full_name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    const result = await submitContactForm(formData);
    
    if (result.success) {
      // Reset form on success
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        business_name: '',
        package_interest: '',
        project_description: '',
        how_did_you_hear: ''
      });
      // Show success modal
      setShowSuccessModal(true);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    resetForm();
  };

  return (
    <div className="bg-[#111204] min-h-screen">
      <Header currentPage="/contact" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-[127px] pb-[100px] px-4">
        <div className="absolute top-[166px] left-[calc(50%_-_208px)] w-[416px] h-[309px] bg-[#b9fd5066] rounded-[208px/154.5px] blur-[174px] hidden md:block" />

        <h1 className="relative z-10 w-full max-w-[983px] [font-family:'Outfit',Helvetica] text-4xl md:text-6xl lg:text-8xl text-center tracking-[-2.88px] leading-tight">
          <span className="font-bold text-white tracking-[-2.76px]">
            Let's Build Something{" "}
          </span>
          <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#b9fd50] tracking-[-2.76px]">
            Amazing Together
          </span>
        </h1>

        <p className="relative z-10 w-full max-w-[700px] mt-[56px] [font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg text-center tracking-[0] leading-[25.2px]">
          Whether you're just starting or ready to scale, we're here to help. Choose your preferred way to connect and let's discuss your vision.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="relative bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-[#1e1f08] rounded-2xl p-8 border border-[#b9fd4f5e]">
              <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-3xl mb-6">
                Get Your Free Consultation
              </h2>
              

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <span className="[font-family:'Outfit',Helvetica] font-medium">
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full h-12 bg-[#222222] border border-[#b9fd4f5e] rounded-lg text-white placeholder:text-[#8D8D8D] focus:border-[#b9fd50] focus:ring-1 focus:ring-[#b9fd50]"
                    />
                  </div>
                  <div>
                    <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="w-full h-12 bg-[#222222] border border-[#b9fd4f5e] rounded-lg text-white placeholder:text-[#8D8D8D] focus:border-[#b9fd50] focus:ring-1 focus:ring-[#b9fd50]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      required
                      className="w-full h-12 bg-[#222222] border border-[#b9fd4f5e] rounded-lg text-white placeholder:text-[#8D8D8D] focus:border-[#b9fd50] focus:ring-1 focus:ring-[#b9fd50]"
                    />
                  </div>
                  <div>
                    <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                      Business Name
                    </label>
                    <Input
                      type="text"
                      name="business_name"
                      value={formData.business_name}
                      onChange={handleInputChange}
                      placeholder="Your business name"
                      className="w-full h-12 bg-[#222222] border border-[#b9fd4f5e] rounded-lg text-white placeholder:text-[#8D8D8D] focus:border-[#b9fd50] focus:ring-1 focus:ring-[#b9fd50]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                    Package Interest
                  </label>
                  <select 
                    name="package_interest"
                    value={formData.package_interest}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-[#222222] border border-[#b9fd4f5e] rounded-lg text-white px-3 focus:border-[#b9fd50] focus:ring-1 focus:ring-[#b9fd50]"
                  >
                    <option value="">Select a package</option>
                    <option value="starter">Business Starter - $1,500</option>
                    <option value="growth">Nonstandard Growth - $3,500</option>
                    <option value="premium">Premium Enterprise - $5,000</option>
                    <option value="custom">Custom Solution</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    name="project_description"
                    value={formData.project_description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your business goals, current challenges, and what you hope to achieve..."
                    required
                    className="w-full bg-[#222222] border border-[#b9fd4f5e] rounded-lg text-white placeholder:text-[#8D8D8D] p-3 focus:border-[#b9fd50] focus:ring-1 focus:ring-[#b9fd50] resize-none"
                  />
                </div>

                <div>
                  <label className="block [font-family:'Outfit',Helvetica] font-medium text-white text-sm mb-2">
                    How Did You Hear About Us?
                  </label>
                  <select 
                    name="how_did_you_hear"
                    value={formData.how_did_you_hear}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-[#222222] border border-[#b9fd4f5e] rounded-lg text-white px-3 focus:border-[#b9fd50] focus:ring-1 focus:ring-[#b9fd50]"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg [font-family:'Outfit',Helvetica] font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#111204] border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get My Free Consultation
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information & Process */}
            <div className="space-y-8">
              {/* What Happens Next */}
              <div className="bg-[#1e1f08] rounded-2xl p-8 border border-[#b9fd4f5e]">
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-2xl mb-6">
                  What Happens Next?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#b9fd50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg mb-2">
                        Free 30-Minute Consultation
                      </h4>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm">
                        We'll discuss your goals, challenges, and how we can help transform your business.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#b9fd50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg mb-2">
                        Custom Proposal & Timeline
                      </h4>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm">
                        Receive a detailed proposal tailored to your specific needs within 24 hours.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#b9fd50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="[font-family:'Outfit',Helvetica] font-bold text-[#111204] text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg mb-2">
                        Launch Your Project
                      </h4>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm">
                        Once approved, we begin work immediately with regular updates throughout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative Contact Methods */}
              <div className="bg-[#1e1f08] rounded-2xl p-8 border border-[#b9fd4f5e]">
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-2xl mb-6">
                  Alternative Ways to Connect
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#111204]" />
                    </div>
                    <div>
                      <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg">
                        Call Us Directly
                      </h4>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">
                        +1 (555) 123-4567
                      </p>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-xs">
                        Mon-Fri, 9AM-6PM EST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#111204]" />
                    </div>
                    <div>
                      <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg">
                        Email Us
                      </h4>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-sm">
                        hello@nst.digital
                      </p>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-xs">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#b9fd50] rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-[#111204]" />
                    </div>
                    <div>
                      <h4 className="[font-family:'Outfit',Helvetica] font-semibold text-white text-lg">
                        Schedule a Call
                      </h4>
                      <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-sm">
                        Book a free 30-minute consultation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-[#1e1f08] rounded-2xl p-8 border border-[#b9fd4f5e]">
                <h3 className="[font-family:'Outfit',Helvetica] font-bold text-white text-2xl mb-6">
                  Why Choose NST Digital?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#b9fd50] flex-shrink-0" />
                    <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-sm">
                      500+ Successful Projects Delivered
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#b9fd50] flex-shrink-0" />
                    <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-sm">
                      98% Client Satisfaction Rate
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#b9fd50] flex-shrink-0" />
                    <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-sm">
                      Average 4.9/5 Star Rating
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#b9fd50] flex-shrink-0" />
                    <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-sm">
                      Zero Failed Launches
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#b9fd50] flex-shrink-0" />
                    <span className="[font-family:'Outfit',Helvetica] font-normal text-white text-sm">
                      100% Satisfaction Guarantee
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#1e1f08] py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-white text-4xl md:text-5xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="[font-family:'Outfit',Helvetica] font-normal text-[#ffffffcc] text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that transformed their digital presence with Nonstandard Digital. Your competition isn't waiting – why should you?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#111204] h-14 px-8 rounded-lg [font-family:'Outfit',Helvetica] font-medium text-base">
              View Our Work
            </Button>
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
              <Button className="bg-[#b9fd50] text-[#111204] hover:bg-[#a5d96f] h-14 px-[39px] rounded-lg flex items-center gap-[11px]">
                <span className="[font-family:'Outfit',Helvetica] font-medium text-base tracking-[0] leading-[22px]">
                  Get Started Today
                </span>
                <ArrowRight className="w-[17.49px] h-[17.49px]" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#111204] h-14 px-[39px] rounded-lg">
                <span className="[font-family:'Outfit',Helvetica] font-medium text-base tracking-[0] leading-[22px]">
                  Schedule Free Consultation
                </span>
              </Button>
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
            <a href="/portfolio" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              Portfolio
            </a>
            <Link to="/pricing" className="[font-family:'Outfit',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap hover:text-[#b9fd50] transition-colors">
              Pricing
            </Link>
            <a href="/contact" className="[font-family:'Outfit',Helvetica] font-normal text-[#b9fd50] text-base tracking-[0] leading-[26px] whitespace-nowrap">
              Contact
            </a>
          </nav>

          <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-[normal] text-center md:text-left">
            © 2025 Nonstandard Digital (NST). All rights reserved. Proudly building the future of digital business.
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={handleCloseSuccessModal} 
      />
    </div>
  );
};

export default ContactPage;
