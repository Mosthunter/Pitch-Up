import firebase from 'firebase'

// change lines below with your own Firebase snippets!
var config = {
  apiKey: "AIzaSyDX-agnFYLZWlyfG3bcOX9eLkOXsGREb5M",
    authDomain: "hhuakati.firebaseapp.com",
    databaseURL: "https://hhuakati.firebaseio.com",
    projectId: "hhuakati",
    storageBucket: "",
    messagingSenderId: "716442786749",
    appId: "1:716442786749:web:bff7ea33fedebc7bfc50d4",
    measurementId: "G-Z2DLC87Y8T"
};

 firebase.initializeApp(config);
export default firebase;