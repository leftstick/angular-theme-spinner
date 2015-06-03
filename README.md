# angular-theme-spinner ![](http://img.shields.io/badge/bower_module-v1.2.0-green.svg) #
=============

angular-theme-spinner is used for displaying loading indicator while data in specific area is loading.


## Install ##

```powershell
bower install --save angular-theme-spinner
```

## Usage ##

```html
<link rel="stylesheet" type="text/css" href="angular-theme-spinner.min.css">
<script type="text/javascript" src="angular-theme-spinner.min.js"></script>
<div style="width: 500px; height: 500px;">
    <th-spinner theme="'tailing'" display="'true'" size="'size-md'"></th-spinner>
</div>
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