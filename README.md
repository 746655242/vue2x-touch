# vue2x-touch
This is a directive wrapper for Hammer.js 2.0



## Install

``` bash
# install dependencies
npm install vue2x-touch --save
```

## Usage

### ES6

``` javascript
import Vue2Touch from 'vue2x-touch'
Vue.use(Vue2Touch)
```

### Using the v-touch directive

``` html
<a v-touch:tap="callback">Tap me!</a>
<div v-touch:swipe="callback">Swipe me!</div>
```


### callback
Callback is a name of function with two args(can use any name, but type must be a funciton);the first argument can return a touch type(swipeleft,tap ...), and the second argument can return a callback event.

## More Details
See [Hammer.js document](http://hammerjs.github.io/)


