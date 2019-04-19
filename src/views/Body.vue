<template>
    <div>
        <!-- 大图文字-->
        <!--<div class="text-center">这里去除过一个mt-5!!!!!!!
            <a href="javascript:;">
                <img src="img/index/logon_mac.png" alt="" class="img-fluid"/>
            </a>
        </div>-->
        <div class="clearfix"></div>
        <div class="app-home">
            <!-- 大图-->
            <div class="main_bottom">
                <div class="container">
                    <!-- <div>
                        <img src="img/index/big.jpg" alt="" class="img-fluid"/>
                    </div> -->
                    <mt-swipe :auto="5000">
                        <mt-swipe-item v-for="item of list" :key="item.cid">
                            <img :src="item.pic" alt="" class="w-100 h-100 img-fluid">
                        </mt-swipe-item>
                    </mt-swipe>

                    <!-- 大图上的按钮-->
                    <div class="png_button text-center btn_size bg_div">
                        <div class="bg-white p-3">
                            <span class="sp_color">
                                <span>采用</span>
                                <a href="javascript:;">医疗</a>
                                <a href="javascript:;">证明</a>
                            </span>
                            <h4>
                                <a href="javascript:;">2019年春季最佳化妆潮流</a>
                            </h4>
                            <p class="p_size text-center">
                                <span class="sp_data_info">
                                    <span>at</span>
                                    <time datetime="2019-03-03T23:35:27+08:00">
                                        2019年3月3日
                                    </time>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!--   内容 -->
            <div class="container mt-5">
                <div class="row position-relative">
                    <div class="col-md-8 main">
                        <div class="row">
                            <div class="col-md-12 ">
                                <!-- 内容头顶文字-->
                                <div class="text-center">
                                    <div class="bg-white">
                                        <span class="">
                                            <span>采用</span>
                                            <a href="javascript:;" class="my_text_color">美丽,</a>
                                            <a href="javascript:;" class="my_text_color">证明</a>
                                        </span>

                                        <h4>
                                            <a href="javascript:;" class="text_color">{{bodys[0].title}}</a>
                                        </h4>
                                        <p class="p_size text-center">
                                            <span class="sp_data_info">
                                                <span>——</span>
                                                <span>在</span>
                                                <time datetime="2019-03-03T23:35:27+08:00">
                                                    2019年3月3日
                                                </time>
                                                <span>——</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="clearfix mt-5"></div>
                                <!--内容头顶文字结束 -->
                                <!--内容列表左-->
                                <!--左图1-->
                                <img :src="bodys[0].pic" alt="" class="w-100"/>
                                <!--文字-->
                                <div class="clearfix body_p_color mt-5">
                                    <p>{{bodys[0].btext}}</p>
                                </div>
                                <!--第一行文字下一条-->
                                <div class="text-center mt-5 next_center_span">
                                    <a href="javascript:;" class="my_text_color">
                                        <span>继续阅读</span>
                                    </a>
                                </div>
                                <!--左第二行-->
                                <div class="main_bottom mt-5">
                                    <div class="text-center bg-white">
                                        <span>
                                            <span>采用</span>
                                            <a href="javascript:;" class="my_text_color">美丽,</a>
                                            <a href="javascript:;" class="my_text_color">医疗保健</a>
                                        </span>
                                        <h4><a href="javascript:;" class="text_color">
                                            {{bodys[1].title}}
                                        </a></h4>
                                        <p class="p_size text-center">
                                            <span class="sp_data_info">
                                                <span>——</span>
                                                <span>在</span>
                                                <time datetime="2019-03-03T23:35:27+08:00">
                                                    2019年3月3日
                                                </time>
                                                <span>——</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <!--左第二行下方图片-->
                                <div>
                                    <img :src="bodys[1].pic" alt="" class="w-100">
                                </div>
                                <div class="clearfix body_p_color mt-5">
                                    <p>{{bodys[1].btext}}</p>
                                </div>
                                <div class="text-center mt-5  next_center_span">
                                    <a href="javascript:;" class="my_text_color">
                                        <span>继续阅读</span>
                                    </a>
                                </div>


                                <!--左第三行-->
                                <div class="main_bottom mt-5">
                                    <div class="text-center bg-white">
                                        <span>
                                            <span>采用</span>
                                            <a href="javascript:;" class="my_text_color">美丽,</a>
                                            <a href="javascript:;" class="my_text_color">医疗保健</a>
                                        </span>
                                        <h4><a href="javascript:;" class="text_color">
                                            {{bodys[2].title}}
                                        </a></h4>
                                        <p class="p_size text-center">
                                            <span class="sp_data_info">
                                                <span>——</span>
                                                <span>在</span>
                                                <time datetime="2019-03-03T23:35:27+08:00">
                                                    2019年3月3日
                                                </time>
                                                <span>——</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <img :src="bodys[2].pic" alt="" class="w-100">
                                </div>
                                <div class="clearfix body_p_color mt-5">
                                    <p>{{bodys[2].btext}}</p>
                                </div>
                                <div class="text-center mt-5  next_center_span">
                                    <a href="javascript:;" class="my_text_color">
                                        <span>继续阅读</span>
                                    </a>
                                </div>


                                <!--左第四行-->
                                <div class="main_bottom mt-5">
                                    <div class="text-center bg-white">
                                        <span>
                                            <span>采用</span>
                                            <a href="javascript:;" class="my_text_color">美丽的,</a>
                                            <a href="javascript:;" class="my_text_color">医疗保健</a>
                                        </span>
                                        <h4><a href="javascript:;" class="text_color">
                                            {{bodys[3].title}}
                                        </a></h4>
                                        <p class="p_size text-center">
                                            <span class="sp_data_info">
                                                <span>——</span>
                                                <span>在</span>
                                                <time datetime="2019-03-03T23:35:27+08:00">
                                                    2019年3月3日
                                                </time>
                                                <span>——</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img :src="bodys[3].pic" alt="" class="w-100">
                                </div>
                                <div class="clearfix body_p_color mt-5">
                                    <p>{{bodys[3].btext}}</p>
                                </div>
                                <div class="text-center mt-5  next_center_span">
                                    <a href="javascript:;" class="my_text_color">
                                        <span>继续阅读</span>
                                    </a>
                                </div>

                                <!--左第五行-->
                                <div class="main_bottom mt-5">
                                    <div class="text-center bg-white">
                                        <span>
                                            <span>采用</span>
                                            <a href="javascript:;" class="my_text_color">美丽的,</a>
                                            <a href="javascript:;" class="my_text_color">医疗保健</a>
                                        </span>
                                        <h4><a href="javascript:;" class="text_color">
                                            {{bodys[4].title}}
                                        </a></h4>
                                        <p class="p_size text-center">
                                            <span class="sp_data_info">
                                                <span>——</span>
                                                <span>在</span>
                                                <time datetime="2019-03-03T23:35:27+08:00">
                                                    2019年3月3日
                                                </time>
                                                <span>——</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img :src="bodys[4].pic" alt="" class="w-100">
                                </div>
                                <div class="clearfix body_p_color mt-5">
                                    <p>{{bodys[4].btext}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <!--右1-->
                        <div class="mt-5 pt-3 inner-sidebar">
                            <div class="inner-sidebar-two">
                                <h3 class="title_wid"><span>关于我们</span></h3>
                                <div>
                                    <img :src="rights[0].pic" alt="" class="w-100">
                                    <p>{{rights[0].rtext}}</p>
                                </div>
                            </div>
                        </div>
                        <!--右2-->
                        <div class="inner-sidebar mt-5 pt-3">
                            <div class="inner-sidebar-two">
                                <h3 class="title_wid"><span>赞助广告</span></h3>
                                <div>
                                    <img :src="rights[1].pic" alt="" class="w-100">
                                </div>
                            </div>
                        </div>
                        <!--右3-->
                        <div class="inner-sidebar mt-5 pt-3">
                            <div class="inner-sidebar-two">
                                <h3 class="title_wid"><span>近期职位</span></h3>
                                <div>
                                    <div>
                                    <div class="my_list">
                                        <a href=""><img :src="rights[2].pic"  class="w-100" alt=""/>       </a>
                                    </div>
                                        <div class="ml-5">
                                            <h4 class="ml-5">
                                                <a href="javascript:;" class="my_font">{{rights[2].rtitle}}</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="my_list">
                                            <a href=""><img :src="rights[3].pic"  class="w-100 mt-1" alt=""/>       </a>
                                        </div>
                                        <div class="ml-5">
                                            <h4 class="ml-5">
                                                <a href="javascript:;" class="my_font">{{rights[3].rtitle}}</a>
                                            </h4>
                                        </div>
                                        <div>
                                            <div class="my_list">
                                                <a href=""><img :src="rights[4].pic"  class="w-100 mt-1" alt=""/></a>
                                            </div>
                                            <div class="ml-5">
                                                <h4 class="ml-5">
                                                    <a href="javascript:;" class="my_font">{{rights[4].rtitle}}</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        <!--右4-->
                        <div class="mt-5 pt-5 inner-sidebar">
                            <div class="inner-sidebar-two">
                                <h3 class="title_wid"><span>类别</span></h3>
                                <div>
                                    <ul class="text-left">
                                        <li><a href="javascript:;">模特</a></li>
                                        <li><a href="javascript:;">店家</a></li>
                                        <li><a href="javascript:;">医疗保健</a></li>
                                        <li><a href="javascript:;">弥补</a></li>
                                        <li><a href="javascript:;">护肤</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--右5-->
                        <div class="mt-5 pt-5 inner-sidebar">
                            <div class="inner-sidebar-two">
                                <h3 class="title_wid"><span>关于我们</span></h3>
                                <div>
                                    <a href="javascript:;" class="div_a_s">美丽的</a>
                                    <a href="javascript:;">清秀的</a>
                                    <a href="javascript:;" class="div_a_s">医疗保健</a>
                                    <a href="javascript:;">弥补</a>
                                    <a href="javascript:;">护肤</a>
                                    <a href="javascript:;" class="div_a_s">皮肤</a>
                                    <a href="javascript:;" class="div_a_s">温泉</a>
                                </div>
                            </div>
                        </div>

                        <!-- 右6图 -->
                        <div class="mt-5 pt-3 inner-sidebar">
                                <div class="inner-sidebar-two">
                                    <h3 class="title_wid"><span>达人</span></h3>
                                    <div>
                                        <img :src="rights[0].pic" alt="" class="w-100">
                                        <p>{{rights[0].rtext}}</p>
                                    </div>
                                </div>
                            </div>
                                <!-- 右下图-->

                                <div class="mt-5 pt-5">
                                    <img :src="rights[1].pic" alt="" class="img-fluid"/>
                                </div>
                            


                            <div class="mt-5 pt-5">
                                <h5>问答</h5>
                                <div class="questions_list">
                                    <ul class="list_one">
                                        <li><a href="javascript:;"> 萨达萨达是</a></li>
                                        <li><a href="javascript:;"> 萨达萨达是</a></li>
                                        <li><a href="javascript:;"> 萨达萨达是</a></li>
                                        <li><a href="javascript:;"> 萨达萨达是</a></li>
                                        <li><a href="javascript:;"> 萨达萨达是</a></li>
                                        <li><a href="javascript:;"> 萨达萨达是</a></li>
                                        <li><a href="javascript:;"> 萨达萨达是</a></li>
                                    </ul>
                                </div>
                            </div>
                            <!---->
                            <div class="mt-5 pt-5">
                                <h5 class="mb-5">热帖榜</h5>
                                    <div class="myscroll">
                                
                                    <!-- 滚动列表 没事别打开-->
                                    <ul>
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                        <li>
                                            <span>AAAAA</span>
                                            <span>2019-3-21</span>
                                            <span>asdasdasdasdsa</span>
                                        </li>  
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <!--右结束-->
                    </div>
                </div>
            </div>
        </div>
        <div class="div_height"></div>
            <div class="text-center mt-5 next_center_span">
                <a href="javascript:;" class="my_text_color">
                    <span>继续阅读</span>
                </a>
            </div>
                    <!--分页-->

            <div class="container">
                <ul class="pagination mt-5 justify-content-center">
                    <li class="page-item">
                        <a href="javascript:;" class="page-link"> < </a>
                    </li>
                    <li class="page-item active">
                        <a href="javascript:;" class="page-link">1</a>
                    </li>
                    <li class="page-item">
                        <a href="javascript:;" class="page-link">2</a>
                    </li>
                    <li class="page-item">
                        <a href="javascript:;" class="page-link">3</a>
                    </li>
                    <li class="page-item">
                        <a href="javascript:;" class="page-link"> > </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],
            bodys:[
                {bid:"",title:"",btext:"",pic:""},
                {bid:"",title:"",btext:"",pic:""},
                {bid:"",title:"",btext:"",pic:""},
                {bid:"",title:"",btext:"",pic:""},
                {bid:"",title:"",btext:"",pic:""},
                {bid:"",title:"",btext:"",pic:""},
            ],
            rights:[
                {rid:"",rtitle:"",rtext:""},
                {rid:"",rtitle:"",rtext:""},
                {rid:"",rtitle:"",rtext:""},
                {rid:"",rtitle:"",rtext:""},
                {rid:"",rtitle:"",rtext:""},
                {rid:"",rtitle:"",rtext:""},
            ],
        }
    },
    methods: {
        lunbo(){
            var url="http://127.0.0.1:3500/index";
            this.axios.get(url).then(result=>{
                this.list=result.data.data;
            });
        },
        body(){
            // var data=this.data;
            // console.log(data);
            var url="http://127.0.0.1:3500/index/body";
            var postData=this.qs.stringify({
                bid:this.bid,
                title:this.title,
                btext:this.btext,
                pic:this.pic,
                // content:data
            });
            this.axios.post(url,postData).then(result=>{
                // console.log(result.data.data);
                this.bodys=result.data.data;
            });
        },
        right(){
            var data=this.data;
            var url="http://127.0.0.1:3500/index/right";
            var postData=this.qs.stringify({
                content:data
            });
            this.axios.post(url,postData).then(result=>{
                this.rights=result.data.data;
                // console.log(this.rights);
            });
        },
         roll(){
            $(function(){
                $('.myscroll').myScroll({
                    speed: 100, //数值越大，速度越慢
                    rowHeight: 26 //li的高度
                });
            });
        },
        rlist(){
            (function($){
                $.fn.myScroll = function(options){
                //默认配置
                var defaults = {
                    speed:40,  //滚动速度,值越大速度越慢
                    rowHeight:50 //每行的高度
                };  
                var opts = $.extend({}, defaults, options),intId = [];    
                function marquee(obj, step){
                    obj.find("ul").animate({
                        marginTop: '-=1'
                    },0,function(){
                            var s = Math.abs(parseInt($(this).css("margin-top")));
                            if(s >= step){
                                $(this).find("li").slice(0, 1).appendTo($(this));
                                $(this).css("margin-top", 0);
                            }
                        });
                    }     
                    this.each(function(i){
                        var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
                        intId[i] = setInterval(function(){
                            if(_this.find("ul").height()<=_this.height()){
                                clearInterval(intId[i]);
                            }else{
                                marquee(_this, sh);
                            }
                        }, speed);
                        _this.hover(function(){
                            clearInterval(intId[i]);
                        },function(){
                            intId[i] = setInterval(function(){
                                if(_this.find("ul").height()<=_this.height()){
                                    clearInterval(intId[i]);
                                }else{
                                    marquee(_this, sh);
                                }
                            }, speed);
                        });
                    
                    });

                }
            })(jQuery);
        },
        into(){
           $(document).ready(function(){
                var a = $(".png_button").css("opacity");
                var b = $(".btn_size").css("margin-top");
                var a=parseInt(a);
                var b=parseInt(b);
                var t = setInterval(()=>{  
                    a+=0.1;
                    if (a>=1 && b>0){
                        b-=1;
                        // console.log(a);
                        $(".png_button").css("opacity",a);
                        $(".btn_size").css("margin-top",b+"px");
                        if (b === 1){
                            $(".btn_size").css("margin-top",1+"px");   
                            return;
                        }
                    }
                },);             
            });
        },
        run(){
            setInterval(()=>{
                this.into();
            },1000);
        },
    },
    created() {
        this.lunbo();
        this.body();
        this.right();
        this.roll();
        this.rlist();
        // this.into();
        this.run();
    },
}
</script>
<style scoped>
    span.sp_color>span{
        font-size: 10px;
    }
  .mint-swipe{
        height: 478px;
    }
    .app-home .mint-swipe img{
        width:100%;
    }


    .myscroll ul{
        position: absolute;
        list-style: none;
        width: 100%;
    }
    .myscroll { 
        position: relative;
        width: 350px; 
        height: 260px; 
        top: 17em;
        margin-top:-203px;
        margin-left:-24px;
        line-height: 26px; 
        font-size: 12px; 
        overflow: hidden;
    }
    .myscroll li { 
        height: 35px; 
        /* margin-left: 25px; */
        font-size: 16px;
        margin: 0;
        padding:0;
    }
    .myscroll li span{
        margin: 9px;
    }
    .div_height{
        height: 100px;
    }
    .questions_list{
        border: 3px solid #c4dbfa;
        border-radius: 5%;
        line-height: 20px;
    }
    .questions_list ul{
        /* list-style: none; */
        text-align: left;
    }
    .questions_list ul li{
       margin: 5px 0 0 20px;
    } 
</style>