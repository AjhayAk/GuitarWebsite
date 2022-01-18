import React, { Component } from 'react' 
import { Nav,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import './Navbar.css'
import { Link,BrowserRouter as Router,Route } from 'react-router-dom'
import Guitartfahome from './Home'
import GuitartfaVidLns from './VideoLessons'



class TheNavbar extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            home: true,
            lesson: false,
		
        }          
    }

  render () {
    return (
        <div class="col-">
            <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><h1 className="navText my-auto" style = {{textDecoration:'none', color:'pink' }} >LetsLearnGuitar</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
                    <h4><Nav.Link className="mr-5"><Link to='/home' style = {{textDecoration:'none', color:'light-blue' }}><span className="fa fa-home"></span> Home </Link></Nav.Link></h4>      
                    <h4><Nav.Link className="mr-5 "><Link to='/lessons' style = {{textDecoration:'none', color:'light-blue' }}><span className="fa fa-play-circle"></span> Learn </Link></Nav.Link></h4>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
		<Route exact path="/home" component={Guitartfahome}></Route>
        <Route exact path="/lessons" component={GuitartfaVidLns}></Route>
        </Router>
    </div>
    )
  };
}
export default TheNavbar
