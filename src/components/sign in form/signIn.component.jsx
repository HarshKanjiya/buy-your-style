import { useState } from "react";
import { SignInWithGooglePopup , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Btn from '../button/button.component';
import './sign-in-form.styles.scss';




const SignInForm = () => {

    const [ email , setEmail] = useState('');
    const [ password , setPassword] = useState('');


    // handling submit of form
    const handleSubmit = async() => {
        

    }


    const logGoogleUser = async () => {
        const { user } = await SignInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };



    return(
        <div className="sign-in-container">
            <h2>Already have an Account ?</h2>
            <span>Sign in here</span>

            
                <FormInput
                label="email"
                required 
                type='email'
                onChange={(event)=>{setEmail(event.target.value)}}
                name="email"
                value={email} />

                <FormInput
                label="password"
                required 
                type='password'
                onChange={(event)=>{setPassword(event.target.value)}} 
                name="password"
                value={password} />

                <div className="btn-container">
                    <Btn onClick={handleSubmit}>sign in</Btn>
                    
                    <p>or</p>
                    
                    <Btn onClick={logGoogleUser} buttonType='google'>google</Btn>
                </div>
        </div>
    )
}
export default SignInForm;