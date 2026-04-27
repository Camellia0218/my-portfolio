import { ArrowRight, ExternalLink, Github, ChevronUp, Star, Code, ChevronDown, MoveRight, Filter, Sparkles, Award, Zap, Play, Eye, Calendar, Users, X } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 8,
    title: "GenAxis",
    category: "Brand Creation",
    description: "AI saas webapp build with PERN stack and Intigrated Gemini . OPEN SOURCE ",
    image: "/projects/project8.png",
    video: "/projects/videos/genaxix-demo.mp4",
    tags: ["PERN Stack", "Clerk Auth", "Google Gemini", "Clerk Billing", "OPEN SOURCE"],
    demoUrl: "https://genaxis.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/genaxis",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Live",
    highlights: ["Image Generation", "Article writer", "Blog Writter","Resume Reviewer"]
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
//   {
//     id: 4,
//     title: "Spendlix",
//     category: "FinTech",
//     description: "Financial tracking platform with expense management and budgeting features.",
//     image: "/projects/project4.png",
//     video: "/projects/videos/spendlix-demo.mp4",
//     tags: ["React", "Chart.js", "Node.js", "Firebase"],
//     demoUrl: "https://spendlix.vercel.app/login",
//     githubUrl: "https://github.com/Sahilmd01/Spendlix",
//     accentColor: "from-rose-500 to-pink-600",
//     status: "Live",
//     highlights: ["Expense tracking", "Data visualization", "Budget planning"]
//   },
//   {
//     id: 5,
//     title: "Eattoo",
//     category: "Food Tech",
//     description: "Food delivery platform with restaurant listings and order management.",
//     image: "/projects/project5.png",
//     video: "/projects/videos/eattoo-demo.mp4",
//     tags: ["React", "Redux", "Mapbox", "Stripe"],
//     demoUrl: "https://eattoo-food-delivery-website-frontend.onrender.com/",
//     githubUrl: "https://github.com/Sahilmd01/Eattoo-food-delivery-website",
//     accentColor: "from-violet-500 to-purple-600",
//     status: "Live",
//     highlights: ["Restaurant listings", "Order system", "Location services"]
//   },
//   {
//     id: 6,
//     title: "JobQue",
//     category: "HR Tech",
//     description: "Job matching platform with candidate tracking and application management.",
//     image: "/projects/project6.png",
//     video: "/projects/videos/jobque-demo.mp4",
//     tags: ["Next.js", "PostgreSQL", "Redis", "AI Integration"],
//     demoUrl: "#",
//     githubUrl: "#",
//     accentColor: "from-orange-500 to-red-600",
//     status: "Development",
//     highlights: ["Job matching", "Candidate tracking", "Application system"]
//   }
 ];

