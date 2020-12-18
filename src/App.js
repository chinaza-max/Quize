import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./component/home";
import Question from "./component/question";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/question"  component={Question}/>
      </Switch>
    </Router>
  );
}

export default App;
