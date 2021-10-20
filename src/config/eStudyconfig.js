import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAwpHVnE9uU1SJXiRMFQ2S_MQJk-BJkC9M",
  authDomain: "estudylanka.firebaseapp.com",
  projectId: "estudylanka",
  storageBucket: "estudylanka.appspot.com",
  messagingSenderId: "614334236295",
  appId: "1:614334236295:web:d63e7774fb37c90e9b9a22",
  measurementId: "G-1YYMVN6N1Z"
};

const app = initializeApp(firebaseConfig);

export default firebase;