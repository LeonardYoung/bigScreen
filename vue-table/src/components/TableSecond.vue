<template>
    <div>
        <h1>医院实时数据修改后台</h1>

        <!--        这个循环遍历每个表-->
        <div v-for="(onechart,chartIndex) in chartinfos" :key="chartIndex">
            <h2 >
                <!--                {{ onechart.chartTitle }}-->
                <input type="text" :index="chartIndex"  v-model="onechart.chartTitle">
<!--                <input type="text" :index="chartIndex"  v-model="onechart.chartTitle" v-on:input="titleChanged($event)">-->
            </h2>
            <table>
                <tr>
                    <th>条目</th>
                    <!--                    这个循环遍历每个表头-->
                    <th v-for="head in onechart.seriesNames" :key="head">{{ head }}</th>
                </tr>
                <!--                这个循环遍历每一行数据-->
                <tr v-for="(item,index) in onechart.chartCategory" :key="item">
<!--                    <td>{{ item }}</td>-->
                    <td>
                        <input type="text" v-model="chartinfos[chartIndex].chartCategory[index]">
                    </td>
                    <!--                    这个循环遍历每一列数据-->
                    <td v-for="(head,col) in onechart.seriesNames" :key="head">
                        <input type="number" v-model="input[chartIndex][col][index]">
                    </td>
                </tr>
            </table>
            <button v-on:click="submitAll(chartIndex)">提交</button>
            <!--            <button v-on:click="submitData(chartIndex)">提交</button>-->

        </div>

    </div>


</template>

