import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Bot, 
  Presentation, 
  Workflow, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Chatbot from '@/components/Chatbot';

import project1 from '@/assets/images/project-1.png';
import project2 from '@/assets/images/project-2.png';
import project3 from '@/assets/images/project-3.png';

const services = [
  { icon: Code2, title: "Website Development", desc: "Responsive, accessible, and fast websites built with modern frameworks to engage your users." },
  { icon: Terminal, title: "Full Stack Web Applications", desc: "End-to-end custom applications with robust databases and scalable architectures." },
  { icon: Bot, title: "AI Chatbot Integration", desc: "Intelligent conversational agents tailored to streamline your customer support." },
  { icon: Presentation, title: "AI Presentations for Business", desc: "Automated, data-driven presentation generation using advanced AI models." },
  { icon: Workflow, title: "Custom Automation Solutions", desc: "Streamline workflows and eliminate manual repetitive tasks with custom engineering." }
];

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "A comprehensive analytics dashboard for modern online retailers, featuring real-time data visualization and sales tracking.",
    image: project1,
    github: "#",
    demo: "#"
  },
  {
    title: "AI Writing Assistant",
    desc: "A smart document editor that helps users generate and refine content using advanced AI natural language processing.",
    image: project2,
    github: "#",
    demo: "#"
  },
  {
    title: "Automation Builder",
    desc: "A visual node-based editor for creating complex business automation workflows without writing a single line of code.",
    image: project3,
    github: "#",
    demo: "#"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">YN.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center min-h-[90vh] text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading text-muted-foreground mb-6">
              Full Stack Developer | AI Solutions Creator
            </h2>
            <p className="text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              I build scalable web applications and integrate intelligent AI solutions to automate and elevate business processes. Let's create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 gap-2 font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all" asChild data-testid="button-view-projects">
                <a href="#projects">
                  View Projects <ChevronRight size={16} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold hover:bg-muted border-border/60" asChild data-testid="button-contact">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-muted/10 border-y border-border/40">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <div className="w-12 h-1 bg-primary mb-8 rounded-full"></div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  I am a passionate software engineer with expertise in modern web technologies and artificial intelligence. My focus is on delivering high-quality, performant, and user-centric solutions that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  With a strong foundation in full-stack development and an eye for modern design, I bridge the gap between complex backend architecture and beautiful, intuitive frontend experiences.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-3xl shadow-lg relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl -z-10"></div>
                <h3 className="text-2xl font-bold mb-8 font-heading">Core Skills</h3>
                <div className="flex flex-col gap-5">
                  {[
                    "Website Development",
                    "Full Stack Applications",
                    "AI Chatbot Development",
                    "AI Powered Presentations",
                    "Automation Tools"
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="font-medium text-base md:text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">My Services</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] transition-all duration-300 h-full group">
                      <CardContent className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <Icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-4 font-heading">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-muted/10 border-y border-border/40">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 flex flex-col hover:border-primary/40 transition-colors shadow-lg"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted/50 border-b border-border/50">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 font-heading">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-8 flex-1 leading-relaxed">{project.desc}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="default" size="sm" className="gap-2 flex-1 rounded-full bg-primary/90 hover:bg-primary" asChild data-testid={`button-demo-${index}`}>
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 flex-1 rounded-full border-border/60 hover:bg-muted" asChild data-testid={`button-github-${index}`}>
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Github size={16} /> GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mb-8"></div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Have a project in mind or want to collaborate? Send me a message, and I'll get back to you as soon as possible.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
              <div className="md:col-span-2 space-y-8">
                <h3 className="text-2xl font-bold mb-8 font-heading">Contact Info</h3>
                
                <a href="#" className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-colors group p-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/20">
                  <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Mail size={20} className="text-foreground group-hover:text-primary" />
                  </div>
                  <span className="font-medium">hello@yourname.com</span>
                </a>
                
                <a href="#" className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-colors group p-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/20">
                  <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Linkedin size={20} className="text-foreground group-hover:text-primary" />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
                
                <a href="#" className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-colors group p-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/20">
                  <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Github size={20} className="text-foreground group-hover:text-primary" />
                  </div>
                  <span className="font-medium">GitHub Profile</span>
                </a>
              </div>

              <div className="md:col-span-3">
                <form className="space-y-6 bg-card/40 border border-border/50 p-8 rounded-3xl backdrop-blur-sm shadow-xl" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold ml-1">Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-muted/30 border-border/60 h-12 rounded-xl" data-testid="input-contact-name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold ml-1">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-muted/30 border-border/60 h-12 rounded-xl" data-testid="input-contact-email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold ml-1">Message</label>
                    <Textarea id="message" placeholder="How can I help you?" className="min-h-[150px] bg-muted/30 border-border/60 rounded-xl resize-none" data-testid="input-contact-message" />
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2 rounded-xl text-base font-semibold shadow-md mt-2" data-testid="button-submit-contact">
                    Send Message <Send size={18} className="ml-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-border/40 bg-muted/5 text-center text-muted-foreground">
        <div className="container mx-auto px-6">
          <p className="font-medium">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Chatbot Component */}
      <Chatbot />
    </div>
  );
}