import React, { PureComponent, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";
import ReactHtmlParser from "react-html-parser";

class RefundPolicy extends PureComponent {

    constructor() {
        super();
        this.state={
            refund:""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppURL.information).then(result=>{
            this.setState({refund:result[0]['refund']})
        })
    }

    render() {
        return (
          <Fragment>
              <Container className="mt-5">
                  <Row>
                      <Col lg={12} md={12} sm={12}>
                          {ReactHtmlParser(this.state.refund)}
                      </Col>
                  </Row>
              </Container>
          </Fragment>  
        );
    }
}

export default RefundPolicy