import React from 'react'


import "./App.scss";
import { useState, useEffect } from "react";
import { Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import { path } from 'd3';
// import NextPage from "./NextPage";
// import Success from './Success';

const FormValidation = () => {



      const initialValues = { email: "", password: "", confirmPassword: "", firstName: "", lastName: "", confirm: "" };
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
    
      const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        const err = validate(formValues);
        console.log(err);
        const anyErrror = Object.keys(err).length;
        console.log(anyErrror);
        // setIsSubmit(true);
        if(!anyErrror){
          // setFormErrors(validate(formValues));
          // console.log("error")
          navigate("/success");
       }
      };
      
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
    

    
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
          errors.firstName = "First Name is required!";
        }
        if (!values.lastName) {
          errors.lastName = "Last Name is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = "Confirm Password is required";
        }
        if(values.password !== values.confirmPassword){
          errors.confirmPassword =" password should be same ";
        }
        return errors;
      };
    
      return (
        <div className="container-grid">
          {/* <NextPage/> */}
          {/* <div className="container-grid-item">Graph</div> */}
    
          <div className="container-grid-item container">
            
            <form onSubmit={handleSubmit}>
              <h1> Create an account</h1>
              <label className="container__label" >Your email address</label> <br />
              <input type="text"  name="email" onChange={handleChange}/>
              <p className="form__error">{formErrors.email}</p>
              <br />
              <label className="container__label">Your password</label> <br />
              <input type="password" name="password" onChange={handleChange}/>
              <p className="form__error">{formErrors.password}</p>
              <br />
              <label className="container__label">Your confirm password</label> <br />
              <input type="password" name="confirmPassword" onChange={handleChange}/>
              <p className="form__error">{formErrors.confirmPassword}</p>
              <br />
              <label className="container__label">Your name</label> <br />
              <input type="text" name="firstName" onChange={handleChange}/>
              <p className="form__error">{formErrors.firstName}</p>
              <br />
              <label className="container__label">Your phone number</label> <br />
              <input type="number" name="lastName" onChange={handleChange} />
              <p className="form__error">{formErrors.lastName}</p>
              <br /> 
              <input  className="checkbox__align" type="checkbox" name="confirm" onChange={handleChange}/>
              {/* <p>{formErrors.confirm}</p> */}
              <label className="container__label">Term and conditions</label><br/>
              <button type="submit" className="container__btn">
                {" "}
                Create account
              </button>
            </form>
          </div>
        </div>
      );
      
      }

export default FormValidation;
