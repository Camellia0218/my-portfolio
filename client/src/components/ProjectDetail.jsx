// src/components/ProjectDetail.jsx
import ProjectHarbour from "./ProjectHarbour";
import ICBCMascot from "./ICBCMascot";
import XiaomiPhoneCase from "./XiaomiCaseDesign";
import PosterDesign from "./PosterDesign";
import SongCampaignDesign from "./SongCampaign";
import P4ESProject from "./P4ES Project";
import TaskinClass from "./TaskinClass";
import TuborgProject from "./TuborgProject";
import Brief from "./Brief";
import ModuleFile from "./ModuleFile";

// ✅ 只需在这里维护 id → 组件的映射
const PROJECT_COMPONENTS = {
    "project-harbour": ProjectHarbour,
    "project-xiaomi": XiaomiPhoneCase,
    "project-pipi": ICBCMascot,
    "project-poster": PosterDesign,
    "project-song-campaign": SongCampaignDesign,
    "project-p4es": P4ESProject,
    "project-task-in-class": TaskinClass,
    "project-dad": TuborgProject,
    "project-6-brief": Brief,
    "project-module-file": ModuleFile,
};

const ProjectDetail = ({ projectId }) => {
    const Component = PROJECT_COMPONENTS[projectId];
    if (!Component) return (
        <div className="flex items-center justify-center min-h-screen text-muted-foreground">
            Project not found.
        </div>
    );
    return <Component />;
};

export default ProjectDetail;