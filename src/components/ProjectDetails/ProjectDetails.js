import React, { PureComponent, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import RecentProjectimg from '../../asset/image/recentprojects.jpg'
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";
import ReactHtmlParser from "react-html-parser";
import {Link} from "react-router-dom";
class ProjectDetails extends PureComponent {

    constructor(props) {
        super();
        this.state={
            myprojectid:props.id,
            project_image_two:"",
            project_features:"",
            project_description:"",
            live_preview:"",
            project_name:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppURL.Projectdetails+this.state.myprojectid).then(result=>{
            this.setState({
                project_image_two:result[0]['project_image_two'],
                project_features:result[0]['project_features'],
                project_description:result[0]['project_description'],
                live_preview:result[0]['live_preview'],
                project_name:result[0]['project_name'],

            })

        }).catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <img className="pImg" src={this.state.project_image_two}/>


                        </Col>

                        <Col lg={6} md={6} sm={12}>
                                <h2>{this.state.project_name}</h2>
                                <p>{this.state.project_description}</p>
                            {ReactHtmlParser(this.state.project_features)}
                                <Button variant="primary"><Link className="btnStyle" to={this.state.live_preview}>More Info</Link></Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails