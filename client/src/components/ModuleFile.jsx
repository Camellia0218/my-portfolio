// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
                    className="absolute inset-0 w-full h-full object-contain bg-white"
                />
            </AnimatePresence>

            {/* 控制按钮 */}
            <button
                onClick={() => go(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-[#002FA7]/80 backdrop-blur-md text-white rounded-full p-3 transition-all shadow-lg"
            >
                <ChevronLeft size={28} />
            </button>
            <button
                onClick={() => go(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-[#002FA7]/80 backdrop-blur-md text-white rounded-full p-3 transition-all shadow-lg"
            >
                <ChevronRight size={28} />
            </button>

            {/* 底部指示器 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-3">
                <span className="text-white text-xs font-medium tracking-wide drop-shadow-md">
                    {images[current].label}
                </span>
                <div className="flex flex-wrap justify-center gap-1.5 max-w-[60%]">
                    {/* 只展示指示点，不展示全部82个防止拥挤，或仅展示当前进度 */}
                    <span className="text-white/80 text-[10px] font-mono">
                        {current + 1} / {images.length}
                    </span>
                </div>
            </div>
        </div>
    );
};

// ─── 主页面 ──────────────────────────────────────────────
const ModuleFileProject = () => {
    // 生成 54 张图片数组
    const galleryImages = Array.from({ length: 82 }, (_, i) => ({
        src: `/Module File/Gallery/${i + 1}.png`,
        label: `Module File - Page ${i + 1} of 82`
    }));

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">

            {/* Hero Section */}
            <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 pt-4">
                    <h1 className="text-6xl font-bold mb-4 tracking-tight text-[#002FA7]">Module File</h1>
                    <p className="text-xl text-[#002FA7]/80 font-semibold mb-6">Editorial Design (Book) / Portfolio</p>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p>
                            This <strong>"Module File"</strong> is a curated retrospective of my journey through university,
                            documenting my evolution from a student to a professional designer.
                        </p>
                        <p className="text-sm italic border-l-4 border-[#002FA7] pl-4">
                            It serves as a comprehensive record of my creative process, technical growth, and the diverse range of projects—
                            from branding to social campaigns—that have defined my academic career.
                        </p>
                        <p>
                            A synthesis of design philosophy, capturing the milestones and iterations that shaped my unique visual identity.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    className="flex-1 w-full max-w-md mx-auto md:mx-0"
                >
                    <div
                        className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-50 p-4 border border-[#002FA7]/10">
                        <img
                            src="/Module File/Module File.png"
                            alt="Module File Cover"
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>
                </motion.div>
            </section>

            {/* 图片轮播展示区 */}
            <section className="bg-slate-50 py-20 px-6 border-t border-[#002FA7]/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-3 text-[#002FA7]">The Process of 180 Days</h2>
                        <p className="text-[#002FA7]/60 text-sm uppercase tracking-widest font-medium">
                            Full Book Preview — 82 Pages
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <Carousel images={galleryImages} />
                    </motion.div>
                </div>
            </section>

            {/* 页脚简单修饰 */}
            <footer className="py-20 text-center opacity-20">
                <div className="w-12 h-0.5 bg-[#002FA7] mx-auto mb-4" />
                <p className="text-[#002FA7] uppercase tracking-[0.5em] text-[10px] font-black">END OF FILE</p>
            </footer>
        </div>
    );
};

export default ModuleFileProject;