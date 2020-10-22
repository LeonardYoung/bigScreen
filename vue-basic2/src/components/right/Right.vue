<template>
    <div class="right">
        <EchartTitle v-bind:key="charts[0].id"
                     v-bind:info="charts[0]"/>
        <div class="twoChart">
            <EchartTitle class="schart" v-bind:key="charts[1].id"
                         v-bind:info="charts[1]"/>
            <EchartTitle class="schart" v-bind:key="charts[2].id"
                         v-bind:info="charts[2]"/>
        </div>
        <div class="twoChart">
            <EchartTitle class="schart" v-bind:key="charts[3].id"
                         v-bind:info="charts[3]"/>
            <EchartTitle class="schart" v-bind:key="charts[4].id"
                         v-bind:info="charts[4]"/>
        </div>
    </div>
</template>

<script>
    import EchartTitle from "../EchartTitle";
    export default {
        name: "Right",
        components:{
            EchartTitle
        },
        data(){
            return{
                charts:[
                    {
                        id:'chart-rt',
                        innertype:'echart',
                        chartNames:'rightTop',
                        chartTitle:' ',
                        seriesNames:[],
                        option:{
                            xAxis: {
                                data: ["剖宫产","切除术","脉旁路移植","胰腺切除术","置换术","腹腔镜","动脉介入","颅脑手术","椎板切除","食管切除"],
                                axisLabel:{
                                    rotate:45,
                                    color:'white'
                                }
                            },
                            yAxis: {
                                axisLabel:{
                                    color:'white'
                                },
                                splitLine:{
                                    show : false
                                }
                            },
                            legend:{
                                textStyle: {
                                    color: "#FFFFFF"
                                }
                            },
                            series: [{
                                name: '上周人数',
                                type: 'bar',
                                smooth:true,
                                data: [92,90,78,29,55,52,50,44,31,46]

                            },
                                {
                                    name: '本周人数',
                                    smooth:true,
                                    type: 'bar',
                                    data: [111,71,81,62,40,32,19,66,70,87]
                                },
                                {
                                    name: '本月人数',
                                    smooth:true,
                                    type: 'bar',
                                    data: [312,289,167,156,174,123,102,122,80,93]
                                }]
                        }
                    },
                    {
                        id:'chart-rb1',
                        innertype:'echart',
                        chartNames:'rightBottom1',
                        chartTitle:' ',
                        seriesNames:[],
                        option:{
                            xAxis:{
                                type:'value',
                                axisLabel:{
                                    color:'white'
                                },
                                splitLine:{
                                    show : false
                                }
                            },
                            grid:{
                                left:'25%'
                            },
                            yAxis:{
                                type:'category',
                                data:["医疗收入","药品收入","挂号收入","全院收入","住院收入","门诊收入"],
                                axisLabel:{
                                    color:'white'
                                }
                            },
                            series: [{
                                type: 'bar',
                                data: [31,43,54,91,60,80]
                            }]
                        }
                    },
                    {
                        id:'chart-rb2',
                        innertype:'echart',
                        chartNames:'rightBottom2',
                        chartTitle:' ',
                        seriesNames:[],
                        option:{
                            xAxis:{
                                type:'value',
                                axisLabel:{
                                    color:'white'
                                },
                                splitLine:{
                                    show : false
                                }
                            },
                            grid:{
                                left:'25%'
                            },
                            yAxis:{
                                type:'category',
                                data:["B超","心电图","CT","MRI","X光摄影","内镜科"],
                                axisLabel:{
                                    color:'white'
                                }
                            },
                            series: [{
                                type: 'bar',
                                data: [80,71,64,55,47,66]
                            }]
                        }
                    },
                    {
                        id:'chart-rb3',
                        innertype:'echart',
                        chartNames:'rightBottom3',
                        chartTitle:' ',
                        seriesNames:[],
                        option:{
                            series:[{
                                name: 'rbEchart3',
                                radius:['35%','50%'],
                                type: 'pie',
                                data: [
                                    {
                                        value:1434,
                                        name:'普通门诊33'
                                    },{
                                        value:1320,
                                        name:'副主任医师'
                                    },{
                                        value:998,
                                        name:'主任医师'
                                    },{
                                        value:856,
                                        name:'急诊'
                                    },{
                                        value:1000,
                                        name:'专家门诊'
                                    }
                                ]
                            }]
                        }
                    },
                    {
                        id:'chart-rb4',
                        innertype:'echart',
                        chartNames:'rightBottom4',
                        chartTitle:' ',
                        seriesNames:[],
                        option:{
                            polar: {
                                // center: ['50%', '50%']
                            },
                            angleAxis: {
                                type: 'category',
                                data:["上呼吸道感染","高血压","糖尿病","妊娠反应","支气管炎","屈光不正","胃窦炎","急性肠炎"],
                                axisLabel:{
                                    color:'white'
                                }
                            },
                            radiusAxis: {
                                type:'value',
                                axisLabel:{
                                    color:'white'
                                }
                            },
                            animationDuration: 1000,
                            series: [{
                                coordinateSystem: 'polar',
                                type: 'line',
                                data:[
                                    [21,"上呼吸道感染"],
                                    [17,"高血压"],
                                    [12,"糖尿病"],
                                    [10,"妊娠反应"],
                                    [10,"支气管炎"],
                                    [10,"屈光不正"],
                                    [10,"胃窦炎"],
                                    [10,"急性肠炎"]
                                ]
                            },{
                                coordinateSystem: 'polar',
                                type: 'line',
                                data:[
                                    [88,"上呼吸道感染"],
                                    [65,"高血压"],
                                    [54,"糖尿病"],
                                    [32,"妊娠反应"],
                                    [29,"支气管炎"],
                                    [19,"屈光不正"],
                                    [10,"胃窦炎"],
                                    [8,"急性肠炎"]
                                ]
                            }]
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .twoChart{
        /*border: 1px solid grey;*/
        flex: 1;
        display: flex;
        /*flex-direction: column;*/
        margin: 0 5px;
    }
    .schart{
        flex: 1;
        /*margin: 0 5px;*/
    }
    .right {
        flex: 1;
        display:flex;
        flex-flow: column;
        padding: 0;
    }
</style>
