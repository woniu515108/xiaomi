<template>
    <div class="order">
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader.vue';
    import ServiceBar from './../components/ServiceBar.vue';
    import NavFooter from './../components/NavFooter.vue';
    export default{
        name:'Order',
        data() {
            return {
                tip:"",
                title:''
            }
        },
        components:{
            ServiceBar,
            NavFooter
        },
        

    }
</script>