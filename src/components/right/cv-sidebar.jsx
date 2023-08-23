import Education from "./education";
import "/src/App.css";

export default function SideBar({
  phoneNumber,
  email,
  homeAdress,
  degree,
  edPlace,
  edTime,
  institution,
}) {
  return (
    <div className="bg-gray-600 h-full w-2/5 flex flex-col text-white items-center">
      <div className="border-b-4 border-white pt-56">Contacts</div>
      <div className="flex items-center pt-6">
        <img className="fill-white " src="/src/components/svg/phone.svg"></img>
        <span>{phoneNumber ? phoneNumber : "0000/00.00.00"}</span>
      </div>
      <div className="flex items-center">
        <img className="fill-white " src="/src/components/svg/mail.svg"></img>
        <span>{email ? email : "john.doe@example.com"}</span>
      </div>
      <div className="flex items-center">
        <img className="fill-white " src="/src/components/svg/home.svg"></img>
        <span>
          {homeAdress ? homeAdress : "Jim de la rue cull de sac 2600 paris"}
        </span>
      </div>
      <div className="border-b-4 border-white pt-6 mb-6">Education</div>
      <Education
        degree={degree}
        edPlace={edPlace}
        institution={institution}
        edTime={edTime}
      />
    </div>
  );
}
