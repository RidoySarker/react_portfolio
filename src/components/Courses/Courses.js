import React, { PureComponent, Fragment } from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import webimage from '../../asset/image/web.jpg'
import { Link } from 'react-router-dom';
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";

class Courses extends PureComponent {

    constructor() {
        super();
        this.state={
            mydata:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppURL.CourceHome).then(result=>{
            this.setState({mydata:result})
        })
    }

    render() {
        const myList=this.state.mydata;
        const myView=myList.map(myList=>{
            return                       <Col lg={6} md={12} sm={12}>
                <Row>
                    <Col lg={6} md={6} sm={12} className="p-3">
                        <img className="webimg" src={myList.small_image}/>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <h5 className="text-justify courseTitle">{myList.short_title}</h5>
                        <p className="text-justify projectCardDes">{myList.short_description}</p>
                        <Link className="courseDetails float-left" to="/coursedetails">Details</Link>
                    </Col>
                </Row>
            </Col>

        })

        return (
          <Fragment>
              <Container className="text-center">
                  <h1 className="serviceMainTitle">Our Courses</h1>
                  <Row>
                      {myView}
                  </Row>
              </Container>
          </Fragment>
        );
    }
}

export default Courses