# angular-theme-spinner #
=============

[![NPM version][npm-image]][npm-url]
![](http://img.shields.io/badge/bower_module-v1.2.3-green.svg)

angular-theme-spinner is used for displaying loading indicator while data in specific area is loading.


## Install ##

```powershell
bower install --save angular-theme-spinner
```

## Usage ##

```html
<link rel="stylesheet" type="text/css" href="angular-theme-spinner.min.css">

<script type="text/javascript" src="angular.min.js"></script>
<script type="text/javascript" src="angular-theme-spinner.min.js"></script>

<div style="width: 500px; height: 500px;">
    <th-spinner theme="'tailing'" display="'true'" size="'size-md'"></th-spinner>
</div>
```

```javascript
//plain javascript
var mod = angular.module('yourModule', ['angular-theme-spinner']);

//commonjs
var angular = require('angular');
require('angular-theme-spinner');
var mod = angular.module('yourModule', ['angular-theme-spinner']);

//AMD
define(['angular', 'angular-theme-spinner'], function(angular){
    var mod = angular.module('yourModule', ['angular-theme-spinner']);
});
//If you are using requirejs, please notice that you have the path config that specify `angular-theme-spinner` to the javascript file
```

## API ##

| Attribute    | Type                  | Required  | Description |
| :------------| :---------------------| :---------| :-----------|
| theme        | string([expression])  | YES       | `tailing`, `audio-wave`, `windcatcher`, `spinner-section`, `spinner-section-far`, `circular`, `initspin` can be used |
| display      | boolean([expression]) | YES       | used to display the spinner or not |
| size         | string([expression])  | YES       | `size-sm`, `size-md`, `size-lg` can be used |

See full featured demo: [angular-theme-spinner](http://leftstick.github.io/angular-theme-spinner/)

## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/angular-theme-spinner/master/LICENSE)


[expression]: https://docs.angularjs.org/guide/expression
[npm-url]: https://npmjs.org/package/angular-theme-spinner
[npm-image]: https://badge.fury.io/js/angular-theme-spinner.png
