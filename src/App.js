import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import AuthProvider from "./providers/AuthProvider";
import GuestCheck from "./providers/GuestCheck";
import AdminCheck from "./providers/AdminCheck";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Slider from "./pages/dashboard/slider/Slider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={ <GuestCheck> <Register /> </GuestCheck> } />
          <Route path="/auth/login" element={ <GuestCheck> <Login /> </GuestCheck> } />


          {/* dashboard routes */}
          <Route path="/dashboard" element={<AdminCheck><Dashboard /></AdminCheck>} />
          <Route path="/dashboard/slider" element={<AdminCheck><Slider /></AdminCheck>} />


        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
