import { ArrowDown, MousePointerClick, Sparkles, Code, Palette, Rocket, Award, Download, Calendar, Shield, Zap, User, TrendingUp, Briefcase, Mail ,File } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const MagazineCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 800),
      setTimeout(() => setPhase(4), 1100),
      setTimeout(() => setPhase(5), 1500),
      setTimeout(() => setPhase(6), 1900),
      setTimeout(() => setPhase(7), 2280),
      setTimeout(() => setPhase(8), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  const foldStyle = (show) => ({
    overflow: "hidden",
    maxHeight: show ? "100px" : "0px",
    opacity: show ? 1 : 0,
    transition: "max-height 0.45s ease, opacity 0.4s ease",
  });

  const printStyle = (show) => ({
    opacity: show ? 1 : 0,
    transition: "opacity 0.35s ease",
  });

  const inkStyle = (show) => ({
    opacity: show ? 1 : 0,
    filter: show ? "blur(0px)" : "blur(6px)",
    transition: "opacity 0.5s ease, filter 0.6s ease",
  });

  return (
      <motion.div
          ref={ref}
          className="flex-1 flex justify-center lg:justify-end w-full"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
          }}
      >
        <motion.div
            className="w-full max-w-lg border border-border/60 overflow-hidden shadow-2xl relative"
            style={{ borderRadius: "4px" }}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* 扫描线覆盖层 */}
          {isInView && (
              <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" style={{ borderRadius: "4px" }}>
                <motion.div
                    className="absolute left-0 right-0 bottom-0 bg-background/90"
                    animate={{ height: ["100%", "0%"] }}
                    transition={{ duration: 2.8, ease: [0.4, 0, 0.6, 1] }}
                />
                <motion.div
                    className="absolute left-0 right-0 h-[3px]"
                    style={{ background: "rgba(180,210,255,0.6)", boxShadow: "0 0 10px 3px rgba(100,160,255,0.3)" }}
                    animate={{ y: [0, 600], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2.8, ease: [0.4, 0, 0.6, 1], times: [0, 0.05, 0.95, 1] }}
                />
              </div>
          )}

          {/* 刊头 */}
          <div className="bg-[#002FA7] px-5 py-3 flex items-center justify-between">
          <span style={printStyle(phase >= 1)} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/50">
            Portfolio Quarterly
          </span>
            <span style={printStyle(phase >= 1)} className="text-[10px] text-white/35 tracking-[0.1em]">
            Vol. 01 · 2026
          </span>
          </div>

          {/* 封面主视觉 */}
          <div className="bg-[#001A66] px-7 pt-10 pb-8 relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "80px 40px"
                }}
            />
            <p style={printStyle(phase >= 2)} className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/40 mb-3 relative">
              Featured Creative · HKDI
            </p>
            <h3
                style={{ ...inkStyle(phase >= 3), fontFamily: "Georgia, serif" }}
                className="text-7xl font-bold text-white leading-none tracking-tight relative"
            >
              Kylie
            </h3>
            <p style={printStyle(phase >= 4)} className="text-[11px] tracking-[0.14em] uppercase text-white/45 mt-3 relative">
              Advertising &amp; Design Student
            </p>
            <div style={printStyle(phase >= 4)} className="w-10 h-0.5 bg-white/25 mt-4 relative" />
          </div>

          {/* 栏目列表 */}
          <div className="bg-background divide-y divide-border/50">

            {/* 01 Vision */}
            <div className="flex">
              <div
                  style={{ ...foldStyle(phase >= 5), width: "44px", flexShrink: 0 }}
                  className="bg-[#002FA7] flex items-center justify-center text-[11px] font-medium text-white/55"
              >
                01
              </div>
              <div style={foldStyle(phase >= 5)} className="px-4 py-3.5 flex-1">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-1">Vision</p>
                <p className="text-[15px] text-foreground leading-snug">Where storytelling meets visual precision</p>
              </div>
            </div>

            {/* 02 Expertise */}
            <div className="flex">
              <div
                  style={{ ...foldStyle(phase >= 6), width: "44px", flexShrink: 0 }}
                  className="bg-[#002FA7] flex items-center justify-center text-[11px] font-medium text-white/55"
              >
                02
              </div>
              <div style={{ ...foldStyle(phase >= 6), maxHeight: phase >= 6 ? "120px" : "0px" }} className="px-4 py-3.5 flex-1">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">Expertise</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Branding", "Digital Ads", "Copywriting", "Visual Comm", "UI / UX"].map(tag => (
                      <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 border border-[#002FA7]/40 text-[#002FA7]"
                          style={{ borderRadius: "2px" }}
                      >
                    {tag}
                  </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 03 Highlights */}
            <div className="flex">
              <div
                  style={{ ...foldStyle(phase >= 7), width: "44px", flexShrink: 0 }}
                  className="bg-[#002FA7] flex items-center justify-center text-[11px] font-medium text-white/55"
              >
                03
              </div>
              <div style={foldStyle(phase >= 7)} className="px-4 py-3.5 flex-1">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-1">Highlights</p>
                <p className="text-[15px] text-foreground">8+ Projects · 3 Awards · 2 Brands</p>
              </div>
            </div>
          </div>

          {/* 底栏 */}
          <div
              style={{ ...foldStyle(phase >= 8), maxHeight: phase >= 8 ? "50px" : "0px" }}
              className="bg-muted/30 border-t border-border/50 px-5 py-2.5 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-green-400 block"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[11px] text-muted-foreground tracking-wider">Open to opportunities</span>
            </div>
            <div className="flex items-end gap-px h-5">
              {[14, 20, 10, 18, 12, 20, 8, 16, 20, 12, 18, 10].map((h, i) => (
                  <span key={i} className="block w-0.5 bg-muted-foreground/25" style={{ height: `${h}px` }} />
              ))}
            </div>
          </div>

        </motion.div>
      </motion.div>
  );
};

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

            <MagazineCard />

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