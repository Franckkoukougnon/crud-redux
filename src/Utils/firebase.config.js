import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD3mdqNmC75KxIvIrJfiuGV-6rsahuuoWU",
  authDomain: "react-crud-kouk.firebaseapp.com",
  projectId: "react-crud-kouk",
  storageBucket: "react-crud-kouk.appspot.com",
  messagingSenderId: "881203579825",
  appId: "1:881203579825:web:b654c22ceb4be2252f8b90",
});

export const auth = app.auth();
export default app;
