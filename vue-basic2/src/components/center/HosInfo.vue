<template>
    <div class="hosinfo">
            <img src="../../static/医院.png">
        <div class="right">
            <p >XX市第一人民医院</p>
            <div class="underInfo">
                星级评价：
                <img src="../../static/评分星级.png" height=15 width="100">
                机构等级：
                <strong>公立三甲</strong>
                地址：
                <strong>XX市人民路120号</strong>
                联系电话：
                <strong> 123456</strong>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HosInfo"
    }
</script>

<style scoped>
    .hosinfo{
        position: relative;
    }
    .hosinfo>img{
        float: left;
        height: 100%;
        /*display: inline-block;*/
        /*max-height: 72;*/
    }
    .right{
        float: left;
        display: inline-block;
    }
    .right>p{
        text-align: left;
        font-size: 1.5rem;
    }
    /*p:nth-child(1){*/
    /*    font-size: 1.5rem;*/
    /*}*/
    /*p:nth-child(2 ){*/
    /*    font-size: 1rem;*/
    /*}*/
    /*p>span>img{*/
    /*    float: right;*/
    /*}*/

</style>
