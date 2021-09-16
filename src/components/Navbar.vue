<template>
    <div v-if="user">
        <nav>
            <div>
                <p>Hi </p>
                <p>hello</p>
                <p class="email">dfdf </p>
                <p class="email"> logged in as {{user.email}} </p>
            </div>
            <button @click="logout">Logout</button>
      
        </nav>
    </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config'
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
    setup(){

        //composable logOut Function
        let {error,Logout} = useLogout();
        let logout=async()=>{
            await Logout();
        }

        //composable getUser Function
        let {user} = getUser();
        return {error,logout,user}
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
    margin: 2px;
    padding: 5px;
    font-size: 16px;
    color: #444;
  }

  nav p.email{
    font-size: 14px;
    color: #999;

  }
</style>