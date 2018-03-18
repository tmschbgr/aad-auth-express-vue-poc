<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <button type="button" v-if="!isAuthenticated" @click="login()">Login</button>
    <button type="button" v-if="isAuthenticated" @click="logout()">Logout</button>
    
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Data</h2>
    <button type="button" @click="loadPublicData()">Load Public Data</button>
    <button type="button" @click="loadPrivateData()">Load Private Data</button>
    <p v-if="loading">loading...</p>
    <p>{{data}}</p>

    <h2>Your User Profile</h2>
    <p>{{getUserProfile}}</p>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import authentication from "./authentication";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      data: null,
      loading: false
    };
  },
  methods: {
    loadPublicData() {
      this.loading = true;
      Vue.axios.get("public").then(res => {
        if (res.data) this.data = res.data;
        this.loading = false;
      });
    },
    loadPrivateData() {
      this.loading = true;
      Vue.axios.get("private").then(res => {
        if (res.data) this.data = res.data;
        this.loading = false;
      });
    },
    login() {
      authentication.signIn();
    },
    logout() {
      authentication.signOut();
    }
  },
  computed: {
    isAuthenticated() {
      return authentication.isAuthenticated();
    },
    getUserProfile(){
        return authentication.getUserProfile();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
