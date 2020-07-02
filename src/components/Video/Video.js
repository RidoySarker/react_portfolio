import React, { PureComponent, Fragment } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import "video-react/dist/video-react.css";
import {Player,BigPlayButton} from 'video-react'
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";
class Video extends PureComponent {

    constructor(){
        super();
        this.state={
            show:false,
            video_description:"",
            video_url:"",
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

    componentDidMount() {
        RestClient.GetRequest(AppURL.videohome).then(result=>{
            this.setState({
                video_description:result[0]['video_description'],
                video_url:result[0]['video_url']})
        })
    }

    render() {
        return (
          <Fragment>
              <Container className="text-center">
                  <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <div>
                                <p className="videoTitle">How i Do</p>
                                <p>{this.state.video_description}</p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle}/></p>
                            </div>
                        </Col>
                  </Row>
              </Container>
              <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                        <source src={this.state.video_url}/>
                        <BigPlayButton position="center"/>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.modalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
          </Fragment>  
        );
    }
}

export default Video