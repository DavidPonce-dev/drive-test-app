import firebase from "firebase/app";
import "firebase/auth";

import store from "../store";

const firebaseConfig = {
  apiKey: "AIzaSyAwrNxO5bVwoydQyhVX8vSXoXQpRNHfTT4",
  authDomain: "drive-test-3cf07.firebaseapp.com",
  projectId: "drive-test-3cf07",
  storageBucket: "drive-test-3cf07.appspot.com",
  messagingSenderId: "676651288586",
  appId: "1:676651288586:web:b309e16f76ec552ed677f3",
  measurementId: "G-5V65S6GVSB"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
