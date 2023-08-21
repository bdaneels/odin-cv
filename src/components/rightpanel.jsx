import "../App.css";
import CVHeader from "./right/cv-header";
import SideBar from "./right/cv-sidebar";

export default function RightPanel() {
  return (
    <div className="w-1/2 h-full bg-white">
      <div className=" m-10 h-[800px] w-[600px] sticky shadow-lg">
        <CVHeader />
        <SideBar />
      </div>
    </div>
  );
}
