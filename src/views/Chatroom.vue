<template>
  <div class="container">
      <Navbar></Navbar>
      <NewChatForm></NewChatForm>
  </div>
  
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import { watch } from '@vue/runtime-core'
import {useRouter} from 'vue-router'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
export default {
  components: {
    NewChatForm, Navbar },
  setup(){
    let {user} = getUser();
    let router = useRouter();
    watch(user,()=>{
      if(!user.value){
        //redirecting to Login-Page
        router.push("/");
      }
    })
  }
}
</script>

<style>
  
</style>