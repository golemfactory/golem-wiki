# Internal guides
Those guidelines were created for internal use only in order to allow the team to **create unified in style markdown** files.

---

#### Updating Docsify 
---
This wiki is generated using [Docsify](https://github.com/docsifyjs/docsify). To address some issues within the library a [fork](https://github.com/golemfactory/docsify) is currently being used to generate the website.

Docsify's minified code is included with the page (`lib` directory). To update the bundled code, follow the below steps:

1. Clone the [Docsify fork](https://github.com/golemfactory/docsify) via git.
2. Using a terminal, switch to the directory to which the repository was downloaded. The next two steps **must** be called from inside that directory.
3. Run `npm install` to install Docsify dependencies. If your system does not include NPM, follow the [installation instructions](https://www.npmjs.com/get-npm).
4. Run `NODE_ENV=production node build/build.js` to build minified versions of Docsify and its plugins.
5. Copy the output code (from `libs` directory in the Docsify fork) to the `lib` directory of this wiki repository.
6. Commit and push your changes via git.

---

#### Page titles
---

# h1
`# = h1`

## h2
`## = h2`

### h3
`### = h3`

#### h4
`#### = h4`

##### h5
`##### = h5`

###### h6
`###### = h6`

>[!NOTE] As sizes of the titles are taken into consideration during rendering of the sidebar, and there are 3 levels of nesting, please use `h1` as the main title and drop one-two down to avoid unnececery elements to show in the main navigation. (For eg. h1 Brass Beta --> h2 Installation --> h3 MacOs, or h1 Use cases --> h4 Benefits)

---

#### Quotes and alerts 
---


>This is a basic quote style `> in markdown`

?>This is a basic note/info style `?> in markdown`

!>This is a basic warning style `!> in markdown`

> [!NOTE|style:callout]
> This is secondary style for note/info
`[!NOTE|style:callout] in markdown`

> [!TIP|style:callout]
> This is a style for tips
`[!TIP|style:callout] in markdown`

> [!WARNING|style:callout]
> lThis is a secondary style for a warning
`[!WARNING|style:callout] in markdown`

> [!DANGER|style:callout]
> This is a secondary style for attention
`[!DANGER|style:callout] in markdown`

---

#### Code styling
If you want to higlight and style your code type after "`" proper language. The syntax should be colored in proper way, for eg.
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

the same way you can style `python` and `js` code
```python
msg="Hello World"
code=123
name="Steve"
```

> [!NOTE|style:callout]
> If you dont see your code being properly highlitened prease create issue on wiki Github, and we will add it. Currently used are:
- html
- js
- python
- bash
- git



