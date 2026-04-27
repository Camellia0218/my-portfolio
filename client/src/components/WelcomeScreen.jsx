import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WelcomeScreen = ({ onWelcomeComplete }) => {
  const [phase, setPhase] = useState(0); // 0: Logo 弹跳, 1: 文案优雅展开
  const [exitAnimation, setExitAnimation] = useState(false);

  // 核心色调：高级白 + 纯粹克莱因蓝
  const colors = {
    klein: "#002FA7",
    text: "#1A1A1A",
    muted: "#666666",
    bg: "#FFFFFF"
  };

  useEffect(() => {
    // 阶段控制
    const timer1 = setTimeout(() => setPhase(1), 800);
    const complete = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(onWelcomeComplete, 1000);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(complete);
    };
  }, [onWelcomeComplete]);

  return (
      <div className="fixed inset-0 z-50 overflow-hidden font-sans">
        <motion.div
            className="h-full w-full flex items-center justify-center p-4"
            style={{ backgroundColor: colors.bg }}
            initial={{ opacity: 1 }}
            animate={exitAnimation ? { y: "-100%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } : {}}
        >
          <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">

            {/* --- LOGO 区域：聚焦弹跳入场感 --- */}
            <div className="relative mb-10">
              <motion.div
                  initial={{ scale: 0, y: 60, rotate: -5 }}
                  animate={{ scale: 1, y: 0, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1
                  }}
                  className="relative w-32 h-32 md:w-44 md:h-44"
              >
                {/* Logo 圆环容器 */}
                <div className="w-full h-full rounded-full overflow-hidden border-[5px] border-[#002FA7] shadow-[0_20px_50px_rgba(0,47,167,0.15)] bg-white p-1">
                  <img
                      src="/kylie.png"
                      alt="Kylie"
                      className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* 外围装饰虚线圈：增加设计的层次感 */}
                <motion.div
                    className="absolute -inset-3 border border-dashed border-[#002FA7]/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>

            {/* --- 文案区域：HKDI 广告系学生的人设表达 --- */}
            <div className="space-y-6">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1A1A1A]">
                  I'M <span className="text-[#002FA7]">KYLIE.</span>
                </h1>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <div className="h-[1px] w-8 bg-[#002FA7]/30" />
                  <p className="text-[#002FA7] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                    HKDI Advertising Student
                  </p>
                  <div className="h-[1px] w-8 bg-[#002FA7]/30" />
                </div>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0 }}
                  animate={phase >= 1 ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="max-w-md mx-auto"
              >
                <p className="text-sm md:text-base text-[#666666] leading-relaxed font-light">
                  A creative storyteller at heart, blending
                  <span className="text-[#1A1A1A] font-medium italic"> visual communication </span>
                  with innovative ideas to make brands truly shine.
                </p>
              </motion.div>
            </div>

            {/* --- 底部装饰：极简主义进度暗示 --- */}
            <div className="absolute bottom-16 w-full max-w-[200px] px-4">
              <div className="h-[1px] w-full bg-[#002FA7]/10 relative overflow-hidden">
                <motion.div
                    initial={{left: "-100%"}}
                    animate={{left: "100%"}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                    className="absolute h-full w-1/2 bg-[#002FA7]"
                />
              </div>
              {/* 可选：在条下方增加极小的 loading 字样提升精致感 */}
              <motion.p
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 1}}
                  className="text-[8px] tracking-[0.3em] text-[#002FA7]/40 mt-2 uppercase text-center"
              >
                Loading Inspiration
              </motion.p>
            </div>

          </div>
        </motion.div>
      </div>
  );
};

export default WelcomeScreen;