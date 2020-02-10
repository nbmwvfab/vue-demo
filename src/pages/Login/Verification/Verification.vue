<template>
	<div class="login_content">
		<form >
			<div class="on">
				<section class="login_message">
					<input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
				</section>
				<Password :pwd="pwd" :getPwd="getPwd"></Password>
				<section class="login_message">
					<input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
					<img class="get_verification" src="../images/captcha.svg" alt="captcha">
				</section>
			</div>
			<button class="login_submit">登录</button>

		</form>
	</div>
</template>

<script>
    import Password from "@/components/Password/Password";

    export default {
        name: "Verification",
				data(){
            return{
                name:"",
                pwd:"",
                captcha:"",
            }
				},
        components:{
            Password,
        },
        methods:{
            getPwd(pwd){
                this.pwd=pwd
            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../../common/stylus/mixins.styl"
	.login_content
		>form
			>div
				display none
				&.on
					display block
				input
					width 100%
					height 100%
					padding-left 10px
					box-sizing border-box
					border 1px solid #ddd
					border-radius 4px
					outline 0
					font 400 14px Arial
					&:focus
						border 1px solid #02a774
				.login_hint
					margin-top 12px
					color #999
					font-size 14px
					line-height 20px
					>a
						color #02a774
			.login_submit
				display block
				width 100%
				height 42px
				margin-top 30px
				border-radius 4px
				background #4cd96f
				color #fff
				text-align center
				font-size 16px
				line-height 42px
				border 0
</style>
