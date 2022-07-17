import React, { useState } from "react";
import "./index.css";

export default function App() {

  const [values, setValues] = useState({

    firstName: "",
    lastName: "",
    email: "",

  });

  const [submitted, setSubmitted] = useState(false);


  const handleFirstName = (event) => {

    setValues({ ...values, firstName: event.target.value })

  }

  const handleLastName = (event) => {

    setValues({ ...values, lastName: event.target.value })

  }

  const handleEmail = (event) => {

    setValues({ ...values, email: event.target.value })

  }


  const handleSubmit = (event) => {

    event.preventDefault();
    if(values.firstName && values.lastName && values.email)
    {
      setValid(true);
    }
    setSubmitted(true);

  }

  const [valid,setValid] = useState(false);

  return (
    <div class="form-container">
      {submitted && valid? <div className="success-message">Sucess! Thank you for registering!</div> : null}

      <form class="register-form" onSubmit={handleSubmit}>

        <input
          onChange={handleFirstName}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />

        {submitted && !values.firstName ? <span>Please enter a first name</span> : null}

        <input
          onChange={handleLastName}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span>Please enter a last name</span> : null}

        <input
          onChange={handleEmail}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter a email name</span> : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}