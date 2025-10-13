import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Palette, Code, TrendingUp, Rocket, Cpu, Target, Zap, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-16 min-h-screen bg-white text-slate-900">
      {/* Professional Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-white border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 border border-blue-200 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-blue-700 font-semibold text-sm">ABOUT LEXIONTECH</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-slate-900">
              <span className="block">Engineering</span>
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text">
                Digital
              </span>
              <span className="block text-transparent bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We architect digital experiences that drive measurable business growth through cutting-edge technology and strategic innovation.
            </p>
          </div>
        </div>
        
        {/* Professional decorative elements */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-slate-400 rounded-full"></div>
      </section>

      {/* About Content */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                LexionTech was founded to bridge the gap between complex technology and practical business solutions. 
                We combine <span className="text-blue-600 font-semibold">strategic thinking</span> with{' '}
                <span className="text-slate-800 font-semibold">technical excellence</span> to deliver software that's 
                fast, secure, and built to scale.
              </p>
            </div>

            {/* Our Approach */}
            <div className="mt-20">
              <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-slate-900">
                OUR PROCESS
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Search className="h-8 w-8 text-blue-600" />,
                    title: "Discover",
                    description: "Deep dive into your business goals and user needs through comprehensive research",
                    gradient: "from-blue-50 to-white",
                    border: "border-blue-200"
                  },
                  {
                    icon: <Palette className="h-8 w-8 text-emerald-600" />,
                    title: "Design",
                    description: "UX-first prototypes and conversion-optimized interfaces that delight users",
                    gradient: "from-emerald-50 to-white",
                    border: "border-emerald-200"
                  },
                  {
                    icon: <Code className="h-8 w-8 text-violet-600" />,
                    title: "Develop",
                    description: "Robust, scalable code with modern architecture and best practices",
                    gradient: "from-violet-50 to-white",
                    border: "border-violet-200"
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8 text-slate-600" />,
                    title: "Deploy",
                    description: "Continuous deployment with monitoring and performance optimization",
                    gradient: "from-slate-50 to-white",
                    border: "border-slate-200"
                  }
                ].map((step, idx) => (
                  <Card 
                    key={idx} 
                    className={`p-6 border ${step.border} bg-gradient-to-br ${step.gradient} hover:shadow-lg hover:border-slate-300 transition-all duration-300 group relative overflow-hidden`}
                  >
                    {/* Accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-300 to-slate-200"></div>
                    
                    <CardContent className="p-0 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-white border ${step.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-slate-900">{step.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Mission */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-black text-slate-900">OUR MISSION</h2>
              </div>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                To democratize access to cutting-edge technology for businesses of all sizes, 
                delivering <span className="text-blue-600 font-semibold">predictable results</span> and{' '}
                <span className="text-slate-800 font-semibold">measurable growth</span> through innovative digital solutions.
              </p>
              
              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  { number: "3", label: "Projects Delivered" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="text-center p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
                  >
                    <div className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-slate-900">
              LEADERSHIP
            </h2>
            
            <Card className="max-w-2xl mx-auto p-8 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-0 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-slate-700 rounded-full flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-black text-white">SA</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-2 text-slate-900">Sanjay Arumugam</h3>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
                  <Rocket className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 font-semibold text-sm">Founder & Lead Engineer</span>
                </div>
                
                <p className="text-slate-600 leading-relaxed font-light">
                  Aspiring DevOps engineer with extensive expertise in frontend development and UI/UX design. 
                  Gained valuable experience through internships at <span className="text-blue-600 font-semibold">1CloudHub</span> &{' '}
                  <span className="text-slate-800 font-semibold">ElectroCloud Labs</span>. Founded LexionTech to bridge the gap 
                  between complex technology and practical business solutions, focusing on delivering{' '}
                  <span className="text-emerald-600 font-semibold">scalable, high-performance applications</span> that drive real results.
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-3 justify-center mt-6">
                  {['DevOps', 'React', 'Node.js', 'AWS', 'UI/UX', 'AI/ML'].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-white border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900">
              READY TO ACCELERATE YOUR DIGITAL TRANSFORMATION?
            </h2>
            
            <p className="text-xl mb-8 text-slate-600 font-light">
              Let's architect the future of your business with cutting-edge technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Launch Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                asChild
              >
                <Link to="/portfolio" className="flex items-center gap-2">
                  <Cpu className="h-5 w-5" />
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      
    </main>
  );
};

export default About;