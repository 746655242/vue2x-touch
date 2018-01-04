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




## More Details
See [Hammer.js document](http://hammerjs.github.io/)


