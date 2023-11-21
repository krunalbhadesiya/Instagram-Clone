import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf0my9da7UGUtuAIk6mRGwaz_FMWFdkM0",
  authDomain: "instagram-clone-ec4e7.firebaseapp.com",
  projectId: "instagram-clone-ec4e7",
  storageBucket: "instagram-clone-ec4e7.appspot.com",
  messagingSenderId: "784343630382",
  appId: "1:784343630382:web:44824b1b78be9f123995bf",
  measurementId: "G-TCYHY7FD19"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDf0my9da7UGUtuAIk6mRGwaz_FMWFdkM0",
//   authDomain: "instagram-clone-ec4e7.firebaseapp.com",
//   projectId: "instagram-clone-ec4e7",
//   storageBucket: "instagram-clone-ec4e7.appspot.com",
//   messagingSenderId: "784343630382",
//   appId: "1:784343630382:web:44824b1b78be9f123995bf",
//   measurementId: "G-TCYHY7FD19"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);