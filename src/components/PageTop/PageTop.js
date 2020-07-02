import React, { PureComponent, Fragment } from 'react'
import {Container,Row,Col} from "react-bootstrap";
class PageTop extends PureComponent {

    render() {
        return (
            <Fragment>
                    <Container fluid={true} className="pageFixedBanner p-0">
                        <div className="pageBannerOverlay">
                            <Container className="pageContent">
                                <Row>
                                    <Col className="text-center">
                                    <h4 className="pageTitle">{this.props.pageTitle}</h4>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
            </Fragment>
        );
    }
}

export default PageTop