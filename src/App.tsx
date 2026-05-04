/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ArrowDownRight, Instagram, Linkedin, Dribbble, Github } from 'lucide-react';
import portraitImg from './assets/images/regenerated_image_1777581916154.png';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden text-gray-900 font-sans selection:bg-blue-500/30">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-purple-400/20 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 p-6">
        <div className="glass-nav max-w-6xl mx-auto rounded-full px-6 py-3 flex items-center justify-between">
          <div className="text-xl tracking-tight hidden sm:block">
            <span className="font-bold">Anurag</span> <span className="font-light text-gray-600">Tiwary</span>
          </div>
          <div className="text-xl tracking-tight block sm:hidden font-bold">AT</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#home" className="relative text-gray-900 flex flex-col items-center">
              Home
              <span className="absolute -bottom-2 w-1 h-1 bg-blue-500 rounded-full" />
            </a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#works" className="hover:text-gray-900 transition-colors">Works</a>
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          
          <button className="glass-panel hover:bg-black/5 transition-colors rounded-full px-5 py-2 text-sm font-medium flex items-center gap-2 group">
            Let's Connect 
            <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
          </button>
        </div>
      </nav>

      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        
        {/* Decorative tiny bubbles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full border border-black/10 glass-panel opacity-50 
                        animate-[bounce_4s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full border border-black/10 glass-panel opacity-60
                        animate-[bounce_6s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full border border-black/10 glass-panel opacity-40
                        animate-[bounce_5s_ease-in-out_infinite]" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 relative z-10">
          
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 mt-10 lg:mt-0"
          >
            <div className="text-gray-500 text-lg md:text-xl font-light tracking-wide">Hello, I'm</div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9]">
              Anurag<br />
              <span className="text-gray-800">Tiwary</span>
            </h1>
            
            <div className="glass-panel mt-2 md:mt-6 px-5 py-2.5 rounded-full inline-flex items-center gap-3 text-sm md:text-base text-gray-800">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              Frontend Developer & Web Specialist
            </div>

            <div className="mt-10 lg:mt-20 flex items-center gap-4 text-xs tracking-widest text-gray-500 uppercase font-medium group cursor-pointer">
              SCROLL TO EXPLORE
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black/5 transition-colors">
                <ArrowDownRight className="w-4 h-4 text-gray-900" />
              </div>
            </div>
          </motion.div>

          {/* Center Bubble Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 flex justify-center items-center w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px]"
          >
            <div className="relative w-full aspect-[4/5] glass-panel fluid-blob overflow-hidden p-0 backdrop-blur-3xl group">
              {/* Highlight to simulate 3D bubble */}
              <div className="bubble-highlight" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent mix-blend-overlay z-10" />
              
              <img 
                src={portraitImg} 
                alt="Anurag Tiwary Portrait" 
                className="w-full h-full object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
          </motion.div>

          {/* Right Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-left gap-6 lg:gap-8"
          >
            <p className="text-gray-600 text-base md:text-lg lg:max-w-[300px] font-light leading-relaxed">
              I architect dynamic user interfaces, leveraging AI and robust frontend tools to build applications that leave a <span className="text-blue-600 font-medium">lasting impact</span>.
            </p>
          </motion.div>

        </div>

        {/* Floating Social Sidebar (Desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-40 ml-2 -mt-[95px] pr-[318px]"
        >
          {[
            { icon: Github, href: "https://github.com/anurag-tiwary" },
            { icon: Linkedin, href: "https://linkedin.com/in/anurag-tiwary" },
            { icon: Dribbble, href: "#" },
            { icon: Instagram, href: "#" },
          ].map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-black/5 transition-colors text-gray-600 hover:text-gray-900"
            >
              <item.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Floating Social Bar (Mobile) */}
        <div className="flex lg:hidden justify-center gap-4 mt-12 mb-8 relative z-40">
           {[
            { icon: Github, href: "https://github.com/anurag-tiwary" },
            { icon: Linkedin, href: "https://linkedin.com/in/anurag-tiwary" },
            { icon: Dribbble, href: "#" },
            { icon: Instagram, href: "#" },
          ].map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-black/5 transition-colors text-gray-600 hover:text-gray-900"
            >
              <item.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-panel w-full max-w-[993px] mx-auto mt-10 lg:mt-24 rounded-[3px] border-solid border-gray-200/50 min-h-[127px] p-4 sm:p-8 flex flex-row justify-between lg:justify-around items-center relative z-20 overflow-x-auto whitespace-nowrap hide-scrollbar"
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

      </main>
    </div>
  );
}

