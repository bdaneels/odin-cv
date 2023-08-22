import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import LeftPanel from "./components/leftpanel";
import RightPanel from "./components/rightpanel";

function App() {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [profTitle, setProfTitle] = useState('')
const [profDescription, setProfDescription] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [email, setEmail] = useState('')
const [homeAdress, setHomeAdress] = useState('')








  return (
    <div className="flex flex-col bg-slate-500 h-screen w-screen justify-start">
      <Header  />
      <div className="flex w-full h-full">
        <LeftPanel 
        firstName = {firstName} 
        handleFirstName = {setFirstName} 
        lastName={lastName} 
        handleLastName={setLastName}
        profTitle= {profTitle}
        handleProfTitle={setProfTitle}
        profDescription= {profDescription}
        handleProfDescription={setProfDescription}
        phoneNumber= {phoneNumber}
        hanldePhoneNumber = {setPhoneNumber}
        email={email}
        handleEmail={setEmail}
        homeAdress={homeAdress}
        hanldeHomeAdress={setHomeAdress}
        
        />
        <RightPanel 
        firstName ={firstName} 
        lastName={lastName} 
        profTitle= {profTitle}
        profDescription= {profDescription}
        phoneNumber= {phoneNumber}
        email={email}
        homeAdress={homeAdress}
        />
      </div>
    </div>
  );
}

export default App;
