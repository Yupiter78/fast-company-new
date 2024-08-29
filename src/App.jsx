import React from "react";
import Users from "./layout/Users";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Login from "./layout/Login";
import Main from "./layout/Main";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
            </Switch>
        </>
    );
};

export default App;
