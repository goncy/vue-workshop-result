import Vue from "vue"
import App from "./App.vue"

Vue.filter("dash-list", val => {
  return val ? val.join(", ") : ""
})

window.app = new Vue({
  el: "#app",
  render: h => h(App)
})
