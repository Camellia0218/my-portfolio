// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

const ViviennePosterDesign = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">

            {/* --- Hero Section --- */}
            <section className="pt-32 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 pt-4"
                >
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">Poster Design</h1>
                    <p className="text-xl text-[#8B0000] font-semibold mb-6">Product Shooting / Vivienne Westwood</p>

                    <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                        <div>
                            <p>
                                This is the finished product shot by real products.
                                I chose the difficult big brand Vivienne Westwood —
                                a luxury fashion house known for its bold, rebellious aesthetic
                                and iconic Saturn Orb motif.
                            </p>
                        </div>
                        <p className="text-sm italic border-l-4 border-[#8B0000] pl-4">
                            The deep red roses and golden jewellery create a visual tension between
                            luxury and passion — a language that speaks directly to the Vivienne Westwood identity.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 w-full"
                >
                    {/* 主图：四联海报横排展示 */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-slate-50 p-6 border border-slate-100">
                        <img
                            src="/Poster Design/Poster Design1.png"
                            alt="Vivienne Westwood Poster Flat Layout"
                            className="w-full h-auto object-contain rounded-xl"
                        />
                    </div>
                </motion.div>
            </section>

            {/* --- Mockup Section: 实物展示 --- */}
            <section className="bg-slate-50 py-24 px-6">
                <div className="max-w-6xl mx-auto space-y-10">
                    <div className="order-2 md:order-1">
                        <motion.div whileHover={{ y: -5 }} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                            <img
                                src="/Poster Design/Poster Design2.png"
                                alt="Poster Mockup on Wall"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-3xl font-bold">Real-World Presentation</h2>
                        <p className="text-slate-600 leading-loose">
                            The four poster variations are displayed in a gallery-style wall mockup,
                            simulating how they would appear in a real retail or exhibition environment.
                        </p>
                        <p className="text-slate-600 leading-loose">
                            Each frame captures a different angle and composition of the jewellery
                            against deep red roses — maintaining brand consistency while offering
                            visual variety across the series.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Concept Section --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-widest text-slate-900">
                    Concept & Purpose
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
                    {/* Concept 图 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="rounded-2xl shadow-lg border border-slate-50 p-2 bg-white flex items-center justify-center"
                    >
                        <img
                            src="/Poster Design/Poster Design3.jpg"
                            className="w-full h-auto rounded-xl object-contain max-h-[480px]"
                            alt="Poster Concept - Customer Buy Emotional"
                        />
                    </motion.div>

                    {/* Purpose 图 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="rounded-2xl shadow-lg border border-slate-50 p-2 bg-white flex items-center justify-center"
                    >
                        <img
                            src="/Poster Design/Poster Design4.jpg"
                            className="w-full h-auto rounded-xl object-contain max-h-[480px]"
                            alt="Poster Purpose - Emotional Branding"
                        />
                    </motion.div>
                </div>

                {/* 文字说明卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <h3 className="font-bold text-lg text-[#8B0000] mb-3">Concept</h3>
                        <p className="text-slate-600 leading-loose text-sm">
                            The statement <span className="italic">"Customer do not buy product, They buy Emotional"</span> serves
                            as the foundation of this poster's concept. It emphasizes that buying decisions are often driven
                            by how a brand or product makes people feel rather than just its features or price.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <h3 className="font-bold text-lg text-[#8B0000] mb-3">Purpose & Impact</h3>
                        <p className="text-slate-600 leading-loose text-sm">
                            This poster is designed to remind marketers, designers, and advertisers that successful
                            branding relies on forging an emotional bond with the audience. By creating a visual
                            representation of warmth and connection, the poster reinforces the idea that products
                            must resonate on a deeper, more personal level to truly captivate and retain customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Role & Contribution --- */}
            <section className="bg-slate-900 py-24 px-6 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 border-b border-white/10 pb-4">My Role & Contributions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                        {[
                            {
                                title: "Product Photography Direction",
                                desc: "Directed the product shoot using real Vivienne Westwood jewellery, selecting deep red roses as the backdrop to evoke luxury and passion."
                            },
                            {
                                title: "Poster Series Design",
                                desc: "Designed four distinct poster variations with different compositions, typography layouts, and colour tones while maintaining brand consistency."
                            },
                            {
                                title: "Concept & Narrative",
                                desc: "Built the emotional narrative around 'Have Courage and You Are the Beauty' — translating the brand's rebellious spirit into visual storytelling."
                            },
                            {
                                title: "Mockup & Presentation",
                                desc: "Created gallery-style wall mockups to present the posters in a real-world context, simulating retail and exhibition display scenarios."
                            }
                        ].map((item, index) => (
                            <div key={index} className="space-y-2">
                                <h4 className="font-bold text-[#C0392B]">● {item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Reflection --- */}
            <section className="py-32 bg-white text-slate-900 relative overflow-hidden text-center px-6 border-t border-slate-100">
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="w-16 h-1 bg-[#8B0000] mx-auto mb-12"/>
                    <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-slate-400">
                        Thoughts after completing this work
                    </h3>
                    <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed italic text-slate-600">
                        <p>
                            "Choosing Vivienne Westwood was a challenge I set for myself —
                            it is a brand with such a strong visual identity that reinterpreting it
                            felt both daunting and thrilling."
                        </p>
                        <p>
                            Shooting real products and composing them into polished advertising posters
                            taught me how much emotion lives in the details — the angle of a chain,
                            the depth of a red petal, the weight of a single tagline.
                        </p>
                    </div>
                    <p className="mt-12 text-[#8B0000] uppercase tracking-[0.4em] text-xs font-black">
                        Poster Design / Vivienne Westwood
                    </p>
                </div>
                {/* 背景装饰文字 */}
                <div className="absolute -bottom-10 -left-10 text-[12rem] font-black text-slate-100/50 pointer-events-none">
                    Poster Design
                </div>
            </section>
        </div>
    );
};

export default ViviennePosterDesign;