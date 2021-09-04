<template>
    <h2>SignUp</h2>
    <form @submit.prevent="SignUp">
        <input type="text" placeholder="Display Text" v-model="displayName">
        <input type="email" placeholder="Email Here" v-model="email">
        <input type="password" placeholder="Password Here" v-model="password">

        <button>Submit</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import {auth} from '../firebase/config'
export default {
    setup(){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");

        let error = ref(null);//for Error Handling

        let SignUp=async()=>{
            try{
                // console.log(displayName.value,email.value,password.value);

                //new Tag for creating User Email with Firebase Auth
                let res = await auth.createUserWithEmailAndPassword(email.value,password.value)
                if(!res){
                    throw new Error ("Could not create New User")
                }
                console.log(res.user);
            }
            catch(err){
                error.value = err.message;
                console.log(err.message);
            }
        }
        
        return {displayName,email,password,SignUp}
    }
}
</script>

<style>

</style>