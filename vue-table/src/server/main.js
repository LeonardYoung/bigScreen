var express             = require('express');
var app                 = express();
var bodyParse           = require('body-parser')
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'test'
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
app.post('/submitData',function(req,res){
    //获取登录名称和密码
    tableName=req.body.tableName ;
    newData = req.body.newData;

    //执行更改
    let quertStr = 'update chart_data set data= \'' + newData + '\'' + ' where chartName=\'' + tableName + '\''

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

// 处理标题提交请求
app.post('/submitTitle',function(req,res){
    //获取登录名称和密码
    let tableName=req.body.tableName ;
    let newTitle = req.body.newTitle;

    //执行更改
    let quertStr = 'update chart_data set title= \'' + newTitle + '\'' + ' where chartName=\'' + tableName + '\''

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


// 处理数据获取请求
try{
    app.post('/fetchData',function(req,res){
        //获取登录名称和密码
        chartName=req.body.tableName ;
        // console.log('fetching data  chartName='+chartName)

        let quertStr = 'select data from chart_data where chartName= \'' + chartName + '\''
        connection.query(quertStr, function (error, results, fields) {
            if (error) throw error;
            //向前台反馈信息
            // console.log(results[0])
            res.status(200).send(
                results[0].data

            );
        });

    });
}
catch (e) {
    console('ERROR while fetchData  :' + e)
}

// 获取表格标题，栏目信息
app.post('/fetchTableInfo',function(req,res){
    //获取登录名称和密码
    chartName=req.body.tableName ;
    console.log('fetching TableInfo  chartName='+chartName)

    let quertStr = 'select title,categorys from chart_data where chartName= \'' + chartName + '\''
    connection.query(quertStr, function (error, results, fields) {
        if (error) throw error;
        //向前台反馈信息
        // console.log(results[0])
        res.status(200).send(
            {
                title:results[0].title,
                categorys:results[0].categorys
            }

        );
    });

});

// 监听3000端口
var server=app.listen(3000);

console.log("监听网址为:http://127.0.0.1:3000/");
