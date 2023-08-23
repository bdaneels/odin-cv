import "/src/App.css";

export default function GeneralCard({
  homeAdress,
  hanldeHomeAdress,
  email,
  handleEmail,
  firstName,
  handleFirstName,
  lastName,
  handleLastName,
  handleProfTitle,
  profTitle,
  profDescription,
  handleProfDescription,
  phoneNumber,
  hanldePhoneNumber,
}) {
  return (
    <div className="flex flex-col space-y-2 border-black border p-8 rounded-lg">
      <h2>General Information</h2>
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={firstName}
        onChange={(e) => handleFirstName(e.target.value)}
        placeholder="first name"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={lastName}
        onChange={(e) => handleLastName(e.target.value)}
        placeholder="Last Name"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={profTitle}
        onChange={(e) => handleProfTitle(e.target.value)}
        placeholder="Professional Title"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={profDescription}
        onChange={(e) => handleProfDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={phoneNumber}
        onChange={(e) => hanldePhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={email}
        onChange={(e) => handleEmail(e.target.value)}
        placeholder="Contact Email"
      />
      <input
        className="input-normal focus:outline-none focus:shadow-outline"
        value={homeAdress}
        onChange={(e) => hanldeHomeAdress(e.target.value)}
        placeholder="Home Adress"
      />
    </div>
  );
}
