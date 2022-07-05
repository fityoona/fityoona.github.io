//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
import React, { useEffect, useRef } from "react";
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";

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
const db = getFirestore(app);
let analytics;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    analytics = getAnalytics(app);
}

type FirebaseContextType = {
    app: FirebaseApp,
    db: Firestore
}
const FirebaseContext = React.createContext<FirebaseContextType>({ app, db });

const FirebaseContextProvider = ({ children }: { children: React.ReactNode }) => {
    const didRunRef = useRef(false);

    useEffect(() => {
        if (didRunRef.current === false) {
            didRunRef.current = true;

            const auth = getAuth();
            signInAnonymously(auth)
                .then(() => {
                    console.log('signInAnonymously', auth.currentUser);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    console.log('onAuthStateChanged-login', user);
                } else {
                    console.log('onAuthStateChanged-logout');
                }
            });
        }
    }, []);

    return (
        <FirebaseContext.Provider value={{ app, db }}>
            {children}
        </FirebaseContext.Provider>
    );
}

export { FirebaseContext, FirebaseContextProvider };