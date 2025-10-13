import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, ArrowRight, Cpu, Rocket, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'Web Development', href: '/services#web' },
      { name: 'Mobile Apps', href: '/services#mobile' },
      { name: 'Cloud & DevOps', href: '/services#cloud' },
      { name: 'AI Integration', href: '/services#ai' }
    ],
    resources: [
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Case Studies', href: '/portfolio#cases' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Free Audit', href: '/contact' }
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center mb-6 group">
                <div className="relative">
                  <div className="relative bg-slate-900 p-2 rounded-xl border border-slate-700">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-black text-slate-900 ml-3">
                  LexionTech
                </span>
              </Link>
              
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                We architect digital experiences that drive growth. Cutting-edge technology meets business strategy. 
                Based in Pollachi — serving clients globally.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 mr-3">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <a 
                    href="mailto:lexiontechsolution@gmail.com" 
                    className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium"
                  >
                    lexiontechsolution@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-purple-50 border border-purple-200 mr-3">
                    <Phone className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-slate-600 text-sm font-medium">+91 6380853637</span>
                </div>
                
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 mr-3">
                    <MapPin className="h-4 w-4 text-slate-600" />
                  </div>
                  <span className="text-slate-600 text-sm font-medium">Pollachi, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-6 flex items-center">
                    <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link 
                          to={link.href} 
                          className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-slate-900 mb-6 flex items-center">
                    <Rocket className="h-4 w-4 text-slate-700 mr-2" />
                    Services
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link) => (
                      <li key={link.name}>
                        <Link 
                          to={link.href} 
                          className="text-slate-600 hover:text-slate-900 transition-all duration-300 text-sm font-medium"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-slate-900 mb-6 flex items-center">
                    <Cpu className="h-4 w-4 text-slate-700 mr-2" />
                    Resources
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        <Link 
                          to={link.href} 
                          className="text-slate-600 hover:text-slate-900 transition-all duration-300 text-sm font-medium"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <h3 className="font-bold text-slate-900 mb-6 flex items-center">
                <Mail className="h-4 w-4 text-slate-700 mr-2" />
                Stay Updated
              </h3>
              
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Get the latest insights on AI, web development, and cutting-edge technologies.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter your email"
                    className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                  />
                  <Button 
                    size="icon" 
                    className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 flex-shrink-0 rounded-lg"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-slate-500">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="mt-8">
                <p className="text-slate-600 text-sm font-medium mb-3">Our Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'AWS', 'AI/ML'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0 font-medium">
              © {currentYear} <span className="text-slate-700">LexionTech</span>. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy" 
                className="text-slate-500 hover:text-slate-900 transition-all duration-300 text-sm font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-slate-500 hover:text-slate-900 transition-all duration-300 text-sm font-medium"
              >
                Terms of Service
              </Link>
              <div className="flex items-center text-sm text-slate-500 font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Online 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;