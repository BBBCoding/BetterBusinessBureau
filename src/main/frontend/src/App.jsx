import './index.css'

import Home from "./views/Home";
import Genres from "./views/Genres.jsx";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";



function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Genres />} />
          </Routes>
      </Router>
  )
}
export default App;