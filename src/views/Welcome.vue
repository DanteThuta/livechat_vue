<template>
  <div class="welcome container">
      <h2>Welcome</h2>
      <Signup />
      <Login />
  </div>
</template>

<script>
import Signup from "../components/Signup.vue"
import Login from "../components/Login.vue"
export default {
  components: {
    Signup,
    Login
    }
}
</script>

<style>

.container{
    text-align: center;
    justify-content: center;
    padding: 20px 0;
}

/* form styles */

.welcome form{
  width: 300px;
  margin: 30px auto;
}

.welcome label{
  display: block;
  margin: 20px 0 20px;
}

.welcome input{
  padding: 10px;
  border: 3px solid #eee;
  border-radius: 10px;
  margin: 20px auto;
  outline: 0;
  width: 100%;
  color: #999;
  
}

.welcome span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.welcome button{
  margin: 20px auto;
}

</style>