import './button-click.css'

const ButtonClick = ({ content }) => {
    return (
        <div className="click-button-container" data-content={content}>
            <button className={"btn"}>{ content }</button>
        </div>
    )
}


export default ButtonClick
