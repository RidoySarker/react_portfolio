import React, { PureComponent, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import RefundPolicy from '../components/RefundPolicy/RefundPolicy'
import Footer from '../components/Footer/Footer'
class RefundPage extends PureComponent {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
        <Fragment>
                <TopNavigation title="Refund Policy"/>
                <PageTop pageTitle="Refund Policy Code Minar"/>
                <RefundPolicy/>
                <Footer/>
        </Fragment>  
        );
    }
}

export default RefundPage