import React, { Component, Suspense } from 'react'
import { Router, Link } from "react-router-dom";


class App extends Component {
    render() {
        const User = React.lazy(() => import("./containers/Users"));
        const Pizza = React.lazy(() => import("./containers/Pizza"));

        return (
            <div>
                <div>
                    <Link to="/"> Users</Link>
                    <Link to="/pizza"> Pizza</Link>
                </div>
                <div>
                    <Router path="/" exact render={() => <Suspense><User /></Suspense>}></Router>
                    <Router path="/pizza" render={() => <Suspense><Pizza /></Suspense>}></Router>
                </div>
            </div>
        )
    }
}

export default App;