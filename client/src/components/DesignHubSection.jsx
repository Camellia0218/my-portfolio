import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";

// ─── 图片数据：把你的实际图片路径替换进来 ───────────────
const PHOTOS = [
    { src: "/Visiting/Visiting1.jpg", caption: "DX Design Hub " },
    { src: "/Visiting/Visiting2.jpg", caption: "DX Design Hub" },
    { src: "/Visiting/Visiting3.jpg", caption: "DX Design Hub " },
    { src: "/Visiting/Visiting4.jpg", caption: "DX Design Hub" },
    { src: "/Visiting/Visiting5.jpg", caption: "DX Design Hub" },
    { src: "/Visiting/Visiting6.jpg", caption: "DX Design Hub" },
    { src: "/Visiting/Visiting7.jpg", caption: "DX Design Hub" },
    { src: "/Visiting/Visiting8.jpg", caption: "DX Design Hub " },
    { src: "/Visiting/Visiting9.jpg", caption: "DX Design Hub" },
    { src: "/Visiting/Visiting10.jpg", caption: "DX Design Hub" },
    { src: "/Visiting/Visiting11.jpg", caption: "DX Design Hub" },
    { src: "/Visiting/Visiting12.jpg", caption: "DX Design Hub" },
    { src: "/Visiting/Visiting13.jpg", caption: "DX Design Hub" },
];

// ─── 轮播组件 ─────────────────────────────────────────────
const Carousel = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const timerRef = useRef(null);

    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current);
    }, [images.length]);

    const go = (dir) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + images.length) % images.length);
        startTimer();
    };

    const variants = {
        enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
    };

    return (
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-slate-900" style={{ aspectRatio: "16/9" }}>
            <AnimatePresence custom={direction} initial={false}>
                <motion.img
                    key={current}
                    src={images[current].src}
                    alt={images[current].caption}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* 渐变遮罩 + 说明文字 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5 flex items-end justify-between">
        <span className="text-white text-sm font-medium tracking-wide drop-shadow">
          {images[current].caption}
        </span>
                {/* 指示点 */}
                <div className="flex gap-1.5">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > current ? 1 : -1);
                                setCurrent(i);
                                startTimer();
                            }}
                            className={`rounded-full transition-all ${
                                i === current ? "bg-white w-5 h-2" : "bg-white/40 w-2 h-2"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* 左右箭头 */}
            <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white rounded-full p-2.5 transition-all"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white rounded-full p-2.5 transition-all"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

// ─── 主 Section ───────────────────────────────────────────
export const DesignHubSection = () => {
    return (
        <section
            id="designhub"
            className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* 标题区保持不变 */}
                <motion.div
                    className="text-center mb-16 md:mb-24"
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
                        <MapPin className="h-4 w-4" />
                        Field Visit · Sham Shui Po
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <span className="block text-[#002FA7]">DX Design Hub Visit</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        A visit to Sham Shui Po's DX Design Hub — where heritage meets innovation
                        and community creativity takes centre stage.
                    </motion.p>
                </motion.div>

                {/* 重新编排的内容区 */}
                <motion.div
                    className="mb-24 relative"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="relative z-10 shadow-[0_40px_80px_-15px_rgba(0,47,167,0.25)] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
                        <Carousel images={PHOTOS} />
                    </div>

                    {/* 图片装饰：位置信息 */}
                    <div className="mt-6 flex flex-wrap justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">
                        <div className="flex items-center gap-3">
                            <MapPin size={14} className="text-[#002FA7]" />
                            <span>DX Design Hub, Sham Shui Po, Hong Kong</span>
                        </div>
                        <div className="flex gap-6">
                            <span>22.3308° N</span>
                            <span>114.1613° E</span>
                        </div>
                    </div>
                </motion.div>

                {/* 3. 观后感文字：采用杂志分栏排版 (Multi-column) */}
                <motion.article
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {/* 章节副标题 */}
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        Experience Design: <span className="text-[#002FA7]">Bridging Heritage and Modern Innovation</span>
                    </h3>

                    {/* 文字分栏容器 */}
                    <div className="md:columns-2 gap-16 space-y-8 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed text-justify">

                        <p className="first-letter:text-6xl first-letter:font-black first-letter:text-[#002FA7] first-letter:mr-3 first-letter:float-left">
                            The visit to the DX Design Hub in Sham Shui Po provided a comprehensive look into the
                            intersection of heritage, modern technology, and commercial branding. As a professional
                            practice observation, the exhibition serves as a case study in how "Experience Design"
                            can bridge the gap between historical narrative and contemporary consumer engagement.
                        </p>

                        <p>
                            One of the most technically impressive aspects was the <strong className="text-[#002FA7]">Material Library</strong>.
                            For a design professional, this floor-to-ceiling backlit grid is more than a visual centerpiece; it
                            represents the systematic categorization of tactile innovation. The use of individual
                            light boxes to isolate material swatches allows for a granular appreciation of texture
                            and translucency.
                        </p>

                        {/* 重点引用 - 跨栏或作为视觉中断 */}
                        <div className="break-inside-avoid py-8">
                            <blockquote className="bg-[#002FA7]/5 dark:bg-[#002FA7]/10 p-8 rounded-3xl border-l-8 border-[#002FA7]">
                                <p className="text-[#002FA7] font-semibold m-0 italic text-xl">
                                    "The exhibition demonstrated a sophisticated control of visual tempo through the transition of whimsical sculptures to industrial neon."
                                </p>
                            </blockquote>
                        </div>

                        <p>
                            The neon works, in particular, highlight a trend in <strong>"Retro-Futurism"</strong>—preserving the fading craft of Hong
                            Kong’s gas-discharge tubes while repurposing them as avant-garde art. This reflects a
                            professional shift toward "Cultural Preservation through Re-interpretation," where
                            designers act as custodians of local identity.
                        </p>

                        <p>
                            From a Commercial and Product perspective, the "RANDOK" display and the woven textile
                            cityscapes illustrated how digital imagery is being translated into physical
                            commodities. The precision of the "Woven City" pieces suggests a high level of technical
                            proficiency in jacquard weaving.
                        </p>

                        <p>
                            In conclusion, the visit reinforced the necessity of integrating multisensory
                            elements—lighting, materiality, and digital interaction—to create a cohesive
                            professional exhibition. It highlighted that successful design practice in the 2020s
                            requires a balance between honoring local heritage and adopting global technological
                            standards.
                        </p>
                    </div>
                </motion.article>
            </div>
        </section>
    );
};