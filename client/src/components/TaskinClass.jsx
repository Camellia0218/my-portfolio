// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// ─── 轮播组件 ──────────────────
const Carousel = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setDirection(1);
            setCurrent(prev => (prev + 1) % images.length);
        }, 3500);
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [images.length]);

    const go = (dir) => {
        setDirection(dir);
        setCurrent(prev => (prev + dir + images.length) % images.length);
        startTimer();
    };

    const variants = {
        enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
    };

    return (
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-[#002FA7]/5 border border-[#002FA7]/10" style={{ aspectRatio: '16/9' }}>
            <AnimatePresence custom={direction} initial={false}>
                <motion.img
                    key={current}
                    src={images[current].src}
                    alt={images[current].label}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-contain"
                />
            </AnimatePresence>

            {/* 左侧按钮 */}
            <button
                onClick={() => go(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-[#002FA7]/80 backdrop-blur-md text-white rounded-full p-3 transition-all shadow-lg"
            >
                <ChevronLeft size={28} />
            </button>

            {/* 右侧按钮 */}
            <button
                onClick={() => go(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-[#002FA7]/80 backdrop-blur-md text-white rounded-full p-3 transition-all shadow-lg"
            >
                <ChevronRight size={28} />
            </button>

            {/* 底部标签 + 指示点 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-3">
                <span className="text-white text-xs font-medium tracking-wide drop-shadow-md">
                    {images[current].label}
                </span>
                <div className="flex flex-wrap justify-center gap-1.5 max-w-[60%]">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); startTimer(); }}
                            className={`rounded-full transition-all shadow-sm ${i === current ? 'bg-white w-4 h-2' : 'bg-white/50 hover:bg-white/80 w-2 h-2'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// ─── 视频弹窗 ────────────────────────────────────────────
const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        if (isOpen) document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    style={{ backgroundColor: 'rgba(0,47,167,0.85)' }}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-5 py-3 bg-[#002FA7]">
                            <span className="text-white text-sm font-semibold tracking-wide truncate">{title}</span>
                            <motion.button onClick={onClose} whileHover={{ rotate: 90 }} className="text-white/60 hover:text-white">
                                <X size={20} />
                            </motion.button>
                        </div>
                        <div className="relative w-full" style={{ paddingTop: '56.25%', backgroundColor: '#000' }}>
                            <video className="absolute inset-0 w-full h-full object-contain"
                                   src={videoUrl} controls autoPlay playsInline>
                                您的浏览器不支持视频播放。
                            </video>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// ─── 主页面 ──────────────────────────────────────────────
const TaskInClassProject = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const gallery21Images = Array.from({ length: 21 }, (_, i) => ({
        src: `/TaskinClass/Gallery/${i + 1}.png`,
        label: `Wordless Gallery - Image ${i + 1} of 21`
    }));

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">

            {/* Hero Section */}
            <section className="pt-20 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 pt-4">
                    <h1 className="text-6xl font-bold mb-4 tracking-tight text-[#002FA7]">Task in Class</h1>
                    <p className="text-xl text-[#002FA7]/80 font-semibold mb-6">Photography / Editorial Design / Workshop</p>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p>
                            A dual-phase creative exercise focusing on visual narrative and collaborative execution.
                            The project involved curating <strong>25 school-life photos</strong> into a 'wordless' gallery booklet
                            and participating in an intensive design workshop.
                        </p>
                        <p className="text-sm italic border-l-4 border-[#002FA7] pl-4">
                            By removing typography and explanatory text, the challenge was to establish a cohesive rhythm,
                            mood, and story purely through photographic composition, sequencing, and editorial layout.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    className="flex-1 w-full"
                >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-50 p-8 border border-[#002FA7]/10">
                        <img
                            src="/TaskinClass/TaskinClass2.png"
                            alt="Task in Class Overview"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Phase 1 */}
            <section className="bg-slate-50 py-20 px-6 border-y border-[#002FA7]/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-3 text-[#002FA7]">Phase 1: The Wordless Gallery</h2>
                        <p className="text-[#002FA7]/60 text-sm uppercase tracking-widest font-medium">
                            25 Photos & Editorial Curation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-[#002FA7]">Capturing the Campus</h3>
                            <p className="text-slate-600 leading-relaxed">
                                The first task required capturing the essence of our academic environment. Instead of focusing on grand architecture, I turned my lens towards the overlooked details— textures of the studio walls, the interplay of light in the corridors, and the quiet moments of creative exhaustion.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Selecting down to exactly 25 images forced a rigorous filtration process, ensuring every photograph served a distinct purpose in the overarching visual tone.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-[#002FA7]">Editorial Layout</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Translating the 25 standalone images into a cohesive booklet required strategic editorial thinking. Without text to guide the reader, the pacing relied entirely on scale, negative space, and the juxtaposition of opposing spreads.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                I utilized a strict grid system to maintain structural harmony, allowing the organic nature of the photographs to break the boundaries when emotional emphasis was needed.
                            </p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <Carousel images={gallery21Images} />
                    </motion.div>
                </div>
            </section>

            {/* Phase 2 */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-3 text-[#002FA7]">Phase 2: Collaborative Workshop</h2>
                    <p className="text-[#002FA7]/60 text-sm uppercase tracking-widest mb-10 font-medium">
                        Ideation & Physical Execution
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div whileHover={{y: -5}} className="rounded-2xl shadow-xl overflow-hidden bg-[#002FA7]/5 border border-[#002FA7]/10 p-4">
                            <img src="/TaskinClass/TaskinClass1.png" alt="Workshop Process" className="w-full h-auto rounded-lg"/>
                        </motion.div>
                        <div className="space-y-4 text-slate-600 leading-loose">
                            <h3 className="text-xl font-bold text-[#002FA7]">Rapid Prototyping</h3>
                            <p>
                                Transitioning from solitary photography to a high-energy group environment, the workshop
                                focused on rapid ideation and physical making. We mapped out concepts on large-scale boards,
                                cutting, pinning, and rearranging ideas in real-time.
                            </p>
                            <p>
                                This tactile process served as a strong counterpoint to digital layout design, reminding
                                me of the value of raw, unfiltered collaborative brainstorming before moving to polished pixels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Role & Contributions */}
            <section className="bg-slate-900 py-24 px-6 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 border-b border-[#002FA7] pb-4 text-[#002FA7]">My Role & Contributions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                        {[
                            {
                                title: "Photography & Image Curation",
                                desc: "Directed, shot, and color-graded a cohesive series of images, carefully selecting the final 25 to establish a specific atmospheric tone."
                            },
                            {
                                title: "Editorial Layout Design",
                                desc: "Developed the structural grid and pacing for the gallery booklet, ensuring the sequence of images communicated effectively without textual support."
                            },
                            {
                                title: "Visual Storytelling",
                                desc: "Employed techniques of juxtaposition, scale contrast, and negative space to guide the viewer's emotional journey through the printed format."
                            },
                            {
                                title: "Workshop Collaboration",
                                desc: "Actively participated in physical ideation exercises, bridging the gap between individual aesthetic choices and collective project goals."
                            }
                        ].map((item, index) => (
                            <div key={index} className="space-y-2">
                                <h4 className="font-bold text-blue-300">● {item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reflection */}
            <section className="py-32 bg-white text-slate-900 relative overflow-hidden text-center px-6 border-t border-[#002FA7]/10">
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="w-16 h-1 bg-[#002FA7] mx-auto mb-12" />
                    <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-[#002FA7]/60">
                        Thoughts after completing this work
                    </h3>
                    <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed italic text-slate-600">
                        <p>
                            "Removing words from a design doesn't make it quieter; it forces the visuals to speak louder.
                            This task taught me to trust the intelligence of the viewer to connect the dots."
                        </p>
                        <p>
                            Furthermore, shifting from the isolated focus of photography into the chaotic energy
                            of a collaborative workshop highlighted the importance of adaptability in the creative process.
                        </p>
                    </div>
                    <p className="mt-12 text-[#002FA7] uppercase tracking-[0.4em] text-xs font-black">
                        Task in Class / Editorial & Workshop
                    </p>
                </div>
                <div className="absolute -bottom-10 -left-10 text-[12rem] font-black text-[#002FA7]/5 pointer-events-none">
                    CLASS
                </div>
            </section>

            {/* Modal */}
            <VideoModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                videoUrl="/Task In Class/Workshop.mp4"
                title="Task in Class — Workshop Documentation"
            />
        </div>
    );
};

export default TaskInClassProject;