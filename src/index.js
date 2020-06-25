import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { setConfiguration } from 'react-grid-system';
 

import "./index.scss";
import Intro from "./scenes";

// Components
import Error404 from "./components/common/Error404";
import RedirectAs404 from "./components/common/RedirectAs404";

// React grid configuration
setConfiguration({ defaultScreenClass: 'sm'});

const Root = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={Intro} />
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );
};

ReactDOM.render(
    <HashRouter>
        <div>
            <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <Root />)} />
        </div>
    </HashRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
