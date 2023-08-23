import "/src/App.css";

export default function WorkExperience({
  jobTitle,
  employerName,
  jobPlace,
  jobTime,
  jobDescription,
}) {
  return (
    <>
      <h2 className="underline underline-offset-8 text-center py-6">
        Work Experience
      </h2>
      <div className="flex flex-col items-center">
        <span>{jobTitle ? jobTitle : "Work"}</span>
        <span>{employerName ? employerName : "Employer"}</span>
        <span>{jobPlace ? jobPlace : "Place"}</span>
        <span>{jobTime ? jobTime : "Duration"}</span>
        <span>{jobDescription ? jobDescription : "Description"}</span>
      </div>
    </>
  );
}
