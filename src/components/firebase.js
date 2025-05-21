// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a review
export const addReview = async (review) => {
  try {
    const docRef = await addDoc(collection(db, "reviews"), review);
    console.log("Review added with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding review: ", error);
    return false;
  }
};

// Function to fetch all reviews
export const getReviews = async () => {
  const querySnapshot = await getDocs(collection(db, "reviews"));
  const reviews = [];
  querySnapshot.forEach((doc) => {
    reviews.push(doc.data());
  });
  return reviews;
};