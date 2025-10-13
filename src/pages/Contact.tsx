import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send, User, Building, Award, Calendar, MessageCircle, Zap, Target } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  company: z.string().trim().max(100, 'Company name must be less than 100 characters').optional(),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const budgetRanges = [
    '₹10,000 - ₹50,000',
    '₹50,000 - ₹1,50,000',
    '₹1,50,000 - ₹3,00,000',
    '₹3,00,000 - ₹5,00,000',
    '₹5,00,000+',
    'Not sure yet'
  ];

  const services = [
    {
      icon: Zap,
      title: 'Web Development',
      description: 'Custom websites and applications built with modern technologies',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'UI/UX Design',
      description: 'User-centered designs that drive engagement and conversions',
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'Consultation',
      description: 'Strategic advice and planning for your digital transformation',
      color: 'emerald'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', badge: 'bg-blue-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', badge: 'bg-purple-600' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', badge: 'bg-emerald-600' }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-16 min-h-screen bg-white text-slate-900">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Section */}
              <div className="lg:w-2/5">
                <Card className="border border-slate-200 bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-lg">
                      <User className="h-16 w-16 text-white" />
                    </div>
                    <h1 className="text-3xl font-black mb-2 text-slate-900">
                      Lexion Tech
                    </h1>
                    <p className="text-slate-600 mb-6">Technology Solutions</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 justify-center">
                        <Award className="h-5 w-5 text-blue-600" />
                        <span className="text-sm text-slate-600">2+ Years Experience</span>
                      </div>
                      <div className="flex items-center gap-3 justify-center">
                        <Building className="h-5 w-5 text-slate-600" />
                        <span className="text-sm text-slate-600">3+ Projects Completed</span>
                      </div>
                      <div className="flex items-center gap-3 justify-center">
                        <Calendar className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-slate-600">Available for New Projects</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Header Content */}
              <div className="lg:w-3/5 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-700">GET IN TOUCH</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
                  Let's Build Something <span className="text-transparent bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text">Amazing</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  With over 2 years of experience in web development and digital solutions, 
                  I specialize in creating modern, scalable applications that drive business growth.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-900 mb-2">3+</div>
                    <div className="text-sm text-slate-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-900 mb-2">4+</div>
                    <div className="text-sm text-slate-600">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-900 mb-2">2+</div>
                    <div className="text-sm text-slate-600">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-900 mb-2">100%</div>
                    <div className="text-sm text-slate-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="lg:flex gap-12">
              {/* Contact Info - Professional Sidebar */}
              <div className="lg:w-2/5 mb-12 lg:mb-0">
                <div className="space-y-6">
                  <Card className="border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-slate-900">Email</h3>
                          <a 
                            href="mailto:lexiontechsolution@gmail.com" 
                            className="text-slate-600 hover:text-blue-600 transition-colors"
                          >
                            lexiontechsolution@gmail.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-50 border border-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-slate-900">Phone</h3>
                          <p className="text-slate-600">+91 6380853637</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-slate-900">Location</h3>
                          <p className="text-slate-600">Pollachi, Tamil Nadu, India</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-slate-900">Office Hours</h3>
                          <p className="text-slate-600">Mon–Fri, 9:30 AM – 6:30 PM IST</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Expertise Cards */}
                <div className="mt-8 space-y-4">
                  <Card className="border border-blue-200 bg-blue-50">
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2 text-slate-900">Full-Stack Development</h3>
                      <p className="text-slate-600 text-sm">React, Node.js, Next.js, MongoDB</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-purple-200 bg-purple-50">
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2 text-slate-900">UI/UX Design</h3>
                      <p className="text-slate-600 text-sm">Figma, Adobe XD, Prototyping</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:w-3/5">
                <Card className="border border-slate-200 bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <Badge className="mb-4 bg-blue-600 text-white">
                        Start Your Project
                      </Badge>
                      <h2 className="text-3xl font-black mb-3 text-slate-900">Get Your Project Quote</h2>
                      <p className="text-slate-600">
                        Tell me about your project and I'll get back to you with a detailed proposal.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-slate-900 font-medium">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={`bg-white border-slate-300 text-slate-900 placeholder-slate-500 ${
                              errors.name ? 'border-red-500' : 'hover:border-slate-400'
                            }`}
                            placeholder="Your full name"
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="email" className="text-slate-900 font-medium">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`bg-white border-slate-300 text-slate-900 placeholder-slate-500 ${
                              errors.email ? 'border-red-500' : 'hover:border-slate-400'
                            }`}
                            placeholder="your.email@company.com"
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="company" className="text-slate-900 font-medium">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="bg-white border-slate-300 text-slate-900 placeholder-slate-500 hover:border-slate-400"
                            placeholder="Your company (optional)"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="budget" className="text-slate-900 font-medium">Project Budget *</Label>
                          <Select 
                            value={formData.budget} 
                            onValueChange={(value) => handleInputChange('budget', value)}
                          >
                            <SelectTrigger className={`bg-white border-slate-300 text-slate-900 hover:border-slate-400 ${
                              errors.budget ? 'border-red-500' : ''
                            }`}>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-slate-300 text-slate-900">
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range} className="hover:bg-slate-100">
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.budget && (
                            <p className="text-sm text-red-500 mt-1">{errors.budget}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-slate-900 font-medium">Project Details *</Label>
                        <Textarea
                          id="message"
                          rows={6}
                          placeholder="Describe your project requirements, goals, timeline, and any specific technologies you're interested in..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className={`bg-white border-slate-300 text-slate-900 placeholder-slate-500 ${
                            errors.message ? 'border-red-500' : 'hover:border-slate-400'
                          }`}
                        />
                        {errors.message && (
                          <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                        )}
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold border border-slate-700 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          'Sending Your Message...'
                        ) : (
                          <>
                            Send Project Inquiry <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-blue-600 text-white">
              What I Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">
              How I Can Help You
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              const colors = colorMap[service.color];
              return (
                <Card 
                  key={service.title} 
                  className="border border-slate-200 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-slate-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-slate-900">
              Working Process
            </h2>
            
            <div className="space-y-8">
              {[
                { step: "01", title: "Discovery & Planning", desc: "Understanding your requirements and project scope" },
                { step: "02", title: "Design & Prototyping", desc: "Creating wireframes and design mockups" },
                { step: "03", title: "Development", desc: "Building your solution with clean, efficient code" },
                { step: "04", title: "Testing & Launch", desc: "Quality assurance and deployment" },
                { step: "05", title: "Support & Maintenance", desc: "Ongoing support and updates" }
              ].map((item, index) => (
                <Card 
                  key={item.step} 
                  className="border border-slate-200 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg text-white">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-slate-600">
              Let's discuss your ideas and create something extraordinary together.
            </p>
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition-all duration-300"
              onClick={() => document.getElementById('name')?.focus()}
            >
              Start Your Project <Send className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      
    </main>
  );
};

export default Contact;