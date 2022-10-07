![](https://raw.githubusercontent.com/weebney/tachyon/main/docs/res/favicon.svg)

# Tachyon
**Make your site faster than light.**

🧰 The source file can be found in the root of the repository as [tachyon.js](https://github.com/weebney/tachyon/blob/main/tachyon.js)

🗃 View all releases in the [releases directory](https://github.com/weebney/tachyon/tree/main/releases) or in [releases.](https://github.com/weebney/tachyon/tree/main/releases)

🌐 **For more info on Tachyon, please visit the main site at [fasterthanlight.net](https://fasterthanlight.net)**

📌 Website source can be found in the [docs directory.](https://github.com/weebney/tachyon/tree/main/releases) 

⭐ Star this repository to follow development! [Great features](https://fasterthanlight/#devr) are in the works.

## Feature Demonstration

![](https://raw.githubusercontent.com/weebney/tachyon/main/docs/res/tachyonDemo.gif)

## Using Tachyon
The recommended way to use Tachyon can be pulled in with `<script type="module"></script>` via unpkg and jsDelivr. Please [click here](https://fasterthanlight.net/) to find the most recent tags.

Tachyon is also available via npm with `npm install tachyonjs`

Tachyon can also be self hosted. If you do this, it's recommended that you use the minified version of Tachyon, found in each [release](https://github.com/weebney/tachyon/tree/main/releases) as tachyon-min.js

## Making Tachyon
This repository includes a shell script to make the process of minifying and packaging releases much easier.

To use this script, you must have:

- [uglify-js](https://www.npmjs.com/package/uglify-js/) (installed globally)
- Standard UNIX utilities such as tar and sed

Then run `./build VERSION` where `VERSION` is the version number of the release. Releases are placed in the packages directory in a subdirectory correspondent to their version number.

You can edit the resulting package.json by modifying [package.json.template](https://github.com/weebney/tachyon/blob/main/package.json.template) in the root of the repository.
