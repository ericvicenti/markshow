![Introducing MarkShow](/.assets/img/markshow_banner.png)

__The world needs an open, easy to read, and well-defined content language in order to freely communicate over the net.__ 
In order to ensure the freedom of sharing open, rich content, MarkShow intends to deliver on these needs.

MarkShow is a modern dialect of [MarkDown](http://daringfireball.net/projects/markdown/).

Included is a basic server and implementation of MarkShow, based on [Showdown](https://github.com/coreyti/showdown).

### Whats new from MarkDown?

The biggest difference between MarkShow and MarkDown is the treatment of HTML

#### HTML

Markdown fully supports embedded HTML. This has disasterous consequences. For one, it means markdown can only be displayed in web browsers. Further, it allows people to sidestep markdown and use raw html where they see fit.

MarkShow does not allow any embedded html (nor CSS, JS, etc), because we don't think its a good idea! When we try to inject that nasty html, it looks like this: <script> alert("If this annoys you, don't use markdown!"); </script>

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

MarkShow is [released under the MIT License](License.md).

You are free to use MarkShow however you'd like.

If make changes to MarkShow and distribute them, you must call the project something else to avoid confusion with MarkShow.


### Credits

MarkShow was created by Eric Vicenti in Silicon Valley to standardize rich text for the web.

Built on the strong shoulders of projects like [MarkDown](http://daringfireball.net/projects/markdown/basics) and [Showdown](https://github.com/coreyti/showdown).