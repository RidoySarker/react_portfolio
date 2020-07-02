import React, { PureComponent, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import "video-react/dist/video-react.css";
import {Player,BigPlayButton} from 'video-react'
class CourseDetails extends PureComponent {


    render() {
        return (
            <Fragment>
                    <Container fluid={true} className="pageFixedBanner p-0">
                        <div className="pageBannerOverlay">
                            <Container className="CourseContent">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <h3 className="CourseFullTitle">Creating API with PHP and React</h3>
                                        <h5 className="CourseSubTitle">Total Class:30</h5>
                                        <h5 className="CourseSubTitle">Total Student:30</h5>
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                        <p className="CourseSubDes">The overall skills gained from tthis project based courses will prepare you for any type of project development. In this course you will be taught how to write a complete project with React JS including User Panel + Admin Panel.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className="serviceName">Skill Now</h1>
                                <ul>
                                    <li className="serviceDescription">Use of JSON in Application</li>
                                    <li >React's required plugins to project</li>
                                    <li >Creating API with PHP and using React JS</li>
                                    <li >React Bootstrap for Designing</li>
                                    <li >Project Implementation with Database on Real Server</li>
                                </ul>
                                <Button>Buy Now</Button>
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center"/>
                            </Player>
                            </Col>
                        </Row>
                    </Container>
            </Fragment>
        );
    }
}

export default CourseDetails