import { ArrowRight, ExternalLink, Github, ChevronUp, Star, Code, ChevronDown, MoveRight, Filter, Sparkles, Award, Zap, Play, Eye, Calendar, Users, X } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const projects = [
  {
    id: 8,
    title: "Project Harbour",
    description: "Smart maritime technology and Hong Kong cultural aesthetics brand creation.",
    image: "/projects/Project Harbour.png",
    tags: ["Brand Creation", "Visual Identity", "UI/UX"],
    demoUrl: "/project-harbour",
    featured: true,
    status: "Completed",
    category: "Branding"
  },
  {
    id: 7,
    title: "NauraCare",
    category: "Poster Design",
    description: "Hospital management platform with multi-role access, patient tracking, and billing systems.",
    image: "/projects/project7.png",
    video: "/projects/videos/nauracare-demo.mp4",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT Auth"],
    demoUrl: "https://nauracare.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/neuracare",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Live",
    highlights: ["Multi-role system", "Patient management", "Payment integration"]
  },
  {
    id: 1,
    title: "Vante & Co.",
    category: "Video Production",
    description: "Fashion marketplace with product recommendations and seamless checkout experience.",
    image: "/projects/project1.png",
    video: "/projects/videos/vante-demo.mp4",
    tags: ["React", "Node.js", "Stripe", "Redis"],
    demoUrl: "https://e-commerce-website-4w6a.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/E-commerce-website",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600",
    status: "Live",
    highlights: ["Product catalog", "Shopping cart", "Payment processing"]
  },
  {
    id: 2,
    title: "Converse Pro",
    category: "Campaign Projects",
    description: "Chat platform with real-time messaging, media sharing, and user authentication.",
    image: "/projects/project2.png",
    video: "/projects/videos/converse-demo.mp4",
    tags: ["Socket.IO", "MongoDB", "React", "WebRTC"],
    demoUrl: "https://converse-pro-frontend.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/converse-pro",
    featured: true,
    accentColor: "from-blue-500 to-cyan-600",
    status: "Live",
    highlights: ["Real-time chat", "Media sharing", "User authentication"]
  },
  {
    id: 3,
    title: "Blogni AI",
    category: "Process & Reflection",
    description: "AI-powered content generation platform with multi-language support.",
    image: "/projects/project3.png",
    video: "/projects/videos/blogni-demo.mp4",
    tags: ["Next.js", "Gemini AI", "Clerk Auth", "Redis"],
    demoUrl: "https://blogni.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/Blogni",
    accentColor: "from-amber-500 to-orange-600",
    status: "Live",
    highlights: ["AI content generation", "Multi-language", "User accounts"]
  }
];


