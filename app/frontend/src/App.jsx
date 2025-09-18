import { NavLink, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Heartbeat Ravers</h1>
        <nav className="app__nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      </header>
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <footer className="app__footer">&copy; {new Date().getFullYear()} Heartbeat Ravers</footer>
    </div>
  );
};

export default App;
