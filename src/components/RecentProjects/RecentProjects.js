import React, { PureComponent, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import RecentProjectimg from '../../asset/image/recentprojects.jpg'
import { Link } from 'react-router-dom';
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";
class RecentProjects extends PureComponent {

    constructor() {
        super();
        this.state={
            mydata:[]
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppURL.ProjectHome).then(result=>{
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
                    <h1 className="serviceMainTitle">Recent Projects</h1>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects