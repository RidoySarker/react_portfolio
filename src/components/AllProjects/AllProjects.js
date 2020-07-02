import React, {Component, Fragment} from 'react';
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class AllProjects extends Component {

    constructor() {
        super();
        this.state={
            mydata:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppURL.ProjectAll).then(result=>{
            this.setState({mydata:result})
        })
    }
    render() {

        const myList=this.state.mydata;
        const myView=myList.map(myList=>{
            return                         <Col lg={4} md={6} sm={12} className="p-3">
                <Card className="projectCard">
                    <Card.Img variant="top" src={myList.project_image_one} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">{myList.project_name}</Card.Title>
                        <Card.Text className="projectCardDes">
                            {myList.project_description}
                        </Card.Text>
                        <Button variant="primary"><Link className="btnStyle" to={"projectdetails/"+myList.id+"/"+myList.project_name}>Details</Link></Button>
                    </Card.Body>
                </Card>

            </Col>

        })
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">All Projects</h1>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProjects;