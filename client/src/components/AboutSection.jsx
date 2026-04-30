import React, { useState, useEffect } from 'react';
import { Briefcase, Code, User, Download, Calendar, Sparkles, Target, Github, Linkedin, Twitter, Mail, Star ,Award,File} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  const achievements = [
    { number: "8+", label: "Projects", icon: <Briefcase className="h-5 w-5" />, suffix: "" },
    { number: "2", label: "Years Exp", icon: <Calendar className="h-5 w-5" />, suffix: "+" },
    { number: "3", label: "Awards", icon: <Award className="h-5 w-5" />, suffix: "%" },
    { number: "2", label: "Brands Launched", icon: <File className="h-5 w-5" />, suffix: "+" }
  ];

  const techStack = [
    {
      category: "Branding",
      items: [
        "Project Harbour",
        "D&AD Project"
      ]
    },
    {
      category: "Poster Design",
      items: [
        "Poster Design",
        "P4ES Project",
        "6Brief"
      ]
    },
    {
      category: "others",
      items: [
        "Xiaomi Case Design",
        "McDonald Promotional Video",
        "Song Campaign Design",
        "ICBC Mascot"
      ]
    }
  ];

  const tabContent = {
    personal: "I'm Kylie. As a college student with an unquenchable passion for art, I see the world as a sprawling canvas waiting to be transformed by\n" +
        "creativity. Every day, I find inspiration in the little moments—a sunlit corner of a campus, the unexpected beauty of everyday scenes, or\n" +
        "the whisper of an old song in a quiet room.",
    professional: "With two years of design study, I've completed eight projects, earned two awards, and launched two brands. I focus on visual storytelling and brand identity design.",
    Philosophy: "Art, for me, isn’t just a hobby—it’s a language. It speaks through bold strokes and delicate details, capturing emotions that words\n" +
        "sometimes fail to express. Whether I’m sketching a fleeting moment of joy or experimenting with vibrant colors, I cherish every opportunity\n" +
        "to explore new ideas and breathe life into my imagination."
  };

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="about" className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
        <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-secondary/5 rounded-full blur-3xl transition-all duration-1500 ease-out" style={{ transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)` }} />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-16 right-8 sm:top-20 sm:right-20 animate-float"><div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-lg rotate-45" /></div>
        <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-20 animate-float animation-delay-2000"><div className="w-5 sm:w-6 h-5 sm:h-6 bg-secondary/20 rounded-full" /></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 px-2 sm:px-6">

          {/* ABOUT ME 按钮：底色改为白色，文字和图标改为克莱因蓝 */}
          <div
              className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-white border border-[#002FA7]/20 mb-6 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,47,167,0.1)] hover:scale-105 group cursor-pointer shadow-sm">
            <div className="relative">
              <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-[#002FA7] animate-pulse"/>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#002FA7] rounded-full animate-ping"/>
            </div>
            <span className="text-sm sm:text-base font-semibold text-[#002FA7] tracking-wide uppercase">ABOUT ME</span>
          </div>

          {/* 标题：将紫色渐变改为克莱因蓝渐变 */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 to-[#002FA7] bg-clip-text text-transparent">Creative Strategy</span>
            <span className="block text-[#002FA7] animate-pulse mt-2">Driven by Design</span>
          </h1>

          {/* 描述文本：文案调整为广告/设计导向，颜色改为克莱因蓝 */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting compelling brand narratives that blend <span className="text-[#002FA7] font-semibold">artistic vision</span>, <span
              className="text-[#002FA7] font-semibold">strategic insight</span>, and <span
              className="text-[#002FA7] font-semibold">visual impact</span>
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-8">
            {/* About Card */}
            <div
                className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60 relative overflow-hidden group">
              {/* Decorative Circles */}
              <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary rounded-full -translate-y-16 translate-x-16"/>
                <div
                    className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-secondary rounded-full -translate-x-16 translate-y-16"/>
              </div>

              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:scale-105 md:group-hover:scale-110 relative">
                      <img src="/KylieKo.jpg" alt="Kylie Ko" className="w-full h-full object-cover"/>
                      <div
                          className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"/>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Kylie Ko</h2>
                    <p className="text-[#002FA7] text-base sm:text-lg font-semibold mb-3 sm:mb-4">Advertising
                      Student</p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {achievements.map((achievement, index) => {
                        // 检查当前索引是否处于自动轮播的高亮状态
                        const isActive = counter === index;
                        return (
                            <div key={index}
                                 className={`p-2 sm:p-3 rounded-xl transition-all duration-700 hover:scale-105 border 
                                    ${isActive
                                     ? 'bg-[#002FA7] border-[#002FA7] shadow-[0_10px_25px_rgba(0,47,167,0.4)] scale-105 z-10' // 高亮时：克莱因蓝背景+边框，蓝色强阴影，放大，浮起
                                     : 'bg-white/80 border-slate-100 shadow-sm backdrop-blur-sm'                            // 平时：浅白色背景，灰色边框
                                 }`}
                            >
                              <div className="flex items-center gap-2 justify-center md:justify-start">
                                {/* 图标颜色：高亮时设为白色，平时为原本的灰色或蓝色 */}
                                <div
                                    className={`transition-colors duration-500 ${isActive ? 'text-white' : 'text-[#002FA7]'}`}>
                                  {achievement.icon}
                                </div>

                                <div>
                                  {/* 数字颜色：高亮时设为白色，平时为深灰色 */}
                                  <div
                                      className={`font-bold text-sm sm:text-lg transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                                    {achievement.number}{achievement.suffix}
                                  </div>
                                  {/* 标签文本：高亮时设为半透明白色（例如 #white/80），平时为普通灰色 */}
                                  <div
                                      className={`text-[10px] sm:text-xs transition-colors duration-500 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                                    {achievement.label}
                                  </div>
                                </div>
                              </div>
                            </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-col sm:flex-row border-b border-border mb-4 sm:mb-6">
                  {['personal', 'professional', 'Philosophy'].map(tab => (
                      <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-medium transition-all duration-300 ${activeTab === tab ? 'text-[#002FA7] border-b-2 border-[#002FA7]' : 'text-muted-foreground hover:text-foreground'}`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[100px] sm:min-h-[120px]">
                  <AnimatePresence mode="sync">
                    <motion.p
                        key={activeTab}
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                        className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
                    >
                      {tabContent[activeTab]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div
                className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-[#002FA7]/40 hover:bg-card/60">
              {/* 主标题图标改为克莱因蓝 */}
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Code className="h-4 sm:h-6 w-4 sm:w-6 text-[#002FA7]"/>
                Creative Projects Overview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {techStack.map((stack, index) => (
                    <div key={index}
                         className="bg-background/50 border border-border rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-[#002FA7]/30 hover:scale-105 group">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        {/* 分类图标背景和文字改为克莱因蓝 */}
                        <div
                            className="p-1 sm:p-2 bg-[#002FA7]/10 rounded-lg text-[#002FA7] group-hover:scale-110 transition-transform duration-300">
                          <Code className="h-3 sm:h-4 w-3 sm:w-4"/>
                        </div>
                        <h4 className="font-semibold text-sm sm:text-lg">{stack.category}</h4>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        {stack.items.map((item, itemIndex) => (
                            <div key={itemIndex}
                                 className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                              {/* 列表圆点改为克莱因蓝，并增加轻微外发光效果 */}
                              <div
                                  className="w-1.5 h-1.5 bg-[#002FA7] rounded-full animate-pulse shadow-[0_0_5px_rgba(0,47,167,0.5)]"/>
                              {item}
                            </div>
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Work Together */}
            <div
                className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Get Inspiration</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <a href="#projects"
                   className="flex-1 block w-full p-3 sm:p-4 bg-[#002FA7] text-primary-foreground rounded-xl text-center font-semibold transition-all duration-300 hover:bg-[#002FA7] hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,47,167,0.3)">
                  <div className="flex items-center justify-center gap-2 sm:gap-3"><User
                      className="h-4 sm:h-5 w-4 sm:w-5 group-hover:scale-110 transition-transform duration-300"/>View
                    Projects
                  </div>
                </a>

                {/* contact me */}
                <a href="#contact"
                   className="flex-1 block w-full p-3 sm:p-4 border border-slate-200 rounded-xl text-center font-semibold transition-all duration-300 hover:bg-[#002FA7]/5 hover:border-[#002FA7]/30 hover:scale-105 hover:shadow-md group">
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <Mail
                        className="h-4 sm:h-5 w-4 sm:w-5 text-[#002FA7] group-hover:rotate-12 transition-transform duration-300"/>
                    <span className="text-slate-700">Contact Me</span>
                  </div>
                </a>
              </div>

              {/* Hand-drawn Klein XiXiCat */}
              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-lg">

                {/* 将原区域的所有内容替换为这张居中的图片 */}
                <div className="flex justify-center items-center">
                  <div className="relative group">
                    {/* 请将此处的 src 替换为你保存的那张抠图的实际路径 */}
                    <img
                        src="/xixicat.png"
                        alt="Hand-drawn Brand"
                        className="h-16 sm:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                    {/* 装饰性光晕，呼应克莱因蓝主题 */}
                    <div className="absolute inset-0 bg-[#002FA7]/5 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Me */}
            {/* Component Container */}
            <div className="bg-card/50 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">

              {/* Title: 星星图标改为克莱因蓝 */}
              <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2"><Star className="h-4 sm:h-5 w-4 sm:w-5 text-[#002FA7]" />Why Choose Me</h3>

              {/* Features List: 优点与性格特征 */}
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Passionate and driven approach",
                  "Creative problem solver",
                  "Team-oriented collaborator",
                  "Details-focused execution",
                  "Optimistic and solutions-focused",
                  "Continuous learner"
                ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg transition-all duration-300 hover:bg-background/50 hover:scale-105">

                      {/* 克莱因蓝圆点 + 微弱外发光 */}
                      <div className="w-2 h-2 bg-[#002FA7] rounded-full shadow-[0_0_8px_rgba(0,47,167,0.4)]" />

                      <span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
          {feature}
        </span>
                    </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
                className="bg-card/60 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card-70">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"/>
                    <div className="absolute inset-0 w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-ping"/>
                  </div>
                  <span className="font-semibold text-xs sm:text-sm">Active Insight</span>
                </div>
                <span
                    className="text-xs sm:text-sm text-muted-foreground bg-green-500/10 text-green-600 px-2 py-1 rounded-lg">
                  Exploring New Narratives
                </span>
              </div>
              <div
                  className="text-[10px] sm:text-xs text-muted-foreground text-center bg-background/50 rounded-lg p-1 sm:p-2">
                ⚡ explore new ideas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
};
