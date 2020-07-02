import React, { PureComponent, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import TermsCondition from '../components/TermsCondition/TermsCondition'
import Footer from '../components/Footer/Footer'
class TermsPage extends PureComponent {
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <Fragment>
            <TopNavigation title="Terms & Conditions"/>
            <PageTop pageTitle="Terms & Conditions Code Minar"/>
            <TermsCondition/>
            <Footer/>
    </Fragment>  
        );
    }
}

export default TermsPage