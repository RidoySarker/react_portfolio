import React, { PureComponent, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'
import Footer from '../components/Footer/Footer'
class PrivacyPage extends PureComponent {
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <Fragment>
            <TopNavigation title="Privacy Policy"/>
            <PageTop pageTitle="Privacy Policy Code Minar"/>
            <PrivacyPolicy/>
            <Footer/>
    </Fragment>  
        );
    }
}

export default PrivacyPage