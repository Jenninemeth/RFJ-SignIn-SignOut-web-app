import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDZRbGaxLQwOjnytUnlC3p-T1f8L5eEhQg",
        authDomain: "rfj-daily-sign-in-db.firebaseapp.com",
        databaseURL: "https://rfj-daily-sign-in-db.firebaseio.com",
        projectId: "rfj-daily-sign-in-db",
        storageBucket: "rfj-daily-sign-in-db.appspot.com",
        messagingSenderId: "776667211495",
        appId: "1:776667211495:web:5b1acba14c7b5e73cf2442"
      };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
    