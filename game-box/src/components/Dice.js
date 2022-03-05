import { Button, SplitButton, Dropdown } from "react-bootstrap"
import { useState } from "react"
import Die from "./Die"

const { Item } = Dropdown

const Dice = () => {
  const [diceData, setDiceData] = useState([])
  const [colorData, setColorData] = useState({button: 'outline-secondary', dice: 'white'})

  const handleOnClick = () => {
    const randomNum = Math.ceil(Math.random() * 6);
    const newDiceData = { roll: true, number: randomNum, color: colorData.dice }
    setDiceData(data => [...data, newDiceData])
  }

  const handleSelectColor = (event) => {
    switch (event) {
      case 'blue':
        setColorData({button: 'primary', dice: 'blue'})
        break
      case 'green':
        setColorData({button: 'success', dice: 'green'})
        break;
      case 'red':
        setColorData({button: 'danger', dice: 'red'})
        break;
      case 'yellow':
        setColorData({button: 'warning', dice: 'yellow'})
        break;
      default:
        setColorData({button: 'outline-secondary', dice: 'white'})
        break;
    }
  }

  function handleDieClick(roll) {
    console.log(roll)
  }

  return (
    <>
      <div>
        <SplitButton
          style={{ margin: "10px 10px 10px 20px" }}
          variant={colorData.button}
          title="Add Die"
          onClick={handleOnClick}
          onSelect={handleSelectColor}
        >
          <Item eventKey={'white'} >White</Item>
          <Item style={{ color: '#DC3545' }} eventKey={'red'}>Red</Item>
          <Item style={{ color: '#007BFF' }} eventKey={'blue'}>Blue</Item>
          <Item style={{ color: '#28A745' }} eventKey={'green'}>Green</Item>
          <Item style={{ color: '#FFC107' }} eventKey={'yellow'}>Yellow</Item>
        </SplitButton>
        <Button
          variant="outline-secondary"
        >
          Roll
        </Button>
      </div>
      {
        diceData.map((die, i) => (
          <Die
            key={i}
            roll={die.roll}
            number={die.number}
            color={die.color}
            handleDieClick={handleDieClick}
          />
        ))
      }
    </>
  )
}

export default Dice