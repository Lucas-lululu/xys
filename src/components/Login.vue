<template>
<div>
	<div id="myMp4">
		<div style="height: 300px"></div>
		<video width="1900" height="1100" autoplay="autoplay" loop muted>
			你的浏览器不支持HTML5播放此视频
			<span style="white-space:pre"></span>
			<source  src="http://127.0.0.1:3500/img/c2a03645502c8ec2d96eb5ecfe070cee.mp4" />
		</video>
	</div>
	
	<div class="login-box">
		<div class="box-con tran">
			<div style="height: 200px"></div>
			<div class="login-con f-l m-0">
				<div class="form-group">
					<input type="text" placeholder="邮箱/手机号码"/>
					<span class="error-notic">邮箱/手机号码不正确</span>
				</div>
				<div class="form-group">
					<input type="password" placeholder="密码">
					<span class="error-notic">密码不正确</span>
				</div>
				<div class="form-group">
					<button type="submit" class="tran pr">
					<a href="javascript:;" class="tran">登录</a>
					</button>
				</div>
				<div class="from-line">
				</div>
				<div class="form-group">
					<a href="javascript:;" class="move-signup a-tag tran blue-border">还没有帐号？免费注册<i class="iconfont tran">&#xe606;</i></a>
				</div>
				<div class="form-group">
					<a href="javascript:;" class="move-reset a-tag tran">忘记密码？重置 <i class="iconfont tran">&#xe606;</i></a>
				</div>
				<div class="form-group">
					<a href="javascript:;" class="move-other a-tag tran">使用第三方帐号登录<i class="iconfont tran">&#xe606;</i></a>
				</div>
			</div>





			<!-- 登录 -->


			<div class="signup f-l">


				<div class="form-group">
					<div class="signup-form">
						<input type="text" placeholder="邮箱" class="email-mobile" onblur="verify.verifyEmail(this)">
						<a href="javascript:;" class="signup-select">手机注册</a>
					</div>
					<span class="error-notic">邮箱格式不正确</span>
				</div>
				<div class="signup-email">
					<div class="form-group">
						<input type="text" placeholder="您的名字">
					</div>
					<div class="form-group">
						<input type="password" placeholder="密码（字母、数字，至少6位）" onblur="verify.PasswordLenght(this)">
						<span class="error-notic">密码长度不够</span>
					</div>
					<div class="form-group">
						<button type="submit" class="tran pr">
						<a href="javascript:;" class="tran">注册</a>
						<!-- <img class="loading" src="images/loading.gif"> -->
						</button>
					</div>
					<p class="view-clause">
						点击注册，即同意我们的 <a href="#">用户隐私条款</a>
					</p>
				</div>





				<!-- 邮箱注册 -->
				<div class="signup-tel" style="display:none">
					<div class="signup-form" id="message-inf" style="display:none">
						<input type="text" placeholder="短信验证码" style="width:180px;" onblur="verify.VerifyCount(this)">
						<a href="javascript:;" class="reacquire">重新获取（59）</a>
						<span class="error-notic">验证码输入错误</span>
					</div>
					<div class="form-group">
						<button type="submit" class="tran get-message pr">
						<a href="javascript:;" class="tran">获取短信验证码</a>
						<!-- <img class="loading" src="images/loading.gif"> -->
						</button>
					</div>
				</div>





				<!-- 手机号码注册 -->
				<div class="from-line">
				</div>
				<div class="form-group">
					<a href="javascript:;" class="move-login a-tag tran blue-border">已有帐号？登录<i class="iconfont tran">&#xe606;</i></a>
				</div>
				<div class="form-group">
					<a href="javascript:;" class="move-other a-tag tran">使用第三方帐号登录<i class="iconfont tran">&#xe606;</i></a>
				</div>
			</div>



			<!-- 注册 -->
			<div class="other-way f-l">
				<div class="form-group">
					<button type="submit" class="tran pr">
					<a href="javascript:;" class="tran">QQ帐号登录</a>
					<!-- <img class="loading" src="images/loading.gif"> -->
					</button>
				</div>
				<div class="form-group">
					<button type="submit" class="tran pr">
					<a href="javascript:;" class="tran">新浪微博帐号登录</a>
					<!-- <img class="loading" src="images/loading.gif"> -->
					</button>
				</div>
				<div class="form-group">
					<button type="submit" class="tran pr">
					<a href="javascript:;" class="tran">微信帐号登录</a>
					<!-- <img class="loading" src="images/loading.gif"> -->
					</button>
				</div>
				<div class="form-group">
					<button type="submit" class="tran pr">
					<a href="javascript:;" class="tran">网易帐号登录</a>
					<!-- <img class="loading" src="images/loading.gif"> -->
					</button>
				</div>
				<div class="from-line">
				</div>
				<div class="form-group">
					<a href="javascript:;" class="move-signup a-tag tran blue-border">还没有帐号？免费注册<i class="iconfont tran">&#xe606;</i></a>
				</div>
				<div class="form-group">
					<a href="javascript:;" class="move-login a-tag tran">已有帐号？登录<i class="iconfont tran">&#xe606;</i></a>
				</div>
			</div>







			<!-- 第三方登录 -->
			<div class="mimachongzhi f-l">
				<div class="form-group">
					<input type="text" placeholder="请输入您的邮箱地址">
					<span class="error-notic">邮箱格式不正确</span>
				</div>
				<div class="form-group">
					<button type="submit" class="tran pr">
					<a href="javascript:;" class="tran">发送重置密码邮件</a>
					<!-- <img class="loading" src="images/loading.gif"> -->
					</button>
				</div>
				<div class="from-line">
				</div>
				<div class="form-group">
					<a href="javascript:;" class="move-signup	a-tag tran blue-border">还没有帐号？免费注册<i class="iconfont tran">&#xe606;</i></a>
				</div>
				<div class="form-group">
					<a href="javascript:;" class="move-login a-tag tran">已有帐号？登录<i class="iconfont tran">&#xe606;</i></a>
				</div>
			</div>





			
			<!-- 密码重置 -->
			<div class="mobile-success f-l">
				<p>
					手机号 <span>186****7580</span> 验证成功
				</p>
				<p>
					请完善您的账号信息，您也可以<a href="#">绑定现有账号</a>
				</p>
				<div class="form-group">
					<input type="text" placeholder="邮箱" class="email-mobile" onblur="verify.verifyEmail(this)"/>
					<span class="error-notic">邮箱格式不正确</span>
				</div>
				<div class="form-group">
					<input type="text" placeholder="您的名字">
				</div>
				<div class="form-group">
					<input type="password" placeholder="密码（字母、数字，至少6位）" onblur="verify.PasswordLenght(this)"/>
					<span class="error-notic">密码长度不够</span>
				</div>
				<div class="form-group">
					<button type="submit" class="tran pr">
					<a href="javascript:;" class="tran">注册</a>
					<!-- <img class="loading" src="images/loading.gif"> -->
					</button>
				</div>
				<p class="view-clause">
					点击注册，即同意我们的 <a href="#">用户隐私条款</a>
				</p>
			</div>



			<!-- 手机注册成功添补信息 -->
		</div>
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
		
	},
}
</script>
<style scoped>
	#myMp4{
		position: absolute;
		top: -345px;
		left: 0;
		/* float: left; */
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		z-index: -1;
	}
	body, div, ul, ol, li, p, i, em, h1, h2, h3, h4, a, strong, span, img, form, input, textarea, button{
	padding: 0;
	margin:0;
}
	body{
		font-family:"Microsoft YaHei", "Simsun", Tahoma, Arial,"Helvetica Neue","Hiragino Sans GB", "sans-self";
		font-size: 14px;
		line-height: 24px;
	}
	input, textarea{
		outline: none;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
		color: inherit;
	}
	img{
		border: 0;
	}
	.pr{
		position: relative;
	}
	.pa{
		position: absolute;
	}
	.pf{
		position: fixed;
	}
	.f-l{
		float: left;
	}

	li, div, ul{
		*zoom:1;
	}
	li:after, div:after, ul:after{
		content: '';
		display: table;
		clear: both;
	}
	.tran{
		transition:all 0.3s ease-out;
		-webkit-transition:all 0.3s ease-out;
		-moz-transition:all 0.3s ease-out;
		-o-transition:all 0.3s ease-out;
		height: 1%;
	}
	.container{
		width: 1000px;
		margin: 0 auto;
	}

	.login-banner{
		width: 100%;
		/*background: url(../images/banner.jpg) center bottom no-repeat \9;
		background: url(../images/banner.jpg) center bottom/cover no-repeat;*/
	}
	@media screen and (min-width: 320px) {
		.login-banner{
			height: 100px;
		}
	}
	@media screen and (min-width: 480px) {
		.login-banner{
			height: 120px;
		}
	}
	@media screen and (min-width: 640px) {
		.login-banner{
			height: 160px;
		}
	}
	@media screen and (min-width: 768px) {
		.login-banner{
			height: 180px;
		}
	}
	@media screen and (min-width: 1024px) {
		.login-banner{
			height: 200px;
		}
	}
	@media screen and (min-width: 1280px) {
		.login-banner{
			height: 220px;
		}
	}
	@media screen and (min-width: 1366px) {
		.login-banner{
			height: 240px;
		}
	}
	/* @media screen and (min-width: 1680px) {
		.login-banner{
			height: 260px;
		}
	} */
	.login-banner{
		height: 260px \9;
	}
	.login-box{
		width: 299px;
		margin:0 auto;
		/* height: 100%; */
		overflow-x: hidden;
	}
	.box-con{
		width: 1600px;
		height: 100%;
	}
	.login-con{
		position: relative;
		width: 300px;
		margin:0 10px; 
		height: 100%;
	}
	.login-box .form-group{
		margin-top: 20px;
		height: 100%;
	}

	.login-box input, .signup-form{
		width: 300px;
		height:50px;
		line-height: 48px \9;
		padding-left: 10px;
		border: 1px #d9d9d9 solid;
		border-radius: 5px;
		font-size: 14px;
		box-sizing:border-box;
		-webkit-box-sizing:border-box;
		-moz-box-sizing:border-box;
		transition:all 0.3s ease-out;
		-webkit-transition:all 0.3s ease-out;
		-moz-transition:all 0.3s ease-out;
		
	}
	.login-box input:focus{
		border-color: #03a9f4;
		box-shadow: 0 0 15px #03a9f4;
		-webkit-box-shadow: 0 0 15px #03a9f4;
		-moz-box-shadow: 0 0 15px #03a9f4;
	}
	.login-box button{
		width: 300px;
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		border: 0;
		background-color: #03a9f4;
		color: #fff;
		border-radius: 5px;
	}
	.login-box button a{
		display: block;
		margin-top: -25px;
	}
	.login-box button a:hover{
		padding-top: 3px;
	}
	.login-box button:hover{
		background-color: #0096da;
	}
	.from-line{
		height: 0;
		overflow: hidden;
		border-top: 1px #c2c2c2 solid;
		margin-top: 20px;
		
	}
	.a-tag{
		position: relative;
		display: block;
		height: 48px;
		border: 1px #c2c2c2 solid;
		text-align: center;
		line-height: 48px;
		color: #c2c2c2;
		border-radius: 5px;
		background-color: #fff;
	}
	.blue-border{
		border:1px #03a9f4 solid;
		color: #03a9f4;
	}

	.a-tag:hover{
		background-color: #aaa;
		color: #fff;
	}
	.blue-border:hover{
		background-color: #03a9f4;
		color: #fff;
	}
	.a-tag i{
		position: absolute;
		right: 20px;
		top: 0;
		font-size: 24px;
		color: #fff;
	}
	.a-tag:hover i{
		right: 10px;
	}
	.signup, .other-way, .mimachongzhi, .mobile-success{
		width: 300px;
		margin: 0 10px;
	}


	.signup-form {
		margin-top: 20px;
	}
	.signup-form input{
		border: 0;
		height: 48px;
		width: 220px;
	}
	.signup-form input:focus{
		box-shadow:0 0 0 #fff;
	}
	.signup-form.border{
		border-color: #03a9f4;
		box-shadow: 0 0 15px #03a9f4;
		-webkit-box-shadow: 0 0 15px #03a9f4;
		-moz-box-shadow: 0 0 15px #03a9f4;
	}
	.signup-form a{
		color: #03a9f4;
	}
	.view-clause{
		padding-top: 20px;
		line-height: 14px;
		text-align: center;
		color: #808080;
	}
	.view-clause a{
		color: #03a9f4;
	}
	.view-clause a:hover{
		text-decoration: underline;
	}
	a.reacquire{
		color: #c1c1c1;
	}
	.error-notic{
		color: #ff4e00;
		display: none;
	}


	.mobile-success{
		padding-top: 20px;
	}
	.mobile-success p{
		text-align: center;
		color: #666;
	}
	.mobile-success p span{
		font-weight: bold;
		padding: 0 10px;
	}
	.mobile-success p a{
		color: #03a9f4;
		padding-left: 5px;
	}
	.mobile-success p a:hover{
		text-decoration: underline;
	}
	.loading{
		position: absolute;
		top: 10px;
		right: 20px;
		display: none;

	}

</style>