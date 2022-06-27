import React from "react";
import AsssetLogo from '../assets/logo.png'
import './globals.css'
import '../components/Button-Train/button-train'
import {ButtonTrain} from "../components/Button-Train/button-train";

export class Homepage extends React.Component{
    render() {

        const Section_Css = {
            marginTop: '35px',
            width: '100%',
            height: '850px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }
        const Homepage_Css = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            fontSize: '4.125rem',
            color: '#F2F2F2',
            textAlign: 'start',
            fontWeight: '700',
            fontFamily: "'Roboto Mono', monospace'"
        }
        const AssetAnimation = {
            marginTop: '18px',
        }

        return (
            <>
                <section style={Section_Css}>
                    <div style={Homepage_Css}>
                        <span>
                            Welcome
                        </span>
                        <span>
                            to Click-Test.
                            <img src={AsssetLogo} className={"asset-animation"} style={AssetAnimation} alt="Logo" width='115px'/>
                        </span>
                        <ButtonTrain />
                    </div>
                </section>
            </>
        )
    }
}