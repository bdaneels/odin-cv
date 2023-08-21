import "/src/App.css";

export default function SideBar() {
  return (
    <div className="bg-gray-600 h-full w-2/5 flex flex-col text-white items-center">
      <div className="border-b-4 border-white pt-56">Contacts</div>
      <div className="flex items-center">
        <img className="fill-white " src="/src/components/svg/phone.svg"></img>
        <span>PhoneNumber</span>
      </div>
      <div className="flex items-center">
        <img className="fill-white " src="/src/components/svg/mail.svg"></img>
        <span>Email</span>
      </div>
      <div className="flex items-center">
        <img className="fill-white " src="/src/components/svg/home.svg"></img>
        <span>Adress</span>
      </div>
    </div>
  );
}
