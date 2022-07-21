var express = require('express');
var app = express();
const cors = require('cors')
const sql = require('mssql/msnodesqlv8')
app.use(cors())
const pool = new sql.ConnectionPool({
  database: 'LH-stats',
  server: 'localhost',
  driver: 'msnodesqlv8',
  port : 1433,
  options: {
    trustedConnection: true
  }
})

app.get('/', function (req, res) {


pool.connect().then(() => {
  pool.request().query("select * from LightHouseBestRunData WHERE Environment = 'beta'", (err, result) => {
      if(err){
      res.json({error : err})
      }else{
        res.json({data : result.recordset})
      }
    })
  })
});


app.get('/release', function (req, res) {


  pool.connect().then(() => {
    pool.request().query("select DISTINCT Release from LightHouseBestRunData", (err, result) => {
        if(err){
        res.json({error : err})
        }else{
          res.json({data : result.recordset})
        }
      })
    })
  });


app.get('/environment', function (req, res) {


  pool.connect().then(() => {
    pool.request().query("select DISTINCT Environment from LightHouseBestRunData", (err, result) => {
        if(err){
        res.json({error : err})
        }else{
          res.json({data : result.recordset})
        }
      })
    })
  });


var server = app.listen(5000, function () {
    console.log('Server is running..');
});