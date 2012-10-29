# Using MarkShow

## 1. Download & Install

MarkShow is tested on node.js v.8.x

1. Download or check out the repo from [github](https://github.com/ericvicenti/markshow)
2. `npm install`
3. `node server`

For configuration and setup files to deploy markshow on a server (like [markshow.org](markshow.org)), check out [markshow.production](https://github.com/ericvicenti/markshow.production)


## 2. Test Markshow

Test your local MarkShow in your browser at [localhost:8888/](http://localhost:8888/). If you see the markshow site, you are good to go.

## 3. Add your own content

You are ready to start editing the markdown in `/Documents` and replacing it with your own content. All markdown in the folder is rendered as html, and the rest of the files are served up normally. The server will always display the latest markdown and files on refresh.

Create infinite sub-folders, and MarkShow will list them along with their contents.

## 4. Customize the template

The template for the server is located in the root of the project in [template.html](https://github.com/ericvicenti/markshow/blob/master/template.html). It is an [underscore.js template](http://underscorejs.org/#template). Customize it to your needs, and refresh the server to see your changes.

Add or remove assets for your site in the existing `.assets` directory, or create more hidden files and directories for your own purposes. Any file or directory starting with a `.` won't be listed, but it will still be made available.


## 5. Hack on MarkShow

Markshow is a relatively simple node.js express application, so it is easy to customize as you wish.

We are working on making markshow more extensible so you don't need to fork it to customize it. If you are up for it, we are in great need of [contributors](/contributing)!