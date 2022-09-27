import './index.css'

import Home from "./views/Home.jsx";
import Genres from "./views/Genres.jsx";
import Edit from "./views/Edit.jsx";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";



function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Genres />} />
              <Route path="/:id" element={<Edit />} />
          </Routes>
      </Router>
  )
}
export default App;