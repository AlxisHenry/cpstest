import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import React from 'react'

import {Navigation} from "./Navbar/navbar"
import {Homepage} from "./Home";
import {ClickTest} from "./Click";

class App extends React.Component {
    render() {
        return (
            <Router basename="/Click-Test">
                <Navigation />
                <Routes>
                    <Route path='/' element={ <Homepage /> } />
                    <Route path='/click' element={ <ClickTest /> } />
                </Routes>
            </Router>
        )
    }
}

export default App