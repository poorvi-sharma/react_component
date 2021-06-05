import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home.js";
import Activity1 from "./Components/Home/WorksComp/Activity1";
import Activity2 from "./Components/Home/WorksComp/Activity2";
import Activity3 from "./Components/Home/WorksComp/Activity3";
import Activity4 from "./Components/Home/WorksComp/Activity4";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Activity1" component={Activity1} />
      <Route exact path="/Activity2" component={Activity2} />
      <Route exact path="/Activity3" component={Activity3} />
      <Route exact path="/Activity4" component={Activity4} />
    </Switch>
  );
}

export default App;
