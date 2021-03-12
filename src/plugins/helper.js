"use strict"
import Vue from 'vue'
const Helper = {
    install(Vue) {
        Vue.prototype.appName = process.env.VUE_APP_NAME
        Vue.prototype.getImage = function (avatar){
        if(avatar!=null && avatar.length>0){
            return process.env.VUE_APP_BACKEND_URL + "/storage"+ avatar
        }
            return "/img/unavailable.png"
        }
    }
}
Vue.use(Helper)