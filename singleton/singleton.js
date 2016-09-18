/**
 * Created by weifengyan on 16/8/10.
 */

//function Singleton(name) {
//    this.name = name;
//    this.instance = null;
//}
//
//Singleton.prototype.getName = function() {
//    return this.name;
//}
//
//Singleton.getInstance = function(name) {
//    if(!this.instance) {
//        this.instance = new Singleton(name);
//    }
//
//    return this.instance;
//}
//
//var a = Singleton.getInstance('gzgqq');
//var b = Singleton.getInstance('wfyqq');
//
//console.log(a === b);
//
//console.log(b.getName());

//function Singleton(name) {
//    this.name = name;
//}
//
//Singleton.prototype.getName = function() {
//    return this.name;
//}
//
//Singleton.getInstance = (function() {
//    var instance = null;
//    return function(name) {
//        if(!instance) {
//            instance = new Singleton(name);
//        }
//        return instance;
//    }
//})();
//
//var a = Singleton.getInstance('gzgqq');
//var b = Singleton.getInstance('wfyqq');
//
//console.log(b.getName());

var Singleton = (function() {
    var instance;

    function singleton(name) {
        if(instance) {
            return instance;
        }
        this.name = name;

        return instance = this;
    }

    singleton.prototype.getName = function() {
        return this.name;
    }

    return singleton;
})()

var a = new Singleton('gzgqq');
var b = new Singleton('wfyqq');

console.log(b.getName());