import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./landing";
import Heart from "./heart";
import Lungs from "./lungs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/lungs" element={<Lungs />} />
      </Routes>
    </Router>
  );
}

export default App;
