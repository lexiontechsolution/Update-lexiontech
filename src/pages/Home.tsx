import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Globe, CheckCircle, Star, Sparkles, Cpu, Rocket } from 'lucide-react';

const HeroSection = () => (
  <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white text-slate-900 overflow-hidden">
    {/* Professional background elements */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-white to-slate-100/50"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9InJnYmEoMzAsNDEs2MSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center relative z-10">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          {/* Professional badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="text-slate-700 font-semibold text-sm">ENTERPRISE SOLUTIONS</p>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <p className="text-slate-600 text-sm">Web Development • Mobile Apps • Cloud Solutions</p>
          </div>
          
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-900">
              <span className="block">Empowering</span>
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text">
                Your Digital
              </span>
              <span className="block text-transparent bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text">
                Transformation
              </span>
            </h1>
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
          
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" asChild className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link to="/contact" className="flex items-center gap-2">
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-slate-200 text-slate-700 hover:bg-slate-800 hover:border-slate-400 rounded-xl px-8 py-4 font-semibold transition-all duration-300">
            <Link to="/services" className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              View Our Services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const ValueProps = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-700">ENTERPRISE SOLUTIONS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Professional Excellence
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Trusted by industry leaders for reliable, scalable, and efficient solutions
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Zap className="h-8 w-8 text-blue-600" />,
            title: "Enterprise Performance",
            description: "Optimized infrastructure with 99.9% uptime and enterprise-grade security",
            gradient: "from-white to-blue-50",
            border: "border-blue-200",
            accent: "bg-blue-600",
            stat: "99.9% Uptime"
          },
          {
            icon: <Target className="h-8 w-8 text-emerald-600" />,
            title: "Strategic Precision",
            description: "Data-driven insights and meticulous planning for optimal business outcomes",
            gradient: "from-white to-emerald-50",
            border: "border-emerald-200",
            accent: "bg-emerald-600",
            stat: "95% Efficiency"
          },
          {
            icon: <Globe className="h-8 w-8 text-violet-600" />,
            title: "Global Infrastructure",
            description: "Worldwide network with local expertise and seamless cross-border operations",
            gradient: "from-white to-violet-50",
            border: "border-violet-200",
            accent: "bg-violet-600",
            stat: "150+ Countries"
          },
        ].map((prop, idx) => (
          <Card key={idx} className={`p-8 border ${prop.border} bg-gradient-to-br ${prop.gradient} hover:shadow-lg hover:border-${prop.border.split('-')[1]}-300 transition-all duration-300 group relative overflow-hidden`}>
            {/* Accent bar */}
            <div className={`absolute top-0 left-0 w-full h-1 ${prop.accent}`}></div>
            
            <CardContent className="p-0">
              {/* Icon with professional badge */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-lg bg-white border ${prop.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {prop.icon}
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                  {prop.stat}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-slate-800 transition-colors">
                {prop.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {prop.description}
              </p>
              
              {/* Professional CTA */}
              
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trust indicators */}
      <div className="mt-16 pt-12 border-t border-slate-200">
        <p className="text-center text-sm font-medium text-slate-500 mb-6">TRUSTED BY INDUSTRY LEADERS</p>
        <div className="flex justify-center items-center gap-12 opacity-60">
          {['International Journal of English for Academic Excellence', 'Milestone Promoters ', 'Boss Canva'].map((company, idx) => (
            <div key={idx} className="text-slate-400 font-semibold text-lg">{company}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-700">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
            WHY LEXIONTECH?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver exceptional results
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              {
                icon: "🚀",
                title: "Rapid Deployment",
                description: "Agile development process with continuous delivery pipelines",
                stat: "2-4 Weeks"
              },
              {
                icon: "🛡️",
                title: "Enterprise Security",
                description: "Bank-level security protocols and compliance standards",
                stat: "99.9% Uptime"
              },
              {
                icon: "📈",
                title: "Growth Focused",
                description: "Solutions designed to scale with your business growth",
                stat: "300% ROI"
              },
              {
                icon: "🔧",
                title: "24/7 Support",
                description: "Round-the-clock monitoring and maintenance services",
                stat: "15 Min Response"
              }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <span className="text-sm font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="relative bg-white backdrop-blur-sm border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { percent: 95, label: "Client Satisfaction" },
                  { percent: 89, label: "Project Success" },
                  { percent: 92, label: "On-Time Delivery" },
                  { percent: 98, label: "Code Quality" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4">
                    <div className="text-3xl font-black text-slate-900 mb-2">{item.percent}%</div>
                    <div className="text-sm text-slate-600">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-slate-700 text-center font-medium">
                  "Average performance improvement across all client projects"
                </p>
                <div className="flex items-center justify-center mt-4 gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        
      </div>
    </div>
  </section>
);

const ServicePreview = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern React/Next.js applications with TypeScript for scalable and performant web solutions',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'blue'
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications with React Native and Flutter for iOS and Android',
      tech: ['React Native', 'Flutter', 'Firebase', 'App Store'],
      color: 'purple'
    },
    {
      title: 'Cloud & DevOps',
      description: 'AWS infrastructure, automated CI/CD pipelines, and scalable cloud architecture',
      tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      color: 'emerald'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design with prototyping, wireframing, and interactive mockups',
      tech: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      color: 'orange'
    },
    {
      title: 'AI Integration',
      description: 'Machine learning models and AI-powered features for intelligent applications',
      tech: ['TensorFlow', 'OpenAI', 'ML Models', 'Computer Vision'],
      color: 'violet'
    },
    {
      title: 'Blockchain',
      description: 'Web3 development, smart contracts, and decentralized application solutions',
      tech: ['Solidity', 'Web3', 'Smart Contracts', 'Ethereum'],
      color: 'amber'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', accent: 'bg-blue-500' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', accent: 'bg-purple-500' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', accent: 'bg-emerald-500' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', accent: 'bg-orange-500' },
    violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600', accent: 'bg-violet-500' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', accent: 'bg-amber-500' }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-700">OUR EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-500"
              >
                {/* Accent Bar */}
                <div className={`absolute top-0 left-0 w-full h-1 ${colors.accent} rounded-t-2xl`}></div>
                
                {/* Number Badge */}
                <div className={`w-10 h-10 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`text-sm font-bold ${colors.text}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-2 bg-white text-slate-700 text-sm rounded-lg border border-slate-200 hover:shadow-sm transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-slate-100 transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl border border-slate-200 p-8 shadow-lg max-w-2xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to start your project?</h3>
              <p className="text-slate-600">Let's discuss how we can help you achieve your goals</p>
            </div>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                asChild
              >
                <Link to="/services" className="flex items-center gap-2">
                  View All
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const Home = () => {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <ValueProps />
      <WhyChooseUs />
      <ServicePreview />
    </main>
  );
};

export default Home;