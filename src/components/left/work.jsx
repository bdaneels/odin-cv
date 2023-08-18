import "/src/App.css";

export default function WorkCard() {
  return (
    <div className="flex flex-col">
      <h2>Work</h2>
      <input placeholder="Job Title" />
      <input placeholder="Name of Employer" />
      <input placeholder="Place" />
      <input placeholder="From - To" />
      <textarea type="text" placeholder="description" />
    </div>
  );
}
