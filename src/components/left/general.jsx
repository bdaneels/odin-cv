import "/src/App.css";

export default function GeneralCard() {
  return (
    <div className="flex flex-col">
      <h2>General Information</h2>
      <input placeholder="First Name" />
      <input placeholder="Last Name" />
      <input placeholder="Professional Title" />
      <input placeholder="Description" />
      <input placeholder="Phone Number" />
      <input placeholder="Contact Email" />
      <input placeholder="Home Adress" />
    </div>
  );
}
