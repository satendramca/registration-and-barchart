import "./App.scss";

function App() {
  return (
    <div className="container-grid">
      <div className="container-grid-item">Graph</div>

      <div className="container-grid-item container">
        <form >
          <h1> Create an account</h1>
          <label className="container__label">Your Email Address</label> <br />
          <input type="text" />
          <br />
          <label className="container__label">Your Email Address</label> <br />
          <input type="password" />
          <br />
          <label className="container__label">Your Email Address</label> <br />
          <input type="password" />
          <br />
          <label className="container__label">Your Email Address</label> <br />
          <input type="text" />
          <br />
          <label className="container__label">Your Email Address</label> <br />
          <input type="number" />
          <br /> 
          <input  className="checkbox__align" type="checkbox"/>
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



export default App;
