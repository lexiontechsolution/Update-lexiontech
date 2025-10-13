import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Award, Coffee, Laptop, Heart } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities with mentorship and access to latest technologies',
      color: 'blue'
    },
    {
      icon: Laptop,
      title: 'Remote Friendly',
      description: 'Flexible work arrangements with modern tools and collaborative environment',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Small Team Impact',
      description: 'Work directly with founders and make significant impact on projects and company direction',
      color: 'emerald'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based growth with certificates and recommendations for outstanding work',
      color: 'orange'
    },
    {
      icon: Coffee,
      title: 'Collaborative Culture',
      description: 'Open communication, regular feedback, and team building activities',
      color: 'amber'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible hours and emphasis on maintaining healthy work-life integration',
      color: 'violet'
    }
  ];

  const internshipProgram = {
    duration: '3-6 months',
    commitment: '20-30 hours/week',
    format: 'Hybrid (Remote + Office visits)',
    areas: [
      'Frontend Development (React, Next.js)',
      'Backend Development (Node.js, APIs)',
      'DevOps & Cloud (AWS, Docker)',
      'UI/UX Design (Figma, User Research)',
      'Digital Marketing (SEO, Analytics)'
    ],
    benefits: [
      'Hands-on experience with real client projects',
      'One-on-one mentorship with senior developers',
      'Certificate of completion',
      'Letter of recommendation',
      'Potential full-time offer for exceptional performers',
      'Flexible schedule to accommodate studies'
    ]
  };

  const openRoles = [
    {
      title: 'Frontend Developer Intern',
      type: 'Internship',
      duration: '3-6 months',
      location: 'Pollachi / Remote',
      requirements: [
        'Knowledge of React.js fundamentals',
        'Basic understanding of HTML, CSS, JavaScript',
        'Familiarity with responsive design',
        'Eagerness to learn and grow'
      ],
      responsibilities: [
        'Develop responsive web interfaces',
        'Work with design systems and components',
        'Collaborate on client projects',
        'Learn modern development practices'
      ],
      color: 'blue'
    },
    {
      title: 'Full Stack Developer',
      type: 'Full-time',
      duration: 'Permanent',
      location: 'Pollachi / Hybrid',
      requirements: [
        '2+ years experience with React and Node.js',
        'Experience with databases (PostgreSQL/MongoDB)',
        'Knowledge of API development',
        'Understanding of modern development workflows'
      ],
      responsibilities: [
        'Lead development of web applications',
        'Mentor junior developers and interns',
        'Architect scalable solutions',
        'Client communication and project planning'
      ],
      color: 'purple'
    },
    {
      title: 'DevOps Engineer',
      type: 'Contract',
      duration: 'Project-based',
      location: 'Remote',
      requirements: [
        'Experience with AWS or cloud platforms',
        'Knowledge of CI/CD pipelines',
        'Infrastructure as Code (Terraform preferred)',
        'Container technologies (Docker, Kubernetes)'
      ],
      responsibilities: [
        'Set up and maintain cloud infrastructure',
        'Implement automated deployment pipelines',
        'Monitor system performance and security',
        'Optimize costs and resource utilization'
      ],
      color: 'emerald'
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
              <span className="text-sm font-medium text-blue-700">CAREERS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
              Join Our Team
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Build the future of technology with us. Internships, full-time positions, 
              and contract opportunities available for passionate developers and designers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">
              Why LexionTech?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join a growing company where your ideas matter and your growth is our priority
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const colors = colorMap[benefit.color];
              return (
                <Card 
                  key={benefit.title} 
                  className="text-center p-6 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 mx-auto mb-6 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="lg:flex items-start gap-16">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <Badge className="mb-4 bg-blue-600 text-white">
                  Structured Learning Program
                </Badge>
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900">
                  Internship Program
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Our comprehensive internship program combines hands-on project experience 
                  with structured mentorship. Work on real client projects while learning 
                  modern development practices and industry best practices.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Duration</h4>
                      <p className="text-slate-600">
                        {internshipProgram.duration}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Commitment</h4>
                      <p className="text-slate-600">
                        {internshipProgram.commitment}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Format</h4>
                      <p className="text-slate-600">
                        {internshipProgram.format}
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Apply for Internship <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <Card className="p-6 border border-slate-200 bg-white shadow-lg">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold mb-4 text-slate-900">Learning Areas</h3>
                    <div className="space-y-2">
                      {internshipProgram.areas.map((area) => (
                        <div key={area} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-slate-600">
                            {area}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="p-6 border border-slate-200 bg-white shadow-lg">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold mb-4 text-slate-900">Program Benefits</h3>
                    <div className="space-y-2">
                      {internshipProgram.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-slate-600">
                            {benefit}
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

      {/* Open Positions */}
     
      {/* Application Process */}
      <section className="relative py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-slate-900">
              Application Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Apply', description: 'Submit your application through our contact form with your resume and portfolio' },
                { step: '02', title: 'Review', description: 'We review your application and get back to you within 48-72 hours' },
                { step: '03', title: 'Interview', description: 'Technical interview and culture fit discussion (remote or in-person)' },
                { step: '04', title: 'Onboarding', description: 'Welcome to the team! We\'ll get you set up with tools and first projects' }
              ].map((phase) => (
                <Card 
                  key={phase.step} 
                  className="text-center p-6 border border-slate-200 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="text-3xl font-black text-slate-900 mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{phase.title}</h3>
                    <p className="text-slate-600 text-sm">
                      {phase.description}
                    </p>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl mb-8 text-slate-600">
              Whether you're looking for an internship to kickstart your career or a full-time 
              role to make an impact, we'd love to hear from you.
            </p>
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all duration-300"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Apply Today <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      
    </main>
  );
};

export default Careers;