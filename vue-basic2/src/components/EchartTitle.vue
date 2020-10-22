<template>
    <div class="chartWrap">
<!--        <p>c</p>-->
        <div class="subTitle">
            <div class="titleLine"></div>
            <div class="titleText">
                <p style="margin: 0 0 0 1em"> <strong>{{info.chartTitle}}</strong></p>
            </div>
        </div>
        <div v-if="info.innertype==='tableRoll'"  class="inchart">
            <TableRoll v-bind:info="info"/>
        </div>
        <div v-else :id="info.id"  class="inchart">

        </div>
    </div>
</template>

<script>
    import echart from 'echarts/dist/echarts'
    import TableRoll from "./center/TableRoll";
    import axios from "axios";
    // var EcharApp;

    export default {
        name: "EchartTitle",
        props:['info'],
        components:{
            TableRoll
        },
        data(){
            return{
                echarInstance:null
            }
        }
        ,
        methods:{
            fetchChartInfo:function () {
                if(typeof(this.info.chartNames) == 'undefined')
                    return
                // console.log(this.chartinfos[chartIndex])
                let axi = axios.post('http://127.0.0.1:3001/fetchChartInfo', {
                    chartName:this.info.chartNames
                })
                let that = this;
                axi.then(function(response) {
                        //成功时服务器返回 response 数据
                    // 获取数据并更新
                    that.info.chartTitle = response.data.title
                    that.info.chartCategory = JSON.parse(response.data.categorys )
                    that.info.seriesNames = JSON.parse( response.data.serialNames )

                    if(typeof(that.info.option.xAxis) != 'undefined' )
                        that.info.option.xAxis.data = that.info.chartCategory

                    //有些图的横坐标改变后，数据中的key也要跟着变,
                    let series = that.info.option.series
                    for(let one of series){

                        if(one.coordinateSystem === 'polar'){
                            for(let i = 0;i < one.data.length;i++){
                                one.data[i][1] = that.info.chartCategory[i]
                            }
                        }
                        if(one.type === 'scatter'){
                            for(let i = 0;i < one.data.length;i++){
                                one.data[i][0] = that.info.chartCategory[i]
                            }
                        }
                        if(one.type === 'pie'){
                            for(let i = 0;i < one.data.length;i++){
                                one.data[i].name = that.info.chartCategory[i]
                                console.log(one.data[i].name)
                            }
                        }
                    }

                    //设置echart
                    setTimeout(that.echarInstance.setOption(that.info.option),100)
                })
                //获取到表格信息后再获取具体数据
                .then(function () {
                    that.fetchChartData()

                })
                .catch(function(error) {
                    console.log(error);
                });
            },
            fetchChartData:function () {
                // console.log(this.info)
                // if(typeof(this.info.chartName) == 'undefined')
                //     return
                // 遍历一个图表中的每一个Series
                console.log(this.info)
                for(let seriesIndex = 0;seriesIndex < this.info.seriesNames.length;seriesIndex++){
                    // console.log('fetching data chartName=' + this.info.chartNames)

                    let axi = axios.post('http://127.0.0.1:3001/fetchChartData', {
                        // tableName:this.info.chartName[seriesIndex]
                        chartName:this.info.chartNames,
                        seriesName:this.info.seriesNames[seriesIndex]
                    })
                    let that = this
                    axi.then(function(response) {
                        let oneSeries = that.info.option.series[seriesIndex]
                        for(let index = 0; index < response.data.length;index++){
                            let cell = oneSeries.data[index]
                            if(typeof (cell) == 'undefined')
                                break
                            // 不同图表类型更新数据的方式不同
                            if(oneSeries.coordinateSystem === 'polar'){
                                cell[0] = response.data[index];
                            }
                            else if(oneSeries.type === 'scatter'){
                                cell[1] = response.data[index];
                            }
                            else if(oneSeries.type === 'line' || oneSeries.type === 'bar'){
                                oneSeries.data[index] = response.data[index];
                            }
                            else if(oneSeries.type === 'pie'){
                                oneSeries.data[index].value = response.data[index];
                            }
                        }

                        setTimeout(that.echarInstance.setOption(that.info.option),100)
                    })
                }
            }
        },
        mounted() {

            // this.fetchData()
            // console.log(' in EchartTitle create  ' + this.info)
            if(typeof(this.info)!='undefined')
            {
                if(this.info.innertype === 'echart'){
                    this.echarInstance = echart.init(document.getElementById(this.info.id));
                    this.echarInstance.setOption(this.info.option);
                }
                else if(this.info.innertype === 'tableRoll'){
                    console.log('table')
                }
            }

            // this.fetchChartInfo()
            setInterval(this.fetchChartInfo,5000)
        }
    }
</script>

<style scoped>
    .chartWrap {
        /*border: 1px solid grey;*/
        flex: 1;
        margin: 0 5px;
        display: flex;
        flex-direction: column;
    }
    .subTitle{
        height: 25px;
        width: inherit;
        margin: 0;
        flex: 1;
        /*border-radius: 4px ;*/
    }
    .titleLine{
        float: left;
        width: 5px;
        height: inherit;
        margin: 0;
        background-color: #7b9bd2;
    }
    .titleText{
        background-color: #2170a1;
        color: white;
        float: inside;
        height: inherit;
        /*margin-top: 2px;*/
    }
    .titleText>p{
        background-color: #2170a1;
    }
    /*echart的容器*/
    .inchart{
        flex: 9;
        background-color: #021222;
    }
</style>
