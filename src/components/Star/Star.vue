<template>
    <!--    <div :class="'star ' + starSize">-->
    <div class="star" :class="starSize">
        <span class="star-item on" v-for="i in full" :key="'full'+i"></span>
        <span class="star-item half" v-for="i in half" :key="'half' + i"></span>
        <span class="star-item off" v-for="i in empty" :key="'empty' + i"></span>
    </div>
</template>

<script>
    export default {
        name: "Star",
        props: {
            rate: Number,
            starSize: String
        },
        computed: {
            full() {
                return Math.floor(this.rate);
            },
            half() {
                return Math.ceil(this.rate) === Math.floor(this.rate) ? 0 : 1
            },
            empty() {
                return Math.floor(5 - this.rate);
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .star //2x图 3x图
        float left
        font-size 0

    .star-item
        display inline-block
        background-repeat no-repeat

    &.star-48
        .star-item
            width 20px
            height 20px
            margin-right 22px
            background-size 20px 20px

            &:last-child
                margin-right: 0

            &.on
                bg-image('./images/stars/star48_on')

            &.half
                bg-image('./images/stars/star48_half')

            &.off
                bg-image('./images/stars/star48_off')

    &.star-36
        .star-item
            width 15px
            height 15px
            margin-right 6px
            background-size 15px 15px

            &:last-child
                margin-right 0

            &.on
                bg-image('./images/stars/star36_on')

            &.half
                bg-image('./images/stars/star36_half')

            &.off
                bg-image('./images/stars/star36_off')

    &.star-24
        .star-item
            width 10px
            height 10px
            margin-right 3px
            background-size 10px 10px

            &:last-child
                margin-right 0

            &.on
                bg-image('./images/stars/star24_on')

            &.half
                bg-image('./images/stars/star24_half')

            &.off
                bg-image('./images/stars/star24_off')
</style>