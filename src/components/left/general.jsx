import "/src/App.css";

export default function GeneralCard({homeAdress,
  hanldeHomeAdress, email, handleEmail, firstName, handleFirstName, lastName, handleLastName,handleProfTitle, profTitle, profDescription, handleProfDescription, phoneNumber, hanldePhoneNumber}) {
  return (
    <div className="flex flex-col">
      <h2>General Information</h2>
      <input value={firstName} onChange={(e) => handleFirstName(e.target.value)} placeholder='first name' />
      <input value={lastName} onChange={(e) => handleLastName(e.target.value)} placeholder="Last Name" />
      <input value={profTitle} onChange={(e) => handleProfTitle(e.target.value)}placeholder="Professional Title" />
      <input value={profDescription} onChange={(e) => handleProfDescription(e.target.value)} placeholder="Description" />
      <input value={phoneNumber} onChange={(e) => hanldePhoneNumber(e.target.value)} placeholder="Phone Number" />
      <input value={email} onChange={(e) => handleEmail(e.target.value)} placeholder="Contact Email" />
      <input value= {homeAdress} onChange={(e) => hanldeHomeAdress(e.target.value)} placeholder="Home Adress" />
    </div>
  );
}

