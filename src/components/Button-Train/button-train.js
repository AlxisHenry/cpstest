import React from "react";
import "./button-train.css"
import {Link} from "react-router-dom";

export class ButtonTrain extends React.Component{
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