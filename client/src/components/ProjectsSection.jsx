import { ArrowRight, ExternalLink, Github, ChevronUp, Star, Code, ChevronDown, MoveRight, Filter, Sparkles, Award, Zap, Play, Eye, Calendar, Users, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const toProjectId = (demoUrl) =>
    demoUrl?.replace(/^\//, "").replace(/\//g, "-") ?? null;

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  // ESC 关闭
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // 禁止背景滚动
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
      <AnimatePresence>
        {isOpen && (
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
                style={{ backgroundColor: "rgba(0,0,0,0.80)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
              <motion.div
                  className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 30 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  onClick={(e) => e.stopPropagation()}
              >
                {/* 顶部标题栏 */}
                <div className="flex items-center justify-between px-5 py-3 bg-[#001A66]">
                  <div className="flex items-center gap-2">
                    <Play size={14} className="text-white/60" />
                    <span className="text-white font-semibold text-sm tracking-wide truncate">
                  {title}
                </span>
                  </div>
                  <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white/60 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* 16:9 视频区 */}
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <video
                      className="absolute inset-0 w-full h-full object-contain bg-black"
                      src={videoUrl}
                      controls
                      autoPlay
                      playsInline
                  >
                    您的浏览器不支持视频播放。
                  </video>
                </div>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
  );
};

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
    id: 1,
    title: "Xiaomi Case Design",
    description: "An avant-garde phone case designed for Xiaomi, themed around Desire and Human Nature. It features a bold hand-drawn aesthetic with recurring eye motifs that symbolize the concept of peering into one's inner longings.",
    image: "/projects/XiaomiCaseDesign.jpg",
    tags: ["Visual Storytelling", "Hand-Drawn", "Product Design"],
    demoUrl: "/project-xiaomi",
    featured: true,
    status: "Award Winning",
    category: "Competition"
  },
  {
    id: 9,
    title: "McDonald Promotional Video",
    description: "An AI-generated food advertisement for the Japanese market, utilizing a story-driven narrative to evoke emotional resonance and attract audience attention.",
    image: "/projects/mcdonald.png",
    tags: ["AI Generated", "Video Production", "Advertising"],
    videoUrl: "/McDonald Product promotional video.mp4",
    featured: true,
    status: "Completed",
    category: "Video Production"
  },
  {
    id: 3,
    title: "Poster Design",
    category: "Poster Design",
    description: "Product shooting and poster series design for Vivienne Westwood, translating luxury brand identity into emotional visual storytelling.",
    image: "/projects/Poster Design.jpg",
    tags: ["Product Photography", "Poster Design", "Brand Identity", "Advertising"],
    demoUrl: "/project-poster",
    featured: true,
    status: "Completed",
  },
  {
    id: 4,
    title: "Song Campaign Design",
    category: "Campaign Projects",
    description: "A collaborative campaign with the school's music production department, creating a unified visual identity across A2 poster, album cover, and CD mockup for an original student song.",
    image: "/projects/Song Campaign Design.png",
    tags: ["Model Photography", "Campaign Design", "Print", "CD Packaging"],
    demoUrl: "/project-song-campaign",
    featured: true,
    status: "Completed",
  },
  {
    id: 5,
    title: "P4ES Project",
    category: "Poster Design",
    description: "Product shooting and poster series design translating luxury brand identity into emotional visual storytelling.",
    image: "/projects/P4ES.png",
    tags: ["Product Photography", "Poster Design", "Brand Identity", "Advertising"],
    demoUrl: "/project-p4es",
    featured: true,
    status: "Completed"
  },
  {
    id: 7,
    title: "ICBC Mascot",
    description: "An ICBC mascot designed based on the auspicious mythical creature 'Pixiu,' embodying the brand philosophy of security, stability, and the protection of wealth.",
    image: "/projects/ICBCMascot.png",
    tags: ["Character Design", "3D Modeling", "Branding"],
    demoUrl: "/project-pipi",
    featured: false,
    status: "Completed",
    category: "Character"
  },
  {
    id: 2,
    title: "Task in Class",
    category: "Projects",
    description: "A dual-phase creative exercise: curated 25 school-life photos into a 'wordless' gallery booklet and participated in a collaborative design workshop.",
    image: "/projects/TaskinClass.png", // 列表显示的缩略图
    tags: ["Photography", "Editorial Design", "Workshop", "Visual Storytelling"],
    demoUrl: "/project/task-in-class",   // 对应跳转的路由地址
    featured: false,
    status: "Completed"
  },
  {
    id: 6,
    title: "D&AD Project",
    category: "Branding",
    description: "Package design for Tuborg Beer — three emotionally-driven can concepts helping young people release pressure, paired with promotional posters, carrier bags, and collectible bottle caps.",
    image: "/projects/Tuborg.png",
    tags: ["Package Design", "Brand Identity", "Copywriting", "Mockup"],
    demoUrl: "/project-dad",
    featured: false,
    status: "Completed",
  },
  {
    id: 10,
    title: "6 Brief",
    category: "Poster Design",
    description: "An integrated design exploration of smoke as a visual signifier, spanning paper sculpture, liquid typography, hand-drawn packaging, and educational character design.",
    image: "/projects/6Brief.png",
    tags: ["Multi-disciplinary", "Visual Narrative", "Installation", "Branding"],
    demoUrl: "/project/6-brief",
    featured: false,
    status: "Completed",
  },
  {
    id: 11,
    title: "Module File",
    category: "Projects",
    description: "A curated retrospective documenting a 180-day creative journey. This editorial project synthesizes diverse works—from branding to social campaigns—into a cohesive visual narrative of professional growth.",
    image: "/projects/Module Flie.png",
    tags: ["Editorial", "Book Design", "Typography", "Portfolio"],
    demoUrl: "/project-ModuleFile",
    status: "Completed"
  }
];

export const ProjectsSection = ({ onOpenProject, showAll, setShowAll, activeFilter, setActiveFilter }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const [likedProjects, setLikedProjects] = useState(new Set());

  // ── 新增：视频弹窗状态 ──
  const [modalState, setModalState] = useState({ isOpen: false, videoUrl: "", title: "" });

  const openVideoModal = (videoUrl, title) => {
    setModalState({ isOpen: true, videoUrl, title });
  };
  const closeVideoModal = () => {
    setModalState({ isOpen: false, videoUrl: "", title: "" });
  };
  // ────────────────────────

  const toggleLike = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) { newSet.delete(id); } else { newSet.add(id); }
      return newSet;
    });
  };

  const filteredProjects = activeFilter === "All"
      ? projects
      : projects.filter(project => project.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const categories = ["All", "Branding", "Competition", "Video Production", "Poster Design", "Campaign Projects", "Character", "Projects"];

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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
            <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002FA7]/10 text-[#002FA7] text-sm font-medium mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
              <Sparkles className="h-4 w-4" />
              My Projects
            </motion.div>

            <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
            >
              Project
              <span className="block text-[#002FA7]">Portfolio</span>
            </motion.h2>

            <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
              Where visual provocation meets technical precision. My portfolio of creative development and digital storytelling.
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
          >
            <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                  <motion.button
                      key={category}
                      onClick={() => handleFilterChange(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, index) => {
                const isProjectLiked = likedProjects.has(project.id);
                const hasVideo = !!project.videoUrl; // 是否有视频

                return (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                        className="group"
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col hover:border-[#002FA7]/30">

                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden bg-white/50 flex items-center justify-center">
                          <motion.img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                          />

                          {/* 视频播放悬浮按钮（仅有 videoUrl 的卡片显示） */}
                          {hasVideo && (
                              <motion.button
                                  onClick={() => openVideoModal(project.videoUrl, project.title)}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  animate={hoveredProject === project.id
                                      ? { opacity: 1, scale: 1 }
                                      : { opacity: 0, scale: 0.8 }
                                  }
                                  transition={{ duration: 0.2 }}
                                  className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
                              >
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-xl">
                                  <Play size={24} className="text-[#002FA7] ml-1" fill="#002FA7" />
                                </div>
                              </motion.button>
                          )}

                          {/* Status & Category Badges */}
                          <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                            <div className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md bg-[#002FA7]/20 text-[#002FA7] border border-[#002FA7]/30">
                              {project.status}
                            </div>
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md bg-white/10 text-white border border-white/20">
                          {project.category}
                        </span>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-[#002FA7] transition-colors">
                              {project.title}
                            </h3>
                            {project.featured && (
                                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#002FA7] text-white text-[10px] font-black uppercase tracking-tighter shadow-[0_0_10px_rgba(0,47,167,0.3)]">
                                  <Star size={10} fill="white" />
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
                            {/* ── View Gallery 按钮：有视频→弹窗，无视频→跳转 ── */}
                            {hasVideo ? (
                                <motion.button
                                    onClick={() => openVideoModal(project.videoUrl, project.title)}
                                    whileHover={{ y: -2 }}
                                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 bg-[#002FA7] text-white"
                                >
                                  <Play size={14} fill="white" />
                                  View Gallery
                                </motion.button>
                            ) : (
                                <motion.button
                                    onClick={() => {
                                      const id = toProjectId(project.demoUrl);
                                      if (id) onOpenProject(id);
                                    }}
                                    whileHover={{y: -2}}
                                    className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                        !project.demoUrl || project.demoUrl === "#"
                                            ? "bg-muted text-muted-foreground cursor-not-allowed"
                                            : "bg-[#002FA7] text-white"
                                    }`}
                                    disabled={!project.demoUrl || project.demoUrl === "#"}
                                >
                                  <Eye size={14}/>
                                  {!project.demoUrl || project.demoUrl === "#" ? "Soon" : "View Gallery"}
                                </motion.button>
                            )}

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
                                  animate={isProjectLiked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                                  transition={{ duration: 0.3 }}
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

                        <div className="h-1 bg-gradient-to-r from-[#001A66] via-[#002FA7] to-[#001A66]" />
                      </div>
                    </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Load More */}
          {filteredProjects.length > 3 && (
              <motion.div
                  className="text-center mt-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
              >
                <motion.button
                    onClick={() => setShowAll(!showAll)}
                    whileHover={{ scale: 1.05, backgroundColor: "#001A66", boxShadow: "0 20px 25px -5px rgba(0,47,167,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-[#002FA7] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-[#002FA7]/20 border border-transparent"
                >
                  {showAll ? <><ChevronUp size={18} /> Show Less</> : <><ArrowRight size={18} /> View More Projects</>}
                </motion.button>
              </motion.div>
          )}
        </div>

        {/* ── 视频弹窗（挂载在 section 最底部） ── */}
        <VideoModal
            isOpen={modalState.isOpen}
            onClose={closeVideoModal}
            videoUrl={modalState.videoUrl}
            title={modalState.title}
        />
      </section>
  );
};