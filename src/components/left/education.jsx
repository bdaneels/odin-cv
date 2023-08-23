import "/src/App.css";

export default function EducationCard({
  degree,
  handleDegree,
  institution,
  handleInstitution,
  edPlace,
  handleEdPlace,
  edTime,
  handleEdTime,
}) {
  return (
    <div className="flex flex-col">
      <h2>Education</h2>
      <input
        value={degree}
        onChange={(e) => handleDegree(e.target.value)}
        placeholder="Degree"
      />
      <input
        value={institution}
        onChange={(e) => handleInstitution(e.target.value)}
        placeholder="Institution"
      />
      <input
        value={edPlace}
        onChange={(e) => handleEdPlace(e.target.value)}
        placeholder="Place"
      />
      <input
        value={edTime}
        onChange={(e) => handleEdTime(e.target.value)}
        placeholder="From - To"
      />
    </div>
  );
}
