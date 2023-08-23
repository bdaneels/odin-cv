import "../App.css";
import EducationCard from "./left/education";
import GeneralCard from "./left/general";
import WorkCard from "./left/work";

function LeftPanel({
  firstName,
  handleFirstName,
  lastName,
  handleLastName,
  profTitle,
  handleProfTitle,
  profDescription,
  handleProfDescription,
  phoneNumber,
  hanldePhoneNumber,
  email,
  handleEmail,
  homeAdress,
  hanldeHomeAdress,
  degree,
  handleDegree,
  institution,
  handleInstitution,
  edPlace,
  handleEdPlace,
  edTime,
  handleEdTime,
  jobTitle,
  handleJobTitle,
  employerName,
  handleEmployerName,
  jobPlace,
  handleJobPlace,
  jobTime,
  handleJobTime,
  jobDescription,
  handleJobDescription,
}) {
  return (
    <div className="h-full w-1/2 bg-slate-200 rounded-sm flex flex-col justify-start items-center">
      <GeneralCard
        firstName={firstName}
        handleFirstName={handleFirstName}
        lastName={lastName}
        handleLastName={handleLastName}
        profTitle={profTitle}
        handleProfTitle={handleProfTitle}
        handleProfDescription={handleProfDescription}
        profDescription={profDescription}
        phoneNumber={phoneNumber}
        hanldePhoneNumber={hanldePhoneNumber}
        email={email}
        handleEmail={handleEmail}
        homeAdress={homeAdress}
        hanldeHomeAdress={hanldeHomeAdress}
      />
      <EducationCard
        degree={degree}
        handleDegree={handleDegree}
        institution={institution}
        handleInstitution={handleInstitution}
        edPlace={edPlace}
        handleEdPlace={handleEdPlace}
        edTime={edTime}
        handleEdTime={handleEdTime}
      />
      <WorkCard
        jobTitle={jobTitle}
        handleJobTitle={handleJobTitle}
        employerName={employerName}
        handleEmployerName={handleEmployerName}
        jobPlace={jobPlace}
        handleJobPlace={handleJobPlace}
        jobTime={jobTime}
        handleJobTime={handleJobTime}
        jobDescription={jobDescription}
        handleJobDescription={handleJobDescription}
      />
    </div>
  );
}

export default LeftPanel;
