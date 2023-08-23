import "/src/App.css";

export default function WorkCard({
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
    <div className="flex flex-col">
      <h2>Work</h2>
      <input
        value={jobTitle}
        onChange={(e) => handleJobTitle(e.target.value)}
        placeholder="Job Title"
      />
      <input
        value={employerName}
        onChange={(e) => handleEmployerName(e.target.value)}
        placeholder="Name of Employer"
      />
      <input
        value={jobPlace}
        onChange={(e) => handleJobPlace(e.target.value)}
        placeholder="Place"
      />
      <input
        value={jobTime}
        onChange={(e) => handleJobTime(e.target.value)}
        placeholder="From - To"
      />
      <textarea
        value={jobDescription}
        onChange={(e) => handleJobDescription(e.target.value)}
        type="text"
        placeholder="description"
      />
    </div>
  );
}
