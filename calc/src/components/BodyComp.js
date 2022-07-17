import React from "react";
import './BodyCss.css';
import Calorias from './Calorias';
import MenCalories from "./MenCalories";
import WomanCalories from "./WomanCalories";

const BodyComp = ({ setGainLose, inputGainLose, setAge, inputAge, inputWeight, inputGender, inputActivityMult, setGender, setWeight, setActivityMult, inputHeight, setHeight, inputCalories, setCalories, inputActivity, setActivity }) => {

    return (

        <div className="bodycomp">

            <div className="calc-heading">
                <h2>Calcular Calorias</h2>
            </div>

            <div className="grid-container">
                <div className="grid-item">

                    <Calorias
                        inputAge={inputAge} setAge={setAge}
                        inputWeight={inputWeight} setWeight={setWeight}
                        inputHeight={inputHeight} setHeight={setHeight}
                        inputCalories={inputCalories} setCalories={setCalories}
                        inputActivity={inputActivity} setActivity={setActivity}
                        inputActivityMult={inputActivityMult} setActivityMult={setActivityMult}
                        inputGender={inputGender} setGender={setGender}
                    />


                </div>
                <div className="grid-item">
                    <p>Age: {inputAge}</p>
                    <p>Weight: {inputWeight}</p>
                    <p>Height: {inputHeight}</p>
                    <p>Gender: {inputGender}</p>


                </div>
                <div className="grid-item">

                    <p>Calories: </p>
                    <div>

                        {

                            inputGender === "male" ? < MenCalories
                                inputAge={inputAge} setAge={setAge}
                                inputWeight={inputWeight} setWeight={setWeight}
                                inputHeight={inputHeight} setHeight={setHeight}
                                inputCalories={inputCalories} setCalories={setCalories}
                                inputActivityMult={inputActivityMult} setActivityMult={setActivityMult} 
                                inputGainLose={inputGainLose} setGainLose={setGainLose}/>
                                :
                                < WomanCalories
                                    inputAge={inputAge} setAge={setAge}
                                    inputWeight={inputWeight} setWeight={setWeight}
                                    inputHeight={inputHeight} setHeight={setHeight}
                                    inputCalories={inputCalories} setCalories={setCalories}
                                    inputActivityMult={inputActivityMult} setActivityMult={setActivityMult} 
                                    inputGainLose={inputGainLose} setGainLose={setGainLose}/>




                        }

                    </div>
                    <div>

                        


                    </div>

                </div>

            </div>


        </div>



    );



}

export default BodyComp;


