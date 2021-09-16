import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config'

let user = ref(auth.currentUser);//default currentUser
        auth.onAuthStateChanged((_user)=>{
            // console.log("user state changed.Current user is ",_user);
            user.value = _user;
            // console.log(auth.currentUser);
        })

let getUser = () => {
    return { user };
}

export default getUser;