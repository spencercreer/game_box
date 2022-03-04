import "./dice.css"

const Die = ({ roll, number, color }) => {
    console.log(roll, number, color)

    // let diceStyle
    // diceStyle = number === 2 ? "dice2" : "dice6"

    // TODO: cleanup
    const dotColor = color !== 'white' ? 'whiteDot' : ''

    return (
        <div className={`dice ${color}`}>
            <div className={`dot ${dotColor} dot1`}></div>
            <div className={`dot ${dotColor} dot2`}></div>
            <div className={`dot ${dotColor} dot3`}></div>
            <div className={`dot ${dotColor} dot4`}></div>
            <div className={`dot ${dotColor} dot5`}></div>
            <div className={`dot ${dotColor} dot6`}></div>
            <div className={`dot ${dotColor} dot7`}></div>
        </div>
    )
}

export default Die