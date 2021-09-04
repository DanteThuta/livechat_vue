import { ref } from 'vue'
import {auth} from '../firebase/config'
let error = ref(null);//for Error Handling

let createAccount =async(email,password,displayName) => {
            try{
                // console.log(displayName.value,email.value,password.value);

                //new Tag for creating User Email with Firebase Auth
                let res = await auth.createUserWithEmailAndPassword(email,password)
                if(!res){
                    throw new Error ("Could not create New User")
                }
                
                // to check & update displayName
                res.user.updateProfile({ displayName })
                
                return res;
                // console.log(res.user);
            }
            catch(err){
                error.value = err.message;
                console.log(err.message);
            }
}


let useSignup = () => {
    
    return {error,createAccount}
}

export default useSignup;