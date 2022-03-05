import "./dice.css"

const Die = ({ roll, number, color }) => {
    console.log(roll, number, color)

    let show

    switch (number) {
        case 1:
            show = [true, false, false, false, false, false, false]
            break;
        case 2:
            show = [false, true, true, false, false, false, false]
            break;
        case 3:
            show = [true, true, true, false, false, false, false]
            break;
        case 4:
            show = [false, true, true, true, true, false, false]
            break;
        case 5:
            show = [true, true, true, true, true, false, false]
            break;
        default:
            show = [false, true, true, true, true, true, true]
            break;
    }

    // TODO: cleanup
    const dotStyle = color !== 'white' ? 'dot whiteDot' : 'dot'

    return (
        <div className={`dice ${color}`}>
            <div style={{ display: show[0] ? 'block' : 'none' }} className={`${dotStyle} dot1`}></div>
            <div style={{ display: show[1] ? 'block' : 'none' }} className={`${dotStyle} dot2`}></div>
            <div style={{ display: show[2] ? 'block' : 'none' }} className={`${dotStyle} dot3`}></div>
            <div style={{ display: show[3] ? 'block' : 'none' }} className={`${dotStyle} dot4`}></div>
            <div style={{ display: show[4] ? 'block' : 'none' }} className={`${dotStyle} dot5`}></div>
            <div style={{ display: show[5] ? 'block' : 'none' }} className={`${dotStyle} dot6`}></div>
            <div style={{ display: show[6] ? 'block' : 'none' }} className={`${dotStyle} dot7`}></div>
        </div>
    )
}

export default Die