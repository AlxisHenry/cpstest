/**
 * React
 */
import React from "react"

/**
 * Css
 */
import './styles/Click.css'

/**
 * Components
 */
import ButtonClick from "../components/ButtonClick"

/**
 * Page: ClickTest
 */
export default class ClickTest extends React.Component {
    render() {
        return (
            <section className={"click-page-content"}>
                <ButtonClick content={"click on me !"}/>
                {/* Info sur le tour */}
                {/* Après 10s affichage du résultat et  */}
            </section>
        )
    }
}
