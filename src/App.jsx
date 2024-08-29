import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Login from "./layout/Login";
import Main from "./layout/Main";
import Users from "./layout/Users";

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
