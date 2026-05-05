import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowDownRight, Linkedin, Github, Code2, ExternalLink, Briefcase, Code } from 'lucide-react';
import portraitImg from './assets/images/ChatGPT Image Apr 30, 2026, 04_42_53 PM.png';

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/irawit1430", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/anurag-tiwary", label: "LinkedIn" },
  { icon: Code2, href: "https://me.developers.google.com/u/111223256347770135558", label: "Google Dev" },
];

const EXPERIENCES = [
  { company: "Voltava", role: "Frontend Developer", period: "2025 - Present", desc: "Building EV charging interfaces & leveraging agentic AI workflows for rapid development." },
  { company: "Rytfull Media", role: "Frontend Developer", period: "2024 - 2025", desc: "Developed responsive web applications with a focus on optimized user experience." }
];

const PROJECTS = [
  { name: "Irawit (EXAMER)", desc: "AI-Driven Study Platform with specialized AI teachers and personalized learning paths.", tech: "Next.js • Firebase • Gemini API", link: "https://examer.onrender.com" },
  { name: "WapsiApp", desc: "Community-based lost & found mobile application featuring real-time updates.", tech: "Flutter • Firebase", link: "#" },
  { name: "Client Portfolio V001", desc: "Custom professional portfolio tailored to specific client requirements.", tech: "React • Tailwind", link: "https://irawit1430.github.io/v001/" }
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    setMatches(media.matches);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

// Noticeable fade in variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: "easeOut" } }
};

