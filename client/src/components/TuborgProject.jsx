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
                    <p className="text-xl text-[#C8102E] font-semibold mb-6">Package Design Solo/ TUBORG</p>
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

            <div className="bg-white min-h-screen font-sans text-slate-900">

                {/* --- Hero Section --- */}
                <section className="pt-20 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 pt-4"
                    >
                        <h1 className="text-6xl font-bold mb-4 tracking-tight">D&AD Project</h1>
                        <p className="text-xl text-[#002FA7] font-semibold mb-6">Package Design Team/ TUBORG</p>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                            <p>
                                Brief set by Tuborg: Design a brand experience that allows Tuborg to
                                actively release young people from negative pressure — developing a space
                                where Tuborg's audience can truly feel liberated, embrace spontaneity,
                                and fuel their fun.
                            </p>
                            <p className="text-sm italic border-l-4 border-[#002FA7] pl-4">
                                Our response: <em>"Blend into the crowd and add vitality."</em> Using Tuborg's
                                signature blue and green as anchors, we combined music, youth culture,
                                and collectible design to give young people a moment of genuine release.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, scale: 0.95}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                        className="flex-1 w-full max-w-sm lg:max-w-[380px] mx-auto lg:ml-auto"
                    >
                        <div className="relative group overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(0,47,167,0.25)] bg-black max-h-[500px] aspect-[2/3]">
                            <div className="absolute inset-0 bg-[#002FA7]/5 group-hover:bg-[#002FA7]/15 transition-colors duration-700 z-10 pointer-events-none"/>
                            {/* 悬停放大 1.1x */}
                            <motion.img
                                src="/TubrogProject/TubrogProjectTeam1.jpg"
                                alt="Tuborg Hero"
                                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-20"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-700 z-10"/>
                        </div>
                    </motion.div>
                </section>

                {/* --- About Tuborg --- */}
                <section className="bg-[#001A80] py-0 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
                            <div className="px-12 py-16 flex flex-col justify-center">
                                <h2 className="text-5xl font-black text-white mb-1 uppercase tracking-tight">About</h2>
                                <h2 className="text-5xl font-black text-[#00FF41] mb-8 uppercase tracking-tight">Tuborg</h2>
                                <div className="space-y-4 text-blue-100 text-sm leading-relaxed">
                                    <p>
                                        The name Tuborg actually comes from a place name, not a beer style. Tuborg was
                                        founded in 1873 at the port of Hellerup north of Copenhagen, Denmark. It
                                        became a brand under Carlsberg in 1970. Beyond Denmark, Tuborg is produced
                                        and sold in more than 70 countries worldwide, including Turkey.
                                    </p>
                                    <p>
                                        In Danish, "Borg" means castle, which led to Thues Borg, shortened to "Tuborg."
                                        Tuborg's secret to success lies in its distinctive sense of fun, music, and open
                                        atmosphere — encouraging people to enjoy beer their way.
                                    </p>
                                    <p>
                                        Although most beer bottles use crown caps, Tuborg was actually the first
                                        company to use a pull-tab cap — meaning you can open your Tuborg with just one
                                        finger!
                                    </p>
                                </div>
                                <div className="space-y-5 text-blue-100 text-sm mt-6">
                                    <div>
                                        <p className="font-bold text-white mb-2">TUBORG Features:</p>
                                        <ol className="list-decimal list-inside space-y-1 pl-1">
                                            <li>Famous for its distinctive bottle cap design and a popular imported beer in many markets.</li>
                                            <li>Crisp, refreshing taste with lively carbonation.</li>
                                            <li>Iconic blue and green colour.</li>
                                            <li>The first beer brand to use the pull-tab cap.</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-2">Target audience:</p>
                                        <ol className="list-decimal list-inside space-y-1 pl-1">
                                            <li>Energetic, lively personalities.</li>
                                            <li>People who enjoy drinking alcohol.</li>
                                            <li>Those who like socializing and attending events.</li>
                                            <li>Everyone.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            {/* 图片：悬停缩放效果 */}
                            <div className="relative overflow-hidden group">
                                <img
                                    src="/TubrogProject/TubrogProjectTeam2.jpg"
                                    alt="Tuborg Bottle"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Case Study: Coca-Cola Share a Coke --- */}
                <section className="bg-[#002FA7] py-0 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[420px]">
                            <div className="px-12 py-14 flex flex-col justify-center">
                                <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">Case Study</p>
                                <h2 className="text-4xl font-black text-white uppercase leading-tight mb-1">Coca-Cola —</h2>
                                <h2 className="text-4xl font-black text-[#00FF41] uppercase leading-tight mb-8">"Share a Coke"</h2>
                                <div className="space-y-5 text-blue-100 text-sm leading-relaxed">
                                    <div>
                                        <p className="font-bold text-white mb-1">Intro:</p>
                                        <p>The world's most iconic soft drink brand. In 2011, they launched "Share a
                                            Coke" in Australia — swapping the classic Coca-Cola logo on bottles with
                                            popular names. It became a global phenomenon.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-1">Concept:</p>
                                        <p>They sell "personal connection." A Coke bottle stopped being just a drink
                                            — it became something yours. You weren't buying soda; you were buying
                                            a moment for a friend, or a small thrill of seeing your own name.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-1">Tuborg needs to do the same:</p>
                                        <p>Turn the can into a release tool — print social labels on it, pop the cap,
                                            tear it off. That moment is "tearing away pressure." It's not about selling
                                            beer. It's about selling that feeling.</p>
                                    </div>
                                </div>
                            </div>
                            {/* 图片：带圆角的悬停缩放 */}
                            <div className="relative overflow-hidden flex items-center justify-center p-8 bg-[#001A80] group">
                                <img
                                    src="/TubrogProject/TubrogProjectTeam3.jpg"
                                    alt="Coca-Cola Share a Coke"
                                    className="w-full h-auto object-contain rounded-xl shadow-xl transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Design Execution: Bottle Caps --- */}
                <section className="bg-[#001A80] py-0 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
                            <div className="px-12 py-14 flex flex-col justify-center">
                                <h2 className="text-5xl font-black text-white uppercase leading-tight mb-1">Design</h2>
                                <h2 className="text-5xl font-black text-[#00FF41] uppercase leading-tight mb-8">Execution</h2>
                                <div className="space-y-4 text-blue-100 text-sm leading-relaxed">
                                    <p>
                                        To evoke a sense of longing for free time among young people,
                                        we decided to develop some playful ideas.
                                    </p>
                                    <p>
                                        We encouraged the design of new bottle caps, adding graphics
                                        to the bottom to give them collectible value. We also divided the
                                        packaging design into three scenes: <strong className="text-white">outdoors, clubbing, and
                                        gathering with friends.</strong>
                                    </p>
                                    <p>
                                        The design aims to remind young people that they deserve space
                                        and time to liberate themselves, forgetting the burdens imposed
                                        on them by somber societal expectations. The graphics
                                        incorporate more musical elements, attempting to express a
                                        <strong className="text-white"> "slightly tipsy"</strong> feeling through pixels and swirls, avoiding overly
                                        enthusiastic emotions.
                                    </p>
                                </div>
                            </div>
                            {/* 图片：悬停缩放 */}
                            <div className="relative overflow-hidden flex items-center justify-center p-8 group">
                                <img
                                    src="/TubrogProject/TubrogProject11.png"
                                    alt="Collectible Bottle Caps"
                                    className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Label Design + Bottle Mockups --- */}
                <section className="py-20 px-6 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Label Design & Bottle Mockups</h2>
                    <motion.div whileHover={{ y: -5 }} className="rounded-2xl shadow-xl overflow-hidden group">
                        <img
                            src="/TubrogProject/TubrogProjectTeam4.jpg"
                            alt="Tuborg Label Design and Bottle Mockups"
                            className="w-full h-auto transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                    </motion.div>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto mt-8">
                        Three label variations — Outdoor, Clubbing, and Gathering — each carrying a
                        distinct tagline: <em>"Sip outside the lines,"</em> <em>"What's your BPM tonight?"</em>
                        and <em>"Carpe diem."</em>
                    </p>
                </section>

                {/* --- Social Media Strategies --- */}
                <section className="bg-[#002FA7] py-0 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
                            <div className="px-12 py-14 flex flex-col justify-center">
                                <h2 className="text-5xl font-black text-white uppercase leading-tight mb-1">Social Media</h2>
                                <h2 className="text-5xl font-black text-[#00FF41] uppercase leading-tight mb-8">Strategies</h2>
                                <div className="space-y-4 text-blue-100 text-sm leading-relaxed">
                                    <p>
                                        During our research, we learned that Tuborg's strategic direction
                                        in online advertising and social media leans towards portraying
                                        nightlife culture.
                                    </p>
                                    <p>
                                        However, given the thriving electronic music culture worldwide,
                                        Tuborg could consider collaborating with DJs and producers
                                        whose music styles lean more towards the underground.
                                    </p>
                                    <p>
                                        Underground electronic music has become highly saturated
                                        among contemporary youth, particularly <strong className="text-white">Techno in the US and
                                        Berlin and Jungle in the UK,</strong> which have evolved into part of
                                        online culture.
                                    </p>
                                    <p>
                                        We believe that collaborating with these musicians will
                                        significantly enhance Tuborg's brand image among young people.
                                    </p>
                                    <p className="text-blue-300 text-xs italic">
                                        Exclusive chatroom wallpaper is also considerable for online promotions.
                                    </p>
                                </div>
                            </div>
                            {/* 图片：悬停缩放 */}
                            <div className="relative overflow-hidden flex items-center justify-center p-8 bg-[#001A80] group">
                                <img
                                    src="/TubrogProject/TubrogProjectTeam5.jpg"
                                    alt="Social Media Strategies"
                                    className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                />
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
                                    title: "Brand Research & Case Study",
                                    desc: "Researched Tuborg's brand history, product features, and target audience. Analysed Coca-Cola's 'Share a Coke' campaign as a strategic reference for emotional personalisation."
                                },
                                {
                                    title: "Brand Strategy",
                                    desc: "Developed the 'Blend Into the Crowd and Add Vitality' positioning, proposing blue-green visual language fused with underground music culture to appeal to young audiences."
                                },
                                {
                                    title: "Design Execution",
                                    desc: "Designed three collectible bottle cap series (Outdoor, Clubbing, Gathering) and three bottle label variations — each carrying a distinct emotional tagline."
                                },
                                {
                                    title: "Social Media Strategy",
                                    desc: "Proposed DJ/producer collaboration strategy and designed exclusive chatroom wallpapers for online promotion, targeting underground electronic music communities."
                                }
                            ].map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <h4 className="font-bold text-[#00FF41]">● {item.title}</h4>
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
        </div>
    );
};

export default DADProject;