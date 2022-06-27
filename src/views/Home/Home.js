import React from "react";
import AsssetLogo from '../../assets/logo.png'
import {ButtonTrain} from "../../components/Button-Train/button-train";
import "./Home.css"

export class Homepage extends React.Component{
    render() {
        return (
            <>
                <section>
                    <div className={"home-section"}>
                        <span className={"home-span"}>
                            Welcome
                        </span>
                        <span className={"contain-asset home-span"}>
                            to Click-Test.
                            <img src={AsssetLogo} className={"asset-animation"} alt="Logo" width='115px'/>
                        </span>
                        <ButtonTrain />
                    </div>
                </section>
            </>
        )
    }
}