/** 
 * React
 */
import React from "react";

/**
 * Assets
 */
import AppLogo from '../assets/logo.png'

/**
 * Css
 */
import "./styles/Homepage.css"

/**
 * Components
 */
import TrainingButton from "../components/TrainingButton";

/**
 * Page: Homepage
 */
export default class Homepage extends React.Component{
    render() {
        return (
            <>
                <section className={"homepage-content"}>
                    <div className={"home-section"}>
                        <span className={"home-span"}>
                            Welcome
                        </span>
                        <span className={"contain-asset home-span"}>
                            to Click-Test.
                            <img src={AppLogo} className={"asset-animation"} alt="Logo" width='115px'/>
                        </span>
                        <TrainingButton />
                    </div>
                </section>
            </>
        )
    }
}