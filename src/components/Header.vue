<template>
<div>
    <header>
        <!-- 导航栏-->
        <div class="dh_bg_color position-relative">
            <div class="container">
                <div class="row">
                    <div class="navbar navbar-brand navbar-expand-sm navbar-dark">
                        <!-- 导航按钮-->
                        <button type="button" class="navbar-toggler mt-2 mb-2" data-toggle="collapse" data-target="#d1">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- 导航列表-->
                        <div id="d1" class="col-md-8 col-sm-9 text-left collapse navbar-collapse position-absolute">
                            <ul class="navbar-nav mt-2 mb-2">
                                <li class="nav-item"><router-link to="/" class="text_color p-3">首页</router-link></li>
                                <li class="nav-item"><router-link to="/about" class="text_color p-3">关于我们</router-link></li>
                                <li class="nav-item"><router-link to="/navigationbar" class="text_color p-3">展示</router-link></li>
                                <li class="nav-item"><router-link to="/joinus" class="text_color p-3">加入我们</router-link></li>
                                <li class="nav-item"><router-link to="/brand" class="text_color p-3">品牌账号</router-link></li>
                                <li class="nav-item"><router-link to="/login" class="text_color p-3" @click.native="com">登录 注册</router-link></li>
                            </ul>
                        </div>
                        <!-- <div class="col-md-4 col-sm-3 text-right">
                            <div>
                                <div class="u-user">
                                    <img src="http://127.0.0.1:3500/img/usercore/getAvatar.do.jpg" alt="">
                                </div>
                            </div>
                        </div> -->
                    </div>

                    <!-- 导航右边-->

                </div>

            </div>
        </div>
        <!-- 第二行-->
        <div class="mt-5">
            <div class="container">
                <!-- 大图文字-->
                <div class="text-center mt-5">
                    <a href="javascript:;">
                        <img src="img/123Logo.png" alt="" class="img-fluid"/>
                    </a>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </header>
    <div class="headerDiv ">
        <ul class="list-unstyled">
            <li>
                <router-link to="/usercore">
                    <img src="http://127.0.0.1:3500/img/usercore/getAvatar.do.jpg" alt="" class="w-50">
                </router-link>
            </li>
            <li>
                <router-link to="/usercore">
                    我的主页
                </router-link>
            </li>
            <li>
                <a href="javascript:;">
                    我的消息
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    个人设置
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    实名认证
                </a>
            </li>
            <li>
                <router-link to="/">
                    返回
                </router-link>
            </li>
            <li @click="signout">
                <a href="javascript:;">
                    退出
                </a>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        signout(){
            $(".headerDiv").css("display","none");
        },
        com(){
			this.$router.go(0);
		},
    },
    created() {
    },
}
</script>
<style scoped>

    .headerDiv ul li a img{
        border-radius: 50%;
        height: 50px;
    }
</style>