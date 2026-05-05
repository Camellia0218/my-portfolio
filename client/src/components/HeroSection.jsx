import { ArrowDown, MousePointerClick, Sparkles, Code, Palette, Rocket, Award, Download, Calendar, Shield, Zap, User, TrendingUp, Briefcase, Mail, File } from "lucide-react";
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

          <div className="bg-[#002FA7] px-5 py-3 flex items-center justify-between">
          <span style={printStyle(phase >= 1)} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/50">
            Portfolio Quarterly
          </span>
            <span style={printStyle(phase >= 1)} className="text-[10px] text-white/35 tracking-[0.1em]">
            Vol. 01 · 2026
          </span>
          </div>

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

          <div className="bg-background divide-y divide-border/50">
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const achievements = [
    { number: "8+", label: "Projects completed", icon: <Zap className="h-3 w-3" /> },
    { number: "3", label: "Awards", icon: <Award className="h-3 w-3" /> },
    { number: "2", label: "Brands Launched", icon: <File className="h-3 w-3" /> }
  ];

  const handleViewResume = () => {
    window.open('/Sahil-resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
      <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700"
          ref={ref}
          style={{
            backgroundImage: isDarkMode ? 'url("/bcn.png")' : 'url("/bcw.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
      >
        <div className={`absolute inset-0 transition-colors duration-700 ${isDarkMode ? 'bg-black/30' : 'bg-white/10'}`} />

        <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0 relative z-10">
          <motion.div
              className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.5 } }
              }}
          >
            <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              {/* 个人卡片：黑夜模式纯黑背景 */}
              <motion.div
                  className={`p-6 sm:p-8 rounded-2xl shadow-xl border backdrop-blur-md transition-colors duration-700 ${
                      isDarkMode ? 'bg-black border-white/10' : 'bg-white/95 border-white'
                  }`}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
              >
                <motion.h1
                    className={`text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight transition-colors duration-700 ${
                        isDarkMode ? 'text-white' : 'text-[#001A66]'
                    }`}
                >
                  <span className="block">I'm Kylie</span>
                  {/* 职业改为深克莱因蓝 */}
                  <span className={`block mt-1 ${isDarkMode ? 'text-[#002FA7]' : 'text-[#002FA7]'}`}>Advertising Student</span>
                </motion.h1>

                <motion.p
                    className={`text-lg sm:text-xl font-medium mt-6 leading-relaxed transition-colors duration-700 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-800'
                    }`}
                >
                  I'm a <span className="text-[#002FA7] font-bold">creative and enthusiastic advertising student</span> at HKDI with a passion for storytelling and visual communication.
                </motion.p>
              </motion.div>

              {/* 成就卡片：黑夜模式纯黑背景 */}
              <motion.div
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8"
                  variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
              >
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className={`text-center p-4 rounded-xl border backdrop-blur-md transition-all duration-700 ${
                            isDarkMode ? 'bg-black border-white/5' : 'bg-white/70 border-border/50'
                        }`}
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {/* 图标改为深克莱因蓝 */}
                        <span className="text-[#002FA7]">{achievement.icon}</span>
                        <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-foreground'}`}>{achievement.number}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{achievement.label}</div>
                    </div>
                ))}
              </motion.div>

              <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
              >
                <motion.a
                    href="#projects"
                    className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-white shadow-lg text-sm flex items-center justify-center gap-3 bg-[#002FA7] hover:opacity-90"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <Code className="h-5 w-5" />
                  <span>Explore My Work</span>
                </motion.a>

                {/* About me 按钮：黑夜模式纯黑背景 + 深克莱因蓝图标 */}
                <motion.button
                    onClick={handleViewResume}
                    className={`group relative overflow-hidden px-6 py-4 rounded-xl font-semibold border transition-all duration-700 backdrop-blur-md text-sm flex items-center justify-center gap-2 ${
                        isDarkMode
                            ? 'bg-black border-white/10 text-white hover:bg-zinc-900'
                            : 'border-border text-muted-foreground bg-white/70 hover:border-primary/30'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <User className="h-4 w-4 text-[#002FA7]" />
                  <span>About me</span>
                </motion.button>

                <motion.a
                    href="#contact"
                    className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-white shadow-lg text-sm flex items-center justify-center gap-3 bg-[#002FA7] hover:opacity-90"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-4 w-4" />
                  <span>Get in Touch</span>
                </motion.a>
              </motion.div>
            </div>

            <motion.div
                className="flex-1 flex justify-center lg:justify-end w-full"
                variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
            >
              <MagazineCard />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 0, -6] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
        >
          <motion.div
              className={`text-xs mb-3 flex items-center gap-2 px-4 py-2 rounded-full border shadow-lg backdrop-blur-sm transition-all duration-700 ${
                  isDarkMode ? 'bg-black border-white/10 text-[#002FA7]' : 'bg-white/80 border-border text-[#002FA7]'
              }`}
              whileHover={{ scale: 1.05 }}
          >
            <MousePointerClick className="h-3 w-3" />
            <span>Explore My Portfolio</span>
          </motion.div>
          <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-5 h-8 border-2 rounded-full flex justify-center ${isDarkMode ? 'border-[#002FA7]/30' : 'border-[#002FA7]/30'}`}
          >
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-1 h-2 rounded-full mt-2 bg-[#002FA7]`}
            />
          </motion.div>
        </motion.div>
      </section>
  );
};