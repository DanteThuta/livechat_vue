<template>
  <div class="welcome container">
      <h2>Welcome</h2>
      <div v-if="showLoginform">
          <Login @enterChatroom="enterChatroom" />
          <p>Not a Member? <span @click="showLoginform=!showLoginform">SignUp Here </span></p>
      </div>
      <div v-else>
          <Signup @enterChatroom ="enterChatroom" />
          <p>Already a Member? <span  @click="showLoginform=!showLoginform">Login Here</span></p>
      </div>
      
      
  </div>
</template>

<script>
import Signup from "../components/Signup.vue"
import Login from "../components/Login.vue"
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
export default {
    components: {
        Signup,
        Login
    },
    setup(){
      let showLoginform = ref(true);
      let router = useRouter();

      let enterChatroom =()=>{
        router.push({name:"Chatroom"});
      }

      return{showLoginform,enterChatroom}
    }
}
</script>

<style>

 .welcome {
        text-align: center;
        padding: 20px 0;
      }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }

</style>