import "/src/App.css";

export default function Education({ degree, edPlace, edTime, institution }) {
  return (
    <>
      <h2>{degree ? degree : "Degree"} </h2>
      <span>{institution ? institution : "Institution"}</span>
      <span>{edPlace ? edPlace : "Place"}</span>
      <span>{edTime ? edTime : "Time"}</span>
    </>
  );
}
