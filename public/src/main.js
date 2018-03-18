import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import authentication from './authentication'
import App from './App.vue'

authentication.initialize().then(_ => {

  Vue.use(VueAxios, axios);

  Vue.axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:1337/api";

  Vue.axios.interceptors.request.use(request => {

    // request.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('adal.idtoken');
    // return request
    return authentication.acquireToken()
      .then(token => {
        request.headers.common['Content-Type'] = 'application/json';
        request.headers.common['Authorization'] = 'Bearer ' + token;
        return request
      })
      .catch(err => { console.log(err); return request });

  })

  new Vue({
    el: '#app',
    render: h => h(App)
  });
});
