<template>
    <div class="bg_bg">
        <div class="bg_twobg"></div>
        <div class="search-box">
            <div class="search-input-box">
                <label for="">
                    <input type="text" autofocus="autofocus" placeholder="请输入职位关键字" class="search-input">
                </label>
                <button class="search-btn" type="button">
                    <img src="http://127.0.0.1:3500/img/joinus/531437ff-7adc-4929-8280-80ba90d935cb.png" alt="" style="width:26px;height:26px">
                </button>
            </div>
            <div class="hot-job-category">
                <span>热门搜索:</span>
                <a href="javascript:;">技术</a>
                <a href="javascript:;">产品/运营</a>
                <a href="javascript:;">职能</a>
                <a href="javascript:;">设置/用研</a>
                <a href="javascript:;">物流/客服</a>
                <a href="javascript:;">市场/销售</a>
                <a href="javascript:;">电商</a>
                <a href="javascript:;">其他</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .bg_bg{
        margin-top: 3rem;
        background: url(http://127.0.0.1:3500/img/joinus/banner.65f12b3.jpg);
        width: 100%;
        height: 700px;
    }
    .bg_bg .bg_twobg{
        position: relative;
        top: 250px;
        margin: 0 auto;
        width: 898px;
        height: 140px;
        background-image: url(http://127.0.0.1:3500/img/joinus/slogan.7c106d2.png);
        -webkit-background-size: 100% auto;
        -moz-background-size: 100% auto;
        background-size: 100% auto;
    }
    .search-box{
        position: relative;
        top: 295px;
        margin: 0 auto;
        padding: 20px;
        width: 640px;
        height: 113px;
        background: rgba(0,0,0,0.2);
        border-radius: 4px;
    }
    .search-input-box{
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 600px;
        height: 50px;
        border: 1px solid #ddd;
        border-radius: 18px;
        -webkit-box-pack: justify;
        -moz-box-pack: justify;
        -o-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -moz-box-align: center;
        -o-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        padding-left: 15px;
        background-color: #fff;
        box-sizing: border-box;
    }
    .search-input {
        width: 500px;
        background-color: transparent;
        outline: none;
        border: none;
        margin: 17px;
        box-sizing: border-box;
    }
    .search-btn{
        width: 38px;
        height: 33px;
        margin-right: 5px;
        overflow: visible;
        margin: 0;
        padding: 0;
        border: 1px solid transparent;
        outline: none;
        background-color: transparent;
    }
    .hot-job-category{
        margin-top: 20px;
        margin-left: 15px;
        color: #fff;
        font-size: 13px;
    }
    .hot-job-category span {
        margin-right: 20px;
    }
    .hot-job-category a {
        margin-right: 20px;
        color: #fff !important;
    }
    a:hover {
        color: #e62929 !important;
    }
</style>
