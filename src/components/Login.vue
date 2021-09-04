<template>
    <h2>Login</h2>
    <form @submit.prevent="Login">
        
        <input type="email" placeholder="Email Here" v-model="email">
        <input type="password" placeholder="Password Here" v-model="password">

        <button>Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        

        
    }
}
</script>

<style>

</style>