<template>
    <div class="shop_container">
        <ul class="shop_list">
            <ShopItem class="shop_li border-1px" v-for="(shop, index) in shops" :key="index" :shop="shop">

            </ShopItem>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ShopItem from "./ShopItem";

    export default {
        name: "ShopList",
        components: {
            ShopItem
        },
        computed: {
            ...mapState(['shops'])
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .msite_shop_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff

        .shop_header
            padding 10px 10px 0

            .shop_icon
                margin-left 5px
                color #999

            .shop_header_title
                color #999
                font-size 14px
                line-height 20px

        .shop_container
            margin-bottom 50px

            .shop_list
                .shop_li
                    bottom-border-1px(#f1f1f1)
                    width 100%

                    > a
                        clearFix()
                        display block
                        box-sizing border-box
                        padding 15px 8px
                        width 100%

</style>
