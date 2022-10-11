import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import React from 'react'
import {Navigation} from "./components/Navbar/navbar"
import {Homepage} from "./views/Home/Home";
import {ClickTest} from "./views/Click/Click";

class App extends React.Component {
    render() {
        return (
            <Router basename="/cpstest">
                <Navigation status={true}/>
                <Routes>
                    <Route path='/' element={ <Homepage/> } />
                    <Route path='/click' element={ <ClickTest /> } />
                </Routes>
            </Router>
        )
    }
}

export default App
