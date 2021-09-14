<template>
    <h2>Login</h2>
    <form @submit.prevent="Login">
        
        <input type="email" placeholder="Email Here" v-model="email">
        <input type="password" placeholder="Password Here" v-model="password">
        <div class="error" v-if="error">
            {{error}}
        </div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import {auth} from '../firebase/config'
import useLogin from '../composables/useLogin'

export default {
    setup(){
        let email = ref("");
        let password = ref("");

        let {error,SignIn} = useLogin();

        let Login=async()=>{
            let res = await SignIn(email.value,password.value);
            console.log(res.user);
        }
        return {email,password,Login,error}
    }
}
</script>

<style>

</style>