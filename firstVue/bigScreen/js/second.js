


var ltEchart = echarts.init(document.getElementById('ltChart'));
var lmEchart = echarts.init(document.getElementById('lmChart'));
var lbEchart = echarts.init(document.getElementById('lbChart'));
var rbEchart1 = echarts.init(document.getElementById('rbchart1'));
var rbEchart2 = echarts.init(document.getElementById('rbchart2'));
var rbEchart3 = echarts.init(document.getElementById('rbchart3'));
var rbEchart4 = echarts.init(document.getElementById('rbchart4'));
var rtEchart = echarts.init(document.getElementById('rtChart'));

function echartInit(){
    ltEchart.setOption({
        xAxis: {
            data: ["24/48小时","VAP预防","VAP发病","血流感染","泌尿感染","重症死亡","压疮发生"]
        },
        yAxis: {},
        legend:{}
    });
    lmEchart.setOption({
        xAxis: {
            data: ["甲状腺肿大","糖尿病","累及多部位","脑出血","心肌梗死","出血","肺炎","性疾病","心力衰竭","脑损伤"]
        },
        legend:{},
        yAxis: {}
    });
    lbEchart.setOption({
        xAxis: {
            data: ["外科","内科","神经科","呼吸科","儿科","骨科","产科","外科","心内科","皮肤科"]
        },
        yAxis: [{},{}],
        legend:{}
    });
    rbEchart1.setOption({
        xAxis:{
            type:'value'
        },
        grid:{
            left:'25%'
        },
        yAxis:{
            type:'category',
            data:["医疗收入","药品收入","挂号收入","全院收入","住院收入","门诊收入"]
        }
    })
    rbEchart2.setOption({
        xAxis:{
            type:'value'
        },
        grid:{
            left:'25%'
        },
        yAxis:{
            type:'category',
            data:["B超","心电图","CT","MRI","X光摄影","内镜科"]
        }
    })
    rbEchart3.setOption({

        series:[{
            name: 'rbEchart3',

            // left:'20%',
            // right:'20%',
            radius:['35%','50%'],
            type: 'pie'
        }]
    })
    rbEchart4.setOption({
        polar: {
            // center: ['50%', '50%']
        },
        angleAxis: {
            type: 'category',
            data:["上呼吸道感染","高血压","糖尿病","妊娠反应","支气管炎","屈光不正","胃窦炎","急性肠炎"]
        },
        radiusAxis: {
            type:'value'
        },
        animationDuration: 1000
    })
    rtEchart.setOption({
        xAxis: {
            data: ["剖宫产","切除术","脉旁路移植","胰腺切除术","置换术","腹腔镜","动脉介入","颅脑手术","椎板切除","食管切除"]
        },
        yAxis: {},
        legend:{}
    });


}



function echartFetchData(){
    ltEchart.setOption({
        series: [{
            name: '销量',
            type: 'scatter',
            data: [
                ["24/48小时",57],
                ["VAP预防",94],
                ["VAP发病",95],
                ["血流感染",24],
                ["泌尿感染",95],
                ["重症死亡",97],
                ["压疮发生",93]
            ]
        }]
    });
    lmEchart.setOption({
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
    });
    lbEchart.setOption({
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
    });
    rbEchart1.setOption({
        series: [{
            type: 'bar',
            data: [31,43,54,91,60,80]
        }]
    });
    rbEchart2.setOption({
        series: [{
            type: 'bar',
            data: [80,71,64,55,47,66]
        }]
    });
    rbEchart3.setOption({
        series: [{
            name: 'rbEchart3',
            type: 'pie',
            data: [
                {
                    value:1434,
                    name:'普通门诊'
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
    });
    rbEchart4.setOption({
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
    })
    rtEchart.setOption({
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
    });

}
function scroll(className){
    var uls = $("."+className+">ul");
    var interval = 1200;
    var rowHeight = 40;
    var curIndex=0;
    function  playScroll() {
        for(var i=0;i<uls.length;i++){
            if(i<curIndex){
                uls.eq(i).stop(true).animate({top:(i-curIndex-1+uls.length)*rowHeight+'px'});
            }else if(i>curIndex){
                uls.eq(i).stop(true).animate({top:(i-curIndex-1)*rowHeight+'px'});
            }else{
                uls.eq(i).stop(true).animate({top: -rowHeight},function(){
                    $(this).css({top:(uls.length-1)*rowHeight+'px'});
                });
            }
        }
        if(curIndex==uls.length-1){
            curIndex=0
        }else{
            curIndex++
        }
    }
    timer = setInterval(playScroll,interval);
    $('.'+className).mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        timer = setInterval(playScroll,interval);
    });
}
// scroll('scrollTable')


echartInit()
echartFetchData()
