// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app;

var config = {
    apiKey: "AIzaSyCTxWWJCKhxbee-8FxciidSMtdDg3T1Epk",
    authDomain: "vue-firebase-auth-b5403.firebaseapp.com",
    databaseURL: "https://vue-firebase-auth-b5403.firebaseio.com",
    projectId: "vue-firebase-auth-b5403",
    storageBucket: "vue-firebase-auth-b5403.appspot.com",
    messagingSenderId: "538223861353"
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user) {
    if (!app) {
      /* eslint-disable no-new */
      app = new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
      })
    }
  });
