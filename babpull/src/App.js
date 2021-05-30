import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./myComponent/NavBar";
import LoginPage from "./myComponent/login/loginPage";
import RegisterPage from './myComponent/login/registerPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>밥풀</h1>
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
