import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Clock, Users, Star } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Platform Rebuild',
      client: 'RetailTech Solutions',
      problem: 'Outdated site, slow load times, poor mobile experience, declining conversions.',
      solution: 'Complete UI redesign with Next.js migration, image optimization, CDN implementation, and comprehensive SEO overhaul.',
      results: [
        { metric: '65%', label: 'Increase in conversions' },
        { metric: '3.2s', label: 'Page load time (from 8.5s)' },
        { metric: '78%', label: 'Mobile traffic increase' }
      ],
      techStack: ['Next.js', 'Node.js', 'AWS CloudFront', 'Stripe API', 'Google Analytics'],
      category: 'Web Development',
      duration: '8 weeks',
      color: 'blue'
    },
    {
      title: 'SaaS Dashboard Application',
      client: 'DataFlow Analytics',
      problem: 'Complex data visualization needs, real-time updates, scalability concerns.',
      solution: 'Built responsive React dashboard with real-time WebSocket connections, advanced charts, and optimized data processing.',
      results: [
        { metric: '40%', label: 'Faster data processing' },
        { metric: '99.9%', label: 'Uptime achieved' },
        { metric: '25%', label: 'Cost reduction' }
      ],
      techStack: ['React', 'WebSocket', 'D3.js', 'AWS Lambda', 'PostgreSQL'],
      category: 'Web App',
      duration: '12 weeks',
      color: 'purple'
    },
    {
      title: 'Mobile App for Local Services',
      client: 'HomeService Connect',
      problem: 'Need for cross-platform mobile presence, offline functionality, real-time booking.',
      solution: 'React Native app with offline-first architecture, push notifications, and integrated payment processing.',
      results: [
        { metric: '15K+', label: 'App downloads' },
        { metric: '4.8/5', label: 'App store rating' },
        { metric: '85%', label: 'User retention rate' }
      ],
      techStack: ['React Native', 'Firebase', 'Stripe', 'Google Maps API'],
      category: 'Mobile App',
      duration: '10 weeks',
      color: 'emerald'
    },
    {
      title: 'Cloud Infrastructure Migration',
      client: 'TechStart Innovations',
      problem: 'Legacy servers, high maintenance costs, scalability issues, security concerns.',
      solution: 'Complete AWS migration with Infrastructure as Code, automated CI/CD pipelines, and comprehensive monitoring.',
      results: [
        { metric: '60%', label: 'Infrastructure cost reduction' },
        { metric: '99.98%', label: 'System availability' },
        { metric: '10x', label: 'Faster deployments' }
      ],
      techStack: ['AWS', 'Terraform', 'Docker', 'GitHub Actions', 'CloudWatch'],
      category: 'DevOps',
      duration: '6 weeks',
      color: 'orange'
    },
    {
      title: 'Digital Marketing Campaign',
      client: 'GrowthCorp Ltd',
      problem: 'Low organic traffic, poor search rankings, low conversion rates from paid ads.',
      solution: 'Comprehensive SEO audit, content strategy, Google Ads optimization, and landing page redesign.',
      results: [
        { metric: '180%', label: 'Organic traffic increase' },
        { metric: '45%', label: 'Lower cost per acquisition' },
        { metric: '320%', label: 'ROI improvement' }
      ],
      techStack: ['Google Ads', 'Google Analytics', 'SEMrush', 'WordPress', 'GTM'],
      category: 'Digital Marketing',
      duration: '16 weeks',
      color: 'amber'
    },
    {
      title: 'UI/UX Redesign Project',
      client: 'FinanceFlow App',
      problem: 'Poor user experience, low engagement, complex navigation, high bounce rate.',
      solution: 'User research, wireframing, prototyping, and complete interface redesign with usability testing.',
      results: [
        { metric: '70%', label: 'Reduction in bounce rate' },
        { metric: '55%', label: 'Increase in user engagement' },
        { metric: '90%', label: 'User satisfaction score' }
      ],
      techStack: ['Figma', 'Adobe XD', 'Principle', 'Hotjar', 'UserTesting'],
      category: 'UI/UX Design',
      duration: '8 weeks',
      color: 'violet'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', badge: 'bg-blue-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', badge: 'bg-purple-600' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', badge: 'bg-emerald-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', badge: 'bg-orange-600' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', badge: 'bg-amber-600' },
    violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600', badge: 'bg-violet-600' }
  };

  return (
    <main className="pt-16 min-h-screen bg-white text-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-700">OUR PORTFOLIO</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
              Our Work
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Case studies showing how we delivered website rebuilds, mobile apps, 
              and cloud migrations that improved performance and conversions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '2.5x', label: 'Average ROI Increase' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={stat.label} className="group">
                <div className="text-4xl font-black text-slate-900 mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">
              Case Studies
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real results from real projects. See how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid gap-8">
            {caseStudies.map((study, index) => {
              const colors = colorMap[study.color];
              return (
                <Card 
                  key={study.title} 
                  className="overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-0">
                    <div className="lg:flex">
                      <div className="lg:w-2/3 p-6 lg:p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className={`px-3 py-1 ${colors.badge} border-0 text-white`}>
                            {study.category}
                          </Badge>
                          <div className="flex items-center text-sm text-slate-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {study.duration}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2 text-slate-900">
                          {study.title}
                        </h3>
                        <p className="text-slate-600 font-semibold mb-6">{study.client}</p>
                        
                        <div className="space-y-4 mb-8">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                              Problem:
                            </h4>
                            <p className="text-slate-600">{study.problem}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              Solution:
                            </h4>
                            <p className="text-slate-600">{study.solution}</p>
                          </div>
                        </div>
                        
                        <div className="mb-8">
                          <h4 className="font-semibold text-slate-900 mb-4">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.techStack.map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className={`lg:w-1/3 ${colors.bg} text-slate-900 p-6 lg:p-8 border-l ${colors.border}`}>
                        <div className="relative">
                          <h4 className="font-semibold mb-6 flex items-center text-slate-900">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            Results
                          </h4>
                          <div className="space-y-6">
                            {study.results.map((result) => (
                              <div key={result.label}>
                                <div className="text-3xl font-black text-slate-900">
                                  {result.metric}
                                </div>
                                <p className="text-sm text-slate-600">
                                  {result.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-slate-900">
              What Our Clients Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-slate-600 mb-4 leading-relaxed">
                    "Completely transformed our online presence. The new website not only looks amazing but has significantly improved our conversion rates."
                  </blockquote>
                  <cite className="text-slate-900 not-italic font-semibold">
                    — Sarah Johnson, RetailTech Solutions
                  </cite>
                </CardContent>
              </Card>
              
              <Card className="p-6 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-slate-600 mb-4 leading-relaxed">
                    "Professional, reliable, and delivered exactly what they promised. The cloud migration saved us thousands in operational costs."
                  </blockquote>
                  <cite className="text-slate-900 not-italic font-semibold">
                    — Michael Chen, TechStart Innovations
                  </cite>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-slate-600">
              Let's discuss your project and create measurable results for your business.
            </p>
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all duration-300"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Project <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500 mb-8">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex justify-center items-center gap-12 opacity-70">
            {['TechCorp', 'GlobalBiz', 'InnovateCo', 'EnterprisePlus', 'SolutionHub'].map((company, idx) => (
              <div key={idx} className="text-slate-600 font-semibold text-lg">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;