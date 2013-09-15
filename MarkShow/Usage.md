# Using MarkShow


## MarkShow Converter:

Convert MarkShow strings into html for display.

1. `npm install markshow`
2. `var MarkShow = require('markshow');`
3. `var markshow = new MarkShow();`
4. `html = markshow.makeHtml('## Dude, its __pure content!__')`

```
➜  ~  npm install markshow
...
➜  ~  node                
> var MarkShow = require('markshow');
undefined
> var markshow = new MarkShow();
undefined
> markshow.makeHtml('# dude')
'<h1 id="dude">dude</h1>'
> markshow.makeHtml('#woah## dude')
'<h2 id="woah">dude</h2>'
```


## MarkShow Server:

A simple server to display your MarkShow content.

1. Download or check out the repo from [github](https://github.com/ericvicenti/markshow)
2. `cd markshow`
2. `npm install`
3. `node src/server`

For configuration and setup files to deploy markshow on a server (like [markshow.org](markshow.org)), check out [markshow.production](https://github.com/ericvicenti/markshow.production)

### Test the App

Test your local MarkShow in your browser at [localhost:8888/](http://localhost:8888/). If you see the markshow site, you are good to go.

### Add your own content

You are ready to start editing the markdown in `/MarkShow` and replacing it with your own content. All markdown in the folder is rendered as html, and the rest of the files and folders are served up normally. The server will always display the latest markdown and files on refresh.

Create infinite sub-folders, and MarkShow will list them along with their contents. Add or remove assets for your documents in the existing `.assets` directory, or create more hidden folders for your own purposes. Any directory starting with a `.` won't be listed, but it will still be made available.

### Customize the template

The template for the server is located in the root of the project in [template.html](https://github.com/ericvicenti/markshow/blob/master/template.html). It is an [underscore.js template](http://underscorejs.org/#template). Customize it to your needs, and refresh the server to see your changes.

### Keep hacking

Don't hesitate to keep hacking in `server.js` for more customizations. Its poorly documented (sorry!), but quite concise and simple.