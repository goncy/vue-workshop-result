import Vue from "vue"
import App from "./App.vue"

Vue.filter("dash-list", val => {
  if (!val || !val.genres) {
    return ""
  }

  return val.join(", ")
})

window.app = new Vue({
  el: "#app",
  render: h => h(App)
})