const categoryColors = {
  "Healthcare SaaS": "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
  "E-commerce": "from-purple-500/20 to-indigo-600/20 text-purple-600 border-purple-500/30",
  "Real-time Communication": "from-blue-500/20 to-cyan-600/20 text-blue-600 border-blue-500/30",
  "Artificial Intelligence": "from-amber-500/20 to-orange-600/20 text-amber-600 border-amber-500/30",
  "FinTech": "from-rose-500/20 to-pink-600/20 text-rose-600 border-rose-500/30",
  "Food Tech": "from-violet-500/20 to-purple-600/20 text-violet-600 border-violet-500/30",
  "HR Tech": "from-orange-500/20 to-red-600/20 text-orange-600 border-orange-500/30"
};

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1]);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
    setIsMobileFilterOpen(false);
  };

  const handleVideoPlay = (project) => {
    setSelectedVideo(project);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const ProjectHighlights = ({ highlights }) => (
    <div className="space-y-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="text-muted-foreground">{highlight}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={sectionRef}
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div
            className="text-center mb-16"
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
        >
          {/* 顶部胶囊标签：背景和文字统一改为克莱因蓝 */}
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

          {/* 主标题：引入与 Get In Touch 一致的流动渐变效果 */}
          <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.1}}
              viewport={{once: true}}
          >
            Project
            <span className="block text-[#002FA7]">
      Portfolio
    </span>
          </motion.h2>

          <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: true}}
          >
            Where visual provocation meets technical precision. My portfolio of creative development and digital
            storytelling.
          </motion.p>
        </motion.div>

        {/* Simple Filter */}
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
                    // 样式重构：使用克莱因蓝进行激活态与非激活态的区分
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
            {displayedProjects.map((project, index) => (
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
                  <div
                      className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col hover:border-[#002FA7]/30">

                    {/* Image/Video Section */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                      />

                      {/* Status & Category Badges: 统一为克莱因蓝透明风格 */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                        <div
                            className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md bg-[#002FA7]/20 text-[#002FA7] border border-[#002FA7]/30">
                          {project.status}
                        </div>
                        <span
                            className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md bg-white/10 text-white border border-white/20">
                {project.category}
              </span>
                      </div>

                      {/* Hover Actions: 遮罩层使用克莱因蓝深色调 */}
                      <motion.div
                          className="absolute inset-0 bg-[#002FA7]/40 backdrop-blur-[2px] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{opacity: 0}}
                          animate={{opacity: hoveredProject === project.id ? 1 : 0}}
                      >
                        <motion.button
                            onClick={() => handleVideoPlay(project)}
                            whileHover={{scale: 1.1, backgroundColor: "#002FA7"}}
                            whileTap={{scale: 0.9}}
                            className="p-3 rounded-full bg-white text-[#002FA7] shadow-xl transition-all duration-300"
                        >
                          <Play size={20} fill="currentColor"/>
                        </motion.button>

                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{scale: 1.1, backgroundColor: "#002FA7"}}
                            whileTap={{scale: 0.9}}
                            className="p-3 rounded-full bg-white text-[#002FA7] shadow-xl transition-all duration-300"
                            onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                        >
                          <Code size={20}/>
                        </motion.a>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-[#002FA7] transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                            <div
                                className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#002FA7] text-white text-[10px] font-black uppercase tracking-tighter shadow-[0_0_10px_rgba(0,47,167,0.3)]">
                              <Star size={10} fill="white"/>
                              Featured
                            </div>
                        )}
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack: 标签改为克莱因蓝轻量化设计 */}
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

                      {/* Action Buttons: 按钮颜色统一 */}
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
                          {project.demoUrl === "#" ? "Soon" : "Live Demo"}
                        </motion.a>

                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{backgroundColor: "rgba(0, 47, 167, 0.05)", borderColor: "#002FA7"}}
                            className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-widest border border-border text-foreground transition-all duration-300"
                        >
                          <Github size={14}/>
                          Code
                        </motion.a>
                      </div>
                    </div>

                    {/* Accent Border: 底部装饰条统一为克莱因蓝渐变 */}
                    <div className="h-1 bg-gradient-to-r from-[#001A66] via-[#002FA7] to-[#001A66]"/>
                  </div>
                </motion.div>
            ))}
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
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#001A66", // 悬停时统一变为深邃蓝
                    boxShadow: "0 20px 25px -5px rgba(0, 47, 167, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  // 移除条件判断，直接赋予克莱因蓝背景
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-[#002FA7] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-[#002FA7]/20 border border-transparent active:border-white/20"
              >
                {showAll ? (
                    <>
                      <ChevronUp size={18} strokeWidth={2.5} />
                      Show Less
                    </>
                ) : (
                    <>
                      View More Projects
                      <ArrowRight size={18} strokeWidth={2.5} />
                    </>
                )}
              </motion.button>
            </motion.div>
        )}


      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={handleCloseVideo}
            >
              <motion.div
                  initial={{scale: 0.8, opacity: 0}}
                  animate={{scale: 1, opacity: 1}}
                  exit={{scale: 0.8, opacity: 0}}
                  transition={{type: "spring", damping: 25}}
                  className="relative bg-background rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[80vh]"
                  onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {selectedVideo.title} Demo
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {selectedVideo.category}
                    </p>
                  </div>
                  <motion.button
                      onClick={handleCloseVideo}
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
                  >
                    <X size={24}/>
                  </motion.button>
                </div>

                {/* Video Player */}
                <div className="aspect-video bg-black">
                  <video
                      ref={videoRef}
                      src={selectedVideo.video}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                      onEnded={handleCloseVideo}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-border">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <p className="text-muted-foreground text-sm flex-1">
                      Watch the demo of {selectedVideo.title} in action
                    </p>
                    <div className="flex gap-3">
                      <motion.a
                          href={selectedVideo.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{scale: 1.05}}
                          whileTap={{scale: 0.95}}
                          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                              selectedVideo.demoUrl === "#"
                                  ? "bg-muted text-muted-foreground cursor-not-allowed border border-border"
                                  : "bg-primary text-primary-foreground hover:bg-primary/90"
                          }`}
                          onClick={(e) => selectedVideo.demoUrl === "#" && e.preventDefault()}
                      >
                        Visit Live Site
                      </motion.a>
                      <motion.a
                          href={selectedVideo.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{scale: 1.05}}
                          whileTap={{scale: 0.95}}
                          className={`px-6 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                              selectedVideo.githubUrl === "#"
                                  ? "bg-muted text-muted-foreground cursor-not-allowed border-border"
                                  : "bg-background text-foreground border-border hover:border-primary hover:bg-primary/5"
                          }`}
                          onClick={(e) => selectedVideo.githubUrl === "#" && e.preventDefault()}
                      >
                        View Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};