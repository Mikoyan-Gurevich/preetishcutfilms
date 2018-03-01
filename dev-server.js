const path = require('path');
const AWS = require('aws-sdk');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(require('./webpack.config'));

var app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/'
}));
app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
}));

AWS.config.update({ region: 'ap-south-1', accessKeyId: '', secretAccessKey: '' });

var s3 = new AWS.S3({ apiVersion: '2006-03-01' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/_status', (req, res) => {
    res.json({ message: 'I am working fine!' });
});

router.get('/getThumbnails', (req, res) => {
    s3.listObjects({ Bucket: 'preetishcutfilms', Prefix: 'thumbnails/' }, function (err, data) {
        if (err) throw err;
        let thumbnails = [];
        data.Contents.map((content, key) => {
            key > 0 && thumbnails.push('http://s3.ap-south-1.amazonaws.com/preetishcutfilms/' + content.Key);
        });
        res.json({ thumbnails });
    });
})
router.get('/getActuals', (req, res) => {
    s3.listObjects({ Bucket: 'preetishcutfilms', Prefix: 'actual/' }, function (err, data) {
        if (err) throw err;
        let actuals = [];
        data.Contents.map((content, key) => {
            key > 0 && actuals.push('http://s3.ap-south-1.amazonaws.com/preetishcutfilms/' + content.Key);
        });
        res.json({ actuals });
    });
})
// This will send response to all the APIs
app.use('/v1', router);

// This is to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// This is to serve rest of the static assets to the client
app.use(express.static(path.join(__dirname, '')))


app.listen(port);
console.log('Magic happens on port ' + port);
