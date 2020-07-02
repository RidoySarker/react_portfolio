import React, { PureComponent, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BarChart, Bar,ResponsiveContainer,XAxis, Tooltip } from 'recharts';
import RestClient from "../../RestAPI/RestClient";
import AppURL from "../../RestAPI/AppURL";
import ReactHtmlParser from 'react-html-parser';
class Analysis extends PureComponent {

    constructor(){
        super();
        this.state={
            data:[],
            desc:""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppURL.ChartData).then(result=>{
            this.setState({data:result})
        })
        RestClient.GetRequest(AppURL.TechDes).then(result=>{
            this.setState({desc:result[0]['tech_description']})
        })
    }
    render() {
        var blue="rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        
                        <Col style={{width:'100%',height:'300px'}} lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                            <BarChart width={100} height={300} data={this.state.data}>
                                <XAxis dataKey="technology"/>
                                <Tooltip/>
                                <Bar dataKey="projects" fill={blue}>
                                </Bar>
                            </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        
                        <Col lg={6} md={12} sm={12}>
                        <p className="text-justify des">{ReactHtmlParser(this.state.desc)}</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis