import { Button } from "react-bootstrap"
import { useState } from "react"
import Die from "./Die"

const Dice = () => {
  const [diceData, setDiceData] = useState([])

  const handleOnClick = () => {
    const randomNum = Math.ceil(Math.random()*6);
    const newDiceData = { roll: true, number: randomNum, color: 'white' }
    setDiceData(data => [...data, newDiceData])
  }

  return (
    <>
      <Button
        variant="outline-secondary"
        onClick={handleOnClick}
      >
        Add Die
      </Button>
      {
        diceData.map((die, i) => (
          <Die
            key={i}
            roll={die.roll}
            number={die.number}
            color={die.color}
          />
        ))
      }
    </>
  )
}

export default Dice