<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
  export default{
    name:'app',
    components:{

    },
    data(){
      return {
        res:{}
      }
    },
    mounted() {
      this.axios.get('/mock/user/login.json').then((res)=>{
        this.res = res;
      })
    },
  }
</script>
