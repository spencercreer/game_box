import { Container, Row, Col, InputGroup, Alert, FormControl, Button } from "react-bootstrap"

const ScoreCard = () => {
    return (
        <>
            <Container>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
                <Row>
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
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none' }}
                    />
                </Row>
                <Row>
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none' }}
                    />
                    <FormControl
                        className="primary"
                        style={{ width: '45px', display: 'inline', borderRadius: '0', boxShadow: 'none' }}
                    />
                </Row>
                 <Row>
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
                </Row>
            </Container>
        </>
    )
}

export default ScoreCard