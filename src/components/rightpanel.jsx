import "../App.css";
import CVHeader from "./right/cv-header";
import CVPage from "./right/cv-main";
import SideBar from "./right/cv-sidebar";

export default function RightPanel({
  firstName,
  lastName,
  profTitle,
  profDescription,
  phoneNumber,
  email,
  homeAdress,
  degree,
  edPlace,
  edTime,
  institution,
}) {
  return (
    <div className="w-1/2 h-full bg-white">
      <div className=" m-10 h-[800px] w-[600px] sticky shadow-lg">
        <CVHeader
          firstName={firstName}
          lastName={lastName}
          profTitle={profTitle}
        />
        <div className="flex w-full h-full">
          <SideBar
            phoneNumber={phoneNumber}
            email={email}
            homeAdress={homeAdress}
            degree={degree}
            edPlace={edPlace}
            institution={institution}
            edTime={edTime}
          />
          <CVPage profDescription={profDescription} />
        </div>
      </div>
    </div>
  );
}
