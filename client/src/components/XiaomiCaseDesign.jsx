// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

const XiaomiPhoneCase = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            {/* --- Hero Section: 核心设计展示 --- */}
            <section className="pt-32 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 pt-4"
                >
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">Xiaomi Phone Case Design</h1>
                    <p className="text-xl text-[#C4161C] font-semibold mb-6">Competition / Bronze Award</p>

                    <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                        <div>
                            <p>
                                We believe that this phone case design is a work with visual impact and thinking value.
                                The overall design is based on black, embellished with eye-catching red,
                                creating a gloomy and mysterious atmosphere.
                            </p>
                        </div>
                        <p className="text-sm italic border-l-4 border-[#C4161C] pl-4">
                            The eye patterns scattered among them form a sense of "peeping" and give people
                            the association of surging desires deep in their hearts.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 w-full"
                >
                    {/* 模拟 Project Harbour 的大阴影容器展示核心设计图 */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-slate-50 p-6 border border-slate-100">
                        <img
                            src="/XiaomiCaseDesign/XiaomiCaseDesign1.jpg"
                            alt="Xiaomi Phone Case Main Design"
                            className="w-full h-auto object-contain rounded-xl"
                        />
                    </div>
                </motion.div>
            </section>

            {/* --- Design Narrative: 艺术细节与文学结合 --- */}
            <section className="bg-slate-50 py-24 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <motion.div whileHover={{ y: -5 }} className="rounded-2xl shadow-xl overflow-hidden bg-white">
                            <img src="/XiaomiCaseDesign/XiaomiCaseDesign2.png" alt="Design Details" className="w-full h-auto" />
                        </motion.div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-3xl font-bold">Poetic Visuals</h2>
                        <p className="text-slate-600 leading-loose">
                            With the poetic words written on the phone case, such as "eyes of prime longing" and
                            "endless fire of prime longing", the designer cleverly combines the abstract theme
                            of human nature with visual elements.
                        </p>
                        <p className="text-slate-600 leading-loose">
                            Our unique hand-painted style, rough and unrestrained lines and strong color contrast
                            are also the visual vocabulary that gives this work its personality.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Achievement: 获奖与实物展示 (模仿 Visual Symphony) --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-widest text-slate-400">
                    Recognition & Physicality
                </h2>

                {/* 关键调整：添加了 max-w-4xl 和 mx-auto 来限制整体宽度并居中 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
                    <motion.div
                        whileHover={{y: -10}}
                        className="rounded-2xl shadow-lg border border-slate-50 p-2 bg-white flex items-center justify-center"
                    >
                        <img
                            src="/XiaomiCaseDesign/XiaomiCaseDesign4.jpg"
                            className="w-full h-auto rounded-xl object-contain max-h-[400px]"
                            alt="Bronze Certificate"
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{y: -10}}
                        className="rounded-2xl shadow-lg border border-slate-50 p-2 bg-white flex items-center justify-center"
                    >
                        <img
                            src="/XiaomiCaseDesign/XiaomiCaseDesign5.jpg"
                            className="w-full h-auto rounded-xl object-contain max-h-[400px]"
                            alt="Physical Product"
                        />
                    </motion.div>
                </div>
            </section>

            {/* --- Role & Contribution: 专业维度列举 --- */}
            <section className="bg-slate-900 py-24 px-6 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 border-b border-white/10 pb-4">My Role & Contributions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                        {[
                            {
                                title: "Concept Development",
                                desc: "Crafted a visual story centered around the themes of mystery, desire, and human nature."
                            },
                            {
                                title: "Hand-Drawn Elements",
                                desc: "Incorporated rough, hand-painted lines and recurring eye motifs to symbolize 'peering'."
                            },
                            {
                                title: "Typography & Poetic Text",
                                desc: "Added short poetic phrases to offer a philosophical angle to the product."
                            },
                            {
                                title: "Art Direction & Layout",
                                desc: "Took charge of the overall composition—balancing text and visuals in a striking way."
                            }
                        ].map((item, index) => (
                            <div key={index} className="space-y-2">
                                <h4 className="font-bold text-[#C4161C]">● {item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Reflection: 真实的心路历程 --- */}
            <section className="py-32 bg-white text-slate-900 relative overflow-hidden text-center px-6 border-t border-slate-100">
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="w-16 h-1 bg-[#C4161C] mx-auto mb-12"/>
                    <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-slate-400">Thoughts after completing this work</h3>
                    <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed italic text-slate-600">
                        <p>"I was really very, very excited and happy and really shocked when I won the award!!"</p>
                        <p>
                            At the beginning, I didn't have much confidence in this design because this style is
                            very exaggerated and not accepted in Hong Kong. Therefore, I kept fighting against
                            reality while doing this design, and finally chose to believe in my perseverance.
                        </p>
                    </div>
                    <p className="mt-12 text-[#C4161C] uppercase tracking-[0.4em] text-xs font-black">Xiaomi Competition / 2024-08-08</p>
                </div>
                {/* 背景装饰文字 */}
                <div className="absolute -bottom-10 -left-10 text-[15rem] font-black text-slate-100/50 pointer-events-none select-none">
                    Case Design
                </div>
            </section>
        </div>
    );
};

export default XiaomiPhoneCase;