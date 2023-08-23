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
    <div className="flex flex-col space-y-2 border-black border p-8 rounded-lg">
      <h2>Education</h2>
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={degree}
        onChange={(e) => handleDegree(e.target.value)}
        placeholder="Degree"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={institution}
        onChange={(e) => handleInstitution(e.target.value)}
        placeholder="Institution"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={edPlace}
        onChange={(e) => handleEdPlace(e.target.value)}
        placeholder="Place"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={edTime}
        onChange={(e) => handleEdTime(e.target.value)}
        placeholder="From - To"
      />
    </div>
  );
}
