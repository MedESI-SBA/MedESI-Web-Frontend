import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import How from "./components/How/How";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./providers/AuthContext";
import ResetPassword from "./routes/ResetPassword";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <div className={`${showLogin ? " bg-opacity-50" : ""}`}>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero showLogin={showLogin} setShowLogin={setShowLogin} />
                  <About />
                  <How />
                </>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <div >
                    dashboard
                  </div>
                </ProtectedRoute>
              }
            />
            <Route path="/reset-password" element={
              <ResetPassword />

            }/>
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
