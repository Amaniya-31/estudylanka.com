// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwpHVnE9uU1SJXiRMFQ2S_MQJk-BJkC9M",
  authDomain: "estudylanka.firebaseapp.com",
  projectId: "estudylanka",
  storageBucket: "estudylanka.appspot.com",
  messagingSenderId: "614334236295",
  appId: "1:614334236295:web:d63e7774fb37c90e9b9a22",
  measurementId: "G-1YYMVN6N1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;