import React, { Component } from "react";
import SportIndex from "./SportIndex";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <p>Pagina inicial</p>
                    </Route>
                    <Route path="/sport" component={SportIndex}/>
                </Switch>
            </Router>
        );
    }
}