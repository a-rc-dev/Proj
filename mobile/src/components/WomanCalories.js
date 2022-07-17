import React, { useEffect } from "react";


const WomanCalories = ({ inputGainLose, setGainLose, setWeight, setHeight, setCalories, inputActivityMult, setActivityMult, inputCalories, inputAge, inputWeight, inputHeight, inputActivity, setActivity }) => {


    const woman = () => {

        setCalories(

            (10 * inputWeight) + (6.25 * inputHeight) - (5 * inputAge) - 161

        );

    }




    useEffect(() => {
        woman();


    }, [inputWeight, inputAge, inputHeight, inputActivity]);



    const inputGainLoseHandler = (e) => {

        setGainLose(e.target.value);

    }

    return (
        <div className="woman-calories">

            <div className="radio-toolbar">

                <input onChange={inputGainLoseHandler} type="radio" value="lose" name="weight" id="option-3" />
                <input onChange={inputGainLoseHandler} type="radio" value="gain" name="weight" id="option-4" />

                <label htmlFor="option-3" className={inputGainLose === "lose" ? 'backcolor' : 'none'}>
                    <div className="dot"></div>
                    <span>Perder Peso</span>

                </label>

                <label htmlFor="option-4" className={inputGainLose === "gain" ? 'backcolor' : 'none'}>
                    <div className="dot"></div>
                    <span>Ganhar Peso</span>
                </label>



                {
                    inputGainLose === "lose" ?
                        <div>

                            <div className='col-3'>
                                <div className='divider'>
                                    <p><span>Manter Peso:</span></p>
                                </div>
                            </div>
                            <p className="show-underline center">{Math.round(inputCalories * inputActivityMult).toFixed(0)} calorias/dia</p>

                            <div className='col-3'>
                                <div className='divider'>
                                    <p><span>Perder <span className="weight-markup">( 0.25kg/semana ):</span></span></p>
                                </div>
                            </div>
                            <p className="show-underline">{Math.round((inputCalories * inputActivityMult) - 250).toFixed(0)} calorias/dia</p>

                            <div className='col-3'>
                                <div className='divider'>
                                    <p><span>Perder <span className="weight-markup">( 0.5kg/semana ):</span></span></p>
                                </div>
                            </div>

                            <p className="show-underline">{Math.round((inputCalories * inputActivityMult) - 500).toFixed(0)} calorias/dia</p>

                            <div className='col-3'>
                                <div className='divider'>
                                    <p><span>Perder <span className="weight-markup">( 1kg/semana ):</span></span></p>
                                </div>
                            </div>
                            <p className="show-underline">{Math.round((inputCalories * inputActivityMult) - 1000).toFixed(0)} calorias/dia</p>
                        </div>
                        :
                        <div>

                            <div className='col-3'>
                                <div className='divider'>
                                    <p><span>Manter Peso:</span></p>
                                </div>
                            </div>

                            <p className="show-underline center">{Math.round(inputCalories * inputActivityMult).toFixed(0)} calorias/dia</p>

                            <div className='col-3'>
                                <div className='divider'>
                                    <p><span>Ganhar <span className="weight-markup">( 0.25kg/semana ):</span></span></p>
                                </div>
                            </div>


                            <p className="show-underline">{Math.round((inputCalories * inputActivityMult) + 250).toFixed(0)} calorias por dia</p>

                            <div className='col-3'>
                                <div className='divider'>
                                    <p><span>Ganhar <span className="weight-markup">( 0.5kg/semana ):</span></span></p>
                                </div>
                            </div>

                            <p className="show-underline">{Math.round((inputCalories * inputActivityMult) + 500).toFixed(0)} calorias por dia</p>

                            <div className='col-3'>
                                <div className='divider'>
                                    <p><span>Ganhar <span className="weight-markup">( 1kg/semana ):</span></span></p>
                                </div>
                            </div>


                            <p className="show-underline">{Math.round((inputCalories * inputActivityMult) + 1000).toFixed(0)} calorias por dia</p>
                        </div>

                }
            </div>
        </div>
    );

}

export default WomanCalories;