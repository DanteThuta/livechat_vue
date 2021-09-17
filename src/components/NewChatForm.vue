<template>
  <textarea 
  placeholder="text message and Press Enter" v-model="message" @keypress.enter="handleSubmit"
  ></textarea>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import {timestamp} from '../firebase/config'
export default {
    setup(){
        let message = ref("");
        let {user} = getUser();
        let handleSubmit=()=>{
            let chat={
                message: message.value,
                name: user.value.displayName,
                created_at : timestamp()
            }
            console.log(chat);
            message.value = ""; //to remove the current message in Textarea
        }

        return {message,handleSubmit};
    }
}
</script>

<style>
    form{
        margin: 10px;
    }

    textarea{
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        outline: none;
        font-family: inherit;
    }
</style>