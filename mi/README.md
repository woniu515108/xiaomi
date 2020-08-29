# 仿小米商城项目总结
## 功能模块
+ 登录、退出登录
+ 加入购物车
+ 收货信息新增、修改、删除
+ 支付宝支付、微信支付
+ 订单分页
## 项目结构
+ 首页 `Index.vue`
+ 登录页 `Login.vue`
+ 购物车页面 `Cart.vue`
+ 商品详情页 `Product.vue`
+ 购买详情页 `Detail.vue`
+ 订单 `Order.vue`
    + 订单确认 `OrderComfirm.vue`
    + 订单列表 `OrderList.vue`
    + 订单支付`OrderPay.vue`
        + 支付宝支付 `AliPay.vue`
        + 微信支付 `AliPay.vue`
## 项目框架
+ JS框架 `Vue`
+ UI框架 `Element-ui`
## 项目所需依赖
```
    "axios": "^0.19.2",
    "core-js": "^3.6.5",
    "element-ui": "^2.13.2",
    "qrcode": "^1.4.4",
    "swiper": "^6.1.1",
    "vue": "^2.6.11",
    "vue-axios": "^2.1.5",
    "vue-cookie": "^1.1.4",
    "vue-infinite-scroll": "^2.0.2",
    "vue-lazyload": "^1.3.3",
    "vue-router": "^3.2.0",
    "vuex": "^3.4.0",
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "babel-plugin-component": "^1.1.1",
    "node-sass": "^4.12.0",
    "sass-loader": "^8.0.2",
    "vue-awesome-swiper": "^3.1.3",
    "vue-template-compiler": "^2.6.11"

```
## 项目准备
+ 整理并抽离可复用的模块，使其组件化
    + 模态框 `Modal.vue`
    + 页头 `NavHeader.vue`
    + 页脚 `NavFooter.vue`
    + 订单页头 `OrderHeader.vue`
    + 底部服务信息 `ServiceBar.vue`
    + 加载中 `Loading.vue`
    + 微信支付 `ScanPayCode.vue`
    + 商品头部简介 `ProductParam.vue`
    + 暂无数据 `NoData.vue`

+ 响应拦截处理
```
axios.interceptors.response.use((response)=>{
    // 把response.data统一赋值为res
    let res = response.data;
    let path = location.hash;
    // 当后台返回的状态为0时，可返回请求数据
    if(res.status == 0){
        return res.data;
    // 当状态为10时，说明未登陆，跳转到登陆页面，首页除外
    }else if(res.status == 10){
        if(path !== '/#/index'){
            window.location.href = '/#/login';
        }
        return Promise.reject(res)
    // 其余用element-ui中的message提示错误信息
    }else{
        Message.warning(res.msg);
        return Promise.reject(res)
    }
},(error)=>{
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error)
})
```
## 功能模块实现思路
+ 登录页面
    + 业务逻辑 
        - 获取用户名及密码，在前端进行非空和正则验证
        - 验证通过，则存储用户名至Cookie中
        - 弹窗提示登录成功，并跳转到首页
    + 代码展示
    ```
    login(){
        let { username,password } = this;
        this.axios.post('/user/login',{
            username,
            password
        }).then((res)=>{
            this.$cookie.set('userId',res.id,{expires:'Session'});
            Message.success('登录成功');
            // this.$store.dispatch('saveUserName',res.username)
            this.saveUserName(res.username);
            this.$router.push({
                name:'Index',
                params:{
                    from:'login'
                }
            })
        })
    },
    ...mapActions(['saveUserName'])
    ```
    + 退出登录
        - 点击`退出`按钮
        - 清除缓存中的Cookie值
        - 登录状态为`false`
+ 加入购物车
    - 登录拦截
        * 如果当前处于未登录状态，则跳转至登录页面
        * 如果当前处于已登录状态，则弹出模态框，点击确定后将选中的商品数据渲染到购物车页面
    - 加购逻辑
        * 绑定addCart()事件，传递商品id值，点击加入购物车，向后台发送请求，将数据渲染到购物车页面
        ```
        addCart(id){
            this.axios.post('/carts',{
            productId:id,
            selected: true
            }).then((res)=>{
            this.showModal = true;
            this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
            });
       }
        ```
