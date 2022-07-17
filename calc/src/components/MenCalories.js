import React, { useEffect } from "react";

const MenCalories = ({ setGainLose, inputGainLose, setAge, setWeight, setHeight, setCalories, inputActivityMult, setActivityMult, inputCalories, inputAge, inputWeight, inputHeight, inputActivity, setActivity }) => {


    const men = () => {

        setCalories(

            (10 * inputWeight) + (6.25 * inputHeight) - (5 * inputAge) + 5

        );

    }




    useEffect(() => {
        men();


    }, [inputWeight, inputAge, inputHeight, inputActivity]);

    const inputGainLoseHandler = (e) => {

        setGainLose(e.target.value);

    }

     
    return (
        <div className="men-calories">
            <div>
                <input onChange={inputGainLoseHandler} defaultChecked type="radio" name="weight" value="lose" />
                Lose Weight
                <input onChange={inputGainLoseHandler} type="radio" name="weight" value="gain" />
                Gain Weight
            </div>
            {
                inputGainLose === "lose" ?
                    <div>
                        <p> Maintain weight: {Math.round(inputCalories * inputActivityMult).toFixed(0)}</p>
                        <p>Mild weight loss: {Math.round((inputCalories * inputActivityMult) - 250).toFixed(0)}</p>
                        <p>Weight loss: {Math.round((inputCalories * inputActivityMult) - 500).toFixed(0)}</p>
                        <p>Extreme weight loss: {Math.round((inputCalories * inputActivityMult) - 1000).toFixed(0)}</p>
                    </div>
                    :
                    <div>
                        <p> Maintain weight: {Math.round(inputCalories * inputActivityMult).toFixed(0)}</p>
                        <p>Mild weight gain: {Math.round((inputCalories * inputActivityMult) + 250).toFixed(0)}</p>
                        <p>Weight gain: {Math.round((inputCalories * inputActivityMult) + 500).toFixed(0)}</p>
                        <p>Fast weight gain: {Math.round((inputCalories * inputActivityMult) + 1000).toFixed(0)}</p>
                    </div>

            }

        </div>

    );

}

export default MenCalories;