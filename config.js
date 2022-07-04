import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBY-QsQdkGa3GOibEM1-tv3bohk1IS-vyA",
  authDomain: "fityoona-github-io.firebaseapp.com",
  projectId: "fityoona-github-io",
  storageBucket: "fityoona-github-io.appspot.com",
  messagingSenderId: "7016772519",
  appId: "1:7016772519:web:12b8ad261c29796c5e7c82",
  measurementId: "G-6HYD99LC7Q"
};

const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  analytics = getAnalytics(app);
}
