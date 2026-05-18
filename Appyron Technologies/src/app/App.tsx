import { useState } from 'react';
import { ArrowRight, Sparkles, Monitor, Smartphone, TrendingUp, Users, Palette, ShoppingCart, Plus, Quote } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <ScrollingTicker />
      <Stats />
      <Expertise />
      <Services />
      <CaseStudies />
      <Process />
      <Testimonials />
      <StaffAugmentation />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo_appyron.png" alt="Appyron Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-xl">APPYRON</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-white/70 hover:text-white transition">Services</a>
          <a href="#work" className="text-sm text-white/70 hover:text-white transition">Work</a>
          <a href="#process" className="text-sm text-white/70 hover:text-white transition">Process</a>
          <a href="#about" className="text-sm text-white/70 hover:text-white transition">About</a>
          <a href="#testimonials" className="text-sm text-white/70 hover:text-white transition">Testimonials</a>
          <a href="#faq" className="text-sm text-white/70 hover:text-white transition">FAQ</a>
        </div>

        <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-2.5 rounded-full transition flex items-center gap-2">
          <span className="text-sm font-medium">Book Free Strategy Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-xs text-orange-500 uppercase tracking-wider">Building Better Digital Journey</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Engineering<br />
            digital<br />
            experiences that<br />
            <span className="text-orange-500">drive revenue.</span>
          </h1>

          <p className="text-lg text-white/60 mb-8 max-w-lg">
            We build high-performance websites, scalable mobile apps, marketing systems, and data ecosystems for modern brands that want to scale fast.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full transition flex items-center gap-2">
              <span className="font-medium">Book a Free Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-full transition">
              <span className="font-medium">View Portfolio</span>
            </button>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1758873268663-5a362616b5a7?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1758873271761-6cfe9b4f000c?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1758518731296-20e24e58846f?w=100&h=100&fit=crop',
              ].map((url, i) => (
                <img key={i} src={url} alt="Team member" className="w-10 h-10 rounded-full border-2 border-black object-cover" />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-orange-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-white/60">120+ SUCCESSFUL LAUNCHES</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-orange-500/10 to-purple-500/10 p-8">
            <img
              src="https://images.unsplash.com/photo-1706700392642-dee59f678a09?w=600&h=600&fit=crop"
              alt="Mobile app interface"
              className="w-full aspect-square object-cover rounded-xl border border-white/10"
            />

            <div className="absolute top-8 right-8 bg-orange-500 text-white px-4 py-2 rounded-lg font-bold">
              +97%
            </div>
          </div>

          <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500 rounded-2xl opacity-20 blur-3xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-2xl opacity-20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function ScrollingTicker() {
  const items = [
    'Conversion', 'Growth', 'Scale', 'Engineering', 'Design',
    'Marketing', 'Mobile', 'Web', 'Branding'
  ];

  return (
    <div className="border-y border-white/10 bg-white/[0.02] overflow-hidden py-6">
      <div className="flex animate-scroll">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-6 whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-lg font-medium text-white/80">{item}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}

function Stats() {
  const stats = [
    { number: '50+', label: 'GLOBAL CLIENTS' },
    { number: '98%', label: 'CLIENT RETENTION' },
    { number: '31%', label: 'CONVERSION INCREASE' },
    { number: '24hr', label: 'RESPONSE TIME' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="relative group">
            <div className="text-6xl font-bold mb-2 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-sm text-orange-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-orange-500 uppercase tracking-wider">What We Do</span>
            </div>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Expertise <span className="italic text-orange-500">that</span><br />
              scales with you.
            </h2>
          </div>

          <div>
            <p className="text-lg text-white/60">
              End-to-end digital solutions — combining top-tier engineering with strategic design to build products that dominate markets, not just compete in them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'High-performance, scalable web applications built with modern frameworks to drive growth and user engagement.',
      tags: ['REACT', 'NEXT', 'VUE'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile experiences that users love, designed for iOS and Android ecosystems.',
      tags: ['IOS', 'ANDROID', 'REACT NATIVE'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing systems, SEO, and paid campaigns to exponentially scale your customer acquisition.',
      tags: ['SEO', 'PAID ADS', 'CRO'],
    },
    {
      icon: Users,
      title: 'Staff Augmentation',
      description: 'Embed elite, pre-vetted remote developers and designers into your existing teams to ship faster.',
      tags: ['REMOTE', 'VETTED', 'AGILE'],
    },
    {
      icon: Palette,
      title: 'Branding & UI/UX',
      description: 'Premium user-centered, user interfaces, and experiences that position your brand as a market leader.',
      tags: ['IDENTITY', 'FIGMA', 'DESIGN SYSTEMS'],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Conversion-optimized online stores and custom commerce architectures that maximize revenue.',
      tags: ['SHOPIFY', 'CUSTOM', 'HEADLESS'],
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.title} className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-orange-500/50 transition cursor-pointer overflow-hidden">
            <div className="absolute top-6 right-6 text-white/5 text-4xl">
              <service.icon className="w-12 h-12" />
            </div>

            <div className="w-12 h-12 rounded-xl border border-orange-500/20 bg-orange-500/10 flex items-center justify-center mb-6">
              <service.icon className="w-6 h-6 text-orange-500" />
            </div>

            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-white/60 mb-6">{service.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {service.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/50">
                  {tag}
                </span>
              ))}
            </div>

            <button className="text-orange-500 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
              Explore Service
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    {
      title: 'Enterprise Social Platform',
      type: 'PLATFORM',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
      title: 'Fintech Mobile Application',
      type: 'FINTECH',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
    },
    {
      title: 'Global E-Commerce Portal',
      type: 'E-COMMERCE',
      image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=600&fit=crop'
    },
    {
      title: 'Healthcare Analytics Dashboard',
      type: 'HEALTHCARE',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-4">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-orange-500 uppercase tracking-wider">Our Work</span>
            </div>
            <h2 className="text-5xl font-bold">
              Proven <span className="italic text-orange-500">results.</span>
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-orange-500/50 transition">
            <span>View All Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-white/60 mb-12 max-w-2xl">
          We partner with industry-leading platforms to deliver impactful and drive innovative solutions that consistently deliver exceptional results and long-term success.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((item, i) => (
            <div key={i} className="group relative aspect-video rounded-2xl border border-white/10 overflow-hidden cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/80 transition" />

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 backdrop-blur-sm">
                  <span className="text-xs text-orange-500 uppercase tracking-wider">{item.type}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <button className="text-orange-500 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We align on your business goals, target audience, and technical requirements to create a bulletproof roadmap.',
    },
    {
      number: '02',
      title: 'UX/UI Design',
      description: 'Creating premium, intuitive interfaces focused on conversion and modern aesthetics.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile engineering using cutting-edge stacks to build scalable, high-performance applications.',
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Rigorous quality assurance to ensure bug-free, secure, and blazing fast experiences.',
    },
    {
      number: '05',
      title: 'Launch & Growth',
      description: 'Seamless deployment followed by continuous optimization, marketing, and long-term support.',
    },
  ];

  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-xs text-orange-500 uppercase tracking-wider">Our Process</span>
          </div>

          <h2 className="text-5xl font-bold mb-6">
            How we <span className="italic text-orange-500">build.</span>
          </h2>

          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            A streamlined process that ensures we deliver exceptional results on time and within budget — every single time.
          </p>
        </div>

        <div className="relative">
          {/* Dotted connecting line */}
          <div className="absolute top-6 left-6 right-6 h-0.5 hidden md:block">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgb(249 115 22)"
                strokeWidth="2"
                strokeDasharray="8,8"
                className="animate-dash"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {steps.map((step) => (
              <div key={step.number} className="group">
                <div className="w-12 h-12 rounded-full border-2 border-orange-500 bg-black flex items-center justify-center mb-6 group-hover:bg-orange-500 transition relative z-10">
                  <span className="font-bold text-orange-500 group-hover:text-black">{step.number}</span>
                </div>

                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -16;
          }
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
      `}</style>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Appyron delivered a world-class fintech app that exceeded our wildest expectations. Their team's attention to detail, code quality, and understanding of modern UI is unmatched.",
      author: 'Michael Chen',
      role: 'CEO, FinSync',
      metric: 'REVENUE GREW TO $950K A YEAR',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop',
    },
    {
      quote: "Switching to Appyron for our storefront development was the best decision we made. They completely overhauled our architecture, resulting in blazing fast load times.",
      author: 'Sarah Jenkins',
      role: 'Founder, Storied E-Commerce',
      metric: '+114% CONVERSION RATE',
      image: 'https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0?w=100&h=100&fit=crop',
    },
    {
      quote: "When we needed to scale our engineering team fast, Appyron provided senior talent that integrated seamlessly. They are true partners, not just vendors.",
      author: 'David Ross',
      role: 'CTO, TechInnovate',
      metric: 'REVENUE GREW 23% MONTHLY',
      image: 'https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=100&h=100&fit=crop',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-xs text-orange-500 uppercase tracking-wider">Voices</span>
          </div>

          <h2 className="text-5xl font-bold">
            Trusted by <span className="italic text-orange-500">innovators.</span>
          </h2>

          <p className="text-lg text-white/60 mt-6 max-w-3xl mx-auto">
            See what founders and engineering leaders say about partnering with Appyron.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <Quote className="w-8 h-8 text-orange-500 mb-6" />

              <p className="text-white/80 mb-8">{testimonial.quote}</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
                <div className="text-xs text-orange-500 font-bold">{testimonial.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StaffAugmentation() {
  const roles = [
    { title: 'Senior Engineers', description: 'Full-stack, frontend, backend specialists' },
    { title: 'Product Designers', description: 'UI/UX experts and design systems' },
    { title: 'Growth Marketers', description: 'SEO, paid ads, conversion optimization' },
    { title: 'Product Managers', description: 'Strategy, roadmaps, execution' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-10 blur-3xl rounded-full" />

          <div className="relative grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-xs text-orange-500 uppercase tracking-wider">Staff Augmentation</span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Scale your team<br />
                without <span className="italic text-orange-500">slowing down.</span>
              </h2>

              <p className="text-white/60 mb-8">
                Get access to elite, pre-vetted developers, designers, and marketers who integrate directly into your team—from anywhere. Flexible, fast, and battle-tested on mission-critical projects.
              </p>

              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full transition flex items-center gap-2">
                <span className="font-medium">Explore Hiring Options</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-white/40 mt-6">
                Average time to hire: <span className="text-orange-500 font-bold">48-72 hours</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {roles.map((role) => (
                <div key={role.title} className="p-6 rounded-xl border border-white/10 bg-black/40">
                  <h4 className="font-bold mb-2">{role.title}</h4>
                  <p className="text-sm text-white/60">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Our timelines depend on project complexity. A standard corporate website typically takes 4-6 weeks, while custom SaaS platforms or mobile apps range from 3-6 months. We break every project down into agile sprints for fast, iterative delivery.',
    },
    {
      question: 'How does your pricing work?',
      answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and monthly retainers. After our discovery call, we provide a detailed proposal with transparent pricing based on scope, timeline, and resources required.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Absolutely. We offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. Our maintenance packages ensure your product stays secure, fast, and competitive.',
    },
    {
      question: 'How does your staff augmentation model work?',
      answer: 'We provide pre-vetted senior developers, designers, and specialists who integrate directly into your team. You get dedicated resources working in your timezone, using your tools and processes—without the overhead of traditional hiring.',
    },
    {
      question: 'What tech stacks do you specialize in?',
      answer: 'We specialize in modern web frameworks (React, Next.js, Vue), mobile development (React Native, iOS, Android), cloud infrastructure (AWS, Vercel), and emerging technologies. We choose the best stack for your specific needs and scale requirements.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-xs text-orange-500 uppercase tracking-wider">FAQ</span>
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Frequently asked<br />
            <span className="italic text-orange-500">questions.</span>
          </h2>

          <p className="text-white/60">
            Everything you need to know about working with Appyron. Still curious? Drop us a line.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition"
              >
                <span className="font-bold pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 transition ${openIndex === i ? 'rotate-45 border-orange-500' : ''}`}>
                  <Plus className={`w-4 h-4 ${openIndex === i ? 'text-orange-500' : 'text-white/60'}`} />
                </div>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 text-white/60">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = `New Contact from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:info@appyron.site?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-900/20 to-transparent p-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 opacity-10 blur-3xl rounded-full" />

          <div className="relative grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-xs text-orange-500 uppercase tracking-wider">Let's Talk</span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Ready to build<br />
                something <span className="italic text-orange-500">exceptional?</span>
              </h2>

              <p className="text-white/60 mb-8">
                Stop letting mediocre tech, outdated digital experiences. Partner with Appyron to build the future of your business today.
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <a href="mailto:info@appyron.site" className="text-white/60 hover:text-orange-500 transition">
                    info@appyron.site
                  </a>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-orange-500/50 outline-none transition"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-orange-500/50 outline-none transition"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-orange-500/50 outline-none transition"
              />

              <div className="flex gap-2">
                {['$5k-10k', '$10k-25k', '$25k-50k', '$50k+'].map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    className="flex-1 px-4 py-2 rounded-lg border border-white/10 hover:border-orange-500/50 text-xs transition"
                  >
                    {budget}
                  </button>
                ))}
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project and what you need to get it to the next level..."
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-orange-500/50 outline-none resize-none transition"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full transition flex items-center justify-center gap-2 font-medium"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-white/40 text-center">We'll get back to you within 24 hours</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo_appyron.png" alt="Appyron Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-xl">APPYRON</span>
            </div>
            <p className="text-sm text-white/60">
              Engineering digital experiences that drive revenue.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-orange-500 transition">Web Development</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Staff Augmentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2026 Appyron. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/company/appyron" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/appyron" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
