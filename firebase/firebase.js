import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase project configuration
  // You can find these details in your Firebase project settings
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  // ...other Firebase project details
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export Firestore instance
const db = firebase.firestore();
export default db;
