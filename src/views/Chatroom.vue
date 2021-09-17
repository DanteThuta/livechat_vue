<template>
  <div class="container">
      <Navbar></Navbar>
  </div>
  
</template>

<script>
import { watch } from '@vue/runtime-core'
import {useRouter} from 'vue-router'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
export default {
  components: { Navbar },
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