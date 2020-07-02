import React, { PureComponent, Fragment } from 'react'
import TopBanner from "../components/TopBanner/TopBanner";
import Service from "../components/Service/Service";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import Footer from "../components/Footer/Footer";
class HomePage extends PureComponent {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Ridoy Chandra Sarker"/>
                <TopBanner/>
                <Service/>
                <Analysis/>
                <Summary/>
                <RecentProjects/>
                <Courses/>
                <Video/>
                <ClientReview/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage