import { ArrowDown, MousePointerClick, Sparkles, Code, Palette, Rocket, Award, Download, Calendar, Shield, Zap, User, TrendingUp, Briefcase, Mail ,File } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  const renderColoredText = (text) => {
    if (text.includes("//")) return <span className="text-gray-400 italic">{text}</span>;
    if (text.includes("import") || text.includes("from")) {
      return text.split("'").map((part, i) =>
          i % 2 === 1 ? <span key={i} className="text-amber-500">'{part}'</span> : <span key={i} className="text-violet-600 font-bold">{part}</span>
      );
    }
    if (text.includes("const") || text.includes("new") || text.includes("await")) {
      return <span className="text-[#002FA7]">{text}</span>;
    }
    if (text.includes("name:") || text.includes("major:") || text.includes("skills:") || text.includes("focus:")) {
      const [key, val] = text.split(":");
      return (
          <>
            <span className="text-teal-600">{key}:</span>
            <span className="text-amber-500">{val}</span>
          </>
      );
    }
    if (text.includes("console.log")) {
      return <span className="text-blue-500 font-semibold">{text}</span>;
    }
    return <span className="text-slate-700">{text}</span>;
  };

  const codeSnippets = [
    "import { CreativeStudent } from 'hkdi.edu';",
    "",
    "const student = new CreativeStudent({",
    "  name: 'Kylie',",
    "  major: 'Advertising & Design',",
    "  skills: ['Storytelling', 'Visual Comm', 'Branding'],",
    "  focus: 'Innovative ideas and thoughtful design'",
    "});",
    "",
    "await student.presentPortfolio();",
    "Focus: Brand Identity, Digital Ads, Copywriting",
    "",
    "student.connect();",
    "console.log('✨ Let\\'s create something amazing together!');"
  ];

  const achievements = [
    { number: "8+", label: "Projects completed", icon: <Zap className="h-3 w-3" /> },
    { number: "3", label: "Awards", icon: <Award className="h-3 w-3" /> },
    { number: "2", label: "Brands Launched", icon: <File className="h-3 w-3" /> }
  ];

  useEffect(() => {
    const currentLine = codeSnippets[currentCodeLine];
    if (displayedCode.length < currentLine.length) {
      setTimeout(() => {
        setDisplayedCode(currentLine.slice(0, displayedCode.length + 1));
      }, 30);
    } else {
      setTimeout(() => {
        if (currentCodeLine < codeSnippets.length - 1) {
          setCurrentCodeLine(prev => prev + 1);
          setDisplayedCode("");
        } else {
          setTimeout(() => {
            setCurrentCodeLine(0);
            setDisplayedCode("");
          }, 5000);
        }
      }, 800);
    }
  }, [displayedCode, currentCodeLine]);

  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/Sahil-resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10" ref={ref}>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg"
            style={{
              width: Math.random() * 60 + 20 + 'px',
              height: Math.random() * 60 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}

        <motion.div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px]" animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px]" animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, delay: 2 }} />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.5 } } }}>

          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                       variants={{
                         hidden: {y: 30, opacity: 0},
                         visible: {y: 0, opacity: 1, transition: {duration: 0.8}}
                       }}>
              <span className="block text-foreground">I'm Kylie</span>
              <motion.span
                  className="block bg-gradient-to-r from-[#002FA7] via-[#0033FF] to-[#001A66] bg-clip-text text-transparent mt-2"
                  animate={{backgroundPosition: ['0%', '100%', '0%']}} transition={{duration: 8, repeat: Infinity}}
                  style={{backgroundSize: '200% 100%'}}>
                Advertising Student
              </motion.span>
            </motion.h1>

            <motion.p className="text-lg sm:text-xl text-muted-foreground mt-6 leading-relaxed max-w-2xl" variants={{
              hidden: {y: 30, opacity: 0},
              visible: {y: 0, opacity: 1, transition: {duration: 0.8}}
            }}>
              I'm a <span className="text-[#002FA7] font-bold">creative and enthusiastic advertising student</span> at
              HKDI with a passion for storytelling and visual communication. I believe in the power of innovative ideas
              and thoughtful design to make brands shine.
            </motion.p>

          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8" variants={{
            hidden: {y: 30, opacity: 0},
            visible: {y: 0, opacity: 1, transition: {duration: 0.8}}
          }}>
            {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-background/60 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {achievement.icon}
                    <div className="text-2xl font-bold text-foreground">{achievement.number}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={{
              hidden: {y: 30, opacity: 0},
              visible: {y: 0, opacity: 1, transition: {duration: 0.8}}
            }}>

              <motion.a href="#projects"
                        className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-[#002FA7] text-white shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3"
                        whileHover={{scale: 1.05, y: -2}} whileTap={{scale: 0.95}}>
                <Code className="h-5 w-5"/>
                <span>Explore My Work</span>
              </motion.a>

              <motion.button
                  onClick={handleViewResume}
                  className="group relative overflow-hidden px-6 py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:border-primary/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-sm flex items-center justify-center gap-2"
                  whileHover={{scale: 1.05, y: -2}} whileTap={{scale: 0.95}}>
                <User className="h-4 w-4"/>
                <span>About me</span>
              </motion.button>

              <motion.a href="#projects"
                        className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-[#002FA7] text-white shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3"
                        whileHover={{scale: 1.05, y: -2}} whileTap={{scale: 0.95}}>
                <Mail className="h-4 w-4"/>
                <span>Get in Touch</span>
              </motion.a>


            </motion.div>

          </div>

          <motion.div className="flex-1 flex justify-center lg:justify-end w-full" variants={{
            hidden: {y: 30, opacity: 0},
            visible: {y: 0, opacity: 1, transition: {duration: 0.8}}
          }}>
            <div className="relative w-full max-w-md">
              <motion.div
                  className="bg-background/90 border border-border rounded-2xl p-8 backdrop-blur-sm shadow-2xl w-full group hover:shadow-3xl transition-all duration-500" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-sm font-mono font-semibold text-muted-foreground">portfolio.js</div>
                  </div>
                  <div className="w-4 h-4 bg-green-400/20 rounded-full animate-pulse"></div>
                </div>

                <div className="font-mono text-sm bg-primary/5 rounded-lg border border-primary/10 min-h-[280px] flex">
                  <div className="p-6 w-full">
                    <div className="grid grid-cols-1 gap-1 h-full content-start">
                      {codeSnippets.map((line, index) => (
                          <div key={index} className={`min-h-[20px] flex items-start text-xs sm:text-sm font-mono py-0.5${index < currentCodeLine ? 'opacity-100' : 'opacity-0'}${index === currentCodeLine ? 'opacity-100' : ''}transition-opacity duration-150`}>
                            {/* 行号：固定宽度，防止被挤压 */}
                            <span className="mr-4 text-slate-300 select-none w-4 flex-shrink-0 text-right">{index + 1}</span>
                            {/* 代码内容：关键在于 break-words 和 whitespace-pre-wrap */}
                            <span className="flex-1 whitespace-pre-wrap break-words overflow-hidden">
                              {index < currentCodeLine ?
                                  (renderColoredText(line)) : index === currentCodeLine ? (
                            <span className="text-[#002FA7] font-bold">
                              {displayedCode}
                                <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="ml-1 inline-block w-1.5 h-4 bg-[#002FA7] align-middle"/>
                              </span>
                                  ) : ''}
                            </span>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div className="absolute -bottom-3 -right-3 w-14 h-14 bg-[#002FA7] rounded-xl flex items-center justify-center border-2 border-background shadow-2xl"
                            animate={{ y: [0, -5, 0], rotate: [0, -2, 0], scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                  <Code className="h-5 w-5 text-white" />
                </motion.div>

                <motion.div className="absolute -top-3 -left-3 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border shadow-lg flex items-center gap-2" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.5, type: "spring" }}>
                  <Award className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-semibold text-foreground">Solutions</span>
                </motion.div>

                <motion.div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border shadow-lg text-center" initial={{ scale: 0, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ delay: 2, type: "spring" }}>
                  <div className="text-xs font-mono text-muted-foreground">Built with</div>
                  <div className="text-sm font-bold text-foreground">Modern Tech</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 0, -6] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}>
        <motion.div className="text-xs text-[#002FA7] mb-3 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg" whileHover={{ scale: 1.05 }}>
          <MousePointerClick className="h-3 w-3" />
          <span>Explore My Portfolio</span>
        </motion.div>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 border-2 border-[#002FA7]/30 rounded-full flex justify-center">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-[#002FA7] rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};