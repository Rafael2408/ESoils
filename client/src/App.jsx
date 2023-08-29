import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import SoilsPage from "./pages/SoilsPage";
import MyRegisters from "./pages/MyRegisters";
import SoilLocation from "./pages/SoilLocation";
import PhysicalProperties from "./pages/PhysicalProperties";
import ChemicalProperties from "./pages/ChemicalProperties";
import BiologicalProperties from "./pages/BiologicalProperties";
import ScientificName from "./pages/ScientificName";

import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoute/>}>
            <Route path="/soils" element={<SoilsPage/>} />
            <Route path="/my-registers" element={<MyRegisters/>} />

            <Route path="/soil-location" element={<SoilLocation/>} />
            <Route path="/physical-properties" element={<PhysicalProperties/>} />
            <Route path="/chemical-properties" element={<ChemicalProperties/>} />
            <Route path="/biological-properties" element={<BiologicalProperties/>} />
            <Route path="/scientific-name" element={<ScientificName/>} />

            <Route path="/soils/:id" element={<SoilLocation/>} />
            <Route path="/profile" element={<ProfilePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
