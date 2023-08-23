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
    <div className="flex flex-col space-y-2 border-black border p-8 rounded-lg">
      <h2>Work</h2>
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={jobTitle}
        onChange={(e) => handleJobTitle(e.target.value)}
        placeholder="Job Title"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={employerName}
        onChange={(e) => handleEmployerName(e.target.value)}
        placeholder="Name of Employer"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={jobPlace}
        onChange={(e) => handleJobPlace(e.target.value)}
        placeholder="Place"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={jobTime}
        onChange={(e) => handleJobTime(e.target.value)}
        placeholder="From - To"
      />
      <textarea
        className="input-normal focus:outline-none focus:shadow-outline"
        value={jobDescription}
        onChange={(e) => handleJobDescription(e.target.value)}
        type="text"
        placeholder="description"
      />
    </div>
  );
}
