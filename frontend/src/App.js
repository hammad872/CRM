import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="/sales" element={<PrivateRoute component={Sales} />} />
      </Routes>
    </BrowserRouter>
  );
}


function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem('userData');

  return token ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default App;
