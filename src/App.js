import React from "react"
import {Link, Route, Switch} from "react-router-dom";

import Todo from "./pages/ToDo/ToDo";
import ImagesGallery from "./pages/ImagesGallery/ImagesGallery";

class App extends React.Component {

    render() {
        return (
            <>
                <h1>APP JS</h1>
                <Link to="/">Open ToDo page</Link>
                <Link to="/images_gallery">Images gallery</Link>
                <Link to="/blocked_page">Blocked page</Link>
                <Switch>
                    <Route path="/blocked_page">
                        <h1>Blocked page!</h1>
                    </Route>
                    <Route path="/images_gallery">
                        <ImagesGallery/>
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
