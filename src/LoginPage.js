import React from 'react'

const LoginPage = () => {
  return (
    <div className="container-grid">
    <div className="container-grid-item">Graph</div>

    <div className="container-grid-item container">
    <form onSubmit={handleSubmit}>
          <h1> Create an account</h1>
          <label className="container__label" >Your Email Address</label> <br />
          <input type="text"  name="email" onChange={handleChange}/>
          <p className="form__error">{formErrors.email}</p>
          <br />
          <label className="container__label">Your Password</label> <br />
          <input type="password" name="password" onChange={handleChange}/>
          <p className="form__error">{formErrors.password}</p>
          <br />
          <label className="container__label">Your confirmPassword</label> <br />
          <input type="password" name="confirmPassword" onChange={handleChange}/>
          <p className="form__error">{formErrors.confirmPassword}</p>
          <br />
          <label className="container__label">Your firstName</label> <br />
          <input type="text" name="firstName" onChange={handleChange}/>
          <p className="form__error">{formErrors.firstName}</p>
          <br />
          <label className="container__label">Your lastName</label> <br />
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
  )
}

export default LoginPage
