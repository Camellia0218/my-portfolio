// src/pages/Home.jsx
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import ProjectDetail from "@/components/ProjectDetail";

export const Home = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [showAll, setShowAll] = useState(false);        // ✅ 提升到这里
    const [activeFilter, setActiveFilter] = useState("All"); // ✅ 同样提升，保持筛选状态
    const scrollPositionRef = useRef(0);

    const handleOpenProject = (projectId) => {
        scrollPositionRef.current = window.scrollY;
        setActiveProject(projectId);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleBack = () => {
        const savedScroll = scrollPositionRef.current;
        setActiveProject(null);
        setTimeout(() => {
            window.scrollTo({ top: savedScroll, behavior: "smooth" });
        }, 450);
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <AnimatePresence mode="wait">

                {!activeProject && (
                    <motion.div
                        key="home"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <StarBackground />
                        <Navbar />
                        <main>
                            <HeroSection />
                            <AboutSection />
                            <ProjectsSection
                                onOpenProject={handleOpenProject}
                                showAll={showAll}                  // ✅ 传入
                                setShowAll={setShowAll}            // ✅ 传入
                                activeFilter={activeFilter}        // ✅ 传入
                                setActiveFilter={setActiveFilter}  // ✅ 传入
                            />
                            <ContactSection />
                        </main>
                        <Footer />
                    </motion.div>
                )}

                {activeProject && (
                    <motion.div
                        key={activeProject}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <motion.button
                            onClick={handleBack}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-border shadow-lg text-sm font-semibold text-foreground hover:bg-[#002FA7] hover:text-white hover:border-[#002FA7] transition-all duration-300"
                        >
                            <ArrowLeft size={16} />
                            Back
                        </motion.button>
                        <ProjectDetail projectId={activeProject} />
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
};