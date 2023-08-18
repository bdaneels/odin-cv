import "/src/App.css";

export default function EducationCard() {
  return (
    <div className="flex flex-col">
      <h2>Education</h2>
      <input placeholder="Degree" />
      <input placeholder="Institution" />
      <input placeholder="Place" />
      <input placeholder="From - To" />
    </div>
  );
}
