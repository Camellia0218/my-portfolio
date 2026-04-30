import React from 'react';
import { motion } from 'framer-motion';

const DADProject = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">

            {/* --- Hero Section --- */}
            <section className="pt-20 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 pt-4"
                >
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">D&AD Project</h1>
                    <p className="text-xl text-[#C8102E] font-semibold mb-6">Package Design / TUBORG</p>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p>
                            Brief set by Tuborg: Design a brand experience that allows Tuborg to
                            actively release young people from negative pressure.
                        </p>
                        <p className="text-sm italic border-l-4 border-[#C8102E] pl-4">
                            Need to develop a space and experience where Tuborg's audience
                            can truly feel liberated, embrace spontaneity, and fuel their fun.
                            Three can designs — Red, Blue, and Yellow — each carry a distinct
                            emotional narrative under the unifying tagline: <em>"You Don't Have To."</em>
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 w-full"
                >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-50 p-6">
                        <img
                            src="/TubrogProject/Tuborg.png"
                            alt="Tuborg Can Design — Three Concepts"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>
            </section>

            {/* --- Can Designs: Three Concepts --- */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Event Concept: Tuborg</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        For the text on the left-hand side, the goal was to write something that felt
                        less like a commercial and more like an empathetic inner monologue. Here is how
                        the story breaks down across the three designs.
                    </p>

                    {/* 三联说明 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                color: 'border-red-500',
                                dot: 'bg-red-500',
                                title: 'Red Can — The Silent Scream',
                                desc: 'Addresses the exhaustion of "fitting in," giving the drinker permission to stop holding their breath and finally scream.'
                            },
                            {
                                color: 'border-blue-600',
                                dot: 'bg-blue-600',
                                title: 'Blue Can — Not A Statue',
                                desc: 'Rejects the paralysis of perfectionism, urging you to "rip the lid off" and embrace the messiness of being human.'
                            },
                            {
                                color: 'border-yellow-500',
                                dot: 'bg-yellow-500',
                                title: 'Yellow Can — Chaos',
                                desc: 'Transforms the fear of being alone into shared energy, reminding us that we are all just waiting for the beat to drop together.'
                            }
                        ].map((item, i) => (
                            <div key={i} className={`border-l-4 ${item.color} pl-4 py-2`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`w-3 h-3 rounded-full ${item.dot}`} />
                                    <h4 className="font-bold text-sm text-slate-800">{item.title}</h4>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* 主展示图 */}
                    <motion.div
                        whileHover={{y: -5}}
                        /* 添加 flex 使子元素在一行排列，gap-4 设置图片间距 */
                        className="rounded-2xl shadow-xl overflow-hidden bg-white flex items-center gap-4 p-4"
                    >
                        <img
                            src="/TubrogProject/TubrogProject8.jpg"
                            alt="All Three Can Designs"
                            /* w-1/3 确保三张图片各占宽度的三分之一 */
                            className="w-1/3 h-auto object-contain"
                        />
                        <img
                            src="/TubrogProject/TubrogProject9.jpg"
                            alt="All Three Can Designs"
                            className="w-1/3 h-auto object-contain"
                        />
                        <img
                            src="/TubrogProject/TubrogProject7.jpg"
                            alt="All Three Can Designs"
                            className="w-1/3 h-auto object-contain"
                        />
                    </motion.div>
                </div>
            </section>

            {/* --- Promotional Posters --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Promotional Posters</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-8">
                    <motion.div whileHover={{y: -5}} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                        <img
                            src="/TubrogProject/TubrogProject4.png"
                            alt="Tuborg Promotional Posters"
                            className="w-full h-auto"
                        />
                    </motion.div>
                    <div className="space-y-5 text-slate-600 leading-loose">
                        <h3 className="text-xl font-bold text-slate-900">Unbottled Chaos</h3>
                        <p>
                            For the promotional posters, I visualized the exact moment the internal pressure
                            is finally set free. Extending the 'Unbottled Chaos' theme, I let the color and
                            grunge textures burst beyond the can, flooding the negative space to represent
                            total liberation.
                        </p>
                        <p>
                            The background typography — a swirling, oversized 'Sip' — echoes the liquid's
                            movement, creating a sense of depth and chaotic energy. Paired with the split
                            call-to-action <em>'Take a sip... Release yourself,'</em> the posters frame the
                            beer not just as a drink, but as the trigger mechanism that allows your true
                            colors to finally spill out.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Mockup Section --- */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Mockup</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-5 text-slate-600 leading-loose order-2 md:order-1">
                            <p>
                                To fully immerse the consumer in the brand world, I extended the visual
                                identity beyond the can and into physical touchpoints: event invitations
                                and carrier bags.
                            </p>
                            <p>
                                For the festival invitations, I combined paint explosions with a glitchy,
                                pixelated aesthetic — suggesting that this event is a glitch in the
                                system where the rules of 'perfection' break down. The carrier bags were
                                designed to turn the customer into a walking declaration that you are
                                ready to let loose.
                            </p>
                        </div>
                        <motion.div whileHover={{ y: -5 }} className="rounded-2xl shadow-xl overflow-hidden bg-white order-1 md:order-2">
                            <img
                                src="/TubrogProject/TubrogProject10.png"
                                alt="Tuborg Carrier Bags Mockup"
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div whileHover={{ y: -5 }} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                            <img
                                src="/TubrogProject/TubrogProject11.png"
                                alt="Tuborg Collectible Bottle Caps"
                                className="w-full h-auto"
                            />
                        </motion.div>
                        <div className="space-y-5 text-slate-600 leading-loose">
                            <p>
                                To evoke a sense of longing for free time among young people, I encouraged
                                the design of new bottle caps — adding graphics to the bottom to give them
                                collectible value.
                            </p>
                            <p>
                                The packaging design was divided into three scenes: <strong>outdoors,
                                clubbing, and gathering with friends.</strong> The graphics incorporate
                                musical elements, expressing a "slightly tipsy" feeling through pixels
                                and swirls — reminding young people that they deserve space and time
                                to liberate themselves.
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
                                title: "Brand Strategy & Concept",
                                desc: "Developed three distinct emotional narratives for the can series, each targeting a different pressure young people face — social expectation, perfectionism, and loneliness."
                            },
                            {
                                title: "Package Design",
                                desc: "Designed three can label variations (Red, Blue, Yellow) unified by the 'You Don't Have To' tagline, with unique grunge textures and inner-monologue copywriting."
                            },
                            {
                                title: "Promotional Poster Series",
                                desc: "Created three large-format promotional posters extending the visual identity — letting colour and texture burst beyond the can into the negative space."
                            },
                            {
                                title: "Touchpoint Design",
                                desc: "Extended the brand world into physical touchpoints including collectible bottle caps, festival invitations, and carrier bags across all three colour themes."
                            }
                        ].map((item, index) => (
                            <div key={index} className="space-y-2">
                                <h4 className="font-bold text-[#e8b4b8]">● {item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Reflection --- */}
            <section className="py-32 bg-[#C8102E] text-white relative overflow-hidden text-center px-6">
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="w-16 h-1 bg-white mx-auto mb-12 opacity-40" />
                    <h3 className="text-3xl md:text-4xl font-light leading-relaxed mb-8 italic">
                        "Design for liberation means meeting people exactly where their pressure lives —
                        and giving them permission, through every touchpoint, to finally let it go."
                    </h3>
                    <p className="text-red-100/70 uppercase tracking-[0.4em] text-xs font-bold">
                        D&AD Project / Tuborg Package Design
                    </p>
                </div>
                <div className="absolute -bottom-10 -right-10 text-[14rem] font-black text-white/5 pointer-events-none">
                    TUBORG
                </div>
            </section>

        </div>
    );
};

export default DADProject;