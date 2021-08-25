import React from "react";
import {
    // BrowserRouter as Router,
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

const ReactRouting = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

const Home = ()  => {
    return (
        <>
            <h2>Home</h2>
            <div><p>This is home page description</p></div>
        </>);
}

const About = () => {
    return <h2>About</h2>;
}

const Users = () => {
    return <h2>Users</h2>;
}

export default ReactRouting




// const ReactRouting = () => {
//     return(
//         <div>
//             ReactRouting
//         </div>
//     )
// }

// export default ReactRouting