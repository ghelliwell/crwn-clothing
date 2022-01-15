import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDQ9uD_QQFdMYyhvQJdymZVlU-X2m9hQno",
    authDomain: "crwn-db-8b5cd.firebaseapp.com",
    projectId: "crwn-db-8b5cd",
    storageBucket: "crwn-db-8b5cd.appspot.com",
    messagingSenderId: "856474885500",
    appId: "1:856474885500:web:df18b994b60fdd383ad8f9",
    measurementId: "G-RMNK01J9Y6"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log('Creating user');
        }
        catch (error) {
            console.log('Error creating user', error.message);
        }
    } 
    return userRef;
  }
  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  