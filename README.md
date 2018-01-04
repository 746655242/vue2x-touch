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
<div v-touch:pan="{callback:callback,data:data}">Swipe me!</div>


callback(e,el,data){
	console.log(e)//ev
	console.log(el)//Current Element 
	ocnsole.log(data)//{callback:fn,data:data}
}


```

#### Registering Custom Events

``` js
// example registering a custom doubletap event.
// the `type` indicates the base recognizer to use from Hammer
// all other options are Hammer recognizer options.
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
})
```
``` html
<a v-touch:doubletap="onDoubleTap"></a>
```


## More Details
See [Hammer.js document](http://hammerjs.github.io/)