+ 收货信息新增、修改、删除
    - 实现逻辑
        * 分别给新增收货信息、编辑收货信息和删除收货信息定义一个事件
        ```
        // 打开新增收货地址弹框
        openAddressModal(item){
          this.userAction = 0;
          this.checkedItem = {};
          this.showEditModal = true;
        },
        // 编辑收货地址弹框
        editAddressModal(item){
          this.userAction = 1;
          this.checkedItem = item;
          this.showEditModal = true;
        },
        // 删除收货地址
        delAddress(item){
          this.userAction = 2;
          this.checkedItem = item;
          this.showDelModal = true;
        }
        ```
        * 定义一个变量，保存用户操作的行为信息
        ```
         userAction:'',  //用户行为  0：新增  1:编辑   2：删除
        ```
        *  地址删除，编辑，新增功能实现
        ```
        submitAddress(){
        // 把checkedItem,userAction从当前实例中解构出来
          let {checkedItem,userAction} = this;
          let method,url,params = {};
        // 判断当前用户的操作行为： 0：新增  1:编辑   2：删除
          if(userAction == 0){
            method = 'post',url = '/shippings';
          }else if(userAction == 1){
            method = 'put',url = `/shippings/${checkedItem.id}`;
          }else{
            method = 'delete',url = `/shippings/${checkedItem.id}`;
          }
          // 如果用户的操作为新增或编辑，则需要对用户输入的信息进行非空和正则验证，不通过则弹框提示
          if(userAction == 0 || userAction == 1){
            let { receiverName,receiverMobile,receiverProvince,receiverCity,receiverDistrict,receiverAddress,receiverZip  } = checkedItem;
            let errMsg;
            if(!receiverName){
              errMsg = '请输入收货人名称';
            }else if(!receiverMobile || !/\d{11}/.test(receiverMobile)){
              errMsg = '请输入正确格式的手机号';
            }else if(!receiverProvince){
              errMsg = '请选择省份'
            }else if(!receiverCity){
              errMsg = '请选择城市'
            }else if(!receiverDistrict || !receiverAddress){
              errMsg = '请输入详细地址'
            }else if(!receiverZip){
              errMsg = '请输入六位邮编'
            }
            if(errMsg){
              Message.error(errMsg);
              return;
            }
            params = {
              receiverName,
              receiverMobile,
              receiverProvince,
              receiverCity,
              receiverDistrict,
              receiverAddress,
              receiverZip,
            }
          }
          // 验证通过后，发送请求，调用关闭模态框函数`closeModal()`和获取地址列表函数`getAdressList()`，并提示'操作成功'
          this.axios[method](url,params).then(()=>{
            this.closeModal();
            this.getAdressList();
            Message.success('操作成功')
          })
        }
        ```

+ 订单支付
    - 实现逻辑
        - 给支付宝支付和微信支付两个选项绑定一个事件，并传递一个参数，1为支付宝支付，2为微信支付
        `paySubmit(1||2)`
        - 选择支付宝支付，跳转到`AliPay.vue`页面，发送请求返回支付信息（因为此操作为测试支付，所有金额都设为0.01元）
        ```
        `OrderPay.vue`
        if(payType ==1){
                window.open('/#/order/alipay?orderId='+this.orderId,'_blank')
        }
        `AliPay.vue`
        paySubmit(){
            this.axios.post('/pay',{
                orderId:this.orderId,
                orderName:'Vue高仿小米商城',
                amount:0.01,  //单位：元
                payType:1  //1、支付宝  2、微信
            }).then((res)=>{
                this.content = res.content;
                setTimeout(()=>{
                    document.forms[0].submit()
                },100)
            })
        }
        ```
        - 选择微信支付，下载QRCode插件，讲content数据生成二维码
        ```
        paySubmit(payType){
            if(payType ==1){
               ...
            }else{
                this.axios.post('/pay',{
                    orderId:this.orderId,
                    orderName:'Vue高仿小米商城',
                    amount:0.01,
                    payType:2
                }).then((res)=>{
                    QRCode.toDataURL(res.content).then(url =>{
                        this.showPay = true;
                        this.payImg = url;
                        this.loopOrderState()
                    })
                    .catch(err => {
                        Message.error('微信二维码生成失败，请稍后重试')
                    })
                })
            }
        }
        ```
+ 订单分页
    - 使用element-ui的分页插件
    ```
    <el-pagination
        v-if="true"
        class="pagination"
        background
        layout="prev, pager, next"
        :pageSize="pageSize"
        :total="total"
        @current-change="handleChange">
    </el-pagination>

    getOrderList(){
        this.loading = true;
        this.busy = true;
        this.axios.get('/orders',{
          params:{
            pageSize:10,
            pageNum:this.pageNum
          }
        }).then((res)=>{
          this.loading = false;
          this.list = this.list.concat(res.list);
          this.total = res.total;
          this.showNextPage = res.hasNextPage;
          this.busy = false;
        }).catch(()=>{
          this.loading = false;
        })
      }，
       handleChange(pageNum){
        this.pageNum = pageNum;
        this.getOrderList();
      }
    ```

## 项目周期
+ 2020年8月12日到8月29日
## 总结与收获
+ 使用响应拦截器，提高数据处理效率，精简代码量
+ 加深组件间通信的理解
+ 夯实Vuex的实现原理
+ 体验了支付宝支付和微信支付的逻辑运用
+ 对组件化有了更形象而具体的认识
+ 巩固了模态框的使用
+ 对一套完整的商城业务逻辑有了更深入的了解



