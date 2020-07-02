import React, { PureComponent, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";

class PrivacyPolicy extends PureComponent {

    constructor() {
        super();
        this.state={
            privacy:""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppURL.information).then(result=>{
            this.setState({privacy:result[0]['privacy']})
        })
    }
    render() {
        return (
            <Fragment>
              <Container className="mt-5">
                  <Row>
                      <Col lg={12} md={12} sm={12}>
                          {ReactHtmlParser(this.state.privacy)}
                      </Col>
                  </Row>
              </Container>
            </Fragment>
        );
    }
}

export default PrivacyPolicy