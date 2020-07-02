import React, { PureComponent, Fragment } from 'react'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import whiteLogo from '../../asset/image/navlogo.svg'
import blueLogo from '../../asset/image/navlogoScroll.svg'
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
class TopNavigation extends PureComponent {

    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navBack:"navBackground",
            navBarItem:"navItem",
            navVariant:"dark",
            pageTitle:props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll',navBarLogo:[blueLogo],navBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:'navTitle', navBarLogo:[whiteLogo],navBack:'navBackground',navBarItem:'navItem'})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
     }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBack} fixed="top" collapseOnSelect expand="lg">
                <Navbar.Brand className={this.state.navBarTitle}> <NavLink to="/"><img src={this.state.navBarLogo}/></NavLink>Ridoy Sarker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                
                    </Nav>
                    <Nav>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/services">SERVICES</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/courses">COURSES</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                        <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Fragment>  
        );
    }
}

export default TopNavigation