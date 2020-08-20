<template>
    <div class="order">
        <order-header title="我的订单">

        </order-header>
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
        components:{
            OrderHeader,
            ServiceBar,
            NavFooter
        }

    }
</script>