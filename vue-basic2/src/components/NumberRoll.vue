<template>
<!--    <div class="numbers" style='{font-size:40px;height: 40px}'>-->
    <div class="numbers" :style="numbersStyle">
        <span v-for="n in numLen" v-bind:key="n" v-bind:class="'bit'+n" v-bind:style="numStyle[n-1]">0123456789</span>
    </div>
</template>

<script>
    //'{font-size:40px;height:30px;}'
    export default {
        name: "NumberRoll",
        props:['numLen','nownum','fSize','numColor'],
        data() {
            return {
                // 当前数值
                numStyle:[],
                numbersStyle:"",
                curNum:0
            };
        },
        methods: {
            setupRoll() {
                setInterval(this.roll, 2000);
            },
            roll() {
                this.curNum ++;
                this.setNowNum(this.curNum)
            },
            setNowNum(n){
                // let arr = [];
                for(let i = 0;i < this.numLen;i++){
                    let bit = parseInt(n%10)
                    let s = 'margin-top' +':' + (-bit)+'em;'

                    let obj = this.numStyle[i];
                    obj = obj + s;
                    this.$set(this.numStyle,i,obj);

                    n = n / 10;
                }
            }
        },
        mounted() {
            this.setupRoll();
            let s = 'width:' + this.fSize +';color:' + this.numColor+";"
            // console.log(s);
            for(let i = 0;i < this.numLen;i++){
                this.numStyle.push(s)
            }
            this.setNowNum(this.nownum)

            // s = 'bakground-color: blue;'
            s = 'font-size:' + this.fSize + ';height:' + this.fSize + ';'
            this.numbersStyle = s;
            // console.log(this.numbersStyle);

            this.curNum =  parseInt(this.nownum);

        },
        // 销毁定时器
        beforeDestroy() {
            if (this.roll) {
                clearInterval(this.roll); // 在Vue实例销毁前，清除时间定时器
            }
        }
    }
</script>

<style scoped>
    .numbers {

        /*border: 1px solid #911004;*/
        display: inline-block;
        /*width: 100%;*/
        overflow: hidden;
        font-size: 30px;
        height: 30px;
        margin: 0;
    }
    .numbers>span {
        font-family: 宋体;
        font-style: oblique;
        float: right;
        width: 30px;
        font-weight: bold;
        /*height: 1.5rem;*/
        /* 书写模式*/
        writing-mode: vertical-rl;
        /* 控制行内字符的旋转*/
        text-orientation: upright;
        margin-top: 0em;
        /*-webkit-transition: margin-top 0.5s ease-out;*/
        /*-o-transition: margin-top 0.5s ease-out;*/
        transition: margin-top 0.6s ease-out;


    }
</style>
