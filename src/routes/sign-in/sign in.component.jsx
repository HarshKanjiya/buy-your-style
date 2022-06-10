import { SignInWithGooglePopup , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await SignInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };  
    return (
        <button onClick={logGoogleUser}>
            with google
        </button>
    )
}

export default SignIn;