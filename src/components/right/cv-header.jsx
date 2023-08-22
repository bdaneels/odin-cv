import "/src/App.css";

export default function CVHeader({firstName, lastName, profTitle}) {
  return (
    <div className="absolute top-28 bg-gray-200 w-full h-20 flex flex-col items-center justify-center ">
      <h2 className="text-xl"> {firstName != ''? firstName : '[First Name] +'} {lastName != '' ? lastName : '[Surname]'}</h2>
      <p>{profTitle != '' ? profTitle : 'Professional Title'}</p>
    </div>
  );
}
//