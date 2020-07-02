import React, { PureComponent, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";
import ReactHtmlParser from "react-html-parser";

class TermsCondition extends PureComponent {

    constructor() {
        super();
        this.state={
            terms:""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppURL.information).then(result=>{
            this.setState({terms:result[0]['terms']})
        })
    }
    render() {
        return (
            <Fragment>
              <Container className="mt-5">
                  <Row>
                      <Col lg={12} md={12} sm={12}>
                          {ReactHtmlParser(this.state.terms)}
                      </Col>
                  </Row>
              </Container>
            </Fragment>
        );
    }
}

export default TermsCondition