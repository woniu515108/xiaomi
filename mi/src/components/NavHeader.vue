<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if='username'>{{username}}</a>
                    <a href="javascript:;" v-if='!username' @click='login()'>登录</a>
                    <a href="javascript:;" v-if='username'>我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart()"><span class="icon-cart"></span>购物车({{cartCount}})</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for='(item,index) in phoneList' :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img"><img :src="item.mainImage" :alt="item.name"></div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency }}</div>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RenMi红米</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name='keyword'>
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
    .header{
        .nav-topbar{
            background: #333;
            height: 39px;
            line-height: 39px;
            color: #b0b0b0;
            .container{
                width: 1226px;
                margin:0 auto;
                @include flex();
                a{
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 110px;
                    background-color: #ff6600;
                    text-align: center;
                    color: #fff;
                    .icon-cart{
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                width: 1226px;
                height: 112px;
                margin: 0 auto;
                @include flex();
                position: relative;
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background: #ff6600;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content: '';
                            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                            transition: margin .2s;
                        }
                        &:after{
                            content: '';
                            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                        }
                        &:hover:before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    width: 643px;
                    padding-left:209px;
                    .item-menu{
                        display: inline-block;
                        color: #333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color: $colorA;
                            .children{
                                height: 200px;
                                opacity: 1;
                            }
                        }
                        .children{
                            position: absolute;
                            top:112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            border-top: 1px solid #e5e5e5;
                            box-shadow: 0 7px 6px 0 rabg(0,0,0,0.11);
                            opacity: 0;
                            overflow: hidden;
                            z-index: 10;
                            transition: all .5s;
                            background:#fff;
                            ul{
                                display: flex;
                                justify-content: flex-start;
                                .product{
                                    width: 16.6%;
                                    height: 220px;
                                    line-height: 12px;
                                    text-align: center;
                                    position: relative;
                                    &:before{
                                        content: '';
                                        position: absolute;
                                        top: 28px;
                                        right: 0;
                                        border-left: 1px solid $colorF;
                                        height:100px;
                                        width:1px;
                                    }
                                    a{
                                        display: inline-block;
                                    }
                                    img{
                                        width: auto;
                                        height: 110px;
                                        margin-top: 26px;
                                    }
                                    .pro-img{
                                        height: 137px;
                                    }
                                    .pro-name{
                                        font-weight: bold;
                                        margin-top:19px;
                                        margin-bottom: 8px;
                                        color: $colorB;
                                    }
                                    .pro-price{
                                        color: $colorA;
                                    }
                                    &:last-child:before{
                                        display: none;
                                    }
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border:1px solid #e0e0e0;
                        display: flex;
                        align-items: center;
                        input{
                            box-sizing: border-box;
                            border: none;
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>
<script>
    import { mapState } from 'vuex';
    export default{
        name:'NavHeader',
        data(){
            return {
                phoneList:[]
            }
        },
        computed: {
            ...mapState(['username','cartCount']),
        },
        filters:{
            currency(val){
                if(!val) return 0.00;
                return '￥'+val.toFixed(2)+'元'
            }
        },
        mounted() {
            this.getProduceList()
        },
        methods: {
            login(){
                this.$router.push('/login');
            },
            getProduceList(){
                this.axios.get('/products',{
                    params:{
                        categoryId:'100012'
                    }
                }).then((res)=>{
                    console.log('ddddd',res)
                    if(res.list.length>6){
                        this.phoneList = res.list.slice(0,6)
                    }
                })
            
            },
            // 跳转我的购物车
            goToCart(){
                this.$router.push('/cart');
            }
        },
    }
</script>