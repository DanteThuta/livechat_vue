import { ref } from 'vue'
import {auth} from '../firebase/config'

let error = ref(null);

let SignIn = async(email,password) => {
        try{
                let res = await auth.signInWithEmailAndPassword(email,password);
                if(!res){
                    throw new Error("Can't Login!")
                }
                // console.log(res.user);
                return res;
            }
            catch(err){
                error.value = err.message;
            }
}

let useLogin = () => {
     return {error,SignIn}
}

export default useLogin;