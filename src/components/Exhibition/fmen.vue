<template>
    <div>
        <div class="container">
            <div class="row">
                <!-- 第一行 -->
                <div class="col-sm-6 col-md-4 col-lg-3" v-for="item of list" :key="item.id">
                    <!-- 1 -->
                    <div class="ex-card">
                        <div class="card-hidd">
                            <a href="javascript:;">
                                <img :src="item.pic" alt="" class="w-100">
                            </a>
                        </div>
                        <div class="mt-md-3">
                            <h5>
                                <p>{{item.rtitle}}</p>
                            </h5>
                        </div>
                        <!-- 用户信息 -->
                        <div class="comment">
                            <!-- 头像 -->
                            <div class="photo">
                                <div>
                                    <a href="javascript:;">
                                        <img :src="item.rname_pic" alt="">
                                    </a>
                                </div> 
                            </div>
                            <!-- 名字 -->
                            <span class="name">{{item.rname}}</span>
                        </div>
                        <!-- 用户收藏 -->
                        <div class="like">
                            <i></i>
                            <span>{{item.rsum}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input type="button" @click="load" value="加载更多" class="input_btn mt-5">
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],
            pno:0,    
        }
    },
    methods: {
        load(){
            this.pno++;
            var url = "http://127.0.0.1:3500/exhibition/fmen?pno="+this.pno;
            this.axios.get(url).then(result=>{
                var rows = this.list.concat(result.data.data);
                this.list=rows;
            });
        },
    },
    created() {
        this.load();
    },
}
</script>

<style scoped>
 .breadcrumb-item + .breadcrumb-item::before{
            content: " ";
    }
    .cardOne {
        display: none;
    }
    .ex-card {
        width: 255px;
        height: 100%;
        display: block;
        background-color: #fff;
        -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        cursor: pointer;
        margin: 0 auto;
        padding: 20px;
    }
    .ex-card h5>p {
        text-align: left;
        font-size: 15px;
    }
    .ex-card .card-hidd {
        overflow: hidden;
        width: 255px;
        height: 255px;
        margin: 0;
    }
    .ex-card .card-hidd a img {
        width: 255px;
        height: 255px;
        overflow: hidden;
        transition: all 3s;
        -moz-transition: all 3s;
        -webkit-transition: all 3s;
        -o-transition: all 3s;
    }
    .ex-card .card-hidd a img:hover {
        width: 280px;
        height: 300px;
    }
    .comment .photo {
        position: relative;
        display: block;
        float: left;
    }
    .comment .photo img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: inline-block;
    }
    .comment .name {
        display: block;
        float: left;
        margin-left: 10px;
        line-height: 31px;
        color: #555;
        font-weight: 350;
        width: 115px;
        height: 26px;
        overflow: hidden;
        white-space: nowrap;
        word-wrap: normal;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }
    .like {
        margin: 3px 0 0 0;
    }
    .like i{
        width: 18px;
        height: 18px;
        background: url(http://127.0.0.1:3500/img/login/name.png);
        -webkit-background-size: contain;
        -moz-background-size: contain;
        background-size: contain;
        display: inline-block;
        vertical-align: middle;
        margin-top: 3px;
    }
    .like span {
        vertical-align: middle;
        color: #555;
    }
    .input_btn {
        width: 314px;
        height: 64px;
        line-height: 64px;
        background: #443e3b;
        color: #fff;
        font-size: 26px;
        text-align: center;
        display: inline-block;
        border-radius: 4px;
        cursor:pointer;
    }
</style>
