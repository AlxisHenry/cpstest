import ButtonClick from "../../components/Button-Click/button-click"
import React from "react"
import './Click.css'

export class ClickTest extends React.Component {
    render() {
        return (
            <section className={"click-page-content"}>
                <ButtonClick content={"It's your turn, click on me !"}/>
                {/* Info sur le tour */}
                {/* Après 10s affichage du résultat et  */}
            </section>
        )
    }
}
