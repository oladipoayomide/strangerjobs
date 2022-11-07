import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
function App() {
  return (
    <div className="App">
        <Router>

          <Header />
          <Switch>
            <Route>
                <Main />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
