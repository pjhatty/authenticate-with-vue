<template>
  <div class="login tc">
    <h3>Sign in</h3>
    <input v-model="email" class="ma2 w5 ba b--gray br2 pa2" type="text" placeholder="Email"><br>
    <input v-model="password" class="ma2 w5 ba b--gray br2 pa2" type="password" placeholder="Password"><br>
    <button @click="login()" class="ma1 ba bg-green grow white br2 pa3">Connection</button>
    <p class="mt3 gray f6 tc">You don't have an account? <span class="underline"><router-link to="/signup">You can get one</router-link></span></p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('helloworld')
          },
          (err) => {
            alert("Oops! " + err.message)
          }
        );
      }
    }
  }
</script>

<style>

</style>
