import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Footer from "../components/Footer/Footer";

class ProjectDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            projectPassid:match.params.projectid,
            projectName:match.params.projectName,
        }
    }


    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details"/>
                <PageTop pageTitle={this.state.projectName} />
                <ProjectDetails id={this.state.projectPassid}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;