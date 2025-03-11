import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import EcoForecast from "./pages/EcoForecast";
import ContentDeserts from "./pages/ContentDeserts";
import DataAnalysis from "./pages/DataAnalysis";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/ecoforecast" element={<EcoForecast />} />
          <Route path="/content-deserts" element={<ContentDeserts />} />
          <Route path="/data-analysis" element={<DataAnalysis />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
