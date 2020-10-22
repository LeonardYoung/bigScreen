<template>
    <div class="header">
        <span class="headerTitle"><strong>医院数据实时显示大屏</strong></span>
        <span class="headerTime">{{ nowDate }}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nowDate: "", // 当前日期
            };
        },
        methods: {
            currentTime() {
                setInterval(this.formatDate, 500);
            },
            formatDate() {
                let date = new Date();
                let year = date.getFullYear(); // 年
                let month = date.getMonth() + 1; // 月
                let day = date.getDate(); // 日
                let week = date.getDay(); // 星期
                let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
                let hour = date.getHours(); // 时
                hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
                let minute = date.getMinutes(); // 分
                minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
                let second = date.getSeconds(); // 秒
                second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
                this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
            }
        },
        mounted() {
            this.currentTime();
        },
        // 销毁定时器
        beforeDestroy() {
            if (this.formatDate) {
                clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
            }
        }

    }

</script>

<style scoped>
    .header{
        height: 8%;
        min-height: 3rem;
        position: relative;

    }
    .headerTitle{
        font-size: 2rem;
        /*font-size: 30px;*/
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        float: none;
    }
    .headerTime{
        position: absolute;
        bottom: -1%;
        right: 2rem;
        font-size: 16px;
        float: none;
    }
</style>
