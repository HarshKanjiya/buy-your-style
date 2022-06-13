
import { initializeApp } from 'firebase/app';
import { getAuth,
         signInWithPopup, 
         GoogleAuthProvider,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUJz5gd0fhwChTudNlfjfcFfpGLG8aWYk",
    authDomain: "buy-your-style.firebaseapp.com",
    projectId: "buy-your-style",
    storageBucket: "buy-your-style.appspot.com",
    messagingSenderId: "708254405017",
    appId: "1:708254405017:web:205b745f376f70bb698308"
};
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:"select_account"
});


export const auth = getAuth(firebaseApp);
export const SignInWithGooglePopup = () =>signInWithPopup(auth, provider);
export const db = getFirestore();



// for sign in with google
export  const createUserDocumentFromAuth = async (userAuth,extraInfo)=>{
  if(!userAuth) return;

  const userDocRef = doc(db , 'users' , userAuth.uid);
  const userSnap = await getDoc(userDocRef);

  if(!userSnap.exists()){
    const { displayName , email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName , 
        email , 
        createdAt,
        ...extraInfo  
      }); 
    } catch (error){
      console.log('error while making user :',error.massage);
    }
  }
  return userDocRef;  
}

// for sign-up
export const createAuthUserWithEmailAndPassword = async (email , password) => {
  if (!email || !password ) return;
  return await createUserWithEmailAndPassword(auth , email , password);
  }

// for sign in with email and password 
export const signInUserWithEmailAndPassword = async (email , password) => {
  if (!email || !password ) return;
  return await signInWithEmailAndPassword(auth , email , password);
}

// fot sign out
export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => {
  onAuthStateChanged(auth,callback)
}