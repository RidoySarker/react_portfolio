import React, { PureComponent, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';
import {  faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import {Link,NavLink} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";

class Footer extends PureComponent {

    constructor() {
        super();
        this.state={
            address:"",
            email:"",
            phone:"",
            facebook:"",
            youtube:"",
            footer_credit:""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppURL.footer).then(result=>{
            this.setState({
                address:result[0]['address'],
                email:result[0]['email'],
                phone:result[0]['phone'],
                facebook:result[0]['facebook'],
                youtube:result[0]['youtube'],
                footer_credit:result[0]['footer_credit']})
        })
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Follow Me</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon  icon={faFacebook}/> Facebook</a><br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon  icon={faYoutube}/> Youtube</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Address</h1>
                        <p className="footerlink">{this.state.address}</p>
                        <p className="footerlink"><FontAwesomeIcon  icon={faEnvelope}/> {this.state.email}</p>
                        <p className="footerlink"><FontAwesomeIcon  icon={faPhone}/> {this.state.phone}</p>
                        </Col>
                         
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Information</h1>
                            <Link className="footerlink" to="/about">About Me</Link><br/>
                            <Link className="footerlink" to="/contact">Contact Me</Link>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Legal</h1>
                            <Link className="footerlink" to="/refund">Refund Policy</Link><br/>
                            <Link className="footerlink" to="/terms">Terms & Condition</Link><br/>
                            <Link className="footerlink" to="/privacy">Privacy Policy</Link>


                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center copyRightSection">
                    <a className="copyRightLink" href="#">{this.state.footer_credit}</a>
                </Container>
            </Fragment>
        )
    }
}

export default Footer