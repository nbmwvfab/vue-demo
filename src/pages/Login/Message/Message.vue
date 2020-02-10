<template>
	<div class="login_content">
		<form>
			<div class="on">
				<section class="login_message on">
					<input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
					<button :disabled="!rightPhone" class="get_verification"  :class="{right_phone: rightPhone}"  @click.prevent="sendMessage">{{computeTime===0 ? '获取验证码' : `已发送(${computeTime})s`}} </button>
				</section>
				<section class="login_verification">
					<input type="tel" maxlength="8" placeholder="验证码" v-model="code">
				</section>
				<section class="login_hint">
					温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
					<a href="javascript:;">《用户服务协议》</a>
				</section>
			</div>
			<button class="login_submit" @click="submit">登录</button>

		</form>
		<AlertTip :alertText="alertText" v-show="tipIsShow" @closeTip="closeTip"></AlertTip>
	</div>
</template>

<script>
	import {reqLoginMessage,reqSendCode} from "@/api";
	import {Toast} from 'mint-ui';
    import AlertTip from "@/components/AlertTip/AlertTip";
	export default {
		name: "Message",
		data() {
			return {
				phone: "",
				code: "",
				tipIsShow:false,
				alertText:'',
				computeTime:0,
				intervalId:0
			}
		},
		computed: {
			rightPhone () {
				return /^1\d{10}$/.test(this.phone)
			}
		},
		methods: {
			async submit() {
				const {phone, code,rightPhone} = this
				if (!rightPhone|| !code) {
					this.showTip("请输入正确手机号或验证码")
					return
				}
				const reslut = await reqLoginMessage({phone, code})
				if (reslut.code === 0) {
					this.$store.dispatch("receiveUserInfo", reslut.data)
					Toast("登录成功")
				}
			},
			async sendMessage(){
				if(this.computeTime===0){
					this.computeTime=60
					this.intervalId = setInterval(()=>{
						this.computeTime--
						if(this.computeTime===0){
							clearInterval(this.intervalId)
						}
					}, 1000);
					// 发送ajax请求(向指定手机号发送验证码短信)
					const result = await reqSendCode(this.phone)
					console.log(result)
					if(result.code===1) {
						// 显示提示
						this.showTip(result.msg)
						// 停止计时
						if(this.computeTime) {
							this.computeTime = 0
							clearInterval(this.intervalId)
							this.intervalId = undefined
						}
					}
				}

			},
			closeTip(){
				this.tipIsShow=false
			},
			showTip(alertText){
				this.tipIsShow=true
				this.alertText=alertText
			}
		},
		components: {
			AlertTip,
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../../common/stylus/mixins.styl"
	.login_content
		> form
			> div
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

				.login_verification
					position relative
					margin-top 16px
					height 48px
					font-size 14px
					background #fff

				.login_message
					position relative
					margin-top 16px
					height 48px
					font-size 14px
					background #fff
					.get_verification
						touch-action none
						disable true
						position absolute
						top 50%
						right 10px
						transform translateY(-50%)
						border 0
						color #ccc
						font-size 14px
						background transparent
						&.right_phone
							color black
							disable false
				.login_hint
					margin-top 12px
					color #999
					font-size 14px
					line-height 20px

					> a
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
