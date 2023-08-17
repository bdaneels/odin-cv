import "./App.css";
import Header from "./components/header";
import LeftPanel from "./components/leftpanel";

function App() {
  return (
    <div className="flex flex-col bg-slate-500 h-screen w-screen justify-start">
      <Header />
      <LeftPanel/>
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
