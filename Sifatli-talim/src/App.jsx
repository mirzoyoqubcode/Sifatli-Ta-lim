import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./components/Contact/Contact";
import Info1 from "./components/Info1/Info1";
import Info2 from "./components/Info2/Info2";
import Dashboard from "./components/Dashboard/Dashboard";
import FirstClass from "./components/FirstClass/FirstClass";
import SecondClass from "./components/SecondClass/SecondClass";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info1" element={<Info1 />} />
        <Route path="/info2" element={<Info2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/firstclass" element={<FirstClass />} />
        <Route path="/secondclass" element={<SecondClass />} />
      </Routes>
    </>
  );
}

export default App;
