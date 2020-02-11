<template>
    <div class="msite">
        <!--首页头部-->
        <HeaderTop :title="address.name">
    <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
    </span>
            <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
    </span>
        </HeaderTop>

        <!--首页导航-->
        <nav class="msite_nav">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div v-for="(page, index) in pages" :key="index" class="swiper-slide">
                        <a v-for="(category, index) in page" :key="index" class="link_to_food">
                            <div class="food_container">
                                <img :src=category.image_url>
                            </div>
                            <span>{{category.title}}</span>
                        </a>
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-xuanxiang"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <ShopList></ShopList>

        </div>
    </div>
</template>

<script>
    import HeaderTop from "@/components/HeaderTop/HeaderTop";
    import ShopList from "@/components/ShopList/ShopList";
    import Swiper from 'swiper'
    import {mapState, mapActions} from 'vuex'
    import 'swiper/css/swiper.css'

    export default {
        name: "MSite",
        computed: {
            ...mapState(['address', 'categorys', 'shops', 'latitude', 'longitude']),
            pages() {
                const {categorys} = this
                const arry = []
                let minArry = []
                categorys.forEach(c => {
                    if (minArry.length === 8) {
                        minArry = []
                    }
                    if (minArry.length === 0) {
                        arry.push(minArry)
                    }
                    c.image_url = require('' + c.image_url)
                    minArry.push(c)
                })
                return arry
            }
        },
        components: {
            HeaderTop,
            ShopList
        },
        mounted() {
            this.getCategorys()
            const {latitude, longitude} = this
            this.getShops({latitude, longitude})

        },
        methods: {
            ...mapActions(['getCategorys', 'getShops'])
        },
        watch: {
            categorys() {
                this.$nextTick(() => {
                    new Swiper('.swiper-container', {
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination'
                        }
                    })
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .msite //首页
        width 100%

        .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff

            .swiper-container
                width 100%
                height 100%

                .swiper-wrapper
                    width 100%
                    height 100%

                    .swiper-slide
                        display flex
                        justify-content center
                        align-items flex-start
                        flex-wrap wrap

                        .link_to_food
                            width 25%

                            .food_container
                                display block
                                width 100%
                                text-align center
                                padding-bottom 10px
                                font-size 0

                                img
                                    display inline-block
                                    width 50px
                                    height 50px

                            span
                                display block
                                width 100%
                                text-align center
                                font-size 13px
                                color #666

                .swiper-pagination
                    > span.swiper-pagination-bullet-active
                        background #02a774
</style>
