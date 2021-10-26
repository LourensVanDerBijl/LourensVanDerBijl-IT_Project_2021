<template>
    <!--Creating the routing view this will allow me to change pages
    the main page app.vue should be empty except for the components lists
    this will create readability and good structure in the front end development
    It is almost like creating classes is Java or C# -->
    <router-view/>
  
</template>


<script>
//Creating the app all components and views resides in the app
export default {
  name: 'app',
}
</script>

<!--This is the stadard styling for the whole application -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aa0202;
}

</style>
