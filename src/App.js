import React from "react"
import {Link, Route, Switch} from "react-router-dom";

import Todo from "./pages/ToDo";

class App extends React.Component {

    render() {
        const isAdmin  = true
        return (
           <>
               <h1>APP JS</h1>
               <div>
                   <Link to="/">Open ToDo page</Link>
               </div>
               <div>
                   <Link to="/test">Test page</Link>
               </div>
               <Switch>
                   {isAdmin && <Route path="/blocked_page">
                       <h1>Blocked page!</h1>
                   </Route>}
                   <Route path="/test">
                       <h1>Test page!</h1>
                   </Route>
                   <Route path="/">
                       <Todo/>
                   </Route>
               </Switch>
           </>
        )
    }
}

export default App
