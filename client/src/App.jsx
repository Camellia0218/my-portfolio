import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "next-themes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import ProjectHarbour from "./components/ProjectHarbour";
import ICBCMascot  from "./components/ICBCMascot";
import { Toaster } from "@/components/ui/toaster";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Analytics } from "@vercel/analytics/react";
import XiaomiPhoneCase from "@/components/XiaomiCaseDesign.jsx";
import PosterDesign from "@/components/PosterDesign.jsx";
import SongCampaignDesign from "@/components/SongCampaign.jsx";
import P4ESProject from "@/components/P4ES Project.jsx";
import TaskinClass from "@/components/TaskinClass.jsx";
import TuborgProject from "@/components/TuborgProject.jsx";
import Brief from "@/components/Brief.jsx";
import ModuleFile from "@/components/ModuleFile.jsx";

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
                  <Route path="/project-xiaomi" element={<XiaomiPhoneCase/>} />
                  <Route path="/project-harbour" element={<ProjectHarbour />} />
                  <Route path="/project-pipi" element={<ICBCMascot />} />
                  <Route path="/project-song-campaign" element={<SongCampaignDesign/>} />
                  <Route path="/project-poster" element={<PosterDesign />} />
                  <Route path="/project-p4es" element={<P4ESProject />} />
                  <Route path="/project/task-in-class" element={<TaskinClass />} />
                  <Route path="/project-dad" element={<TuborgProject />} />
                  <Route path="/project/6-brief" element={<Brief />} />
                  <Route path="/project-ModuleFile" element={<ModuleFile />} />
                  <Route path="/" element={<ICBCMascot />} />
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