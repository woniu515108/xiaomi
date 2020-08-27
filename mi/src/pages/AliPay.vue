<template>
    <div class="ali-pay">
      <loading v-if="loading"></loading>
      <div class="form" v-html="content"></div>
    </div>
  </template>
  <script>
        export default{
            data(){
                return {
                    orderId:this.$route.query.orderNo,
                    content:''
                }
            },
            mounted() {
                this.paySubmit();
            },
            methods: {
                paySubmit(){
                    this.axios.post('/pay',{
                        orderId:this.orderId,
                        orderName:'Vue高仿小米商城',
                        amount:0.01,  //单位：元
                        payType:1  //1、支付宝  2、微信
                    }).then((res)=>{
                        this.content = res.content;
                    })
                },
            },
        }
  </script>