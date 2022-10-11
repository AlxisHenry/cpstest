/**
 * React
 */
import React from "react";
import { useState, useEffect } from 'react';

/**
 * Css
 */
import './styles/ButtonClick.css'

/**
 * Components
 */
import Scoreboard from "./Scoreboard"

/**
 * Component : ButtonClick
 */
export default class ButtonClick extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            timerStatus: false,
            timer: 0
        }
    }
    
    start() {
        this.startTimer()
        this.click()
    }
    
    startTimer() {
        if (!this.state.timerStatus) {
            this.setState(() => ({
                timerStatus: true
            }))

            let upTimer = setInterval(this.checkTimer.bind(this), 10)
        } 
    }

    checkTimer() {
        if (this.state.timer === 10) {
            clearInterval("upTimer")
        }
        this.setState((state, props) => ({
            timer: parseFloat((state.timer + 0.01).toFixed(2))
        }))
    }

    click() {
        this.setState((state, props) => ({clicks: state.clicks + 1}))
    }

    render()
    {
        return (
            <>
                <div className="button__container" data-content={this.props.content}>
                    <button 
                    onClick={this.start.bind(this)} 
                    className={"btn"}>
                        {this.props.content}
                    </button>
                </div>
                <Scoreboard count={this.state.clicks} timer={this.state.timer} />
            </>
        )
    }


}