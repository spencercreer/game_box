import { Container, Row, Col, InputGroup, Alert, FormControl, Button } from "react-bootstrap"
import { useState, useEffect } from "react"


const ScoreCard = () => {
    const [rounds, setRounds] = useState("")
    const [newPlayer, setNewPlayer] = useState("")
    const [playersData, setPlayersData] = useState([])

    const handleInputRounds = (event) => {
        let gameRounds = event.target.value
        if (gameRounds > 20)
            gameRounds = 20
        else if (gameRounds <= 0)
            gameRounds = ""
            
        setRounds(gameRounds)
    }

    const handleInputPlayer = (event) => {
        setNewPlayer(event.target.value)
    }

    const handleAddPlayer = () => {
        const newPlayerData = { name: newPlayer, rounds: [], totalScore: null }
        setPlayersData(data => [...data, newPlayerData])
    }

    return (
        <>
            <Container>
                <InputGroup className="m-3">
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
                        // onClick={handleAddPlayer}
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
                        <Alert
                            style={{ width: '45px', height: '30px', padding: '5px', margin: '0px', borderRadius: '10px 0px 0px 10px' }}
                            variant="secondary"
                        >
                            1
                        </Alert>
                        <Alert
                            style={{ width: '45px', height: '30px', padding: '5px', margin: '0px', borderRadius: '10px 0px 0px 10px' }}
                            variant="secondary"
                        >
                            2
                        </Alert>
                        <Alert
                            style={{ width: '45px', height: '30px', padding: '5px', margin: '0px', borderRadius: '10px 0px 0px 10px' }}
                            variant="secondary"
                        >
                            Total
                        </Alert>
                    </div>
                    {
                        playersData.map(player => (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Alert
                                    style={{ width: '45px', height: '30px', padding: '5px', marginBottom: '0px', display: 'inline', borderRadius: '10px 10px 0px 0px' }}
                                    variant="primary"
                                >
                                    SC
                                </Alert>
                                <FormControl
                                    className="primary"
                                    style={{ width: '45px', height: '30px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                                />
                                <FormControl
                                    className="primary"
                                    style={{ width: '45px', height: '30px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                                />
                                <FormControl
                                    className="primary"
                                    style={{ width: '45px', height: '30px', display: 'inline', borderRadius: '0' }}
                                    disabled
                                />
                            </div>
                        ))
                    }

                </div>
                {/* <Row>
                    <div
                        style={{ width: '45px', height: '30px', padding: '5px', marginBottom: '0px', display: 'inline', borderRadius: '10px 0px 0px 10px' }}
                        variant="secondary"
                    ></div>
                    <Alert
                        style={{ width: '45px', height: '30px', padding: '5px', marginBottom: '0px', display: 'inline', borderRadius: '10px 10px 0px 0px' }}
                        variant="primary"
                    >
                        SC
                    </Alert>
                    <Alert
                        style={{ width: '45px', height: '30px', padding: '5px', marginBottom: '0px', display: 'inline', borderRadius: '10px 10px 0px 0px' }}
                        variant="success"
                    >
                        SC
                    </Alert>
                    <Alert
                        style={{ width: '45px', height: '30px', padding: '5px', marginBottom: '0px', display: 'inline', borderRadius: '10px 10px 0px 0px' }}
                        variant="danger"
                    >
                        SC
                    </Alert>
                    <Alert
                        style={{ width: '45px', height: '30px', padding: '5px', marginBottom: '0px', display: 'inline', borderRadius: '10px 10px 0px 0px' }}
                        variant="warning"
                    >
                        SC
                    </Alert>
                </Row>
                <Row>
                    <Alert
                        style={{ width: '45px', padding: '5px', marginBottom: '0px', display: 'inline', borderRadius: '10px 0px 0px 10px' }}
                        variant="secondary"
                    >
                        1
                    </Alert>
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                    />
                </Row>
                <Row>
                    <Alert
                        style={{ width: '45px', padding: '5px', marginBottom: '0px', display: 'inline', borderRadius: '10px 0px 0px 10px' }}
                        variant="secondary"
                    >
                        2
                    </Alert>
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none', textAlign: 'center' }}
                    />
                </Row>
                <Row>
                    <Alert
                        style={{ width: '45px', padding: '5px', marginBottom: '0px', display: 'inline', borderRadius: '10px 0px 0px 10px' }}
                        variant="secondary"
                    >
                        Total
                    </Alert>
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0' }}
                        disabled
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0' }}
                        disabled
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0' }}
                        disabled
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0' }}
                        disabled
                    />
                </Row> */}
            </Container>
        </>
    )
}

export default ScoreCard