import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Firebase from "";

Firebase.initialization({
  apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_,
    projectId: process.env.FIREBASE_,
    storageBucket: process.env.FIREBASE_,
    messagingSenderId: process.env.FIREBASE_,
    appId: process.env.FIREBASE_

})



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
