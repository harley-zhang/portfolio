import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import EcoForecast from "./pages/EcoForecast";
import DataAnalytics from "./pages/DataAnalytics";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/ecoforecast" element={<EcoForecast />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
