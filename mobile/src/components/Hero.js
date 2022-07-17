import React from 'react'
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import './Hero.css'
import { useEffect, useState } from "react";
import MenCalories from "./MenCalories";
import WomanCalories from "./WomanCalories";



const Hero = ({ setGainLose, inputGainLose, setAge, inputAge, inputWeight, inputGender, inputActivityMult, setGender, setWeight, setActivityMult, inputHeight, setHeight, inputCalories, setCalories, inputActivity, setActivity }) => {

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
        <div className='hero'>
            <div className='container'>
                <div className='content'>

                    <div className='col-2'>
                        <div className='form-layout'>
                            <div className='form-container'>


                                <div className='divider'>
                                    <p><span>Calcular Calorias</span></p>
                                </div>

                                <form>
                                    <button id="Female"
                                        className="form-field"
                                        type="radio"
                                        placeholder="Female"
                                        name="gender"
                                        value="female"
                                        style={{
                                            background: inputSelectGender === false ? '#52a152' : '#d3d3d3'
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
                                            background: inputSelectGender === true ? ' #52a152' : '#d3d3d3'
                                        }}
                                        onClick={inputGenderHandler}>
                                        Male

                                    </button>

                                   
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
                                    
                                    <select onChange={statusHandler} >
                                        <option value="Sedentary">Little to no exercise</option>
                                        <option value="Light-Activity">Light exercise/sports 1-3 days per week</option>
                                        <option value="Moderate-Activity">Moderate exercise/sports 3-5 days per week</option>
                                        <option value="Very-Active">Hard exercise/sports 6-7 days per week</option>
                                        <option value="Extra-Active">Very hard exercise/sports and physical job
                                        </option>
                                    </select>

                                    <br/>
                                    <label htmlFor="name">Peso:(em Kg)</label>
                                    <input onChange={inputWeightHandler}

                                        id="weight"
                                        className="form-field"
                                        type="text"
                                        placeholder="Weight"
                                        name="weight"
                                        defaultValue='68'
                                    />
                                    <label htmlFor="name">Altura:(em Cm)</label>
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
                            <div className='form-footer'>
                                <p>
                                    Estes dados são puramente representativos que ajudam a ter uma estimativa das colorias necessarias.
                                    Deve sempre consultar um
                                    <span className='primary-color'> profissional </span>
                                    antes de mudar a sua alimentação ou o treino. <span className='primary-color'><br></br>Use a calculadora por risco próprio</span>.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className='col-1 '>
                        {

                            inputGender === "male" ? <div className="form-layout form-container result-window">
                                < MenCalories
                                    inputAge={inputAge} setAge={setAge}
                                    inputWeight={inputWeight} setWeight={setWeight}
                                    inputHeight={inputHeight} setHeight={setHeight}
                                    inputCalories={inputCalories} setCalories={setCalories}
                                    inputActivityMult={inputActivityMult} setActivityMult={setActivityMult}
                                    inputGainLose={inputGainLose} setGainLose={setGainLose} />

                            </div>
                                :
                                <div className="form-layout form-container result-window">
                                    < WomanCalories
                                        inputAge={inputAge} setAge={setAge}
                                        inputWeight={inputWeight} setWeight={setWeight}
                                        inputHeight={inputHeight} setHeight={setHeight}
                                        inputCalories={inputCalories} setCalories={setCalories}
                                        inputActivityMult={inputActivityMult} setActivityMult={setActivityMult}
                                        inputGainLose={inputGainLose} setGainLose={setGainLose} />
                                </div>
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero;