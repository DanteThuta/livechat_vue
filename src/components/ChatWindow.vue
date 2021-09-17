<template>
  <div class="chat-window">
    <div class="messages" >
      <div class="single" v-for="message in formattedMessages" :key="message.id">
          <span class="created_at">{{message.created_at}}</span>
          <span class="name">{{message.name}}</span>
          <span class="message">{{message.message}}</span>
      </div>
      
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import {db} from '../firebase/config'
import {formatDistanceToNow} from 'date-fns'
export default {
    setup(){
      let messages = ref([]);

      let formattedMessages = computed(()=>{
        return messages.value.map((msg)=>{
          let formatTime = formatDistanceToNow(msg.created_at.toDate()); 
          return {...msg,created_at:formatTime}
        })
      })
      //retrieving messages from Firebase
      db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
        let results = [];
        // console.log(snap.docs);
        snap.docs.forEach((doc)=>{
          
          // console.log(doc.data()); //checking by single message
          let document = {...doc.data(),id:doc.id} //retrieving with ID
          // console.log(document);

          
          doc.data().created_at && results.push(document);//(*)Will only run at a time if there is no Timestamp , if not, console error for being Null
        })
        // console.log(results);
        messages.value=results;
        // console.log(messages.value);
      })

      return {messages,formattedMessages};
    }
}
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created_at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>