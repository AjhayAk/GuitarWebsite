import firebase from 'firebase' ;

var firebaseConfig = {
    apiKey: "AIzaSyAMcHsiqcRj5dClaBnmJzAWiccxJuNV2CA",
    authDomain: "guitartfawebsite.firebaseapp.com",
    projectId: "guitartfawebsite",
    storageBucket: "guitartfawebsite.appspot.com",
    messagingSenderId: "1025998973755",
    appId: "1:1025998973755:web:80618cf92d3ca8d482a51e"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;