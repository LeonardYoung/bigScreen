<template>
    <div>
        <h1>医院实时数据修改后台</h1>

<!--        这个循环遍历每个表-->
        <div v-for="(onechart,chartIndex) in tables" :key="chartIndex">
            <h2 >
<!--                {{ onechart.chartTitle }}-->
                <input type="text" :index="chartIndex"  v-model="onechart.chartTitle" v-on:input="titleChanged($event)">
            </h2>
            <table>
                <tr>
                    <th>条目</th>
<!--                    这个循环遍历每个表头-->
                    <th v-for="head in onechart.headers" :key="head">{{ head }}</th>
                </tr>
<!--                这个循环遍历每一行数据-->
                <tr v-for="(item,index) in onechart.chartCategory" :key="item">
                    <td>{{ item }}</td>
<!--                    这个循环遍历每一列数据-->
                    <td v-for="(head,col) in onechart.headers" :key="head">
                        <input type="number" v-model="input[chartIndex][col][index]">
                    </td>
                </tr>
            </table>
            <button v-on:click="submitData(chartIndex)">提交</button>
<!--            <button v-on:click="submitData(chartIndex)">提交</button>-->

        </div>

    </div>


</template>

<script>
    import axios from 'axios'
    var DataTableApp ;
    export default {
        name: "DataTable",
        data(){
            return{
                tables:[
                    {
                        chartTitle:' ',
                        chartNames:['leftTop'],
                        headers:['数量'],
                        chartCategory:["24/48小时1","VAP预防","VAP发病","血流感染","泌尿感染","重症死亡","压疮发生"]
                    },
                    {
                        chartTitle:' ',
                        chartNames:['leftCenter1','leftCenter2'],
                        headers:['本周人数','上周人数'],
                        chartCategory:["甲状腺肿大","糖尿病","累及多部位","脑出血","心肌梗死","出血","肺炎","性疾病","心力衰竭","脑损伤"]
                    },
                    {
                        chartTitle:' ',
                        chartNames:['leftBottom1','leftBottom2'],
                        headers:['平均住床日','床位使用率'],
                        chartCategory:["外科","内科","神经科","呼吸科","儿科","骨科","产科","心内科","皮肤科"]
                    },
                    {
                        chartTitle:' ',
                        chartNames:['rightTop1','rightTop2','rightTop3'],
                        headers:['上周人数','本周人数','本月人数'],
                        chartCategory:["剖宫产","切除术","脉旁路移植","胰腺切除术","置换术","腹腔镜","动脉介入","颅脑手术","椎板切除","食管切除"]
                    },
                    {
                        chartTitle:' ',
                        chartNames:['rightBottom1'],
                        headers:['数量'],
                        chartCategory:["医疗收入","药品收入","挂号收入","全院收入","住院收入","门诊收入"]
                    },
                    {
                        chartTitle:' ',
                        chartNames:['rightBottom2'],
                        headers:['数量'],
                        chartCategory:["B超","心电图","CT","MRI","X光摄影","内镜科"]
                    },
                    {
                        chartTitle:' ',
                        chartNames:['rightBottom3'],
                        headers:['数量'],
                        chartCategory:["普通门诊","副主任医师","主任医师","急诊","专家门诊"]
                    },
                    {
                        chartTitle:' ',
                        chartNames:['rightBottom4','rightBottom5'],
                        headers:['数据1','数据2'],
                        chartCategory:["上呼吸道感染","高血压","糖尿病","妊娠反应","支气管炎","屈光不正","胃窦炎","急性肠炎"]
                    }


                ],
                intput:null
            }
        },
        methods:{
            titleChanged:function(event){
                let index = Number(event.target.getAttributeNode('index').value)
                let newTitle = event.target.value
                this.submitTitle(index,newTitle)
            },
            submitTitle:function(index,newTitle){
                    //向服务器提交数据
                    axios.post('http://127.0.0.1:3000/submitTitle', {
                        tableName:this.tables[index].chartNames[0],
                        newTitle:newTitle
                    })
                    .then(function(response) {
                        //成功时服务器返回 response 数据
                        response
                        // console.log('提交成功')
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
            submitData:function ( chartIndex) {
                let postAll = this.tables[chartIndex].chartNames.length;
                for( let colIndex = 0; colIndex < this.tables[chartIndex].chartNames.length; colIndex++){
                    //向服务器提交数据
                    axios.post('http://127.0.0.1:3000/submitData', {
                        tableName:this.tables[chartIndex].chartNames[colIndex],
                        newData:JSON.stringify(this.input[chartIndex][colIndex])
                    })
                    .then(function(response) {
                        //成功时服务器返回 response 数据
                        postAll --;
                        if(postAll == 0){
                            alert('全部提交成功')
                        }
                        response;
                        // alert(response.data)
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                }
            },
            // 获取表格信息
            fetchTableInfo:function (tableIndex) {

                axios.post('http://127.0.0.1:3000/fetchTableInfo', {
                    tableName:this.tables[tableIndex].chartNames[0]
                })
                    .then(function(response) {
                        //成功时服务器返回 response 数据
                        console.log(response.data)

                        //因为绑定在数组上，所以要手动更新
                        let obj = DataTableApp.tables[tableIndex]
                        obj.chartTitle = response.data.title
                        obj.categorys = response.data.categorys
                        DataTableApp.$set(DataTableApp.tables,tableIndex,obj)
                        DataTableApp.$forceUpdate()

                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
            ,
            fetchData:function () {
                // console.log(this.input)
                for( let tableIndex=0;tableIndex < this.tables.length;tableIndex++){
                    // 获取表格信息
                    this.fetchTableInfo(tableIndex)

                    for( let col = 0;col < this.tables[tableIndex].headers.length;col++){

                        //向服务器获取数据
                        axios.post('http://127.0.0.1:3000/fetchData', {
                            tableName:this.tables[tableIndex].chartNames[col]
                        })
                        .then(function(response) {
                            //成功时服务器返回 response 数据
                            // console.log(response.data)


                            //因为绑定在数组上，所以要手动更新
                            let first = DataTableApp.input[tableIndex]
                            let obj = first[col]
                            obj = response.data;

                            DataTableApp.$set(DataTableApp.input[tableIndex],col,obj)
                            DataTableApp.$set(DataTableApp.input,tableIndex,first)
                            DataTableApp.$forceUpdate()

                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                    }
                }
            }
        },
        mounted() {
            setTimeout(()=>{
                console.log(this.tables)
            },2000)
            DataTableApp = this;
            this.fetchData()
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
