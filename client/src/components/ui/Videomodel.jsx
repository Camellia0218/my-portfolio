import { useEffect } from "react";

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
    // 按 ESC 关闭弹窗
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // 禁止背景滚动
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            onClick={onClose} // 点击遮罩关闭
        >
            <div
                className="relative bg-black rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl mx-4"
                onClick={(e) => e.stopPropagation()} // 阻止冒泡
            >
                {/* 顶部标题栏 */}
                <div className="flex items-center justify-between px-5 py-3 bg-gray-900">
                    <span className="text-white font-semibold text-base truncate">{title}</span>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors text-2xl leading-none ml-4"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </div>

                {/* 视频区域 */}
                <div className="relative w-full" style={{ paddingTop: "56.25%" /* 16:9 */ }}>
                    <video
                        className="absolute inset-0 w-full h-full object-contain bg-black"
                        src={videoUrl}
                        controls
                        autoPlay
                        playsInline
                    >
                        您的浏览器不支持视频播放。
                    </video>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;