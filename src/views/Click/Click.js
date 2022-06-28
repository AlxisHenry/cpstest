import ButtonClick from "../../components/Button-Click/button-click"
import React from "react"
import './Click.css'

export class ClickTest extends React.Component {
    render() {
        return (
            <section className={"click-page-content"}>
                <ButtonClick content={"Click Here For Start"}/>
            </section>
        )
    }
}
