/**
 * React
 */
import React from "react";
import {Link} from "react-router-dom";

/**
 * Css
 */
import "./styles/TrainingButton.css"

/**
 * Component : TrainingButton
 */
export default class TrainingButton extends React.Component{
    render() {
        return (
            <>
                <Link to='/click' className={"link-to-train"}>
                    <div className={"contain-train-button"}>
                        Train
                    </div>
                </Link>
            </>
        )
    }
}