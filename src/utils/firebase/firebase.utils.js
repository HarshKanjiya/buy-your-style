import { initializeApp } from 'firebase/app';
import { getAuth,
         signInWithPopup, 
         GoogleAuthProvider       
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


export const auth = getAuth();
export const SignInWithGooglePopup = () =>signInWithPopup(auth, provider);

export const db = getFirestore();

export  const createUserDocumentFromAuth = async (userAuth)=>{
  const userDocRef = doc(db , 'users' , userAuth.uid);
  
  const userSnap = await getDoc(userDocRef);
  console.log(userSnap.exists())
  if(!userSnap.exists()){
    const { displayName , email } = userAuth;
    const createdAt = new Date();


    try{
      await setDoc(userDocRef, {displayName , email , createdAt});
    } catch (error){
      console.log('error while making user :',error.massage);
    }
  }
 

  return userDocRef;
  
}