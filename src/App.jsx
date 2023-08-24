import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import LeftPanel from "./components/leftpanel";
import RightPanel from "./components/rightpanel";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profTitle, setProfTitle] = useState("");
  const [profDescription, setProfDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [homeAdress, setHomeAdress] = useState("");
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [edPlace, setEdPlace] = useState("");
  const [edTime, setEdTime] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [jobPlace, setJobPlace] = useState("");
  const [jobTime, setJobTime] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  return (
    <div className="flex flex-col bg-slate-500 h-screen w-screen justify-start">
      <Header />
      <div className="flex w-full">
        <LeftPanel
          firstName={firstName}
          handleFirstName={setFirstName}
          lastName={lastName}
          handleLastName={setLastName}
          profTitle={profTitle}
          handleProfTitle={setProfTitle}
          profDescription={profDescription}
          handleProfDescription={setProfDescription}
          phoneNumber={phoneNumber}
          hanldePhoneNumber={setPhoneNumber}
          email={email}
          handleEmail={setEmail}
          homeAdress={homeAdress}
          hanldeHomeAdress={setHomeAdress}
          degree={degree}
          handleDegree={setDegree}
          institution={institution}
          handleInstitution={setInstitution}
          edPlace={edPlace}
          handleEdPlace={setEdPlace}
          edTime={edTime}
          handleEdTime={setEdTime}
          jobTitle={jobTitle}
          handleJobTitle={setJobTitle}
          employerName={employerName}
          handleEmployerName={setEmployerName}
          jobPlace={jobPlace}
          handleJobPlace={setJobPlace}
          jobTime={jobTime}
          handleJobTime={setJobTime}
          jobDescription={jobDescription}
          handleJobDescription={setJobDescription}
        />
        <RightPanel
          firstName={firstName}
          lastName={lastName}
          profTitle={profTitle}
          profDescription={profDescription}
          phoneNumber={phoneNumber}
          email={email}
          homeAdress={homeAdress}
          degree={degree}
          edPlace={edPlace}
          institution={institution}
          edTime={edTime}
          jobTitle={jobTitle}
          employerName={employerName}
          jobPlace={jobPlace}
          jobTime={jobTime}
          jobDescription={jobDescription}
        />
      </div>
    </div>
  );
}

export default App;
