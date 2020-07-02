import React, { PureComponent, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'

class CoursePage extends PureComponent {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Our Course"/>
                <PageTop pageTitle="All Course"/>
                <AllCourses/>
                <Footer/>
            </Fragment>  
        );
    }
}

export default CoursePage