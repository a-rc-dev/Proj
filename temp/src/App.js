import React, { useState } from "react";
import "./index.css";





function App ()  {

const [currentTemp , updateTemp] = useState(10);
const [currentColor , updateColor] = useState('cold');

const increase = () =>{
  if (currentTemp === 30) return;

    const newTemperature = currentTemp + 1;

    updateTemp(newTemperature);

    if (newTemperature >= 15) {
      updateColor('hot');
    }
  

};

const decrease = () =>{
  if(currentTemp===0) return;
 
const newTemp = currentTemp - 1;
 updateTemp( newTemp);

  if (newTemp <22){
    updateColor('cold');
  }
 
 

};

  return (
    <div className="app-container">

      <div className="temperature-display-container">
        <div className={`temperature-display ${currentColor}`} >{currentTemp} ºC</div>

      </div>
      <div className="button-container">
        <button onClick={() => increase()}> + </button>
        <button onClick={() =>decrease()}> - </button>

      </div>



    </div>

  );


}


export default App;