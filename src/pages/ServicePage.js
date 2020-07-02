import React, { PureComponent, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import Service from '../components/Service/Service'
import Contact from '../components/Contact/Contact'

class ServicePage extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Our Services"/>
                <PageTop pageTitle="My Services"/>
                <Service/>
                <Contact/>
                <Footer/>
            </Fragment>  
        );
    }
}

export default ServicePage