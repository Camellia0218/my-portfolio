// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

const ProjectHarbour = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            {/* Hero Section - 对应图一 */}
            <section
                className="pt-20 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start"> {/* 修改1：items-center 改为 items-start，防止纵向挤压 */}
                <motion.div initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} className="flex-1 pt-4">
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">Project Harbour</h1>
                    <p className="text-xl text-[#002FA7] font-semibold mb-6">Group Project / Brand
                        Identity</p> {/* 建议使用你的克莱因蓝 */}
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                        <p>Design a smart water ferry aims to enhance the overall visitors experience at Kai Tai Sports
                            Park.</p>
                        <p className="text-sm italic border-l-4 border-[#002FA7] pl-4">
                            To maintain the clarity and impact of our brand signature, it’s essential to preserve a
                            consistent area of clear space around the logo. This buffer zone ensures that no other text,
                            images, or design elements interfere with its visibility. The minimum clear space is
                            typically
                            defined by a key measurement—such as the height of a specific letter or icon—so the logo
                            remains prominent and easy to recognize. By adhering to this guideline, we uphold a
                            professional, cohesive brand presentation across all media and applications
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    className="flex-1 w-full"
                >
                    {/* 修改2：为图片外层包装一个容器，并设置背景色以防白底图在深色模式下突兀 */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                        <img
                            src="/Project Harbour/Project Harbour6.png"
                            alt="Logo Construction Grid"
                            className="w-full h-auto object-contain" // 修改3：使用 h-auto 和 object-contain 确保不被裁剪
                        />
                    </div>
                </motion.div>
            </section>

            {/* Brand Concept - 对应图二 & 图三 */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Brand V tour :</h2>
                    <p className="text-xl leading-relaxed mb-12">
                        Our name is an abbreviation of "Verry Tour". The "V" represents our dedication to VTC students
                        and the extraordinary experience we offer.
                    </p>
                    <div className="flex justify-center w-full mb-12">
                        <img
                            src="/Project Harbour/Project Harbour1.png"
                            className="rounded-xl shadow-lg w-full max-w-4xl object-contain"
                            alt="Logo Variations"
                        />
                    </div>
                </div>
            </section>

            {/* Color Palette - 对应图四 & 图五 */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Visual Symphony</h2>

                <div className="flex justify-center w-full mb-12">
                    <img
                        src="/Project Harbour/Project Harbour2.png"
                        className="rounded-xl shadow-lg w-full max-w-4xl object-contain"
                        alt="Logo Variations"
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {/* 这里可以对应图五的色块 */}
                    <div
                        className="h-40 bg-[#096688] rounded-xl flex items-end p-4 text-white font-mono text-sm">#096688
                    </div>
                    <div
                        className="h-40 bg-[#89DECE] rounded-xl flex items-end p-4 text-slate-800 font-mono text-sm">#89DECE
                    </div>
                    <div
                        className="h-40 bg-[#C4E9F4] rounded-xl flex items-end p-4 text-slate-800 font-mono text-sm">#C4E9F4
                    </div>
                    <div
                        className="h-40 bg-[#FAE9CE] rounded-xl flex items-end p-4 text-slate-800 font-mono text-sm">#FAE9CE
                    </div>
                </div>
                <p className="text-center text-slate-500 max-w-2xl mx-auto">
                    Our color palette is thoughtfully curated to embody the essence of smart maritime technology and the
                    vibrant pulse of neon-lit energy.
                </p>
            </section>

            {/* Social Media & Promotion - 对应图六 & 图七 */}
            <section className="bg-[#002FA7] py-20 px-6 text-white text-center">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    {/* 图片部分：增加宽度，并保持超大圆角以贴合手机 UI 视觉 */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/Project Harbour/Project Harbour3.png"
                            className="w-full max-w-[500px] h-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[3rem] transition-transform duration-500 hover:scale-105"
                            alt="Instagram Promotion"
                        />
                    </div>

                    {/* 文字部分：增加间距，提升阅读体验 */}
                    <div className="text-left md:w-1/2">
                        <h2 className="text-4xl font-bold mb-8 tracking-tight">Promotion in Instagram</h2>
                        <p className="text-blue-50/90 leading-loose mb-8 text-lg">
                            我們把整個 V TOUR 的品牌故事，拆解成 12 格貼⽂，像⼀場⽤視覺講述的旅程。
                            每⼀格都是⼀段⾵景、⼀段⽂化、⼀段未被發現的⾹港。
                            從經典藍屋的社區⼈情，到維港天際線的現代節奏；
                            從活化建築的痕跡，到搭上智慧航線探索的未來感。
                            <br/><br/>
                            中間的「 VIBRANT · DISCOVER · TOUR · EXPLORE 」，不只是⼝號，
                            ⽽是⼀次關於連結、記憶、與重新看⾒這座城市的邀請。
                            12 格， 12 個切⾯，⼀個品牌的呼吸。 你會選擇從哪⼀格開始踏出第⼀步？
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            {['#VTour', '#SmartFerry', '#HongKongTourism'].map(tag => (
                                <span key={tag}
                                      className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium">
                        {tag}
                    </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Overall Showcase - 对应图八 (最重要的一张) */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12">Overall Deliverables</h2>
                <img src="/Project Harbour/Project Harbour5.png" alt="All Deliverables"
                     className="w-full rounded-2xl shadow-xl"/>
                <div
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-medium text-slate-600">
                    <p>Brochure Design</p>
                    <p>Staff Uniform</p>
                    <p>Souvenirs & Gifts</p>
                    <p>Interactive Elements</p>
                </div>
            </section>

            <section className="py-32 bg-[#002FA7] text-white relative overflow-hidden text-center px-6">
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="w-16 h-1 bg-white mx-auto mb-12 opacity-50"/>
                    <h3 className="text-3xl md:text-4xl font-light leading-relaxed mb-8 italic">
                        "Every step, even those that don't lead to immediate success, is a valuable part of the journey
                        in honing my skills."
                    </h3>
                    <p className="text-blue-200/50 uppercase tracking-[0.4em] text-xs font-bold">Reflections / 2026</p>
                </div>
                <div
                    className="absolute -bottom-10 -right-10 text-[20rem] font-black text-white/5 pointer-events-none">VTOUR
                </div>
            </section>
        </div>
    );
};

export default ProjectHarbour;