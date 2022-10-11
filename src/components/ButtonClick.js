/**
 * React
 */
import React from "react";

/**
 * Css
 */
import './styles/ButtonClick.css'

/**
 * Component : ButtonClick
 */
export default class ButtonClick extends React.Component {

    constructor(props) {
        super(props);
        this.state = {clicks: 0}
    }

    incrementClicks(e) {
        this.setState((state, props) => ({clicks: state.clicks + 1}))
    }

    render()
    {
        return (
            <div className="click-button-container" data-content={this.props.content}>
                <button onClick={this.incrementClicks.bind(this)} className={"btn click-button start-click-test"}>
                    {this.props.content}
                </button>
            </div>
        )
    }

}