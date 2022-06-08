import React from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { MainPage } from "./main";
import { Api1Page } from "./pages/api1blog";
import { Api2Page } from "./pages/api2blog";
import { EComServicePage } from "./pages/ecompage";
import { ITStaffPage } from "./pages/itstaffblog";
import { ITStaffServicePage } from "./pages/itstaffpage";
import { MobileAppsPage } from "./pages/mobileapp";
import { WebAppsPage } from "./pages/webapp";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {

  return (
    <Router>
      <Routes>
        
        <Route path="/" exact name="Main" element={<MainPage />} />
        <Route path="/blog/API1" exact element={<Api1Page />} />
        <Route path="/blog/API2" exact element={<Api2Page />} />
        <Route path="/blog/ITStaff" exact element={<ITStaffPage />} />
        <Route path="/services/web" exact element={<WebAppsPage />} />
        <Route path="/services/mobile" exact element={<MobileAppsPage />} />
        <Route path="/services/ITStaff" exact element={<ITStaffServicePage />} />
        <Route path="/services/ECom" exact element={<EComServicePage />} />
        <Route path="*" element={<MainPage/>}/>
      </Routes>
    </Router>
  );
}
export default App;