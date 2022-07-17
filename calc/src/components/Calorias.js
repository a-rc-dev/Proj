import { useEffect } from "react";
import React from "react";

const Calorias = ({ setAge, setWeight, setGender,setHeight, setActivity, setActivityMult, inputGender,inputActivityMult, inputActivity, setCalories, inputAge, inputWeight, inputHeight }) => {

    const inputAgeHandler = (e) => {
        e.preventDefault();
        setAge(e.target.value);
    }

    const inputWeightHandler = (e) => {
        e.preventDefault();
        setWeight(e.target.value);
    }

    const inputHeightHandler = (e) => {
        e.preventDefault();
        setHeight(e.target.value);
    }


    const statusHandler = (e) => {

        setActivity(e.target.value);
 
    }

    const inputGenderHandler = (e) => {
        e.preventDefault();
        setGender(e.target.value);
    }

   

    return (
        <div className="outerCalc">

            <button id="Female"
                className="form-field"
                type="radio"
                placeholder="Female"
                name="gender"
                value="female"
                onClick={inputGenderHandler}> 
                Female
                
            </button>

            <button id="Male"
                className="form-field"
                type="radio"
                placeholder="Male"
                name="gender"
                value="male"
                onClick={inputGenderHandler}> 
                Male
                
            </button>


            <form className="register-form" >




                <input onChange={inputAgeHandler}

                    id="age"
                    className="form-field"
                    type="text"
                    placeholder="Enter Age"
                    name="age"
                    defaultValue='20'
                />

                <select onChange={statusHandler} >
                    <option value="Sedentary">Little to no exercise</option>
                    <option value="Light-Activity">Light exercise/sports 1-3 days per week</option>
                    <option value="Moderate-Activity">Moderate exercise/sports 3-5 days per week</option>
                    <option value="Very-Active">Hard exercise/sports 6-7 days per week</option>
                    <option value="Extra-Active">Very hard exercise/sports and physical job
                    </option>
                </select>



                <input onChange={inputWeightHandler}

                    id="weight"
                    className="form-field"
                    type="text"
                    placeholder="Weight"
                    name="weight"
                    defaultValue='68'
                />

                <input onChange={inputHeightHandler}

                    id="height"
                    className="form-field"
                    type="text"
                    placeholder="Height"
                    name="height"
                    defaultValue='167'
                />

                
            </form>



        </div>

    );

}

export default Calorias;