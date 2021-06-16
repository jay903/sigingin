import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCoyhqEgs4K0s00hDPrKCqUD_IbKbjYdoA",
  authDomain: "fir-92ba0.firebaseapp.com",
  databaseURL: "https://fir-92ba0-default-rtdb.firebaseio.com",
  projectId: "fir-92ba0",
  storageBucket: "fir-92ba0.appspot.com",
  messagingSenderId: "172223286929",
  appId: "1:172223286929:web:d86181a6d3b5e33fcfb930"
})

export const auth = app.auth();
export const db=app.firestore();
export default app
