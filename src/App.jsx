import "./App.css";
import Header from "./components/header";
import LeftPanel from "./components/leftpanel";
import RightPanel from "./components/rightpanel";

function App() {
  return (
    <div className="flex flex-col bg-slate-500 h-screen w-screen justify-start">
      <Header />
      <div className="flex w-full h-full">
        <LeftPanel />
        <RightPanel />
      </div>
      {
        //header
        //div left to right
        //form div
        //cv div
      }
    </div>
  );
}

export default App;
