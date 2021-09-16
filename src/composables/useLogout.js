import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config'
let error = ref(null);

let Logout = async() => {
          try{
                await auth.signOut();
                console.log('user Logged Out!');
            }
            catch(err){
                error.value = err.message;
                console.log(error.value);
            }
}

let useLogout = () => {
    return { error, Logout };
}

export default useLogout;