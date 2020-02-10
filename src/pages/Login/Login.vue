<template>
	<div class="loginContainer">
		<div class="loginInner">
			<div class="login_header">
				<h2 class="login_logo">硅谷外卖</h2>
				<div class="login_header_title">
					<router-link :class={on:loginType} @click.native="loginType=true" to="/login/message">短信登录</router-link>
					<router-link :class={on:!loginType} @click.native="loginType=false" to="/login/verification">密码登录</router-link>
				</div>
			</div>
			<div class="login_content">
				<router-view></router-view>
				<a class="about_us">关于我们</a>
			</div>
			<a href="javascript:" class="go_back" @click="$router.back()">
				<i class="iconfont icon-fanhui"></i>
			</a>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Login",
				data(){
            return{
								loginType:true,
            }
				},
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixins.styl"
	.loginContainer
		width 100%
		height 100%
		background #fff
		.loginInner
			padding-top 60px
			width 80%
			margin 0 auto
			.login_header
				.login_logo
					font-size 40px
					font-weight bold
					color #02a774
					text-align center
				.login_header_title
					padding-top 40px
					text-align center
					>a
						color #333
						font-size 14px
						padding-bottom 4px
						&:first-child
							margin-right 40px
						&.on
							color #02a774
							font-weight 700
							border-bottom 2px solid #02a774
			.about_us
				display block
				font-size 12px
				margin-top 20px
				text-align center
				color #999
		.go_back
			position absolute
			top 5px
			left 5px
			width 30px
			height 30px
			>.iconfont
				font-size 20px
				color #999
</style>
