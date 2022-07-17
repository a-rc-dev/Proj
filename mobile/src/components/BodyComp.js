import React from "react";

import Calorias from './Calorias';
import MenCalories from "./MenCalories";
import WomanCalories from "./WomanCalories";

const BodyComp = ({ setGainLose, inputGainLose, setAge, inputAge, inputWeight, inputGender, inputActivityMult, setGender, setWeight, setActivityMult, inputHeight, setHeight, inputCalories, setCalories, inputActivity, setActivity }) => {

    return (

        <div className="main-layout" >



            <Calorias
                inputAge={inputAge} setAge={setAge}
                inputWeight={inputWeight} setWeight={setWeight}
                inputHeight={inputHeight} setHeight={setHeight}
                inputCalories={inputCalories} setCalories={setCalories}
                inputActivity={inputActivity} setActivity={setActivity}
                inputActivityMult={inputActivityMult} setActivityMult={setActivityMult}
                inputGender={inputGender} setGender={setGender}
            />





            {

                inputGender === "male" ? < MenCalories
                    inputAge={inputAge} setAge={setAge}
                    inputWeight={inputWeight} setWeight={setWeight}
                    inputHeight={inputHeight} setHeight={setHeight}
                    inputCalories={inputCalories} setCalories={setCalories}
                    inputActivityMult={inputActivityMult} setActivityMult={setActivityMult}
                    inputGainLose={inputGainLose} setGainLose={setGainLose} />
                    :
                    < WomanCalories
                        inputAge={inputAge} setAge={setAge}
                        inputWeight={inputWeight} setWeight={setWeight}
                        inputHeight={inputHeight} setHeight={setHeight}
                        inputCalories={inputCalories} setCalories={setCalories}
                        inputActivityMult={inputActivityMult} setActivityMult={setActivityMult}
                        inputGainLose={inputGainLose} setGainLose={setGainLose} />

            }

        </div>






    );



}

export default BodyComp;


