import './index.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Genres from "./views/Genres.jsx";


function App() {
  return (
      <Router>
        <Switch>
          <Router exact path="/">
            <Home></Home>
          </Router>
          <Router path="/genre">
            <Genres></Genres>
          </Router>
        </Switch>
      </Router>
  )
}
export default App;