export const ProjectsSection = () => {

  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  // 修改点1：使用 Set 管理多个独立的项目 ID
  const [likedProjects, setLikedProjects] = useState(new Set());

  const toggleLike = (id, e) => {
    e.preventDefault();
    e.stopPropagation(); // 关键：防止点击按钮触发卡片可能存在的跳转

    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const filteredProjects = activeFilter === "All"
      ? projects
      : projects.filter(project => project.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
  };

  return (
      <section
          id="projects"
          className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
          ref={sectionRef}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
          {/* Header */}
          <motion.div
              className="text-center mb-16"
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
          >
            <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002FA7]/10 text-[#002FA7] text-sm font-medium mb-6"
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{delay: 0.2}}
                viewport={{once: true}}
            >
              <Sparkles className="h-4 w-4"/>
              My Projects
            </motion.div>

            <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.1}}
                viewport={{once: true}}
            >
              Project
              <span className="block text-[#002FA7]">Portfolio</span>
            </motion.h2>

            <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                viewport={{once: true}}
            >
              Where visual provocation meets technical precision. My portfolio of creative development and digital storytelling.
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
              className="flex justify-center mb-12"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.3}}
              viewport={{once: true}}
          >
            <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                  <motion.button
                      key={category}
                      onClick={() => handleFilterChange(category)}
                      whileHover={{scale: 1.05}}
                      whileTap={{scale: 0.95}}
                      className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 border ${
                          activeFilter === category
                              ? "bg-[#002FA7] text-white border-[#002FA7] shadow-[0_8px_20px_-5px_rgba(0,47,167,0.4)]"
                              : "bg-background text-muted-foreground border-border hover:border-[#002FA7] hover:text-[#002FA7] hover:bg-[#002FA7]/5"
                      }`}
                  >
                    {category}
                  </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {displayedProjects.map((project, index) => {
                const isProjectLiked = likedProjects.has(project.id);

                return (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, scale: 0.9}}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="group"
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col hover:border-[#002FA7]/30">

                        {/* Image/Video Section */}
                        <div className="relative h-64 overflow-hidden bg-white/50 flex items-center justify-center"> {/* 1. 增加高度 h-64 让画面更舒展；2. 增加背景色防止白底图片穿帮 */}
                          <motion.img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                              /* 3. 关键修改：将 object-cover 改为 object-contain */
                              /* 4. 增加 p-6 (padding) 确保图标边缘不贴边，更有呼吸感 */
                              loading="lazy"
                          />

                          {/* Status & Category Badges 保持不变 */}
                          <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                            <div className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md bg-[#002FA7]/20 text-[#002FA7] border border-[#002FA7]/30">
                              {project.status}
                            </div>
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md bg-white/10 text-white border border-white/20">{project.category}</span>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-[#002FA7] transition-colors">
                              {project.title}
                            </h3>
                            {project.featured && (
                                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#002FA7] text-white text-[10px] font-black uppercase tracking-tighter shadow-[0_0_10px_rgba(0,47,167,0.3)]">
                                  <Star size={10} fill="white"/>
                                  Featured
                                </div>
                            )}
                          </div>

                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#002FA7]/5 text-[#002FA7] border border-[#002FA7]/10"
                                >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3 pt-4 border-t border-border">
                            <motion.a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{y: -2, shadow: "0 10px 15px -3px rgba(0, 47, 167, 0.3)"}}
                                className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                    project.demoUrl === "#"
                                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                                        : "bg-[#002FA7] text-white"
                                }`}
                                onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
                            >
                              <Eye size={14}/>
                              {project.demoUrl === "#" ? "Soon" : "View Gallery"}
                            </motion.a>

                            <motion.button
                                onClick={(e) => toggleLike(project.id, e)}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.9}}
                                className={`inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                                    isProjectLiked
                                        ? "bg-[#002FA7]/10 border-[#002FA7] text-[#002FA7]"
                                        : "border-border text-foreground hover:border-[#002FA7] hover:text-[#002FA7]"
                                }`}
                            >
                              <motion.div
                                  animate={isProjectLiked ? {scale: [1, 1.4, 1]} : {scale: 1}}
                                  transition={{duration: 0.3}}
                              >
                                <Heart
                                    size={14}
                                    fill={isProjectLiked ? "#002FA7" : "transparent"}
                                    stroke={isProjectLiked ? "#002FA7" : "currentColor"}
                                />
                              </motion.div>
                              {isProjectLiked ? "LIKED" : "LIKE"}
                            </motion.button>
                          </div>
                        </div>

                        <div className="h-1 bg-gradient-to-r from-[#001A66] via-[#002FA7] to-[#001A66]"/>
                      </div>
                    </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Load More */}
          {filteredProjects.length > 3 && (
              <motion.div className="text-center mt-16" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: 0.4}} viewport={{once: true}}>
                <motion.button
                    onClick={() => setShowAll(!showAll)}
                    whileHover={{ scale: 1.05, backgroundColor: "#001A66", boxShadow: "0 20px 25px -5px rgba(0,47,167,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-[#002FA7] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-[#002FA7]/20 border border-transparent"
                >
                  {showAll ? <><ChevronUp size={18}/> Show Less</> : <><ArrowRight size={18}/> View More Projects</>}
                </motion.button>
              </motion.div>
          )}
        </div>

      </section>
  );
};