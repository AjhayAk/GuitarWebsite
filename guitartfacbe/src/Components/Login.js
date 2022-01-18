import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import { Link,BrowserRouter as Router,Route } from 'react-router-dom'
import TheNavbar from './Navbar'
import bgimg from './d3.jpg'
import '../App.css'

var firebaseConfig = {
    apiKey: 'AIzaSyAMcHsiqcRj5dClaBnmJzAWiccxJuNV2CA',
    authDomain: 'guitartfawebsite.firebaseapp.com',
    projectId: 'guitartfawebsite',
    storageBucket: 'guitartfawebsite.appspot.com',
    messagingSenderId: '1025998973755',
    appId: '1:1025998973755:web:80618cf92d3ca8d482a51e'
}
firebase.initializeApp(firebaseConfig)
class GuitartfacbeLogin extends Component {
  state = {
    isSignedIn: false 
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => {
            this.setState({isSignedIn: !!user})
            window.location.href('/')
        }
    )
  }
  
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }
 
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div class="col-" style={{ backgroundImage: `url(${bgimg})`,backgroundSize: "cover",backgroundPosition: "center",height: "100vh",color: "#f5f5f5" }}> 
      <br/>
	  <br/>
	  <br/>
	  <br/>
	  <br/>
	  <br/>
	  <br/>
	  <br/>
	  <br/>
      <br/>
	  <br/>
	  <br/>
	  <h1><center><p>LetsLearnGuitar<br></br></p></center></h1>
          <StyledFirebaseAuth uiConfig={ this.uiConfig } firebaseAuth={ firebase.auth() }/>
        </div>
      )
    }
    return (
      <div class="col-">
        <TheNavbar/>
        <a className='d-flex justify-content-end' onClick={() => firebase.auth().signOut()}><h4><button color='blue'>LOGOUT</button></h4></a>
      </div>
    )
  };
}
export default GuitartfacbeLogin