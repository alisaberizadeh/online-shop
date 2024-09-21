import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />

      


        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
