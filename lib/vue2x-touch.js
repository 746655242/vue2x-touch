
import Hammer from 'hammerjs'
var vueTouch = {}
var gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe']
var customEvents = {}
if (!Hammer) {
    throw new Error('[vue-touch] cannot locate Hammer.js.')
}

vueTouch.config = {}
vueTouch.customEl=[]
function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
let mc;
/* 增加自定义事件 */
vueTouch.registerCustomEvent = function (event, options) {
    options.event = event
    customEvents[event] = options
}
vueTouch.install = function (Vue) {
    Vue.directive('touch', {
        bind:function(el, binding, vnode){

            if(!mc||mc.element!=el){
                mc=new Hammer.Manager(el)
            }

            var recognizerType, recognizer
            var event =binding.arg
            //自定义事件
            if(customEvents[event]){
                vueTouch.customEl.push(mc)
                var custom = customEvents[event]
                recognizerType = custom.type    
                recognizer = new Hammer[capitalize(recognizerType)](custom)
                recognizer.recognizeWith(mc.recognizers)
                mc.add(recognizer)
            }else{
                for (var i = 0; i < gestures.length; i++) {
                    if (event.indexOf(gestures[i]) === 0) {
                        recognizerType = gestures[i]
                        break
                    }
                }
                recognizer = new Hammer[capitalize(recognizerType)]()
                recognizer.recognizeWith(mc.recognizers)
                mc.add(recognizer)
            }

            mc.on(event,function(e){
                binding.value(e,el);
            });

        },
       
        inserted:function(el, binding, vnode){
            let event=binding.arg     
            /* 自定义事件优先识别 */
            if(customEvents[event]){
                let mc= vueTouch.customEl[0]
                var custom = customEvents[event]
                var type = custom.type  
                mc.get(type).requireFailure(event)
                vueTouch.customEl.shift()
            }  
        }
    })
}        


export default vueTouch; 
