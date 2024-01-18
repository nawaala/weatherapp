import "./Environment.css";
import title from "../Assets/RiskAssessments.jpg";

var Mouldy = (
  <div>
    Open <a href="/">windows</a>, Call for a checkup
  </div>
);

var windowText = (
    <div>
      Open <a href="/">windows</a>, Call for a checkup
    </div>
  );

    var windowText = (
    <div>
    Open <a href="/">windows</a>, Call for a checkup
    </div>
    );

var option = [
  {
    option: "Too cold",
    advice: "Turn on heating, buy Thermal Insulated Door Curtain",
  },
  {
    option: "Too hot",
    advice: "Turn on heating, buy Thermal Insulated Door Curtain",
  },
  { option: "Mouldy", advice: Mouldy },
  {
    option: "Dusty",
    advice: "Turn on heating, buy Thermal Insulated Door Curtain",
  },

];





const Environment = () => {
  return (
    <div>
      <div classname="environment-title">
        Risk Assessments
        <img src={title} />
        <select id="SelectCar" onSubmit="displayDetails()">
          <option value="Too cold">Too Cold</option>
          <option value="Too hot">Too Hot</option>
          <option value="Mould"> Mould</option>
          <option value="Dusty">Dusty</option>
        </select>
        <p id="CarDetail"></p>
      </div>

      {option[2].advice}
    </div>
  );
};

export default Environment;
