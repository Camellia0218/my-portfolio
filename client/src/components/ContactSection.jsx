import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Email is required",
        variant: "destructive"
      });
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({
        title: "Invalid email format",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      toast({
        title: "Message must be at least 10 characters",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xeevkppk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent! 🎉",
          description: "I'll get back to you within 24 hours.",
          variant: "success",
          className: "bg-green-600 text-white dark:bg-green-500 border border-green-700 shadow-lg"
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or email me directly at codewithkinu@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          {/* 顶部胶囊标签：背景改为克莱因蓝 10% 透明度，文字改为克莱因蓝 */}
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-[#002FA7]/10 text-[#002FA7] mb-3 sm:mb-4">Let's Connect</span>

          {/* 标题：移除了紫色渐变，改为纯色克莱因蓝，保留渐变效果以维持高级感（从深蓝到略浅的蓝） */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-[#002FA7]">
            Get In Touch
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Turning bold ideas into visual narratives. Whether it's a brand identity or a creative campaign, let’s make it unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <div
              className="space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#002FA7]/5 to-background border border-border"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              {/* 圆点改为克莱因蓝并增加呼吸发光 */}
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#002FA7] shadow-[0_0_10px_rgba(0,47,167,0.4)] animate-pulse"></span>
              Contact Details
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Mail, label: "Email", content: "gaominxig@gmail.com", href: "mailto:gaominxig@gmail.com" },
                { icon: Phone, label: "Phone", content: "+851 96465445", href: "tel:+85196465445" },
                { icon: MapPin, label: "Location", content: "China Hongkong", isSpan: true }
              ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-[#002FA7]/5 rounded-lg sm:rounded-xl transition-all duration-300 group">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#002FA7]/10 text-[#002FA7] group-hover:bg-[#002FA7] group-hover:text-white transition-all duration-300">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p >
                      {item.isSpan ? (
                          <span className="text-sm sm:text-base font-medium transition-colors">{item.content}</span>
                      ) : (
                          <a href= "text-sm sm:text-base font-medium hover:text-[#002FA7] transition-colors">
                            {item.content}
                          </a >
                      )}
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#002FA7]"></span>
              Send Me a Message
            </h3>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-xs sm:text-sm font-medium text-muted-foreground">Your Name</label>
                <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[#002FA7]/50 focus:border-[#002FA7] transition-all text-sm sm:text-base"
                    placeholder="Ethan Zhang"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs sm:text-sm font-medium text-muted-foreground">Your Email</label>
                <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[#002FA7]/50 focus:border-[#002FA7] transition-all text-sm sm:text-base"
                    placeholder="ethan@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs sm:text-sm font-medium text-muted-foreground">Your Message</label>
                <textarea
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[#002FA7]/50 focus:border-[#002FA7] transition-all resize-none text-sm sm:text-base"
                    placeholder="Hey, I'd love to collaborate on..."
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    required
                />
              </div>

              <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                      "w-full flex items-center justify-center gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium text-white transition-all duration-300 shadow-lg text-sm sm:text-base",
                      // 按钮改为克莱因蓝纯色到稍深色的渐变
                      "bg-gradient-to-r from-[#002FA7] to-[#001A66] hover:opacity-90 shadow-[#002FA7]/20",
                      isSubmitting && "opacity-80 cursor-not-allowed"
                  )}
              >
                {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                      Sending...
                    </>
                ) : (
                    <>
                      Send Message
                      <Send size={16} className="sm:size-[18px]" />
                    </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};