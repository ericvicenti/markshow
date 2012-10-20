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
var express = require('express');
var app = express();
var mdDir = '/Documents';

fs.readFile(__dirname + '/template.html', 'utf8', function (error, templateStr) {
  var html = _.template(templateStr);
  app.use(function (req, res, next) {
    var is_index = false;
    var is_dir_possible = false;
    var not_found_md = "# 404 - Not found! \n\n We couldn't find \""+req.url+"\". \n\n";
    var url = req.url;
    if(url.split('/')[url.split('/').length-1]==''){
      is_index = true;
      url += 'index';
    }
    var filePath = __dirname + mdDir + decodeURIComponent(url);
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
    fs.readdir(dirPath, function(err, files){
      fs.readFile(filePath, 'utf8', function (error, data) {
        if (error) {
          if(is_index){
            filePath = filePath.slice(0,filePath.length-(is_index?9:3));
            fs.readdir(filePath, function(err, files){
              if(err){
                return next();
              } else {
                return serveResponse(files, '');
              }
            });
          } else if(is_dir_possible){
            return res.redirect(302, req.url+'/');
          } else {
            return next();
          }
        } else if(filePath.slice(filePath.length-3,filePath.length)=='.md'){
          return serveResponse(files, data);
        } else {
          return next();
        }
      });
    });
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
          if(!_.contains(['bootstrap'],file)) links.push({
            name: name,
            url: name,
            active: req.url.split('/')[req.url.split('/').length-1]==name
          });
        }
      });
      links.unshift(indexlink);
      links.unshift(toplink);
      var parts = req.url.split('/');
      var title = (parts[parts.length-1]=='')?parts[parts.length-2]:parts[parts.length-1];
      res.send(html({
        title: title,
        body: markdown(data),
        url: req.url,
        links: links
      }));
    }
  });
  app.use(express.static(__dirname+'/Documents'));
  var port = process.env.PORT || 8888;
  app.listen(port);
  console.log('MarkShow started at port '+port+'/');

});