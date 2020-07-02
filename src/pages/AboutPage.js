import React, { PureComponent, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

class AboutPage extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pageTitle="About Me"/>
                <About/>
                <Footer/>
            </Fragment>  
        );
    }
}

export default AboutPage