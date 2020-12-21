import React, { Component, Suspense } from 'react';
import { Link, Route } from 'react-router-dom';


import Users from "./containers/Users";
// import Pizza from "./containers/Pizza";

const Pizza = React.lazy(() => import("./containers/Pizza"));

class App extends Component {
    render() {

        return (
            <div>
                <div>
                    <h1>Hello worrld</h1>
                    <Link to="/">Users</Link> |
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" render={() => <Suspense fallback={<div>Loading...</div>}><Pizza /></Suspense>} />
                </div>
            </div>
        )
    }
}

export default App;