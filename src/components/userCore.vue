<template>
    <div class="container">
        <div class="position"></div>
        <div class="row">
            <!-- 第一列 -->
                <div class="col-md-2 p-0 m-0 list_list">
                    <ul class="list-unstyled text-left">
                        <li>
                            <a href="javascript:;"><h5>全部功能</h5></a>
                        </li>
                        <li>
                            <a href="javascript:;">发现好友</a>
                        </li>
                        <li>
                            <a href="javascript:;">我的草稿</a>
                        </li>
                        <li>
                            <a href="javascript:;">购物车</a>
                        </li>
                        <li>
                            <a href="javascript:;">订单</a>
                        </li>
                        <li>
                            <a href="javascript:;">收藏</a>
                        </li>
                        <li>
                            <a href="javascript:;">笔记</a>
                        </li>
                        <li>
                            <a href="javascript:;">赞过</a>
                        </li>
                        <li>
                            <a href="javascript:;">我的足迹</a>
                        </li>
                    </ul>
                </div>
                <!-- 第二列 -->
                <div class="col-md-7 p-0 m-0">
                    <!-- 中间头部第一行 -->
                    <div class="w_bg">
                        <div class="float-left rphead" @mouseenter.stop="replaceheader" @mouseleave.stop="leaveheader">
                            <a href="javascript:;">
                                <img src="http://127.0.0.1:3500/img/usercore/getAvatar.do.jpg" alt="" class="img-fluid w-50 rounded-circle mt-md-4  mt_smsm">
                                <div class="replaceheader">更换头像</div>
                            </a>
                        </div>
                        <div>
                            <p class="float-left ml-md-2 mt-md-4 mt_smsm" >用户名</p>
                            <img src="" alt="">
                        </div>
                        <div class="row p-0">
                            <div class="col-md-4 mt-md-2"><a href="javascript:;">我的收货地址</a></div>
                            <div class="col-md-4 mt-md-2"><a href="javascript:;">我的优惠信息</a></div>
                            <div class="col-md-4 mt-md-2"><a href="javascript:;">我的钱包</a></div>
                        </div>
                        <!--中间头部第二行  -->
                    </div>
                    <div class="row w_bg2">
                        <div class="col-md-4">
                            <a href="javascript:;">关注</a>
                            <span>11</span>
                            </div>
                        <div class="col-md-4">
                            <a href="javascript:;">粉丝</a>
                            <span>22</span>
                            </div>
                        <div class="col-md-4">
                            <a href="javascript:;">获赞与收藏</a>
                            <span>33</span>
                        </div>
                    </div>
                    <div class="row w_bg2">
                        <div class="col-md-3"><a href="javascript:;">待付款</a></div>
                        <div class="col-md-3"><a href="javascript:;">待发货</a></div>
                        <div class="col-md-3"><a href="javascript:;">待收货</a></div>
                        <div class="col-md-3"><a href="javascript:;">待评价</a></div>
                    </div>

                    <!-- 中间第三行 -->
                    <div class="w_bg3">
                        <!-- 里面的文字 -->
                        <div>
                            <span class="text-left d-block">根据浏览，猜我喜欢</span>
                        </div>
                        <!-- 下方内容 -->
                    </div>
                    <div>
                        <div class="row mt-3" v-for="item of list" :key="item.id">
                            <div class="col-md-4">
                                <div>
                                    <ul class="list-unstyled">
                                        <li>
                                            <div>
                                                <a href="javascript:;">
                                                    <img :src="item.pic" alt="" class="w-100">
                                                </a>
                                            </div>
                                        </li>
                                        <li style="color:#000">{{item.title}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div>
                                    <ul class="list-unstyled">
                                        <li>
                                            <div>
                                                <a href="">
                                                    <img :src="item.pic" alt="" class="w-100">
                                                </a>
                                            </div>
                                        </li>
                                        <li style="color:#000">{{item.title}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div>
                                    <ul class="list-unstyled">
                                        <li>
                                            <div>
                                                <a href="">
                                                    <img :src="item.pic" alt="" class="w-100">
                                                </a>
                                            </div>
                                        </li>
                                        <li style="color:#000">{{item.title}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 第三列 -->
                <div class="col-md-3">
                    <!-- 1 -->
                    <div>
                        <div class="body_s">今日新品</div>
                        <img src="http://127.0.0.1:3500/img/index/big.jpg" alt="" class="w-100">
                        <!-- 商品内容 -->
                    </div>
                    <!-- 2 -->
                    <div>
                        <div class="body_footers">宝贝降价<span>x个宝贝降价</span>
                          <!-- 降价商品内容 -->
                            <div class="w-50 position-relative">
                                <img src="http://127.0.0.1:3500/img/index/big.jpg" alt="" class="w-100 mt_smsm">
                                <!--降价遮罩  -->
                                <div class="mask">
                                    <span>降价了￥123</span>
                                </div>  
                            </div>
                        </div>
                      
                          
                    </div>
                    <!-- 3 -->
                    <div class="body_footers">
                        <img src="img/commodity/big/timg.jpg" alt="" class="w-100 img-fluid">
                        <div>新手大礼包</div>
                        <span>主人，快去领新手大礼！包邮卡、奖励金、现金红包…统统可以领回家！</span>
                        <a href="javascript:;" class="text-danger d-block text-right">领取-></a>
                    </div>
                   
                    <!-- 4 -->
                    <div class="mt-3">
                        <input type="button" value="服务" class="input-btn">
                        <!-- 九宫格 -->
                        <ul class="mui-table-view mui-grid-view mui-grid-9">
		                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item of gridlist" :key="item.id">
                                <a href="javascript:;">
                                    <img :src="item.pic" />
                                    <div class="mui-media-body">{{item.title}}</div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],
            gridlist:[],
        }
    },
    methods: {
        replaceheader(){
            $(".replaceheader").css("display","block");  
        },
        leaveheader(){
            $(".replaceheader").css("display","none");
        },
        handleGrid(){
            var url = "http://127.0.0.1:3500/usercore/grid";
            this.axios.get(url).then(result=>{
                this.gridlist = result.data.data;
            });
        },
        userbody(){
            var url = "http://127.0.0.1:3500/usercore/userbody";
            this.axios.get(url).then(result=>{
                this.list = result.data.data;
            });
        },
        
    },
    created() {
        this.handleGrid();
        this.userbody();
    },
}
</script>
<style scoped>
    @media screen and (max-width: 320px) {
        .mt_smsm{
            margin-top:2rem;
        }
    }
    @media screen and (min-width: 320px) {
        .mt_smsm{
            margin-top:1.5rem;
        }
    }
    
    .body_s{
        border-width:1px;
        border-color: #e5e5e5;
        position: relative;
        border: 1px solid #EEEEEE;
        padding: 40px 25px 35px;
        text-align: left;
    }
    .body_footers{
        border-width:1px;
        border-color: #e5e5e5;
        position: relative;
        border: 1px solid #EEEEEE;
        padding: 40px 25px 35px;
        border-top: 0;
        text-align: left;
    }
    .body_footers>span{
        font-size: 12px;
        padding-left: 10px;
    }
    div.w_bg3>div{
        margin-top: 20px;
        width: 100%;
        background-color:#a0cdeb;
        border: #a0cdeb;
    }
    div.w_bg3>div>span{
        color:#ffffff;
        font-size: 18px;
        line-height: 18px;
        padding: 11px 10px;
        position: relative;
    }
    .w_bg2{
        margin: 0;
        position: relative;
        border: 1px solid #EEEEEE;
        padding: 19px 10px 14px;
        border-top: 0;
    }
    .w_bg{
        width: 100%;
        height: 7rem;
        background:#e5e5e5;
    }
    .w_bg2 .col-md-4 span{
        font-size: 12px;
        padding: 6px;
    }
    div.col-md-6 img{
        margin-left: 1rem;
        overflow: hidden;
        margin-top: 1rem;
    }
    .position{
        height: 1.5rem;
    }

    .replaceheader{
        background-color: #e5e5e5;
        color:#6d6969;
        font-size: 12px;
        display: none;
    }
   .mui-grid-9 img{
        width:30px;
        height:30px;
    }
   .mui-grid-view.mui-grid-9{
        background-color:#fff
    }
    .input-btn{
        width: 100px;
    }
</style>