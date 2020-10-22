<template>
<!--    门诊信息-->
    <div>
        <div class="subTitle">
            <img src="../../static/门诊医疗.png" height="30" width="30">
            门诊人数情况</div>
        <div class="detail">
            <div v-for="(row,index) in info" class="oneline" :key="row.title">
                <p>{{ row.title+":" }}</p><NumberRoll class="num-roll" v-bind:numLen=row.maxLen
                                                      v-bind:nownum=row.initNum
                                                        v-bind:fSize=fSizes[index]
                                                        :numColor="'yellow'"></NumberRoll>
<!--                <img src="../../static/up.jpg" height="20" width="20" v-if="'inc' in row" class="upimg">-->
                <p v-if="'inc' in row" class="inc"> {{ row.inc }} </p>
                <p v-if="'dec' in row" class="dec"> {{ row.dec }} </p>
            </div>
        </div>

    </div>
</template>

<script>
    import NumberRoll from "../NumberRoll";
    export default {
        name: "OutPatientInfo",
        components:{
            NumberRoll
        },
        data(){
            return{
                fSizes:['30px','20px','30px','20px','30px','20px','30px','20px'],
                info:[
                    {
                        title:"今日门诊人次",
                        maxLen:4,
                        initNum:1233,
                        inc:'51.6%'
                    },
                    {
                        title:"昨日门诊人次",
                        maxLen:4,
                        initNum:2368
                    },
                    {
                        title:"今日急诊人次",
                        maxLen:4,
                        initNum:1658,
                        dec:'32.2%'
                    },
                    {
                        title:"昨日急诊人次",
                        maxLen:4,
                        initNum:1955
                    },
                    {
                        title:"今日住院人次",
                        maxLen:3,
                        initNum:123
                    },
                    {
                        title:"昨日住院人次",
                        maxLen:3,
                        initNum:456
                    },
                    {
                        title:"今日出院人次",
                        maxLen:3,
                        initNum:798,
                        inc:'2%'
                    },
                    {
                        title:"昨日出院人次",
                        maxLen:3,
                        initNum:231
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .subTitle{
        height: 10%;
        padding: 1rem 0;
        text-align: left;
        font-size: 1.5rem;
        /*alignment: left;*/
    }
    img{
        position: relative;
        top: 8px;
    }
    .detail{
        height:90%;
        display: flex;
        flex-direction: column;
        padding-top: 20px;
    }
    .oneline{
        display: flex;
        padding: 7px 0;
        /*margin-right: 75px;*/
        position: relative;
    }

    .num-roll{
        text-align: center;
        margin-left: auto;
        position: absolute;
        top: 1rem;
        right: 4.5rem;


        /*color: yellow;*/
    }
    .oneline:nth-child(odd){
        font-size: 1.5rem;
    }
    .oneline:nth-child(even){
        font-size: 1.2rem;
    }
    .oneline:nth-child(odd)>.num-roll{

    }
    .inc,.dec{
        font-size: 1rem;
        position: absolute;
        top: 1.3rem;
        right: 20px;
    }
    .inc{
        color: red;
    }
    .dec{
        color: green;
    }
    .upimg{
        position: absolute;
        top: 1rem;
        right: 0px;
    }


</style>
