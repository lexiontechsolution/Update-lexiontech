import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Cloud, Palette, Search, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      headline: 'Scalable web apps that drive business',
      description: 'We build responsive, SEO-friendly web applications using React, Next.js and Node.js. Whether it\'s a marketing site, SaaS product, or complex portal, we deliver production-ready code, performance optimization, and accessibility best practices.',
      deliverables: ['Wireframes', 'Responsive layouts', 'CMS integration', 'Unit & integration tests', 'CI/CD pipeline', 'Performance audits'],
      cta: 'Request a Web Quote',
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      headline: 'Native-like mobile experiences, faster',
      description: 'Cross-platform mobile apps with React Native or Flutter — shipped faster, maintained easier. Offline support, push notifications, app store publishing handled end-to-end.',
      deliverables: ['Prototypes', 'Android/iOS builds', 'Store listing', 'Analytics integration'],
      cta: 'Start a Mobile Project',
      color: 'purple'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      headline: 'Reliable cloud infrastructure and continuous delivery',
      description: 'AWS-focused cloud architecture, Infrastructure-as-Code, cost optimization and automated CI/CD pipelines. We help you deploy faster and run securely.',
      deliverables: ['Infra as Code (Terraform)', 'Automated pipelines (GitHub Actions/Bitbucket/Jenkins)', 'Monitoring & logging', 'Backup strategy'],
      cta: 'Fix my infrastructure',
      color: 'emerald'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      headline: 'Designs that convert visitors into customers',
      description: 'Data-informed UX research and pixel-perfect prototypes. We test flows, optimize CTAs, and deliver a design system for consistent growth.',
      deliverables: ['User research', 'Wireframes', 'Figma prototypes', 'Design system', 'A/B test recommendations'],
      cta: 'Book a Design Sprint',
      color: 'orange'
    },
    {
      icon: Search,
      title: 'Digital Marketing & SEO',
      headline: 'Get found and convert more traffic',
      description: 'SEO audits, Google Ads campaigns, social media strategy and CRO to convert visitors into customers. We combine technical SEO with conversion tactics.',
      deliverables: ['SEO audit', 'Keyword strategy', 'Ad campaigns', 'Landing page optimization'],
      cta: 'Free SEO Audit',
      color: 'amber'
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      headline: 'Keep your product running smoothly',
      description: 'Ongoing monitoring, security patches, performance tuning and feature rollouts. Flexible monthly plans to suit startups and enterprises.',
      deliverables: ['24/7 monitoring', 'Security updates', 'Performance optimization', 'Feature updates'],
      cta: 'View Maintenance Plans',
      color: 'violet'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', button: 'bg-emerald-600 hover:bg-emerald-700' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', button: 'bg-orange-600 hover:bg-orange-700' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', button: 'bg-amber-600 hover:bg-amber-700' },
    violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600', button: 'bg-violet-600 hover:bg-violet-700' }
  };

  return (
    <main className="pt-16 min-h-screen bg-white text-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-700">OUR SERVICES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive technology solutions for web, mobile, cloud, DevOps, UX design, 
              and digital marketing
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors = colorMap[service.color];
              return (
                <div 
                  key={service.title} 
                  className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-12`}
                >
                  <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <Card className="p-8 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                            <Icon className="h-8 w-8 text-slate-700" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-slate-900">
                              {service.title}
                            </h2>
                            <p className="text-slate-600 font-medium mt-1">
                              {service.headline}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 mb-4">Key Deliverables:</h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {service.deliverables.map((deliverable) => (
                              <li key={deliverable} className="flex items-center text-sm text-slate-600">
                                <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3 flex-shrink-0 border ${colors.border}`}></div>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          size="lg" 
                          className={`${colors.button} text-white font-semibold`}
                          asChild
                        >
                          <Link to="/contact">
                            {service.cta} <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className={`h-80 ${colors.bg} rounded-2xl flex items-center justify-center border ${colors.border}`}>
                      <Icon className="h-20 w-20 text-slate-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">
                Our Process
              </h2>
              <p className="text-lg text-slate-600">How we deliver exceptional results</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', description: 'Understanding your business goals and technical requirements' },
                { step: '02', title: 'Strategy', description: 'Planning the optimal solution architecture and timeline' },
                { step: '03', title: 'Development', description: 'Building with best practices and continuous feedback' },
                { step: '04', title: 'Launch & Support', description: 'Deployment, monitoring, and ongoing optimization' }
              ].map((phase) => (
                <Card key={phase.step} className="p-6 text-center border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-2xl font-black text-slate-900 mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{phase.title}</h3>
                    <p className="text-slate-600 text-sm">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-slate-600">
              Let's discuss your project requirements and create a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all duration-300"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Project <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                asChild
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      
    </main>
  );
};

export default Services;