import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import getData from '../../utilities/getData'

class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.getInitialData = this.getInitialData.bind(this);
    }

    componentDidMount(){
        this.getInitialData();
    }

    getInitialData = async() =>{
        try{
            let data = await getData();
            this.setState({ data: data });
        }
        catch(err){
            console.log(err)
        }
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <Row>
                            <Col>
                                <p>Big Mac</p>
                            </Col>
                        </Row>
                        {/* First 1/3rd screen */}
                        <Row>
                            <Col>
                                <p>You are in:{this.state.data}</p>
                                <Row>
                                    <Col xs={6}>
                                        <p>Please enter an amount of money in your local
                            currency</p>
                                    </Col>
                                    <Col xs={6}>
                                        <input type="number" name="userAmount"></input>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* Middle 1/3rd screen */}
                        <Row>
                            <Col>
                                <p>You could buy [#] of Big Macs in your country</p>
                                <p>Your Dollar Purchasing Parity (PPP) is [#]</p>
                                <p>This is a simple lookup to the table</p>
                            </Col>
                        </Row>
                        {/* Last 1/3rd screen */}
                        <Row>
                            <Col>
                                <p>Results compared to random country</p>
                                <p>Random Country: [RANDOM COUNTRY]</p>
                                <p>You could buy [#] of Big Macs in [RAND COUNTRY]</p>
                                <p>with [INPUT]!</p>
                                <p>Your [INPUT] is worth about [#] in [RAND COUNTRY]</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home