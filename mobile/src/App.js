
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import BodyComp from "./components/BodyComp";
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {


  const [inputAge, setAge] = useState(20);
  const [inputWeight, setWeight] = useState(68);
  const [inputHeight, setHeight] = useState(167);
  const [inputCalories, setCalories] = useState();
  const [inputActivity, setActivity] = useState('Sedentary');
  const [inputActivityMult, setActivityMult] = useState(0);

  const [inputGainLose, setGainLose] = useState('lose');

  const [inputGender, setGender] = useState();

  useEffect(() => {

    switch (inputActivity) {
      case 'Sedentary':
        setActivityMult(1.2);
        break;
      case 'Light-Activity':
        setActivityMult(1.375);
        break;
      case 'Moderate-Activity':
        setActivityMult(1.55);
        break;
      case 'Very-Active':
        setActivityMult(1.752);
        break;
      case 'Extra-Active':
        setActivityMult(1.9);
        break;
      default:
        setActivityMult(1.2);
        break;
    };


  }, [inputActivity]);






  return (
    <>
      <div className="img">
        <Navbar />
        <Hero inputAge={inputAge} setAge={setAge}
          inputWeight={inputWeight} setWeight={setWeight}
          inputHeight={inputHeight} setHeight={setHeight}
          inputCalories={inputCalories} setCalories={setCalories}
          inputActivity={inputActivity} setActivity={setActivity}
          inputActivityMult={inputActivityMult} setActivityMult={setActivityMult}
          inputGender={inputGender} setGender={setGender}
          inputGainLose={inputGainLose} setGainLose={setGainLose} />
       
      </div>

    </>
  );
}

export default App;
