# Tachyon
**Make your site faster than light.**

🧰 The source file can be found in the root of the repository as [tachyon.js](https://github.com/weebney/tachyon/blob/main/tachyon.js)

🗃 View all releases in the [releases directory](https://github.com/weebney/tachyon/tree/main/releases) or in [releases.](https://github.com/weebney/tachyon/tree/main/releases)

🌐 **For more info on Tachyon, please visit the main site at [fasterthanlight.net](https://fasterthanlight.net)**

📌 Website source can be found in the [docs directory.](https://github.com/weebney/tachyon/tree/main/releases) 

## Feature Demonstration

![](https://raw.githubusercontent.com/weebney/tachyon/main/docs/res/tachyonDemo.gif)

## Making Tachyon
This repository includes a shell script to make the process of minifying and packaging releases much easier.

To use this script, you must have:

- [uglify-js](https://www.npmjs.com/package/uglify-js/) (installed globally)
- Standard UNIX utilities such as tar and sed

Then run `./build VERSION` where `VERSION` is the version number of the release. Releases are placed in the packages directory in a subdirectory correspondent to their version number.

You can edit the resulting package.json by modifying [package.json.template](https://github.com/weebney/tachyon/blob/main/package.json.template) in the root of the repository.
