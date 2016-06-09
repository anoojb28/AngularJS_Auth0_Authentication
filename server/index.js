var express = require('express');
var app = express();
var jwt  = require('express-jwt');
var cors = require('cors');
app.use(cors());
var authCheck = jwt({
    secret: new Buffer('hL448RsvACRO0MBhFzqxcNyZq3QdLse6OetfNI-nIZTiRh0N4BHW5-8AyiG9ceHC','base64'),audience:'7Zsyv3NIbYUiHURyFpIaIGyWaSKF3nOV'
});

app.get('/api/public',function(req,res){
   res.json({message:'Authentication not needed!'}) 
});

app.get('/api/private', authCheck,function(req,res){
   res.json({message:'Authentication needed!'}) 
});

app.listen(3001);
