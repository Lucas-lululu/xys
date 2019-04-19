<template>
    <footer class="my_footer">
    <div class="clerafix"></div>
        <div class="container"> 
            <div class="row">
          <div class="col-md-3">
            <div class="about-footer"> <img class="margin-bottom-30" src="img/logo-foot.png" alt="" >
              <p>浙江省杭州市<br>
                西湖区</p>
              <p> 18758264854</p>
              <p> m18758264854@163.com</p>
            </div>
          </div>
          <div class="col-md-3">
            <h6>帮助</h6>
            <ul class="link">
              <li><a href="javascript:;"> 产品</a></li>
              <li><a href="javascript:;"> 发现</a></li>
              <li><a href="javascript:;"> 保存</a></li>
              <li><a href="javascript:;"> 隐私</a></li>
              <li><a href="javascript:;"> 博客</a></li>
              <li><a href="javascript:;"> 宣传资料 </a></li>
            </ul>
          </div>
          

          <div class="col-md-3">
            <h6>商店</h6>
            <ul class="link">
              <li><a href="javascript:;"> 关于我们</a></li>
              <li><a href="javascript:;"> 职业</a></li>
              <li><a href="javascript:;"> 发货方式</a></li>
              <li><a href="javascript:;"> 联络</a></li>
              <li><a href="javascript:;"> 支持</a></li>
              <li><a href="javascript:;"> 零销商</a></li>
            </ul>
          </div>
          

          <div class="col-md-3">
            <h6>我的账户</h6>
            <ul class="link">
              <li><a href="javascript:;"> 登陆</a></li>
              <li><a href="javascript:;"> 我的账号</a></li>
              <li><a href="javascript:;"> 我的购物</a></li>
              <li><a href="javascript:;"> 愿望清单</a></li>
              <li><a href="javascript:;"> 结账</a></li>
            </ul>
          </div>
        </div>

          
          <div class="rights">
            <p>Copyright &copy; 2018.Company name All rights reserved.jq22</p>
          </div>
        </div>
      </footer>
</template>
<script>
export default {
    methods: {
      go_top(){
          $(document).ready(function($) {	
			if($("meta[name=toTop]").attr("content")=="true"){
				$("<div id='toTop'><img src='img/1.png'></div>").appendTo('body');
				$("#toTop").css({
					width: '50px',
					height: '50px',
					bottom:'10px',
					right:'15px',
					position:'fixed',
					cursor:'pointer',
					zIndex:'999999',
				});
				if($(this).scrollTop()==0){
						$("#toTop").hide();
					}
				$(window).scroll(function(event) {
					if($(this).scrollTop()==0){
						$("#toTop").hide();
					}
					if($(this).scrollTop()!=0){
						$("#toTop").show();
					}
				});	
                    $("#toTop").click(function(event) {
                        $("html,body").animate({
                            scrollTop:"0px"},
                                666
                            )
                    })
				}
		    })
        },
    },
    created() {
        this.go_top();
    },
}
</script>
<style scoped>
    li {
	    list-style: none;
    }
    footer {
        padding: 120px 0;
        padding-bottom: 60px;
        background: #e5e5e5;
        position: relative;
        z-index: 1;
    }
    footer h5 {
        display: inline-block;
        width: 100%;
        margin-top: 30px;
    }
    footer h6 {
        display: inline-block;
        width: 100%;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    footer h4 {
        display: inline-block;
        width: 100%;
        margin: 50px 0;
        margin-bottom: 20px;
    }
    .margin-bottom-30{
        margin-bottom:30px !important;
    }

    .rights .go-up {
        border: 1px solid #454545;
        color: #949494;
        height: 30px;
        width: 30px;
        float: right;
        position: absolute;
        right: 0px;
        left: 0px;
        margin: 0 auto;
        bottom: -60px;
        text-align: center;
        line-height: 30px;
        display: inline-block;
    }
    .rights .go-up:hover {
        background: #fff;
        color: #333;
    }
    .rights {
        position: relative;
        text-align: center;
        display: inline-block;
        width: 100%;
        margin-top: 100px;
    }

    .rights p {
        margin: 0px;
        font-size: 10px;
        line-height: 26px;
        color: #999999;
    }
    .goTop >img{
            width: 50px;
            height: 50px;
            cursor: pointer;
        }
    .goTop{
        position: fixed;
        right : 20px;
        bottom : 20px;
    }
   
</style>