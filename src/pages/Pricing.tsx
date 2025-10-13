import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Zap, Building, Rocket } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      icon: Zap,
      name: 'Starter Website',
      price: '₹15,000 - ₹35,000',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 responsive pages',
        'Contact form integration',
        'Basic SEO optimization',
        'Mobile-first design',
        'Google Analytics setup',
        'Social media integration',
        'Content management system',
        '30 days support'
      ],
      popular: false,
      cta: 'Get Started',
      color: 'blue'
    },
    {
      icon: Building,
      name: 'Growth App',
      price: '₹70,000 - ₹2,50,000',
      description: 'Advanced web applications for growing businesses',
      features: [
        'Custom web application',
        'User authentication system',
        'Database integration',
        'Admin panel & dashboard',
        'API development',
        'Payment gateway integration',
        'Advanced SEO & analytics',
        'Performance optimization',
        '90 days support'
      ],
      popular: true,
      cta: 'Start Building',
      color: 'purple'
    },
    {
      icon: Rocket,
      name: 'Mobile App Basic',
      price: '₹1,20,000 - ₹3,50,000',
      description: 'Cross-platform mobile applications',
      features: [
        'iOS & Android app',
        'Backend API development',
        'Push notifications',
        'Offline functionality',
        'App store submission',
        'User analytics integration',
        'Performance monitoring',
        'Security implementation',
        '120 days support'
      ],
      popular: false,
      cta: 'Launch App',
      color: 'emerald'
    }
  ];

  const enterpriseFeatures = [
    'Custom architecture design',
    'Infrastructure as Code',
    'Automated CI/CD pipelines',
    'Real-time monitoring & logging',
    'Security & compliance',
    'Load balancing & scaling',
    'Disaster recovery planning',
    '24/7 technical support'
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', button: 'bg-emerald-600 hover:bg-emerald-700' }
  };

  return (
    <main className="pt-16 min-h-screen bg-white text-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-700">PRICING & PACKAGES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
              Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Clear, honest pricing for startups and SMBs. All packages include planning, 
              development, testing, and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              const colors = colorMap[pkg.color];
              return (
                <Card 
                  key={pkg.name} 
                  className={`relative border border-slate-200 bg-white hover:shadow-lg transition-all duration-300 ${
                    pkg.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-4 py-2 shadow-lg">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center p-8">
                    <div className={`w-16 h-16 mx-auto mb-4 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{pkg.name}</h3>
                    <div className="text-3xl font-black text-slate-900 mb-2">
                      {pkg.price}
                    </div>
                    <p className="text-slate-600">{pkg.description}</p>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8">
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm text-slate-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${colors.button} text-white font-semibold`}
                      size="lg"
                      asChild
                    >
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        {pkg.cta} <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="lg:flex items-center gap-16">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900">
                  Cloud & DevOps Solutions
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Custom cloud infrastructure and DevOps solutions tailored to your specific requirements. 
                  Get a detailed quote based on your technical needs and scale.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-semibold text-slate-900">
                      Free architecture consultation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Check className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="font-semibold text-slate-900">
                      Flexible pricing models
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="font-semibold text-slate-900">
                      Ongoing support included
                    </span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all duration-300"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      Request Custom Quote <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <Card className="p-8 border border-slate-200 bg-white shadow-lg">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold mb-6 text-slate-900">Enterprise Features Include:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {enterpriseFeatures.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-slate-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center border border-slate-200 bg-white shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Important Pricing Information</h3>
                <p className="text-lg text-slate-600 mb-6">
                  All prices are indicative and based on standard requirements. Final pricing is provided 
                  after detailed project discovery and requirements analysis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all duration-300"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      Get Accurate Quote <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                    asChild
                  >
                    <Link to="/services">Learn About Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-slate-900">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-3 text-slate-900">What's included in the pricing?</h3>
                  <p className="text-slate-600">
                    All our packages include planning, design, development, testing, deployment, 
                    and initial support. No hidden costs or surprise fees.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-3 text-slate-900">Do you offer payment plans?</h3>
                  <p className="text-slate-600">
                    Yes, we offer flexible payment schedules based on project milestones. 
                    Typically 30% upfront, 40% at midpoint, and 30% on completion.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-3 text-slate-900">What about ongoing maintenance?</h3>
                  <p className="text-slate-600">
                    We offer separate maintenance packages starting at ₹5,000/month for basic 
                    updates and monitoring. Enterprise support is available 24/7.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-3 text-slate-900">Can I upgrade my package later?</h3>
                  <p className="text-slate-600">
                    Absolutely! We can upgrade your solution as your business grows. 
                    We'll work with you to add new features and capabilities over time.
                  </p>
                </CardContent>
              </Card>
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
              Let's discuss your project requirements and provide you with a detailed, 
              transparent quote tailored to your needs.
            </p>
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all duration-300"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get Your Custom Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      
    </main>
  );
};

export default Pricing;