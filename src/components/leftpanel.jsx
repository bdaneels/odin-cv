import "../App.css";
import EducationCard from "./education";
import GeneralCard from "./general";

function LeftPanel() {
  return (
    <div className="h-full w-1/2 bg-slate-200 rounded-sm flex flex-col justify-start items-center">
      <GeneralCard />
      <EducationCard />
    </div>
  );
}

export default LeftPanel;
