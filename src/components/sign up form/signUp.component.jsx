import { useState  } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import Btn from '../button/button.component';
import './sign-up-form.styles.scss';

const deafultformFields = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""    
};


const SignUpform = () => {

    const [formFields , setformfields ] = useState(deafultformFields);
    const { displayName , email , password , confirmPassword } = formFields;
    

    // handling change in all fields
    const handleChange = (event) => {
        const { name , value } = event.target;
        setformfields({...formFields,[name]:value})
    }

    const resetFields = () => {
        setformfields(deafultformFields);
    }



    // handling submit of form
    const handleSubmit = async() => {
        if(password !== confirmPassword){
            alert("password do not match to confirm password");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword (email,password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFields();
    
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Email already in use')
            }
            console.log(error);
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Dont have an Account ?</h2>
            <span>Sign up with your  Email and Password</span>

                <FormInput 
                label="displayName"
                required 
                type='text' 
                onChange={handleChange} 
                name="displayName"
                value={displayName} />
        
                <FormInput
                label="email"
                required 
                type='email'
                onChange={handleChange}
                name="email"
                value={email} />

                <FormInput
                label="password"
                required 
                type='password'
                onChange={handleChange} 
                name="password"
                value={password} />

                <FormInput
                label="confirmPassword"
                required 
                type='password'
                onChange={handleChange} 
                name="confirmPassword"
                value={confirmPassword} />

                <div className="btn">
                    <Btn onClick={handleSubmit} >sign up</Btn>
                </div>
        </div>
    )
}
export default SignUpform;