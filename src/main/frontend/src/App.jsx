import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import NavBar from "./components/Header/NavBar.jsx";

function App() {
  // const [count, setCount] = useState(0)
  return (
      <Router>
        <Switch>
          <Router exact path="/">
            Home
          </Router>
          <Router path="/genre">
            Genres
          </Router>
          {/*<Router path="/">*/}
          {/*  Home*/}
          {/*</Router>*/}
        </Switch>
      </Router>
  )
}
export default App;