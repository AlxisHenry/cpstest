import React from "react";
import {Link} from "react-router-dom";

export class ButtonTrain extends React.Component{
    render() {
        const ButtonTrainContainer = {
            marginTop: '50px',
            marginLeft: '5px',
            marginRight: '5px',
            width: '100%',
            height: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            borderRadius: '8px',
            backgroundColor: '#464AA6'
        }
        const ButtonTrain = {
            textTransform: 'uppercase',
            color: '#F2F2F2',
            fontFamily: "'Roboto Mono', monospace'",
            fontSize: '4rem'
        }
        return (
            <>
                <Link to='/click' className={"link-to-train"} style={ButtonTrainContainer}>
                    <div className={"contain-train-button"} style={ButtonTrain}>
                        Train
                    </div>
                </Link>
            </>
        )
    }
}