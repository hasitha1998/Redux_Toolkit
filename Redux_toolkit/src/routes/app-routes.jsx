
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import{

    Home

}from "../pages"

// Main App component
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        
        
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
