import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Onboard from "./pages/Onboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="signup" element={<Signup />} />
        <Route path="onboard" element={<Onboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
