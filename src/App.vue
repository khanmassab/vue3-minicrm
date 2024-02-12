<!-- <template>
  <HelloWorld msg="Programmers Hut Laravel/Vue Task"/>
</template>

<script>
import HelloWorld from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <router-link class="navbar-brand" to="/">{{ appName }}</router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/companies">Companies</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/employees">Employees</router-link>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-if="!authenticated">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <!-- <li class="nav-item" v-if="!authenticated && registerEnabled">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item dropdown" v-if="authenticated">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false" v-pre>
                {{ username }} <span class="caret"></span>
              </a>

              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" @click="logout">Logout</a>
              </div>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>

    <main class="py-4">
      <router-view></router-view>
    </main>
</template>

<script>
import AuthService from "./Services/Auth/AuthService.js";
export default {
  name: 'App',
  data() {
    return {
      appName: 'MiniCRM',
      authenticated: AuthService.isAuthenticated(),
      username: localStorage.getItem('username') || 'Guest'
    };
  },
  methods: {
    logout() {
      AuthService.logout();
      this.authenticated = false;
      this.username = 'Guest';
      // Redirect to the login page or homepage
    }
  }
};

</script>

<style scoped>
/* Add your custom styles here */
</style>
