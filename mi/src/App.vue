<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';

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
        this.getUser();
        this.getCartSum();

    },
    methods:{
        getUser(){
            this.axios.get('/user').then(()=>{

            })
        },
        getCartSum(){
            this.axios.get('/carts/products/sum').then(()=>{

            })
        }
    }
  }
</script>
