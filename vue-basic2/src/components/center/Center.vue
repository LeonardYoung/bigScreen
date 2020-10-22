<template>
    <div class="middle">
        <CenterTop class="centertop"/>
<!--        <TableRoll class="tableroll"/>-->
<!--        <EchartTitle class="centerbtm" mtitle="病人信息评估列表"/>-->
        <EchartTitle class="schart tabinfo" v-bind:key="charts[0].id"
                     v-bind:info="charts[0]"/>
    </div>
</template>

<script>
    import CenterTop from "./CenterTop";
    // import TableRoll from "./TableRoll";
    import EchartTitle from "../EchartTitle";
    export default {
        name: "Center",
        components:{
            CenterTop,
            // TableRoll,
            EchartTitle
        },
        data(){
            return{
                charts:[

                    {
                        id:'table-roll',
                        innertype:'tableRoll',
                        // chartName:"CenterTable",
                        mtitle:"病人信息评估列表",
                        tableData:[
                            ['1','248798','张某某','内科','11','123'],
                            ['2','248799','李某某','外科','22','124'],
                            ['3','248800','陈某某','五官科','33','125'],
                            ['4','248801','赵某某','骨科','44','126'],
                            ['5','248802','叶某某','口腔科','55','127'],
                            ['6','248803','吴某某','急诊','66','128'],
                            ['7','248804','章某某','儿科','77','129'],
                            ['8','248805','全某某','中医科','88','130'],
                            ['9','248806','陆某某','男科','99','131'],
                            ['10','248807','郑某某','眼科','1010','132'],
                            ['11','248808','金某某','妇科','1111','133'],
                            ['12','248809','孙某某','产科','1212','134']
                        ]

                    }

                ]
            }
        }
    }</script>

<style scoped>
    .centertop{
        flex-grow: 3;
        height: 0;
    }
    .tabinfo{
        flex-grow: 2;
        /*min-height: 300px;*/
    }
    .middle{
        flex: 1;
        display:flex;
        flex-flow: column;
        padding: 0;
    }
    /*.centerbtm{*/
    /*    flex-grow: 2;*/
    /*    margin: 0;*/
    /*}*/

</style>
