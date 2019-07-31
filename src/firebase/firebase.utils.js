import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBQ1T2C6OryKunGuR05NlkK4oITDosfcpo',
  authDomain: 'crwn-b1b60.firebaseapp.com',
  databaseURL: 'https://crwn-b1b60.firebaseio.com',
  projectId: 'crwn-b1b60',
  storageBucket: '',
  messagingSenderId: '920425020675',
  appId: '1:920425020675:web:d6c4bdeaadfa09b2'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
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
}

export default firebase;