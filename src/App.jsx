import React, { useState } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaExternalLinkAlt, 
  FaArrowLeft, 
  FaArrowRight 
} from 'react-icons/fa';
import myProfilePhoto from './assets/shagun.jpeg';

export default function App() {
  // Initialize state for theme tracking
  const [isLight, setIsLight] = useState(false);
  
  // Custom filter states
  const [filter, setFilter] = useState('all');

  const projectData = [
    {
      title: "Smart Leads Admin Dashboard",
      type: "utility",
      desc: "Developed a responsive full-stack Admin Dashboard designed for efficient data visualization. Features a robust RESTful API to handle secure CRUD operations and optimized database queries for fast loading times.",
      tools: ["MongoDB", "Express", "React", "Node.js", "REST API"],
      github: "https://github.com/sh-a-gun/smart-leads-dashboard"
    },
    {
      title: "To-Do List Task Management System",
      type: "interactive",
      desc: "Implemented a full-featured task management system featuring persistent tracking. Utilized local storage mechanisms to ensure state and data retention across independent browser sessions.",
      tools: ["JavaScript (ES6)", "DOM Manipulation", "Local Storage", "HTML", "CSS"],
      github: "https://github.com/sh-a-gun/To-do-list"
    },
    {
      title: "Calculator Web App Responsive Logic",
      type: "utility",
      desc: "Engineered an adaptive computational interface focusing on seamless user interactions and real-time operations. Applied a modular architectural structure to guarantee codebase scalability.",
      tools: ["HTML", "CSS", "JavaScript", "ES6 Syntax"],
      github: "https://github.com/sh-a-gun/Calculator"
    },
    {
      title: "Rock Paper Scissors Game",
      type: "interactive",
      desc: "Built an interactive, logic-based Rock Paper Scissors game featuring responsive design and state tracking. Implemented clean game loop mechanics, conditional scoring, and real-time UI updates based on user choices.",
      tools: ["HTML5", "CSS3", "JavaScript (ES6)", "DOM Manipulation"],
      github: "https://github.com/sh-a-gun/Rock-Paper-Scissor-Game"
    }
  ];

  const filteredProjects = filter === 'all' ? projectData : projectData.filter(p => p.type === filter);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans relative overflow-hidden selection:bg-[#ff2a85] selection:text-black ${
      isLight ? 'bg-gray-50 text-gray-900' : 'bg-[#060608] text-white'
    }`}>
      
      {/* Background Ambient Glows - Strict Hot Pink Aura */}
      <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-[#ff2a85]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#ff2a85]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center h-16 max-w-5xl mx-auto px-4 w-full relative z-50">
        {/* Left Spacer */}
        <div className="w-10 h-10 hidden md:block pointer-events-none opacity-0" />

        {/* Center Links */}
        <div className={`flex items-center gap-8 border px-6 py-2 rounded-full backdrop-blur-md mx-auto md:mx-0 ${
          isLight ? 'bg-white/80 border-black/5 shadow-sm' : 'bg-white/[0.01] border-white/5'
        }`}>
          <a href="#home" className={`text-sm font-medium transition duration-200 ${isLight ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-white'}`}>Home</a>
          <a href="#about" className={`text-sm font-medium transition duration-200 ${isLight ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-white'}`}>About</a>
          <a href="#skills" className={`text-sm font-medium transition duration-200 ${isLight ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-white'}`}>Skills</a>
          <a href="#projects" className={`text-sm font-medium transition duration-200 ${isLight ? 'text-gray-600 hover:text-black' : 'text-gray-400 hover:text-white'}`}>Projects</a>
        </div>

        {/* Right Toggle */}
        <div className="flex items-center flex-shrink-0">
          <button 
            onClick={() => setIsLight(!isLight)}
            className={`px-4 py-2 rounded-xl border transition-all duration-200 text-xs font-mono font-semibold tracking-wide ${
              isLight 
                ? 'border-black/10 bg-black/5 text-black hover:bg-black/10' 
                : 'border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {isLight ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* Hero Section */}
        <section id="home" className="py-24 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[85vh]">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-normal">
              Hi, I'm <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a85] via-[#ff6ba9] to-white">Shagun Chauhan</span>
            </h1>
            <p className={`max-w-lg text-sm md:text-base leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              Results-driven Frontend Developer focused on creating seamless digital experiences. I transform intricate structural logic into clean, highly responsive interface components.
            </p>
            
            {/* Action Anchors */}
            <div className="flex gap-4 pt-2">
              <a href="#projects" className={`px-6 py-3 rounded-full border font-semibold scale-100 hover:scale-[1.02] transition-all duration-200 text-sm ${
                isLight ? 'border-black/10 bg-black text-white hover:bg-black/90' : 'border-white/10 bg-white/5 text-gray-300 hover:text-black hover:bg-white'
              }`}>
                View My Projects
              </a>
              <a href="#about" className={`px-6 py-3 rounded-full border font-semibold scale-100 hover:scale-[1.02] transition-all duration-200 text-sm ${
                isLight ? 'border-black/10 bg-white text-gray-800 hover:bg-gray-100' : 'border-white/10 bg-white/5 text-gray-300 hover:text-black hover:bg-white'
              }`}>
                About Details
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex gap-3 pt-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/sh-a-gun" },
                { icon: <FaLinkedin />, link: "http://linkedin.com/in/shagun09" }
              ].map((item, index) => (
                <a key={index} href={item.link} className={`p-3 rounded-full border transition duration-300 ${
                  isLight ? 'bg-black/[0.02] border-black/5 text-gray-600 hover:text-[#ff2a85]' : 'bg-white/[0.03] border-white/5 text-gray-400 hover:text-[#ff2a85] hover:border-[#ff2a85]/30'
                }`}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Area Profile Graphic */}
          <div className="flex-1 flex justify-center relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-[#ff2a85]/20 to-transparent p-[1px] backdrop-blur-sm relative border border-white/5 shadow-2xl">
              <div className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center relative ${isLight ? 'bg-gray-200' : 'bg-[#0d0d11]'}`}>
                <div className="absolute w-48 h-48 bg-[#ff2a85]/10 rounded-full blur-2xl animate-pulse" />
                <img 
                  src={myProfilePhoto}
                  alt="Shagun Chauhan" 
                  className="w-full h-full object-cover z-10 relative"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className={`py-20 border-t flex flex-col md:flex-row items-center gap-12 ${isLight ? 'border-black/5' : 'border-white/5'}`}>
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About Me</h2>
            <p className={`text-sm md:text-base leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              I specialize in parsing design maps into clean, structured HTML, CSS, and functional React applications. Currently expanding my horizons by learning the MERN full-stack ecosystem to build robust end-to-end web applications.
            </p>
          </div>
          <div className="flex-1">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-black/5 shadow-sm' : 'bg-white/[0.01] border-white/5'}`}>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ff2a85] block mb-4 font-mono">⚡ Core Focus</span>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                Building accessible components, implementing secure backend APIs, database management, and keeping application data states perfectly aligned.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Stack Horizontal Scroll Carousel */}
        <section id="skills" className={`py-20 border-t ${isLight ? 'border-black/5' : 'border-white/5'}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Technical Stack</h2>
              <p className={`text-sm mt-1 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Languages, frameworks, and developer environment tools</p>
            </div>
            
            {/* Control Wrapper matching the Projects style arrangement */}
            <div className={`flex items-center gap-2 self-end md:self-auto border p-1 rounded-xl ${
              isLight ? 'bg-gray-100/80 border-black/5' : 'bg-white/[0.02] border-white/5'
            }`}>
              
              {/* Left Arrow Button */}
              <button 
                onClick={() => {
                  const container = document.getElementById('skills-carousel');
                  if (container) container.scrollBy({ left: -340, behavior: 'smooth' });
                }}
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition duration-200 active:scale-95 text-xs shrink-0 ${
                  isLight ? 'text-gray-600 hover:text-[#ff2a85] hover:bg-black/5' : 'text-gray-400 hover:text-[#ff2a85] hover:bg-white/[0.03]'
                }`}
                title="Scroll Left"
              >
                <FaArrowLeft />
              </button>

              <span className={`text-[10px] font-mono px-2 uppercase tracking-widest ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                Skills Track
              </span>

              {/* Right Arrow Button */}
              <button 
                onClick={() => {
                  const container = document.getElementById('skills-carousel');
                  if (container) container.scrollBy({ left: 340, behavior: 'smooth' });
                }}
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition duration-200 active:scale-95 text-xs shrink-0 ${
                  isLight ? 'text-gray-600 hover:text-[#ff2a85] hover:bg-black/5' : 'text-gray-400 hover:text-[#ff2a85] hover:bg-white/[0.03]'
                }`}
                title="Scroll Right"
              >
                <FaArrowRight />
              </button>

            </div>
          </div>

          {/* Horizontal Scroll Track Layout */}
          <div 
            id="skills-carousel"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`#skills-carousel::-webkit-scrollbar { display: none; }`}</style>

            {[
              { cat: "Languages", items: ["JavaScript (ES6)", "Python", "C++"] },
              { cat: "Frontend / UI Frameworks", items: ["React.js", "HTML5 & CSS3", "Tailwind CSS"] },
              { cat: "Backend & Cloud MERN", items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "SQL (MySQL)"] },
              { cat: "Tools & Core Paradigms", items: ["Git & GitHub", "VS Code", "Data Structures", "Object-Oriented Programming"] }
            ].map((skillBlock, idx) => (
              <div 
                key={idx} 
                className={`w-[320px] md:w-[350px] shrink-0 snap-start p-6 rounded-2xl border transition-all duration-300 flex flex-col group ${
                  isLight 
                    ? 'bg-white border-black/5 shadow-sm hover:border-[#ff2a85]/40 hover:shadow-md' 
                    : 'bg-white/[0.01] border-white/5 hover:border-[#ff2a85]/30 hover:bg-white/[0.03]'
                }`}
              >
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 group-hover:text-[#ff2a85] mb-4 font-mono transition-colors duration-300">
                    {skillBlock.cat}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillBlock.items.map((item) => (
                      <span 
                        key={item} 
                        className={`px-3 py-1.5 rounded-md border text-xs cursor-default select-none transition-colors duration-200 ${
                          isLight 
                            ? 'bg-gray-50 border-black/5 text-gray-700' 
                            : 'bg-white/5 border-white/10 text-gray-300'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Projects Container */}
        <section id="projects" className={`py-20 border-t ${isLight ? 'border-black/5' : 'border-white/5'}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className={`text-sm mt-1 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Live client utilities and logic platforms built with functional architecture</p>
            </div>
            
            <div className={`flex items-center gap-2 self-end md:self-auto border p-1 rounded-xl ${
              isLight ? 'bg-gray-100/80 border-black/5' : 'bg-white/[0.02] border-white/5'
            }`}>
              
              {/* 1. Left Arrow Button */}
              <button 
                onClick={() => {
                  const container = document.getElementById('project-carousel');
                  if (container) container.scrollBy({ left: -340, behavior: 'smooth' });
                }}
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition duration-200 active:scale-95 text-xs shrink-0 ${
                  isLight ? 'text-gray-600 hover:text-[#ff2a85] hover:bg-black/5' : 'text-gray-400 hover:text-[#ff2a85] hover:bg-white/[0.03]'
                }`}
                title="Scroll Left"
              >
                <FaArrowLeft />
              </button>

              {/* 2. Filter Pill Controls */}
              <div className="flex gap-1">
                {['all', 'interactive', 'utility'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-4 py-1.5 text-xs font-medium rounded-md uppercase tracking-wider transition ${
                      filter === type 
                        ? 'bg-[#ff2a85] text-black font-semibold' 
                        : isLight ? 'text-gray-500 hover:text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* 3. Right Arrow Button */}
              <button 
                onClick={() => {
                  const container = document.getElementById('project-carousel');
                  if (container) container.scrollBy({ left: 340, behavior: 'smooth' });
                }}
                className={`w-9 h-9 flex items-center justify-center rounded-lg transition duration-200 active:scale-95 text-xs shrink-0 ${
                  isLight ? 'text-gray-600 hover:text-[#ff2a85] hover:bg-black/5' : 'text-gray-400 hover:text-[#ff2a85] hover:bg-white/[0.03]'
                }`}
                title="Scroll Right"
              >
                <FaArrowRight />
              </button>

            </div>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div 
            id="project-carousel"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`#project-carousel::-webkit-scrollbar { display: none; }`}</style>

            {filteredProjects.map((proj, idx) => (
              <div 
                key={idx} 
                className={`w-[320px] md:w-[350px] shrink-0 snap-start p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  isLight 
                    ? 'bg-white border-black/5 shadow-sm hover:border-[#ff2a85]/40 hover:shadow-md' 
                    : 'bg-white/[0.01] border-white/5 hover:border-[#ff2a85]/30 hover:bg-white/[0.03]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-base font-bold group-hover:text-[#ff2a85] transition-colors duration-200">{proj.title}</h3>
                    <a 
                      href={proj.title === "Smart Leads Admin Dashboard" ? "https://smart-leads-dashboard-mocha.vercel.app/" : proj.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`p-1 text-xs transition ${isLight ? 'text-gray-400 hover:text-[#ff2a85]' : 'text-gray-500 hover:text-[#ff2a85]'}`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                  <p className={`text-xs leading-relaxed mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {proj.tools.map((tool, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff2a85]/5 border border-[#ff2a85]/10 text-[#ff2a85]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className={`py-24 border-t text-center relative ${isLight ? 'border-black/5' : 'border-white/5'}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#ff2a85]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <p className="text-xs uppercase tracking-widest text-[#ff2a85] font-semibold font-mono">Let's Connect</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h2>
            <p className={`text-sm md:text-base leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              I'm currently looking for new opportunities to contribute, learn, and grow as a developer. Whether you want to talk about a project collaboration, technical roles, or just say hello, my inbox is open!
            </p>
            
            <div className="pt-4">
              <a 
                href="mailto:shagunc392oo@gmail.com"
                className={`inline-block px-8 py-4 rounded-full border font-semibold scale-100 hover:scale-[1.03] transition-all duration-200 text-sm shadow-lg hover:shadow-[0_0_30px_rgba(255,42,133,0.15)] ${
                  isLight 
                    ? 'border-black/10 bg-black text-white hover:bg-black/90' 
                    : 'border-white/10 bg-white/5 text-gray-300 hover:text-black hover:bg-white'
                }`}
              >
                Say Hello!
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className={`py-8 text-center border-t text-xs font-mono ${isLight ? 'border-black/5 text-gray-400' : 'border-white/5 text-gray-600'}`}>
        &copy; {new Date().getFullYear()} Shagun Chauhan. Built with React & Tailwind.
      </footer>
    </div>
  );
}