import { Route, Routes , BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CourseDetails from "./pages/Details";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
