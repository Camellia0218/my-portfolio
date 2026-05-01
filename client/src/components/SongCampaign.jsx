// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

const SongCampaignDesign = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">

            {/* --- Hero Section --- */}
            <section className="pt-20 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 pt-4"
                >
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">Song Campaign Design</h1>
                    <p className="text-xl text-[#1a1a1a] font-semibold mb-6">Campaign Projects / Model Shooting</p>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p>
                            This project is a collaboration with the school's music production
                            department to create the cover of a song produced by students.
                        </p>
                        <p className="text-sm italic border-l-4 border-[#1a1a1a] pl-4">
                            The visual identity for the song <em>"Sorry I Am Not The Best"</em> was developed
                            through model photography, combining raw emotion with typographic tension.
                            The monochromatic palette and organic textures reflect the vulnerability
                            embedded in the song's narrative — imperfection as a form of honesty.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 w-full"
                >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#f5f5f5] p-8">
                        <img
                            src="/Song Campaign Design/Song Campaign Design4.png"
                            alt="Sorry I Am Not The Best - A2 Poster"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </motion.div>
            </section>

            {/* --- Deliverables Section: A2 Poster / Album Cover / CD Mockup --- */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Campaign Deliverables</h2>
                    <p className="text-xl leading-relaxed mb-12 text-slate-600">
                        Three key assets were produced for the campaign — a large-format poster,
                        a digital album cover, and a physical CD mockup — all unified under
                        a single visual identity.
                    </p>

                    {/* 三联图展示 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center gap-3">
                            <div className="rounded-xl shadow-lg overflow-hidden bg-white w-full">
                                <img
                                    src="/Song Campaign Design/Song Campaign Design2.png"
                                    alt="A2 size poster"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-sm text-slate-500 font-medium">A2 size poster ( 300 dpi )</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center gap-3">
                            <div className="rounded-xl shadow-lg overflow-hidden bg-white w-full">
                                <img
                                    src="/Song Campaign Design/Song Campaign Design1.jpg"
                                    alt="Album Cover 800x800"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-sm text-slate-500 font-medium">Album cover ( 800×800 pixels )</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center gap-3">
                            <div className="rounded-xl shadow-lg overflow-hidden bg-white w-full">
                                <img
                                    src="/Song Campaign Design/Song Campaign Design3.png"
                                    alt="CD Mockup"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-sm text-slate-500 font-medium">CD Mockup</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Real-World Mockup Section --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Bringing Vision to Life</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
                    <motion.div whileHover={{y: -8}} className="rounded-2xl shadow-lg overflow-hidden h-80">
                        <img
                            src="/Song Campaign Design/Song Campaign Design5.jpg"
                            alt="Outdoor Billboard Mockup"
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                    <motion.div whileHover={{y: -8}} className="rounded-2xl shadow-lg overflow-hidden h-80">
                        <img
                            src="/Song Campaign Design/Song Campaign Design3.png"
                            alt="CD Full Mockup"
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                </div>

                <p className="text-center text-slate-500 max-w-2xl mx-auto">
                    The poster was visualised across outdoor billboard placements and physical CD packaging,
                    demonstrating how the campaign identity translates across both digital and print media.
                </p>
            </section>

            {/* --- Role & Contribution --- */}
            <section className="bg-slate-900 py-24 px-6 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 border-b border-white/10 pb-4">My Role & Contributions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                        {[
                            {
                                title: "Model Photography Direction",
                                desc: "Directed the model shoot, selecting poses and compositions that conveyed emotional vulnerability and the raw honesty of the song's theme."
                            },
                            {
                                title: "Visual Identity Design",
                                desc: "Developed a unified monochromatic visual language combining hand-drawn textures, editorial typography, and model photography."
                            },
                            {
                                title: "Multi-Format Production",
                                desc: "Produced three campaign assets — A2 print poster, digital album cover, and CD mockup — adapted for different use contexts."
                            },
                            {
                                title: "Mockup & Presentation",
                                desc: "Applied the design to outdoor billboard and physical CD mockups to demonstrate real-world campaign deployment."
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
                    <div className="w-16 h-1 bg-white mx-auto mb-12 opacity-30"/>
                    <h3 className="text-3xl md:text-4xl font-light leading-relaxed mb-8 italic">
                        "Collaborating with the music department taught me that design and sound
                        share the same emotional frequency — both exist to make people feel something real."
                    </h3>
                    <p className="text-slate-400 uppercase tracking-[0.4em] text-xs font-bold">
                        Song Campaign Design / 2024
                    </p>
                </div>
                <div className="absolute -bottom-10 -right-10 text-[16rem] font-black text-white/5 pointer-events-none">
                    Song Campaign
                </div>
            </section>

        </div>
    );
};

export default SongCampaignDesign;