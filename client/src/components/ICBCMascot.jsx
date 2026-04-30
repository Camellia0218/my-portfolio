// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

const ICBCMascot = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            {/* Hero Section - 对应 Pipi 的核心 3D 展示 (模仿 Project Harbour 图一) */}
            <section className="pt-32 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 pt-4"
                >
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">ICBC Mascot</h1>
                    <p className="text-xl text-[#F9B639] font-semibold mb-6">Competition / Character Design</p>

                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p>An ICBC mascot designed based on the auspicious mythical creature 'Pixiu,' embodying the brand philosophy of security, stability, and the protection of wealth.</p>
                        <p className="text-sm italic border-l-4 border-[#F9B639] pl-4">
                            Pixiu, a mythical beast from traditional culture, is reimagined here as a guardian of wealth for the Industrial and Commercial Bank of China.
                            Its rounded, approachable form bridges the gap between historical heritage and modern financial reliability.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 w-full"
                >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8 border border-slate-100">
                        {/* 对应 Pipi 的核心 3D 渲染主图 */}
                        <img
                            src="/ICBCMascot/ICBCMascot1.png"
                            alt="Pipi Core Design"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Design Specifications - 对应三视图与情绪表达 (模仿图二 & 图三) */}
            <section className="bg-slate-50 py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Character Concept :</h2>
                    <p className="text-xl leading-relaxed mb-12 text-slate-600">
                        According to legend, Pixiu is an auspicious animal that can absorbwealth, ward
                        off evil spirits and avoid harm. As the mascot of ICBC,Pixiu’s mission is to
                        protect customers’ wealth and bring themprosperity and happiness. Pixiu
                        patrols the financial market everyday, attracting wealth and ensuring the
                        safety and stability ofcapital flows.
                        It also symbolizes wealth protection and prosperity. With her cuteappearance,
                        reliable character, warm heart, love and steadycharacter, Pipi perfectly
                        embodies ICBC’s brand philosophy ofproviding customers with safe, stable
                        and caring financial services
                    </p>
                    <div className="flex justify-center w-full mb-12">
                        <motion.div
                            whileHover={{y: -5}}
                            className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-100 bg-white p-4 md:p-8"
                        >
                            <img
                                src="/ICBCMascot/ICBCMascot6.jpg"
                                className="w-auto h-auto max-h-[70vh] object-contain mx-auto"
                                alt="Pipi Design Specifications"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Brand Application - 对应银行卡与实物 (模仿图四 & 图五) */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-widest text-[#002855]">
                    IBank Card Design
                </h2>

                {/* 修改点：使用 grid 布局实现两张图片并排，并添加响应式间距 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                    {/* 第一张卡片容器 */}
                    <motion.div
                        whileHover={{y: -10}}
                        className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 bg-white p-2"
                    >
                        <img
                            src="/ICBCMascot/ICBCMascot4.jpg"
                            className="w-full h-auto object-cover rounded-xl"
                            alt="Card Design Mockup 1"
                        />
                    </motion.div>

                    {/* 第二张卡片容器 */}
                    <motion.div
                        whileHover={{y: -10}}
                        className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 bg-white p-2"
                    >
                        <img
                            src="/ICBCMascot/ICBCMascot3.png"
                            className="w-full h-auto object-cover rounded-xl"
                            alt="Card Design Mockup 2"
                        />
                    </motion.div>
                </div>

            </section>

            {/* Poster Campaign - 对应户外展示 (模仿图六 & 图七) */}
            <section className="bg-[#C4161C] py-24 px-6 text-white overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 text-center">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold mb-6 tracking-tight">Marketing Promotion</h2>
                        <p className="text-blue-50/90 leading-loose mb-10 text-lg">
                            We place Pixiu into real urban settings, ranging from bustling subway stations to outdoor billboards.Every poster is more than just an advertisement—it is a warm greeting.
                        </p>
                    </div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        className="w-full"
                    >
                        {/* 横向海报全宽展示更具冲击力 */}
                        <img
                            src="/ICBCMascot/ICBCMascot5.png"
                            className="w-full h-auto shadow-[0_30px_60px_rgba(0,0,0,0.4)] rounded-[2rem] md:rounded-[4rem]"
                            alt="Outdoor Campaign"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Reflection Section - 统一的总结风格 */}
            <section
                className="py-32 bg-white text-slate-900 relative overflow-hidden text-center px-6 border-t border-slate-100">
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="w-16 h-1 bg-[#F9B639] mx-auto mb-12"/>
                    <h3 className="text-3xl md:text-4xl font-light leading-relaxed mb-8 italic text-slate-600">
                        "Every step, even those that don't lead to immediate success, is a valuable part of the journey
                        in honing my skills."
                    </h3>
                    <p className="text-[#F9B639] uppercase tracking-[0.4em] text-xs font-black">Reflections / 2026</p>
                </div>
                <div
                    className="absolute -bottom-10 -left-10 text-[20rem] font-black text-slate-100/30 pointer-events-none select-none">
                    PIXIU
                </div>
            </section>
        </div>
    );
};

export default ICBCMascot;