function DesktopLayout({ content }: { content: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6666%"]);

  return (
    <div ref={containerRef} className="h-[300vh] w-full relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex w-[300vw] h-screen items-center">
          {content}
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const scrollToSection = (index: number) => {
    if (isDesktop) {
      window.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    } else {
      const el = document.getElementById(['home', 'experience', 'projects'][index]);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = (
    <>
      {/* Hero Section */}
      <div id="home" className="w-full md:w-screen h-auto md:h-screen shrink-0 flex items-center justify-center relative">
        <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 px-6 max-w-7xl w-full mx-auto flex flex-col justify-center mt-12 md:mt-16">
          {/* Decorative tiny bubbles */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full border border-black/10 glass-panel opacity-50 animate-[bounce_4s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full border border-black/10 glass-panel opacity-60 animate-[bounce_6s_ease-in-out_infinite_reverse]" />
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full border border-black/10 glass-panel opacity-40 animate-[bounce_5s_ease-in-out_infinite]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 relative z-10">
            {/* Left Text Block */}
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 mt-10 lg:mt-0"
            >
              <div className="text-gray-500 text-lg md:text-xl font-light tracking-wide">Hello, I'm</div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9]">
                Anurag<br />
                <span className="text-gray-800">Tiwary</span>
              </h1>
              
              <div className="glass-panel mt-2 md:mt-6 px-5 py-2.5 rounded-full inline-flex items-center gap-3 text-sm md:text-base text-gray-800">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                Frontend Developer
              </div>

              <button onClick={() => scrollToSection(1)} className="mt-6 lg:mt-12 flex items-center gap-4 text-xs tracking-widest text-gray-500 uppercase font-medium group cursor-pointer bg-transparent border-none">
                SCROLL TO EXPLORE
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black/5 transition-colors">
                  <ArrowDownRight className="w-4 h-4 text-gray-900 md:-rotate-90 md:group-hover:translate-x-1 md:group-hover:translate-y-0 group-hover:translate-y-1 transition-all" />
                </div>
              </button>
            </motion.div>

            {/* Center Bubble Portrait */}
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="flex-1 flex justify-center items-center w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[420px]"
            >
              <div className="relative w-full aspect-[4/5] glass-panel fluid-blob overflow-hidden p-0 backdrop-blur-3xl group">
                <div className="bubble-highlight" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent mix-blend-overlay z-10" />
                <img 
                  src={portraitImg} 
                  alt="Anurag Tiwary" 
                  className="w-full h-full object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </motion.div>

            {/* Right Text Block */}
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-left gap-6 lg:gap-8"
            >
              <p className="text-gray-600 text-sm md:text-base lg:max-w-[260px] font-light leading-relaxed">
                I architect dynamic user interfaces, converting complex <span className="text-blue-600 font-medium">Figma designs</span> into robust web applications leveraging <span className="text-purple-600 font-medium">AI workflows</span>.
              </p>
            </motion.div>
          </div>

          {/* Floating Social Sidebar (Desktop) */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-40 ml-2 -mt-[95px] pr-[318px]"
          >
            {SOCIAL_LINKS.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                target="_blank"
                rel="noreferrer"
                title={item.label}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-black/5 transition-colors text-gray-600 hover:text-gray-900 group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>

          {/* Floating Social Bar (Mobile) */}
          <div className="flex lg:hidden justify-center gap-4 mt-12 mb-8 relative z-40">
             {SOCIAL_LINKS.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                target="_blank"
                rel="noreferrer"
                title={item.label}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-black/5 transition-colors text-gray-600 hover:text-gray-900"
              >
                <item.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Bottom Stats Section */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="glass-panel w-full max-w-[993px] mx-auto mt-8 lg:mt-12 rounded-[3px] border-solid border-gray-200/50 min-h-[100px] lg:min-h-[110px] p-4 sm:p-6 flex flex-row justify-between lg:justify-around items-center relative z-20 overflow-x-auto whitespace-nowrap hide-scrollbar"
          >
            <div className="text-center px-2 sm:px-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">10+</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-light">Major Projects</div>
            </div>
            <div className="w-[1px] h-8 sm:h-12 bg-black/10 mx-2 sm:mx-0 shrink-0" />
            <div className="text-center px-2 sm:px-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">2+</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-light">Years Experience</div>
            </div>
            <div className="w-[1px] h-8 sm:h-12 bg-black/10 mx-2 sm:mx-0 shrink-0" />
            <div className="text-center px-2 sm:px-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1">3+</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-light">AI Tech Stacks</div>
            </div>
            <div className="w-[1px] h-8 sm:h-12 bg-black/10 mx-2 sm:mx-0 shrink-0" />
            <div className="text-center px-2 sm:px-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">20+</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-light">Figma Conversions</div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Experience Section */}
      <div id="experience" className="w-full md:w-screen h-auto md:h-screen shrink-0 flex items-center justify-center relative">
        <section className="py-20 px-6 max-w-5xl w-full mx-auto relative z-10">
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.2 }}
                className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/50 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                  <div className="text-blue-600 font-medium mb-3">{exp.company}</div>
                  <p className="text-gray-600 text-sm md:text-base max-w-2xl">{exp.desc}</p>
                </div>
                <div className="text-sm font-medium text-gray-400 bg-black/5 px-4 py-2 rounded-full w-fit">
                  {exp.period}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <div id="projects" className="w-full md:w-screen h-auto md:h-screen shrink-0 flex items-center justify-center relative">
        <section className="py-20 px-6 max-w-5xl w-full mx-auto relative z-10 mb-20 md:mb-0">
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((proj, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.2 }}
                className="glass-panel p-6 rounded-2xl flex flex-col h-full group hover:bg-white/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{proj.name}</h3>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-600 text-sm flex-1 mb-6">{proj.desc}</p>
                <div className="text-xs font-medium text-gray-500 bg-black/5 px-3 py-1.5 rounded-md w-fit">
                  {proj.tech}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );

  return (
    <div className="min-h-screen relative text-gray-900 font-sans selection:bg-blue-500/30 bg-white">
      
      {/* Abstract Background Elements */}
      <div className="fixed top-[20%] left-[50%] -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-[40%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-purple-400/20 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 p-4 md:p-6">
        <div className="glass-nav max-w-6xl mx-auto rounded-full px-6 py-3 flex items-center justify-between">
          <div className="text-xl tracking-tight hidden sm:block">
            <span className="font-bold">Anurag</span> <span className="font-light text-gray-600">Tiwary</span>
          </div>
          <div className="text-xl tracking-tight block sm:hidden font-bold">AT</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button onClick={() => scrollToSection(0)} className="hover:text-gray-900 transition-colors cursor-pointer bg-transparent border-none">Home</button>
            <button onClick={() => scrollToSection(1)} className="hover:text-gray-900 transition-colors cursor-pointer bg-transparent border-none">Experience</button>
            <button onClick={() => scrollToSection(2)} className="hover:text-gray-900 transition-colors cursor-pointer bg-transparent border-none">Projects</button>
          </div>
          
          <a href="mailto:anuirawit@gmail.com" className="glass-panel hover:bg-black/5 transition-colors rounded-full px-5 py-2 text-sm font-medium flex items-center gap-2 group">
            Let's Connect 
            <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      {isDesktop ? (
        // Desktop Horizontal Scroll Layout
        <DesktopLayout content={content} />
      ) : (
        // Mobile Vertical Layout
        <div className="flex flex-col w-full overflow-x-hidden">
          {content}
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm relative z-10 border-t border-black/5 bg-white/50 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Anurag Tiwary. All rights reserved.</p>
      </footer>
    </div>
  );
}
