import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import AuthProvider from "./providers/AuthProvider";
import ProtectedRoute from "./providers/ProtectedRoute ";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home />} />

            <Route path="/auth/register"
              element={
                <ProtectedRoute>
                  <Register />
                </ProtectedRoute>
              }
            />

        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
