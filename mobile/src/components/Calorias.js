import { useEffect, useState } from "react";
import React from "react";

const Calorias = ({ setAge, setWeight, setGender, setHeight, setActivity, setActivityMult, inputGender, inputActivityMult, inputActivity, setCalories, inputAge, inputWeight, inputHeight }) => {


    const [inputSelectGender, setSelectGender] = useState(false);


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
        if (e.target.value === 'male') {
            setSelectGender(true);
        } else {
            setSelectGender(false);
        }

    }

    const selectgender = (e) => {



    }

    return (



        <form className="register-form" >

          
            <button id="Female"
                className="form-field"
                type="radio"
                placeholder="Female"
                name="gender"
                value="female"
                style={{
                    border: inputSelectGender === false ? '3px solid green' : 'none'
                }}
                onClick={inputGenderHandler}>
                Female

            </button>

            <button id="Male"
                className="form-field"
                type="radio"
                placeholder="Male"
                name="gender"
                value="male"
                style={{
                    border: inputSelectGender === true ? '3px solid green' : 'none'
                }}
                onClick={inputGenderHandler}>
                Male

            </button>

            <br />
            <label htmlFor="name">Idade:</label>
            <input onChange={inputAgeHandler}

                id="age"
                className="form-field"
                type="text"
                placeholder="Enter Age"
                name="age"
                defaultValue='20'
            />


            <label htmlFor="name">Nivel de atividade fisica:</label>
            <br />
            <select onChange={statusHandler} >
                <option value="Sedentary">Little to no exercise</option>
                <option value="Light-Activity">Light exercise/sports 1-3 days per week</option>
                <option value="Moderate-Activity">Moderate exercise/sports 3-5 days per week</option>
                <option value="Very-Active">Hard exercise/sports 6-7 days per week</option>
                <option value="Extra-Active">Very hard exercise/sports and physical job
                </option>
            </select>


            <label htmlFor="name">Peso:(em Kg)</label><br />
            <input onChange={inputWeightHandler}

                id="weight"
                className="form-field"
                type="text"
                placeholder="Weight"
                name="weight"
                defaultValue='68'
            />
            <label htmlFor="name">Altura:(em Cm)</label><br />
            <input onChange={inputHeightHandler}

                id="height"
                className="form-field"
                type="text"
                placeholder="Height"
                name="height"
                defaultValue='167'
            />


        </form>





    );

}

export default Calorias;