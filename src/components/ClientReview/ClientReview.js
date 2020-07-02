import React, { PureComponent, Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import clientimage from '../../asset/image/clientimage.jpg'
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";
import {Link} from "react-router-dom";
class ClientReview extends PureComponent {

    constructor() {
        super();
        this.state={
            mydata:[]
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        RestClient.GetRequest(AppURL.ClientReview).then(result=>{
            this.setState({mydata:result})
        })
      }
    render() {
        var settings = {
            autoplaySpeed:3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

            const myList=this.state.mydata;
            const myView=myList.map(myList=>{
                return <div>
                    <Row className="text-center justify-content-center">  <Col lg={6} md={6} sm={12}>
                    <img className="circleImg" src={myList.client_image}/>
                    <h1 className="serviceName">{myList.client_title}</h1>
                    <p className="serviceDescription" >{myList.client_description}</p>
                </Col>
                    </Row>
                </div>

            });
        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceMainTitle">Client Review</h1>
                    <Slider {...settings}>

                                {myView}

                    </Slider>
                </Container>
            </Fragment>

        );
    }
}

export default ClientReview