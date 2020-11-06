let express             = require('express');
let app                 = express();
let bodyParse           = require('body-parser')
let mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'bigscreen'
});
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected  as id ' + connection.threadId);
});

//增加头部信息解决跨域问题
app.all('*', function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");//允许源访问，本利前端访问路径为“http://localhost:8080”
    // res.header("Access-Control-Allow-Origin", "http://localhost:8080");//允许源访问，本利前端访问路径为“http://localhost:8080”
    // res.header("Access-Control-Allow-Origin", "http://localhost:8082");//允许源访问，本利前端访问路径为“http://localhost:8080”
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1');
    next();
});

//使用bodyParse解释前端提交数据
app.use(bodyParse.urlencoded({extended:true})) ;
app.use(bodyParse.json());

// 处理根目录的get请求
app.get('/',function(req,res){
}) ;

// 处理数据提交请求
app.post('/submitChartData',function(req,res){
    //获取登录名称和密码
    const chartName = req.body.chartName
    const seriesName = req.body.seriesName
    const newData = req.body.newData

    //执行更改
    let quertStr = 'update chart_data set data= \'' + newData + '\'' + ' where chart_name=\'' + chartName + '\''
    + ' and series_name=\'' + seriesName + '\''

    console.log('querystring=' + quertStr)
    connection.query(quertStr, function (error, results, fields) {
        // console.log(error)
        if (error) throw error;
        //向前台反馈信息
        res.status(200).send(
            "OK"
        );
    });
});
// 处理表格信息提交请求
app.post('/submitChartInfo',function(req,res){
    //获取登录名称和密码
    // console.log(req.body)
    const chartName = req.body.chartName
    const title = req.body.title
    const categorys = JSON.stringify(req.body.categorys)
    const series = JSON.stringify( req.body.series)

    //执行更改
    let quertStr = 'update chart_info set title=?,categorys=?,series=? where chart_name=?'

    // console.log('querystring=' + quertStr)
    connection.query({
            sql: quertStr,
            timeout: 1000, // 1s
        },
        [title,categorys,series,chartName],
        function (error, results, fields) {
        // console.log(fields.sql)
            if (error) throw error;
            //向前台反馈信息
            res.status(200).send(
                "OK"
            );
        }
    );
});



// 处理数据获取请求

app.post('/fetchChartData',function(req,res){
    //获取登录名称和密码
    let chartName=req.body.chartName ;
    let seriesName=req.body.seriesName ;
    console.log('fetching data  chartName='+chartName + '  seriesName='+seriesName+';')

    let quertStr = 'select data from chart_data where chart_name= \'' + chartName + '\''
    + ' and series_name = \'' + seriesName + '\''

    // console.log(quertStr)
    connection.query(quertStr, function (error, results, fields) {
        if (error) throw error;
        if(results.length === 0)
            return
        //向前台反馈信息
        // console.log(results[0])
        res.status(200).send(
            results[0].data
        );
    });

});


// 获取表格标题，栏目信息
app.post('/fetchChartInfo',function(req,res){
    //获取登录名称和密码
    chartName=req.body.chartName ;
    console.log('fetching TableInfo  chartName='+chartName)

    let quertStr = 'select * from chart_info where chart_name= \'' + chartName + '\''
    connection.query(quertStr, function (error, results, fields) {
        if (error) throw error;
        //向前台反馈信息
        // console.log(results[0])
        if(results.length === 0)
            return
        res.status(200).send(
            {
                chartName:results[0].chart_name,
                title:results[0].title,
                categorys:results[0].categorys,
                serialNames:results[0].series
            }

        );
    });

});

// 监听3000端口
var server=app.listen(3001);

console.log("监听网址为:http://127.0.0.1:3001/");
