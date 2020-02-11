<template>
    <div class="login_content">
        <section class="login_verification on">
            <input type="text" maxlength="8" placeholder="密码" v-if="pwdIsShow" v-model="pwd">
            <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
            <div class="switch_button" :class="{on:pwdIsShow}" @click="pwdIsShow=!pwdIsShow">
                <div class="switch_circle" :class="{on:pwdIsShow}"></div>
                <span class="switch_text">...</span>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Password",
        props: {
            getPwd: Function,
        },
        data() {
            return {
                pwd: "",
                pwdIsShow: false,
            }
        },
        watch: {
            pwd(value) {
                this.getPwd(value)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .login_verification
        position relative
        margin-top 16px
        height 48px
        font-size 14px
        background #fff

        .switch_button
            font-size 12px
            border 1px solid #ddd
            border-radius 8px
            transition background-color .3s, border-color .3s
            padding 0 6px
            width 30px
            height 16px
            line-height 16px
            color #fff
            position absolute
            top 50%
            right 10px
            transform translateY(-50%)

            &.off
                background #fff

                .switch_text
                    float right
                    color #ddd

            &.on
                background #02a774

            > .switch_circle
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                transition transform .3s

                &.on
                    transform translateX(27px)
</style>
