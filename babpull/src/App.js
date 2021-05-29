import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./myComponent/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>밥풀</h1>
        </Route>
        {/* <Route exact path="/counter">
          <CounterPage />
        </Route>
        <Route exact path="/dogs">
          <DogPage />
        </Route>
        <Route exact path="/todo">
          <TodoPage />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
