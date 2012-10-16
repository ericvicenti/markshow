// markshow documentation server
//
// npm install -d
// node server

var http = require('http');
var Showdown = require('showdown');
var converter = new Showdown.converter();
var markdown = converter.makeHtml;
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var _ = require('underscore');

fs.readFile(__dirname + '/template.html', 'utf8', function (error, templateStr) {
  var html = _.template(templateStr);
  var server = http.createServer(function (req, res) {
    var is_index = false;
    var is_dir_possible = false;
    var is_dl = (req.url.split('/')[req.url.split('/').length-1].split('.').length > 1) && (req.url.split('.md').length == 1);
    var not_found_md = "# 404 - Not found! \n\n We couldn't find \""+req.url+"\". \n\n";
    var url = req.url;
    if(url.split('/')[url.split('/').length-1]==''){
      is_index = true;
      url += 'index';
    }
    var filePath = __dirname + decodeURIComponent(url);
    if(path.basename(filePath).split('.').length == 1){
      is_dir_possible = true;
      filePath += '.md';
    }
    var dirPath = path.dirname(filePath);
    var links = [];
    var parts = req.url.split('/').slice(0,req.url.split('/').length-2);
    var toplink = {
      name: '..',
      url: '../'
    };
    var indexlink = {
      name: '',
      url: ''
    };
    function serveError(){
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(html({
        title: 'Error - Not found!',
        body: markdown(not_found_md),
        url: req.url,
        links: []
      }));
      res.end();
    }
    function serveRedirect(url){
      res.writeHead(302, {"Location": url});
      res.write('<h2>Redirecting..</h2>');
      res.end();
    }
    function serveResponse(files, data){
      _.each(files,function(file){
        if(file[0]=='.') return;
        if(file=='index.md'){
          var name = dirPath.split('/').pop();
          var urlParts = req.url.split('/');
          urlParts.pop();
          var url = urlParts.join('/');
          indexlink = {
            name: name,
            url: url,
            active: req.url==url+'/',
            bold: true
          }
        } else {
          var name = file;
          if(name.split('.md').length>1){
            name = name.slice(0,name.length-3);
          }
          if(!_.contains(['bootstrap','package.json','server.js','favicon.ico','template.html','node_modules'],file)) links.push({
            name: name,
            url: name,
            active: req.url.split('/')[req.url.split('/').length-1]==name
          });
        }
      });
      links.unshift(indexlink);
      links.unshift(toplink);
      if(is_dl){
        res.setHeader('Content-Length', data.length);
        res.setHeader('Content-type', mime.lookup(filePath));
        res.write(data, 'binary');
      } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        var parts = req.url.split('/');
        var title = (parts[parts.length-1]=='')?parts[parts.length-2]:parts[parts.length-1];
        res.write(html({
          title: title,
          body: markdown(data),
          url: req.url,
          links: links
        }));
      }
      res.end();
    }
    fs.readdir(dirPath, function(err, files){
      fs.readFile(filePath, (is_dl ? 'utf8' : 'binary'), function (error, data) {
        if (error) {
          if(is_index){
            filePath = filePath.slice(0,filePath.length-(is_index?9:3));
            fs.readdir(filePath, function(err, files){
              if(err){
                return serveError();
              } else {
                return serveResponse(files, '');
              }
            });
          } else if(is_dir_possible){
            return serveRedirect(req.url+'/');
          } else {
            return serveError();
          }
        } else {
          return serveResponse(files, data);
        }
      });
    });
  });
  var port = 8888;
  server.listen(port);
  console.log('DocServer started at http://localhost:'+port+'/');

});