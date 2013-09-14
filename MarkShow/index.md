![Introducing Markshow](/.assets/img/markshow_banner.png)

MarkShow is a dielect of [MarkDown](http://daringfireball.net/projects/markdown/), with a new restrictions, and an added feature or two.

Included is a basic nodejs server and implementation of markshow, based on showdown.

### Whats new from MarkDown?

The biggest difference between MarkShow and MarkDown is html!

#### HTML

Markdown fully supports embedded html. This has disasterous consequences. For one, it means markdown can only be displayed in web browsers. Further, it allows people to sidestep markdown and use raw html where they see fit.

MarkShow does not allow any embedded html, because we don't think its a good idea! When we try to inject that nasty html, it looks like this: <script> alert("If this annoys you, don't use markdown!"); </script>

Because we exclude html from our definition, MarkShow truly is a human-readable markup!

Without the cruft of html compatibility, we can start fresh, work together, and create a well-defined human-readable markup language.

#### Named Headers

MarkShow adds a feature called [named headers](/Examples/More/#named-headers), and it allows users to add identifiers to content sections.

### Usage

Learn how to install and get started with markshow on the [usage page](/Usage).


### Examples

Check out how markshow in the [examples section](/Examples)


### Contributing

We could really use some talented contributors like yourself to make this project really great. Head on over to the [contribution page](/Contributing) to see how you can help.


### License

MarkShow is [MIT licensed](License). Feel free to use markshow as you wish!


### Credits

MarkShow was created by Eric Vicenti in Silicon Valley to make documentation easy to write and present.

Built on the shoulders of powerful projects like [Showdown](https://github.com/coreyti/showdown), [MarkDown](http://daringfireball.net/projects/markdown/basics), [Twitter Bootstrap](https://github.com/twitter/bootstrap), [node.js](http://nodejs.org/), and [express.js](http://expressjs.com/)