<script>
    import axios from 'axios'
    var DataTableApp ;
    export default {
        name: "TableSecond",
        data(){
            return{
                chartinfos:[
                    {
                        chartNames:'leftTop',
                        chartTitle:' ',
                        seriesNames:[],
                        chartCategory:[]
                    },
                    {
                        chartNames:'leftCenter'
                    },
                    {
                        chartNames:'leftBottom'
                    },
                    {
                        chartNames:'rightTop'
                    },
                    {
                        chartNames:'rightBottom1'
                    },
                    {
                        chartNames:'rightBottom2'
                    },
                    {
                        chartNames:'rightBottom3'
                    },
                    {
                        chartNames:'rightBottom4'
                    }
                    // ,
                    // {
                    //     chartTitle:' ',
                    //     chartNames:'leftCenter',
                    //     seriesNames:['leftCenter1','leftCenter2'],
                    //     // headers:['本周人数','上周人数'],
                    //     chartCategory:["甲状腺肿大","糖尿病","累及多部位","脑出血","心肌梗死","出血","肺炎","性疾病","心力衰竭","脑损伤"]
                    // },
                    // {
                    //     chartTitle:' ',
                    //     chartNames:['leftBottom1','leftBottom2'],
                    //     // headers:['平均住床日','床位使用率'],
                    //     chartCategory:["外科","内科","神经科","呼吸科","儿科","骨科","产科","心内科","皮肤科"]
                    // },
                    // {
                    //     chartTitle:' ',
                    //     chartNames:['rightTop1','rightTop2','rightTop3'],
                    //     // headers:['上周人数','本周人数','本月人数'],
                    //     chartCategory:["剖宫产","切除术","脉旁路移植","胰腺切除术","置换术","腹腔镜","动脉介入","颅脑手术","椎板切除","食管切除"]
                    // },
                    // {
                    //     chartTitle:' ',
                    //     chartNames:['rightBottom1'],
                    //     // headers:['数量'],
                    //     chartCategory:["医疗收入","药品收入","挂号收入","全院收入","住院收入","门诊收入"]
                    // },
                    // {
                    //     chartTitle:' ',
                    //     chartNames:['rightBottom2'],
                    //     headers:['数量'],
                    //     chartCategory:["B超","心电图","CT","MRI","X光摄影","内镜科"]
                    // },
                    // {
                    //     chartTitle:' ',
                    //     chartNames:['rightBottom3'],
                    //     headers:['数量'],
                    //     chartCategory:["普通门诊","副主任医师","主任医师","急诊","专家门诊"]
                    // },
                    // {
                    //     chartTitle:' ',
                    //     chartNames:['rightBottom4','rightBottom5'],
                    //     headers:['数据1','数据2'],
                    //     chartCategory:["上呼吸道感染","高血压","糖尿病","妊娠反应","支气管炎","屈光不正","胃窦炎","急性肠炎"]
                    // }


                ],
                intput:null
            }
        },
        methods:{
            // titleChanged:function(event){
            //     let index = Number(event.target.getAttributeNode('index').value)
            //     let newTitle = event.target.value
            //     this.submitTitle(index,newTitle)
            // },
            submitChartData:function(chartIndex){
                let chart = this.chartinfos[chartIndex]
                for(let col = 0; col < this.chartinfos[chartIndex].seriesNames.length;col++){
                    axios.post('http://127.0.0.1:3001/submitChartData', {
                        chartName:chart.chartNames,
                        seriesName:chart.seriesNames[col],
                        newData:JSON.stringify(this.input[chartIndex][col])
                    })
                        .then(function(response) {
                            //成功时服务器返回 response 数据
                            console.log(response)
                            // postAll --;
                            // if(postAll == 0){
                            //     alert('全部提交成功')
                            // }
                            // response;
                            // alert(response.data)
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                }
            },
            submitChartInfo:function(chartIndex){
                let chart = this.chartinfos[chartIndex]
                // console.log(chart.chartTitle)
                axios.post('http://127.0.0.1:3001/submitChartInfo', {
                    chartName:chart.chartNames,
                    title:chart.chartTitle,
                    categorys:chart.chartCategory,
                    series:chart.seriesNames
                })
                .then(function(response) {
                    //成功时服务器返回 response 数据
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error);
                });
            },
            submitAll:function ( chartIndex) {
                this.submitChartInfo(chartIndex)
                this.submitChartData(chartIndex)



            },
            fetchChartInfo:function (chartIndex) {
                // console.log(this.chartinfos[chartIndex])
                axios.post('http://127.0.0.1:3001/fetchChartInfo', {
                    chartName:this.chartinfos[chartIndex].chartNames
                })
                .then(function(response) {
                    //成功时服务器返回 response 数据
                    //因为绑定在数组上，所以要手动更新
                    let obj = DataTableApp.chartinfos[chartIndex]
                    obj.chartTitle = response.data.title
                    obj.chartCategory = JSON.parse(response.data.categorys )
                    obj.seriesNames = JSON.parse( response.data.serialNames )

                    DataTableApp.$set(DataTableApp.chartinfos,chartIndex,obj)
                    DataTableApp.$set(DataTableApp.chartinfos,chartIndex,obj)
                    DataTableApp.$set(DataTableApp.chartinfos,chartIndex,obj)
                    DataTableApp.$forceUpdate()

                })
                    //获取到表格信息后再获取具体数据
                .then(function () {
                    DataTableApp.fetchChartData(chartIndex)
                })
                .catch(function(error) {
                    console.log(error);
                });
            },
            fetchChartData:function (index) {
                for( let col = 0;col < this.chartinfos[index].seriesNames.length;col++){

                    //向服务器获取数据
                    axios.post('http://127.0.0.1:3001/fetchChartData', {
                        chartName:this.chartinfos[index].chartNames,
                        seriesName:this.chartinfos[index].seriesNames[col]
                    })
                    .then(function(response) {
                        //成功时服务器返回 response 数据
                        // console.log(response.data)

                        //因为绑定在数组上，所以要手动更新
                        let first = DataTableApp.input[index]
                        let obj = first[col]
                        obj =  response.data

                        DataTableApp.$set(DataTableApp.input[index],col,obj)
                        DataTableApp.$set(DataTableApp.input,index,first)
                        DataTableApp.$forceUpdate()

                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                }
            }
            ,
            fetchAll:function () {
                for( let index=0;index < this.chartinfos.length;index++){
                    // 获取表格信息
                    this.fetchChartInfo(index)
                }
            }
        },
        mounted() {
            setTimeout(()=>{
                console.log(this.chartinfos)
            },2000)
            DataTableApp = this;
            this.fetchAll()
            // this.fetchData()
        },
        beforeCreate() {
            let chartNum = 8;//一共八个表
            this.input = new Array(chartNum)
            for(let i = 0;i < this.input.length;i++){
                this.input[i] = new Array(3)//每个表最多3列
                for(let j = 0; j < this.input[i].length;j++){
                    this.input[i][j] = new Array(32).fill(0)//每一列最多32个数据
                }
            }
        }
    }
</script>

<style scoped>
    table{
        margin:0 auto;
    }
    table,table tr{
        border: 2px solid black;
    }
    button{
        width: 100px;
        height: 20px;
        padding:0;
    }
    input{
        text-align: center;
    }
    h2>input{
        font-size: 30px;
    }

</style>
