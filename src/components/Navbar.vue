<template>
  <nav>
      <div>
        <p>Hi display Name</p>
        <p class="email"> logged in as Email</p>
      </div>
      <button @click="logout">Logout</button>
      
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config'
import useLogout from '../composables/useLogout'
export default {
    setup(){

        let {error,Logout} = useLogout();
        let logout=async()=>{
            await Logout();
        }

        return {error,logout}
    }

}
</script>

<style>
    nav{
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav p{
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }

  nav p.email{
    font-size: 14px;
    color: #999;

  }
</style>