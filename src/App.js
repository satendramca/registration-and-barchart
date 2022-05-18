import "./App.scss";
import FormValidation from "./FormValidation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./Component/Chart";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormValidation />}></Route>
          <Route path="/success" element={<Chart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
