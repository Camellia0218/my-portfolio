import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Mail,
  BookOpen,
  Sun,
  Moon,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
      <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          title="Toggle theme"
      >
        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const lastScrollYRef = useRef(0);
  const audioRef = useRef(null);

  const musicUrl = "/music.mp3";

  // 音频逻辑保持不变
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(musicUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      audioRef.current.preload = "auto";
      const handleCanPlay = () => setIsAudioReady(true);
      audioRef.current.addEventListener("canplaythrough", handleCanPlay);
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
          audioRef.current = null;
        }
      };
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current || !isAudioReady) return;
    isMusicPlaying ? audioRef.current.pause() : audioRef.current.play().catch(console.error);
    setIsMusicPlaying(!isMusicPlaying);
  };

  // 滚动逻辑保持不变
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollYRef.current || currentScrollY <= 100);
      lastScrollYRef.current = currentScrollY;

      const sections = navItems.map((item) => item.href);
      const scrollPosition = currentScrollY + 100;
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <motion.div
          className="fixed top-4 right-4 z-50 flex items-center gap-3" // 增加间距
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.3}}
      >
        {/* 遍历导航项，每个都生成一个独立的圆形按钮 */}
        {[
          {name: "Home", href: "#hero", icon: <Home size={20}/>},
          {name: "About", href: "#about", icon: <User size={20}/>},
          {name: "Projects", href: "#projects", icon: <Briefcase size={20}/>},
          {name: "Contact", href: "#contact", icon: <Mail size={20}/>}
        ].map((item) => (
            <motion.a
                key={item.name}
                href={item.href}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg border",
                    "bg-white/90 dark:bg-black/80 backdrop-blur-md", // 背景样式
                    activeSection === item.href
                        ? "border-[#002FA7] text-[#002FA7] bg-white" // 激活状态：克莱因蓝边框和图标
                        : "border-gray-200 dark:border-gray-700 text-gray-500 hover:text-[#002FA7] hover:border-[#002FA7]/50"
                )}
                title={item.name}
            >
              {item.icon}
            </motion.a>
        ))}

        {/* 音乐切换按钮 - 保持原样，与上述按钮完美对齐 */}
        <motion.button
            onClick={toggleMusic}
            disabled={!isAudioReady}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg border",
                "bg-white/90 dark:bg-black/80 backdrop-blur-md", // 音乐按钮基础样式
                "text-[#002FA7] border-gray-200 dark:border-gray-700", // 克莱因蓝图标
                !isAudioReady && "opacity-50 cursor-not-allowed"
            )}
        >
          {isMusicPlaying ? <Volume2 size={20}/> : <VolumeX size={20}/>}
        </motion.button>
      </motion.div>
  );
};