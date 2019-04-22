import Vue from 'vue'
import App from './App'
import './plugins/vuetify'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/store'
import * as fb from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App),
  created () {
   fb.initializeApp({ 
     apiKey: "AIzaSyDC4WCugpb2lI1Ddmos8T7OIxkIJpreHm8",
    authDomain: "itc-ads-ffc96.firebaseapp.com",
    databaseURL: "https://itc-ads-ffc96.firebaseio.com",
    projectId: "itc-ads-ffc96",
    storageBucket: "itc-ads-ffc96.appspot.com",
    messagingSenderId: "544818662760"
  })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
