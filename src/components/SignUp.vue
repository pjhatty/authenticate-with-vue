<template>
  <div class="login tc">
    <h3>Let's create you an account.</h3>
    <input v-model="email" class="ma2 w5 ba b--gray br2 pa2" type="text" placeholder="Email"><br>
    <input v-model="password" class="ma2 w5 ba b--gray br2 pa2" type="password" placeholder="Password"><br>
    <button @click="signup()" class="ma1 ba bg-green grow white br2 pa3">Create Account</button>
    <p class="mt3 gray f6 tc underline"><router-link to="/login">Back to login</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'signup',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signup: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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

<style></style>
