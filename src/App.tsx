
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomIndex from "./pages/CustomIndex";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
