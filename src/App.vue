<template>
  <div id="app">
    <h1>Create an Ice Cream Cone!</h1>
    <div id="nav">
      <router-link :to="{name: 'container'}">Container</router-link> |
      <router-link :to="{name: 'scoops'}">Scoops</router-link> |
      <router-link :to="{name: 'flavor'}">Flavor</router-link> |
      <router-link :to="{name: 'toppings'}">Toppings</router-link> 

    </div>
    <router-view />
  </div>
</template>


<style>
body {
    background-color:#FAA1E1; 
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: rgb(154,104,65);
}

#nav a.router-link-exact-active {
  color: grey;
}
</style>
