import React from 'react';
import { motion } from 'framer-motion';

const SixBriefProject = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">

            {/* --- Hero Section --- */}
            <section className="pt-20 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 pt-4"
                >
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">6 Brief</h1>
                    <p className="text-xl text-[#4a4a4a] font-semibold mb-6">Experimental & Mixed Media / Smoke</p>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p>
                            A multi-brief exploration of the theme of <strong>Smoke</strong> — spanning
                            fine art paper sculpture, typographic poster series, cigarette packaging redesign,
                            and an educational character design kit.
                        </p>
                        <p className="text-sm italic border-l-4 border-[#4a4a4a] pl-4">
                            Each brief approaches smoke from a different angle: as an ephemeral physical
                            phenomenon, as an emotional metaphor for pressure and release, and as a
                            cultural signifier of danger — translated into tactile, graphic, and
                            narrative forms.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 w-full"
                >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-100 p-6">
                        <img
                            src="/6Brief/6Brief.png"
                            alt="Paper Sculpture — Smoke Installation"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>
            </section>

            {/* --- Brief 1: Paper Sculpture --- */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">Paper Sculpture / Fine Art Installation</h2>
                    <p className="text-slate-400 text-sm uppercase tracking-widest mb-10 font-medium">Brief 01</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div whileHover={{ y: -5 }} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                            <img
                                src="/6Brief/6Brief1.jpg"
                                alt="Paper Cutting Installation"
                                className="w-full h-auto"
                            />
                        </motion.div>
                        <div className="space-y-4 text-slate-600 leading-loose">
                            <p>
                                This project explores the ephemeral and fluid nature of smoke by
                                translating its movement into the physical medium of paper cutting.
                                I am asking: how can the delicate, layered, and three-dimensional
                                qualities of smoke be captured through precise manual carving and
                                paper manipulation?
                            </p>
                            <p>
                                My research method will be paper cutting and structural experimentation,
                                where I will use blades to carve intricate patterns that mimic the
                                organic flow of smoke. The final outcome will be a site-specific art
                                piece or paper sculpture that uses light and shadow to bring the
                                "invisible" form of smoke into a tangible, physical space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Brief 2: Posters — A Note from a Smoker --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">Posters</h2>
                    <p className="text-slate-400 text-sm uppercase tracking-widest mb-10 font-medium">Brief 02 — A Note from a Smoker</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div whileHover={{ y: -5 }} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                            <img
                                src="/6Brief/6Brief2.png"
                                alt="Typographic Poster — Note from a Smoker"
                                className="w-full h-auto"
                            />
                        </motion.div>
                        <div className="space-y-5 text-slate-600 leading-loose">
                            <h3 className="text-lg font-bold text-slate-900">A Note from a Smoker:</h3>
                            <p className="italic text-slate-500 text-sm border-l-4 border-slate-300 pl-4">
                                "Sometimes the pressure gets so heavy it feels like the only way to
                                breathe is to create a pause myself. I'm not even sure I enjoy it, but
                                when the depression turns everything grey and the anxiety starts
                                buzzing under my skin, lighting up is the only thing that makes sense.
                                It's like watching the smoke drift — distorted and messy, just like my
                                head — and for a second, seeing that breath turn into something real is
                                the only way I know I'm actually still alive."
                            </p>
                            <p>
                                I took a note from a stranger describing the suffocating pressure of life
                                and translated it into these four graphic movements — distorting
                                depression, anxiety, and the need for a pause into smoke-like
                                typography to capture why we light up even when we don't want to.
                            </p>
                        </div>
                    </div>

                    {/* Brief 3: Marble Posters */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-5 text-slate-600 leading-loose order-2 md:order-1">
                            <p className="italic text-slate-500 text-sm border-l-4 border-slate-300 pl-4">
                                "I've been doing this for twenty years, and honestly? I don't even like
                                smoking. But sometimes, there's just too much noise — too many things
                                stuck in my head that I can't move. When I light up, for one tiny instant,
                                I can feel everything finally starting to flow away."
                            </p>
                            <p>
                                I created these graphics to visualize that exact sensation: the moment
                                the "stuck" thoughts finally begin to liquefy and flow away. The distorted,
                                marble-like patterns represent his mental noise finally finding an exit,
                                turning a suffocating habit into a necessary, slow-motion escape.
                            </p>
                        </div>
                        <motion.div whileHover={{ y: -5 }} className="rounded-2xl shadow-xl overflow-hidden bg-white order-1 md:order-2">
                            <img
                                src="/6Brief/6Brief3.png"
                                alt="Marble Typography Posters"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Brief 4: Packaging --- */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">Packaging</h2>
                    <p className="text-slate-400 text-sm uppercase tracking-widest mb-10 font-medium">Brief 04 — Cigarette Pack Redesign</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div whileHover={{ y: -5 }} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                            <img
                                src="/6Brief/6Brief4.png"
                                alt="Cigarette Pack Redesign"
                                className="w-full h-auto"
                            />
                        </motion.div>
                        <div className="space-y-4 text-slate-600 leading-loose">
                            <p>
                                This project investigates the visual language of tobacco products,
                                focusing on the redesign of cigarette packaging to explore how
                                hand-drawn aesthetics can alter the perception of the product.
                            </p>
                            <p>
                                I am asking: how can organic, hand-rendered illustrations contrast
                                with the clinical or gritty nature of traditional tobacco branding
                                to create a more artisanal or cautionary visual narrative? My
                                research method will be hand-drawing and sketching, experimenting
                                with different line weights, textures, and medium types.
                            </p>
                            <p>
                                The final outcome will be a redesigned cigarette pack and brand
                                identity, featuring bespoke hand-drawn elements that inform the
                                logo, typography, and structural layout.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Module File: Character Design --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">Module File</h2>
                    <p className="text-slate-400 text-sm uppercase tracking-widest mb-10 font-medium">Character Design / Educational Kit</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <motion.div whileHover={{ y: -5 }} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                            <img
                                src="/6Brief/6Brief5.png"
                                alt="Ash Character Design — Educational Kit"
                                className="w-full h-auto"
                            />
                        </motion.div>
                        <div className="space-y-4 text-slate-600 leading-loose">
                            <p>
                                This project examines smoke as a universal signifier of danger —
                                "What is a cigarette and what to do when exposed to smoke?" I am
                                looking at how we communicate urgency and safety to vulnerable groups.
                            </p>
                            <p>
                                My research method will be semiotics analysis, studying existing
                                hazard signs and safety manuals to see how danger is currently
                                visualized. The audience is young children (ages 6–10).
                            </p>
                            <p>
                                The format will be an educational kit with character design —
                                creating a friendly "smoke" character named <strong>阿煙 "Ash"</strong> that
                                teaches fire safety and evacuation routes without causing fear or panic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Role & Contributions --- */}
            <section className="bg-slate-900 py-24 px-6 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 border-b border-white/10 pb-4">My Role & Contributions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                        {[
                            {
                                title: "Fine Art & Paper Sculpture",
                                desc: "Hand-carved paper installation translating the fluid movement of smoke into layered, light-responsive physical form."
                            },
                            {
                                title: "Typographic Poster Design",
                                desc: "Designed two poster series — one based on a smoker's inner monologue, one visualizing the liquefying of mental noise — both using distorted, expressive typography."
                            },
                            {
                                title: "Cigarette Packaging Redesign",
                                desc: "Developed hand-drawn illustration assets across three pack designs to create a cautionary, artisanal visual language for tobacco branding."
                            },
                            {
                                title: "Educational Character Design",
                                desc: "Created 阿煙 'Ash' — a 3D cigarette character designed to teach fire safety and smoking awareness to children aged 6–10 through empathetic, non-frightening storytelling."
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

            {/* --- Reflection --- */}
            <section className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden text-center px-6">
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="w-16 h-1 bg-white mx-auto mb-12 opacity-30" />
                    <h3 className="text-3xl md:text-4xl font-light leading-relaxed mb-8 italic">
                        "Smoke is never just smoke — it is pressure made visible,
                        a pause carved out of noise, and a habit that speaks
                        louder than words ever could."
                    </h3>
                    <p className="text-slate-400 uppercase tracking-[0.4em] text-xs font-bold">
                        6 Brief / Experimental & Mixed Media
                    </p>
                </div>
                <div className="absolute -bottom-10 -right-10 text-[14rem] font-black text-white/5 pointer-events-none">
                    SMOKE
                </div>
            </section>

        </div>
    );
};

export default SixBriefProject;