import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
  )

}
export default App;