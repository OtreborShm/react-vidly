import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Login from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={Login} />
          <Route path="/new" component={MovieForm} />
          <Route path="/movie/:id" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
