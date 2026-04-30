import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "next-themes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import ProjectHarbour from "./components/ProjectHarbour";
import { Toaster } from "@/components/ui/toaster";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [welcomeComplete, setWelcomeComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <Toaster />
        <Router>
          {!welcomeComplete ? (
              <WelcomeScreen onWelcomeComplete={() => setWelcomeComplete(true)} />
          ) : (
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/project-harbour" element={<ProjectHarbour />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Analytics />
              </>
          )}
        </Router>
      </ThemeProvider>
  );
}

export default App;