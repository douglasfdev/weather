<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <router-link to="/weather" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            Clima Atual
          </div>
        </div>
      </router-link>
      <router-link to="/forecastToFourDays" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            Previsão de 4 dias
          </div>
        </div>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 8.5px;
  background: #0d3b66;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-item {
  color: #ff5500;
  font-weight: 600;
}
</style>