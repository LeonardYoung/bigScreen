<template>
    <div class="left">
        <EchartTitle v-for="item in charts"
                     v-bind:key="item.id"
                     v-bind:info="item"></EchartTitle>
    </div>
</template>

<script>
    import EchartTitle from "../EchartTitle";
    // import axios from 'axios'
    export default {
        name: "Left",
        components:{
            EchartTitle
        },
        data(){
        return {
            charts:[
                    {
                        id:'chart-lt',
                        innertype:'echart',
                        chartNames:'leftTop',
                        chartTitle:' ',
                        seriesNames:[],
                        chartCategory:[],
                        option:{
                            // color:["#FFFFFF"],
                            xAxis: {
                                data: ["24/48小时","VAP预防","VAP发病","血流感染","泌尿感染","重症死亡","压疮发生"],
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
                                name: '数量',
                                type: 'scatter',
                                data: [
                                    ["24/48小时",57],
                                    ["VAP预防",94],
                                    ["VAP发病",95],
                                    ["血流感染",24],
                                    ["泌尿感染",95],
                                    ["重症死亡",97],
                                    ["压疮发生",93]
                                ],
                                symbolRotate:45
                            }]
                        }
                    },
                    {
                        id:'chart-lm',
                        innertype:'echart',
                        chartNames:'leftCenter',
                        chartTitle:' ',
                        seriesNames:[],
                        chartCategory:[],
                        // mtitle:"住院重点疾病检测",
                        // chartName:['leftCenter1','leftCenter2'],
                        option:{
                            xAxis: {
                                data: ["甲状腺肿大","糖尿病","累及多部位","脑出血","心肌梗死","出血","肺炎","性疾病","心力衰竭","脑损伤"],
                                axisLabel:{
                                    rotate:45,
                                    color:'white'
                                }
                            },
                            legend:{
                                textStyle: {
                                    color: "#FFFFFF"
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
                            series: [{
                                name: '本周人数',
                                type: 'line',
                                smooth:true,
                                data: [102,90,78,74,24,52,50,44,78,65]

                            },
                            {
                                name: '上周人数',
                                smooth:true,
                                type: 'line',
                                data: [35,41,66,88,101,69,62,62,43,55]
                            }]
                        }
                    },
                    {
                        id:'chart-lb',
                        innertype:'echart',
                        chartNames:'leftBottom',
                        chartTitle:' ',
                        seriesNames:[],
                        option:{
                            xAxis: {
                                data: ["外科","内科","神经科","呼吸科","儿科","骨科","产科","心内科","皮肤科"],
                                axisLabel:{
                                    color:'white'
                                }
                            },
                            yAxis: [{
                                axisLabel:{
                                    color:'white'
                                },
                                splitLine:{
                                    show : false
                                }
                            },{
                                axisLabel:{
                                    color:'white'
                                },
                                splitLine:{
                                    show : false
                                }
                            }],
                            legend:{
                                textStyle: {
                                    color: "#FFFFFF"
                                }
                            },
                            series: [{
                                name: '平均住床日',
                                type: 'line',
                                data: [13,11,10,9,8.5,8,7,6.5,6.5,6],
                                yAxisIndex:0

                            },
                            {
                                name: '床位使用率',
                                type: 'bar',
                                data: [75,70,86,70,74,50,88,80,46,50],
                                yAxisIndex:1
                            }]
                        }
                    }
                ]
            }
        }



    }
</script>

<style scoped>
    .left {
        flex: 1;
        display:flex;
        flex-flow: column;
        padding: 0;
    }
</style>
