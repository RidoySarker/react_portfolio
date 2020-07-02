import React, { PureComponent, Fragment } from 'react'
import {Container,Row,Col,Button,Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import VisibilitySensor from "react-visibility-sensor";

import CountUp from 'react-countup';
class Summary extends PureComponent {

    render() {
        return (
            <Fragment>
                    <Container fluid={true} className="SummaryBanner SummarySection p-0">
                        <div className="SummaryBannerOverlay">
                            <Container className="text-center">
                                <Row>
                                   <Col lg={8} md={6} sm={12}>
                                       <Row className="countSection">
                                           <Col>
                                           <h1 className="countNumber">
                                           <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>                       
                                           </h1>
                                           <h4 className="countTitle">Total Projects</h4>
                                           <hr className="bg-white w-5"></hr>
                                           </Col>
                                           <Col>
                                           <h1 className="countNumber">
                                           <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                           </h1>
                                           <h4 className="countTitle">Total Projects</h4>
                                           <hr className="bg-white w-5"></hr>
                                           </Col>
                                       </Row>
                                   </Col>

                                   <Col lg={4} md={6} sm={12}>
                                   <Card className="centerCard">
                                        <Card.Body>
                                            <Card.Title className="cardTitle">How i Work</Card.Title>
                                            <Card.Text>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconCaed" icon={faCheckCircle}/> Requirement Gathering</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconCaed" icon={faCheckCircle}/> System Analysis</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconCaed" icon={faCheckCircle}/> Code testing</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconCaed" icon={faCheckCircle}/> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                        </Card>
                                   </Col>  
                                </Row>
                            </Container>
                        </div>
                    </Container>
            </Fragment>
        );
    }
}

export default Summary