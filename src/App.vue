<template>
	<div id="app">
		<router-view></router-view>
		<FooterGuirde v-show="$route.meta.showFooter"></FooterGuirde>
	</div>
</template>

<script>
    import FooterGuirde from "@/components/FooterGuide/FooterGuirde"
		import {mapActions} from 'vuex'
    export default {
        name: 'app',
        components: {
            FooterGuirde
        },
		mounted() {
			this.getAddress('')
        },
		methods:{
            ...mapActions(['getAddress'])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "//at.alicdn.com/t/font_1629843_845aprdp8fq.css"
	#app
		width 100%
		height 100%
		background #f5f5f5
		position relative
</style>
