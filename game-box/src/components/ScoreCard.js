import { Container, InputGroup, Alert, FormControl, Button } from "react-bootstrap"
import { useState } from "react"

const ScoreCard = () => {
    const [rounds, setRounds] = useState("")
    const [newPlayer, setNewPlayer] = useState("")
    const [playersData, setPlayersData] = useState([])

    const handleInputRounds = (event) => {
        let gameRounds = parseInt(event.target.value)
        if (gameRounds > 20)
            gameRounds = 20
        else if (gameRounds <= 0 || isNaN(gameRounds))
            gameRounds = ""

        setRounds(gameRounds)
    }

    const handleSetRounds = (value) => {
        console.log(value)
    }

    const handleInputPlayer = (event) => {
        setNewPlayer(event.target.value)
    }

    const handleAddPlayer = () => {
        const newPlayerData = { name: newPlayer, rounds: [...Array(rounds > 0 ? rounds : 0).keys()], totalScore: null }
        setPlayersData(data => [...data, newPlayerData])
    }

    const handleInputScore = (event, playerIndex, roundIndex) => {
        const roundScore = event.target.value
        console.log(playersData)
        console.log(playersData[playerIndex]?.rounds[roundIndex])
        console.log(event.target.value)
        console.log(playerIndex)
        console.log(roundIndex)
    }

    const getPlayerColor = (playerIndex) => {
        return (playerIndex + 1) % 4 === 0 ? 'warning' : (playerIndex + 1) % 2 === 0 ? 'success' : (playerIndex) % 4 === 0 ? 'primary' : 'danger'
    }

    return (
        <>
            <Container>
                <InputGroup className="my-3">
                    <FormControl
                        type="number"
                        min="0"
                        max="20"
                        value={rounds}
                        placeholder="Game Rounds"
                        onChange={handleInputRounds}
                    />
                    <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        onClick={(value) => handleSetRounds(value)}
                    >
                        Create Scorecard
                    </Button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Player's Name"
                        onChange={handleInputPlayer}
                    />
                    <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        onClick={handleAddPlayer}
                    >
                        Add
                    </Button>
                </InputGroup>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div
                            style={{ width: '45px', height: "30px", padding: '5px', margin: '0px', borderRadius: '10px 0px 0px 10px' }}
                            variant="secondary"
                        ></div>
                        {
                            [...Array(rounds > 0 ? rounds : 0).keys()].map((round) => (
                                <Alert
                                    key={round}
                                    style={{ width: '45px', height: '30px', padding: '5px', margin: '0px', borderRadius: '10px 0px 0px 10px' }}
                                    variant="secondary"
                                >
                                    {round + 1}
                                </Alert>
                            ))
                        }
                        <Alert
                            style={{ width: '45px', height: '30px', padding: '5px', margin: '0px', borderRadius: '10px 0px 0px 10px' }}
                            variant="secondary"
                        >
                            Total
                        </Alert>
                    </div>
                    {
                        playersData.map((player, i) => (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Alert
                                    key={i}
                                    style={{ width: '45px', height: '30px', padding: '5px', marginBottom: '0px', display: 'inline', borderRadius: '10px 10px 0px 0px' }}
                                    variant={getPlayerColor(i)}
                                >
                                    {player.name.toUpperCase().substring(0, 3)}
                                </Alert>
                                {
                                    player.rounds.map((round, i) => (
                                        <FormControl
                                            type="number"
                                            className="primary"
                                            style={{ width: '45px', height: '30px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                                            onChange={(event, i) => handleInputScore(event, i, 1)}
                                        />
                                    ))
                                }
                                <FormControl
                                    className="primary"
                                    style={{ width: '45px', height: '30px', display: 'inline', borderRadius: '0' }}
                                    disabled
                                />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    )
}

export default ScoreCard