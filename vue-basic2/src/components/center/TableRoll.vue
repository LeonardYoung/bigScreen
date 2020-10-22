<template>
<!--    滚动表格显示数据-->
    <div  id="mbChart" class="scrollTable">
        <div class="tableHeader">
            <ul>
                <li>序号</li>
                <li>卡号</li>
                <li>姓名</li>
                <li>科室</li>
                <li>指标</li>
                <li>风险指数</li>
            </ul>
        </div>
        <div class="tableConent">
            <ul v-for="row in info.tableData" v-bind:key="row[1]">
                <li v-for="cell in row" v-bind:key="cell">{{cell}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "TableRoll",
        props:['info'],
        mounted() {
            function scroll(className){
                var uls = $("."+className+">ul");
                var interval = 1500;
                var rowHeight = 12.5;
                var rowHeightUnit = '%'
                var curIndex=0;
                function  playScroll() {
                    for(var i=0;i<uls.length;i++){
                        if(i<curIndex){
                            uls.eq(i).stop(true).animate({top:(i-curIndex-1+uls.length)*rowHeight+rowHeightUnit},interval);
                        }else if(i>curIndex){
                            uls.eq(i).stop(true).animate({top:(i-curIndex-1)*rowHeight+rowHeightUnit},interval);
                        }else{
                            uls.eq(i).stop(true).animate({top: -rowHeight},function(){
                                $(this).css({top:(uls.length-1)*rowHeight+rowHeightUnit},interval);
                            });
                        }
                    }
                    if(curIndex==uls.length-1){
                        curIndex=0
                    }else{
                        curIndex++
                    }
                }
                var timer = setInterval(playScroll,interval);
                $('.'+className).mouseenter(function () {
                    clearInterval(timer);
                }).mouseleave(function () {
                    timer = setInterval(playScroll,interval);
                });
            }
            scroll('tableConent')
        }
    }
</script>

<style scoped>
    .scrollTable{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .tableHeader{
        height: 15%;
        position: relative;
    }
    .tableConent{
        height: 85%;
        position: relative;
    }
    .tableHeader>ul{
        list-style: none;
        position: absolute;
        height: 100%;width: 100%;
    }
    .tableHeader>ul>li{height: 40px;width: 16.66%;float: left;text-align: center;line-height: 40px;}

    .tableConent>ul{
        list-style: none;
        position: absolute;
        height: 12.5%;width: 100%;top: 100%;left: 0px;
    }

    /*.scrollTable>ul:nth-child(odd){background: #286dad;}*/
    /*.scrollTable>ul:nth-child(even) {background: #1c97ad;}*/

    li{
        width: 16.66%;
    }

    /*.tableHeader>ul>li:nth-child(1){ width: 10%;}*/
    /*.tableHeader>ul>li:nth-child(2){ width: 25%;}*/
    /*.tableHeader>ul>li:nth-child(3){ width: 25%;}*/
    /*.tableHeader>ul>li:nth-child(4){ width: 20%;}*/
    /*.tableHeader>ul>li:nth-child(5){ width: 10%;}*/
    /*.tableHeader>ul>li:nth-child(6){ width: 10%;}*/
    /*.tableConent>ul>li:nth-child(1){ width: 10%;}*/
    /*.tableConent>ul>li:nth-child(2){ width: 25%;}*/
    /*.tableConent>ul>li:nth-child(3){ width: 25%;}*/
    /*.tableConent>ul>li:nth-child(4){ width: 20%;}*/
    /*.tableConent>ul>li:nth-child(5){ width: 10%;}*/
    /*.tableConent>ul>li:nth-child(6){ width: 10%;}*/


    .tableConent>ul>li{height: 40px;width: 16.66%;float: left;text-align: center;line-height: 40px;}
    .tableConent>ul:nth-child(1){top: 0;}
    .tableConent>ul:nth-child(2){top: 12.5%;}
    .tableConent>ul:nth-child(3){top: 25%;}
    .tableConent>ul:nth-child(4){top: 37.5%;}
    .tableConent>ul:nth-child(5){top: 50%;}
    .tableConent>ul:nth-child(6){top: 62.5%;}
    .tableConent>ul:nth-child(7){top: 75%;}
    .tableConent>ul:nth-child(8){top: 87.5%;}
</style>
