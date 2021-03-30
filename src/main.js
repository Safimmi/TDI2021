import { createApp } from "vue";
import firebase from 'firebase';
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDcZXUIW78bkB_Iuzp5Mzc4u5UZRnlqvAg",
  authDomain: "multirush-b945a.firebaseapp.com",
  projectId: "multirush-b945a",
  storageBucket: "multirush-b945a.appspot.com",
  messagingSenderId: "1057218727804",
  appId: "1:1057218727804:web:761cf906d89d8e4ec35ef9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
