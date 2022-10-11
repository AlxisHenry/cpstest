/**
 * React
 */
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

/**
 * Components
 */
import Navbar from "./components/Navbar"

/**
 * Pages
 */
import Homepage from "./pages/Homepage";
import ClickTest from "./pages/ClickTest";

/**
 * Router
 */
export default class App extends React.Component {
    render() {
        return (
            <Router basename="/cpstest">
                <Navbar status={true}/>
                <Routes>
                    <Route path='/' element={ <Homepage/> } />
                    <Route path='/click' element={ <ClickTest /> } />
                </Routes>
            </Router>
        )
    }
}