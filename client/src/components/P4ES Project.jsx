// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const Carousel = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const timerRef = useRef(null);

    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setDirection(1);
            setCurrent(prev => (prev + 1) % images.length);
        }, 3500);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current);
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
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black" style={{ aspectRatio: '4/3' }}>
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
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                />
            </AnimatePresence>

            {/* 左右箭头 */}
            <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white rounded-full p-2 transition-all"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white rounded-full p-2 transition-all"
            >
                <ChevronRight size={20} />
            </button>

            {/* 底部标签 + 指示点 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4 flex items-end justify-between">
                <span className="text-white text-xs font-medium tracking-wide">
                    {images[current].label}
                </span>
                <div className="flex gap-1.5">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); startTimer(); }}
                            className={`rounded-full transition-all ${i === current ? 'bg-white w-4 h-2' : 'bg-white/40 w-2 h-2'}`}
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
                    style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-5 py-3 bg-[#111]">
                            <span className="text-white text-sm font-semibold tracking-wide truncate">{title}</span>
                            <motion.button onClick={onClose} whileHover={{ rotate: 90 }} className="text-white/60 hover:text-white">
                                <X size={20} />
                            </motion.button>
                        </div>
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                            <video className="absolute inset-0 w-full h-full object-contain bg-black"
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
const P4ESProject = () => {
    const [modalOpen, setModalOpen] = useState(false);

    // 图1：Smoke主题探索双联图
    const smokeImages = [
        { src: '/P4ES/p4es-themes-explore.png', label: 'Themes & Processes to Explore' },
        { src: '/P4ES/p4es-typo-quote.png', label: 'Typographic Quote Piece — 4-grid study' },
        { src: '/P4ES/p4es-rise-drift-fade.png', label: 'A3 Typographic Poster — RISE DRIFT FADE' },
    ];

    // 图4/5/6：DROP主题
    const dropImages = [
        { src: '/P4ES/p4es-drop-process.png', label: 'DROP — A3 Poster (process)' },
        { src: '/P4ES/p4es-drop-final.png', label: 'DROP — A3 Poster (final)' },
        { src: '/P4ES/p4es-drop-printed.png', label: 'DROP — Printed MOVE series' },
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">

            {/* ── Hero ── */}
            <section className="pt-20 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 pt-4">
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">P4ES Project</h1>
                    <p className="text-xl text-[#111] font-semibold mb-6">Experimental & Mixed Media / Typography</p>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p>
                            An experimental typography project exploring two thematic concepts —
                            <strong> Smoke</strong> and <strong>DROP</strong> — through iterative poster design,
                            typographic deconstruction, and physical print production.
                        </p>
                        <p className="text-sm italic border-l-4 border-[#111] pl-4">
                            Using the 'Pairs 50 Ways' method to refine themes, the project evolved from scattered
                            concept maps into powerful A3 typographic posters — each capturing the ephemeral,
                            kinetic energy of its subject through raw letterforms and high-contrast composition.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    className="flex-1 w-full"
                >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#f5f5f5] p-8">
                        <img
                            src="/P4ES Project/P4ES1.png"
                            alt="Sorry I Am Not The Best - A2 Poster"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ── Smoke Section ── */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-3">Theme: Smoke</h2>
                    <p className="text-slate-500 text-sm uppercase tracking-widest mb-10 font-medium">
                        Narrative & Reflective Process
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div whileHover={{y: -5}} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                            <img src="/P4ES Project/P4ES3.png" alt="Themes & Processes" className="w-full h-auto"/>
                        </motion.div>
                        <div className="space-y-4 text-slate-600 leading-loose">
                            <h3 className="text-xl font-bold text-slate-900">Narrative & Reflective</h3>
                            <p>
                                Finding my theme was a journey of filtration. I started wide, creating graphic
                                posters to lay out the landscape of possibilities — listing physical processes
                                like sewing and paper cutting alongside initial thematic sparks like 'anime,'
                                'fire,' and 'cigarettes.'
                            </p>
                            <p>
                                These posters served as my raw material. To cut through the noise, I applied
                                the 'Pairs 50 Ways' method, challenging myself to answer 'Why?' under increasing
                                time pressure — allowing me to refine my focus down to one powerful,
                                overarching concept: <strong>Smoke.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-4 text-slate-600 leading-loose order-2 md:order-1">
                            <h3 className="text-xl font-bold text-slate-900">"Typographic quote' piece"</h3>
                            <p>
                                To translate the theme of Smoke into typography, I moved away from clean
                                legibility and embraced chaos. I designed a typographic piece where the words
                                themselves seem to be burning away — letters jagged and swept up in a digital wind.
                            </p>
                            <p>
                                This visual treatment obscures the quote, symbolizing how smoke — and the habits
                                associated with it — often hides the truth or clouds our vision of reality.
                            </p>
                        </div>
                        <motion.div whileHover={{y: -5}}
                                    className="rounded-2xl shadow-xl overflow-hidden bg-white order-1 md:order-2">
                            <img src="/P4ES Project/P4ES4.png" alt="Typographic Quote" className="w-full h-auto"/>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div whileHover={{y: -5}} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                            <img src="/P4ES Project/P4ES5.png" alt="Rise Drift Fade Poster" className="w-full h-auto"/>
                        </motion.div>
                        <div className="space-y-4 text-slate-600 leading-loose">
                            <h3 className="text-xl font-bold text-slate-900">A3 Typographic Poster</h3>
                            <p>
                                The final A3 poster summarises the theme of Smoke through three words:
                                <strong> RISE · DRIFT · FADE</strong>. The letterforms are treated with
                                a burnt, disintegrating texture — presented in both white and black ground
                                versions to demonstrate the full range of the visual language.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-4 text-slate-600 leading-loose order-2 md:order-1">
                            <h3 className="text-xl font-bold text-slate-900">"Tactile Motion Exploration"</h3>
                            <p>
                                "The 'MOVE' poster series translates the abstract concept of kinetic energy into static graphic forms through iterative typographic deconstruction. By utilizing screen printing and risograph-style layering, this exploration tests how color interaction affects perceived depth. The visual narrative shifts from the chaotic accumulation of 'MORE' to the rhythmic, cascading descent of 'MOVE' letters, rendered in a high-contrast palette of vibrant pinks and deep blues."
                            </p>

                        </div>
                        <motion.div whileHover={{y: -5}}
                                    className="rounded-2xl shadow-xl overflow-hidden bg-white order-1 md:order-2">
                            <img src="/P4ES Project/P4ES6.png" alt="Typographic Quote" className="w-full h-auto"/>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* ── Video Section ── */}
            <section className="bg-slate-900 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Process Documentation</h2>
                    <p className="text-slate-400 mb-12 max-w-xl mx-auto">
                        Watch the full process documentation — from initial concept mapping through
                        to final print production.
                    </p>

                    {/* 视频封面点击播放 */}
                    <section className="bg-slate-900 py-20 px-6">
                            {/* 视频封面点击播放 - 已去掉占位背景逻辑 */}
                            <motion.div
                                whileHover={{scale: 1.02}}
                                className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group max-w-2xl mx-auto"
                                onClick={() => setModalOpen(true)}
                            >
                                {/* 直接渲染封面图 */}
                                <img
                                    src="/P4ES Project/P4ES2.png"
                                    alt="Process Video Thumbnail"
                                    className="w-full h-auto object-cover"
                                />

                                {/* 播放按钮叠加层：始终显示在图片上方 */}
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                                    <motion.div
                                        whileHover={{scale: 1.1}}
                                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 group-hover:bg-white/20 transition-all"
                                    >
                                        <Play size={30} className="text-white ml-1" fill="white"/>
                                    </motion.div>
                                    <p className="text-white text-xs mt-4 uppercase tracking-widest font-medium">Click
                                        to Play</p>
                                </div>
                            </motion.div>
                    </section>
                </div>
            </section>

            {/* ── Role & Contributions ── */}
            <section className="bg-[#111] py-24 px-6 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 border-b border-white/10 pb-4">My Role & Contributions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                        {[
                            {
                                title: "Concept Research & Filtration",
                                desc: "Applied the 'Pairs 50 Ways' methodology to systematically narrow dozens of initial ideas down to two focused thematic concepts: Smoke and DROP."
                            },
                            {
                                title: "Experimental Typography",
                                desc: "Designed typographic works where letterforms themselves become the subject — burnt, disintegrating, or gravitationally falling — to convey abstract themes through form."
                            },
                            {
                                title: "Iterative Poster Design",
                                desc: "Produced multiple A3 poster iterations for both themes, documenting the evolution from rough process drafts to refined final compositions."
                            },
                            {
                                title: "Screen Printing & Physical Production",
                                desc: "Executed the final MOVE series through screen printing and risograph-style layering, exploring how physical production techniques alter visual depth and color interaction."
                            }
                        ].map((item, index) => (
                            <div key={index} className="space-y-2">
                                <h4 className="font-bold text-slate-300">● {item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Reflection ── */}
            <section className="py-32 bg-white text-slate-900 relative overflow-hidden text-center px-6 border-t border-slate-100">
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="w-16 h-1 bg-[#111] mx-auto mb-12" />
                    <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-slate-400">
                        Thoughts after completing this work
                    </h3>
                    <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed italic text-slate-600">
                        <p>
                            "This project taught me that a strong concept isn't found — it's excavated.
                            The more I questioned my initial ideas, the closer I got to something that felt true."
                        </p>
                        <p>
                            Moving from digital experimentation to physical screen printing was a revelation:
                            the imperfections of the physical process added exactly the kind of unpredictability
                            that the themes of Smoke and DROP demanded.
                        </p>
                    </div>
                    <p className="mt-12 text-[#111] uppercase tracking-[0.4em] text-xs font-black">
                        P4ES Project / Experimental Typography
                    </p>
                </div>
                <div className="absolute -bottom-10 -left-10 text-[12rem] font-black text-slate-100/60 pointer-events-none">
                    P4ES
                </div>
            </section>

            {/* ── 视频弹窗 ── */}
            <VideoModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                videoUrl="/P4ES Project/P4ES.mp4"
                title="P4ES Project — Process Documentation"
            />
        </div>
    );
};

export default P4ESProject;