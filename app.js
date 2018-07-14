const express=require('express');
const MongoClient = require('mongodb').MongoClient
var path=require('path');
var bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static("./public"));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/diageo.html'));
    });
app.get('/applist', function(req, res) {
    res.sendFile(path.join(__dirname+'/applist.html'));
    });
app.post('/submit',function(req,res){
    db.collection('submit').save(req.body,function(err,result){
        if(err)
        return console.log(err);

        console.log('saved to database');
        res.redirect('/');
    })
    });
    app.get('/submit', (req, res) => {
        var cursor = db.collection('submit').find().toArray(function(err, results) {
            if(err )
            console.log(err)
             res.render('index.ejs', {submit: results})
        // send HTML file populated with quotes here
        })
    })
var db
MongoClient.connect('mongodb://rajadmin:rajadmin1@ds227171.mlab.com:27171/rajidb', (err, client) => {
    if (err) return console.log(err)
    db = client.db('rajidb') // whatever your database name is
    app.listen(3000, () => {
    console.log('listening on 3000')
    })
    })
    
    
 
 