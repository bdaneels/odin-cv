import "../App.css";
import EducationCard from "./left/education";
import GeneralCard from "./left/general";
import WorkCard from "./left/work";

function LeftPanel() {
  return (
    <div className="h-full w-1/2 bg-slate-200 rounded-sm flex flex-col justify-start items-center">
      <GeneralCard />
      <EducationCard />
      <WorkCard />
    </div>
  );
}

export default LeftPanel;
