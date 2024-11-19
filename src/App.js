import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  // adds progammatic navigation for login and logout
  useEffect(() => {
    if (isloggedIn) {
      // navigates to Home route if user is logged in
      navigate("/");
    } else {
      // navigates to Login route if user is logged out
      navigate("/login");
    }
  }, [isloggedIn]);
  return (
    <div className="app">
      {/* adds conditional rendering so users have to be logged in to see pages on the site */}
      {isloggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      {/* pass a login function to outlet as context */}
      <Outlet context={login} />
    </div>
  );
}

export default App;
