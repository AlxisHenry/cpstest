import './button-click.css'
import React from "react";

class ButtonClick extends React.Component {

    constructor(props) {
        super(props);
    }

    CountClicks(el) {
        if (el.target.classList.contains('start-click-test')) {
            el.target.classList.remove('start-click-test')
            el.target.innerText = ''
        }
    }

    render()
    {
        return (
            <div className="click-button-container" data-content={this.props.content}>
                <button onClick={this.CountClicks.bind(this)} className={"btn click-button start-click-test"}>{this.props.content}</button>
            </div>
        )
    }

}

export default ButtonClick
