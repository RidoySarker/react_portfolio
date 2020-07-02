import React, { PureComponent, Fragment } from 'react'
import {Container,Row,Col} from "react-bootstrap";
import graphicslogo from '../../asset/image/graphics.svg'
import mobilelogo from '../../asset/image/mobile.svg'
import weblogo from '../../asset/image/web.svg'
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";
class Service extends PureComponent {

    constructor() {
        super();
        this.state={
            mydata:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppURL.Service).then(result=>{
            this.setState({mydata:result})
        })
    }

    render() {
        const myList=this.state.mydata;
        const myView=myList.map(myList=>{
            return                         <Col lg={4} md={6} sm={10}>
                <div className="serviceCard text-center">
                    <img src={myList.service_image}/>
                    <h2 className="serviceName">{myList.service_name}</h2>
                    <p className="serviceDescription">{myList.service_description}</p>
                </div>
            </Col>

        })
        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>
                        {myView}

                    </Row>
                </Container>
            </Fragment>
            
        );
    }
}

export default Service