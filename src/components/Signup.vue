<template>
    <h2>SignUp</h2>
    <form @submit.prevent="SignUp">
        <input type="text" placeholder="Display Text" v-model="displayName">
        <input type="email" placeholder="Email Here" v-model="email">
        <input type="password" placeholder="Password Here" v-model="password">
        <div class="error" v-if="error">
            {{error}}
        </div>        

        <button>Submit</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from "../composables/useSignup"

export default {
    setup(props,context){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");

        let {error,createAccount} = useSignup()//taking Parameters form useSignup Components
        
        let SignUp=async()=>{
            let res = await createAccount(email.value,password.value,displayName.value)
            // console.log(res.user);
            if(res){
                context.emit("enterChatroom")
            }
        }
        
        return {displayName,email,password,SignUp,error} //return error in order to use in page
    }
}
</script>

<style>

</style>