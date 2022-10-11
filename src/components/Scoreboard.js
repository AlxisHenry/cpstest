/**
 * React
 */
import React from "react";

/**
 * Css
 */
import './styles/Scoreboard.css'

/**
 * Component : Scoreboard
 */
export default class Scoreboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render()
    {
        return (
            <div className="user__scoreboard">
                { this.props.count } 
                { this.props.timer } 
            </div>
        )
    }

}