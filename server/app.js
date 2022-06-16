const express = require('express')
const fs = require('fs');
var path = require('path');
const app = express()
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
const port = 3000  // 监听端口
const users = require('./symbols.json')

app.get('/', function (req, res, next) {
  res.send('Welcome to my Example app! click <a href="main.html"> here </a> to main page.');
});

//查询
app.get('/list', async (req, res, next) => {
  // 两种查询方式 1.id为空 => 查询全部  2.id有值 => 查询单个
  var id = req.query.id
  fs.readFile('./symbols.json', function(error, data) {
        if(error) {
            return res.status(500).send('server error');
        }
        var jsonData = JSON.parse(data)
        if (id) {
		   jsonData = jsonData.find((item) => item.id == id);
		}
        res.send(jsonData)
    })
})

//新增
app.get('/add', async (req, res, next) => {
  var params = {}
  params.id = req.query.id
  params.server_id = req.query.server_id
  params.name = req.query.name
  params.currency = req.query.currency
  params.type = req.query.type
  params.digits = req.query.digits
  params.trade = req.query.trade
  params.swap_long = req.query.swap_long
  params.swap_short = req.query.swap_short
  params.contract_size = req.query.contract_size
  params.description = req.query.description
  fs.readFile('./symbols.json', function(error, data) {
        if(error) {
            return res.status(500).send('server error');
        }
        var jsonData = JSON.parse(data)
        var hasRepeat = jsonData.filter((item) => item.id == params.id);
        if(hasRepeat.length > 1) {
			return res.status(510).send('新增失败，有重复id');
		} else {
			jsonData.push(params)
			var str = JSON.stringify(jsonData);
			fs.writeFile('./symbols.json', str, function (err) {
			  if (err) {
				return res.status(500).send('新增失败' + err);
			  }
			 return res.status(200).send('新增成功');
			})
		}
    })
})

//修改
app.get('/update', async(req, res, next) => {
	var id = req.query.id
	var params = {}
	params.id = id
	  params.server_id = req.query.server_id
	  params.name = req.query.name
	  params.currency = req.query.currency
	  params.type = req.query.type
	  params.digits = req.query.digits
	  params.trade = req.query.trade
	  params.swap_long = req.query.swap_long
	  params.swap_short = req.query.swap_short
	  params.contract_size = req.query.contract_size
	  params.description = req.query.description
	  fs.readFile('./symbols.json', function(error, data) {
        if(error) {
            return res.status(500).send('server error');
        }
        var jsonData = JSON.parse(data)
        if (id) {
		   jsonData.splice(jsonData.findIndex(item => item.id == id), 1, params)
		   //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
		   var str = JSON.stringify(jsonData);
		   fs.writeFile('./symbols.json', str, function (err) {
			  if (err) {
				return res.status(500).send('修改失败' + err);
			  }
			 return res.status(200).send('修改成功');
			})
		}
    })
});

//删除
app.get('/delete', async(req, res, next) => {
	var id = req.query.id
	fs.readFile('./symbols.json', function(error, data) {
		if(error) {
            return res.status(500).send('server error');
        }
        var jsonData = JSON.parse(data)
        var index = jsonData.findIndex(item => item.id == id)
        if (index === -1) {
          resolve({ code: 500, msg: '没有该项，无法删除' })
        } else {
          jsonData.splice(index, 1)
          var str = JSON.stringify(jsonData);
          fs.writeFile('./symbols.json', str, function (err) {
			  if (err) {
				return res.status(500).send('删除失败' + err);
			  }
			 return res.status(200).send('删除成功');
			})
        }
	});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})