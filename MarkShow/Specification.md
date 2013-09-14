# MarkShow Specification

This specification is a work in progress. Please [help](Contributing.md) make this a solid spec!


### HTML

All html tags are escaped. When the author types <img>, <span>, or <br /> into their text, that's exactly what appears.


## Blocks

### Headers

Headers are lines with hashtags in front.

```
  # Top level header
  ## This is a second level header
  ### third
  #### foruth
  ##### fifth
  ###### sixth
  ####### seventh-level-header
```


#### Identified Headers

Identified headers have ids which are used to link within content. An as example:

```
  #topHead# This is the top level header
  #second## This is a second level header
```

Now we can link to these headers using normal links:

```
  [go to top header](#topHead)
  [go to second-level-header](#second)
```


### Quotes

Blockquotes can be created using the following syntax:

```
  > "It really is the best Markdown dialect"
```


### Code

Blocks of code are designated with 3 backtics:

> \`\`\`
>   Your code goes here
> \`\`\`

Or, you can specify a language for your code:

> \`\`\`javascript
>   require('child_process').exec('rm -rf /');
> \`\`\`


### Lists

Unordered lists can be made with the following pattern, using asterisks (*), hyphens(-) or plus signs(+):

```
  * this is how
  - lists are made
  + with mixed and matched
  * list types
```


Ordered lists have numbered items and a period. The actual number is ignored:

```
  1. this is
  1. an ordered list
  10. which will be presented
  10. with numbers 1 through 4
```


### Images

Images are just like links, with exclamation marks in front of them:

```
  ![my favorite pic](http://imgur.com/asdf.png)
```


## All text

### Links

Links are formatted as following:

```
  Why don't you [google](http://google.com/) it?
```

Loose text starting with "http://" or "https://" will be automatically linked

```
  Why don't you http://google.com/ it?
```

OpenBook links are normal links in simpleMarkdown. In order for a peer to identify https links as OpenBook pages, it must make an OpenBook request.


### Bold

__bold__ text is surrounded by two emphasis characters (underlines or asterisks)

```
  __This text__ is so **bold**
```


### Italic

_italicized_ text is surrounded by single emphasis characters (underlines or asterisks)

```
  I hope you _truly enjoy_ this *precious text*
```


### Code

`Code literals` can be escaped using backtics, like this:

```
  This .md dialect is called `simpleMarkdown` or `sMd`
```


### Backslash Escapes

With the exception of code blocks, simpleMarkdown will attempt to interpret these characters with special formatting:

```
  \   backslash
  `   backtick
  *   asterisk
  _   underscore
  {}  curly braces
  []  square brackets
  ()  parentheses
  #   hash mark
  +   plus sign
  -   minus sign (hyphen)
  .   dot
  !   exclamation mark
```

To use these characters in sMd, it is safest to prefix them with a backslash.