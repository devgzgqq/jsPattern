/**
 * Created by weifengyan on 16/8/18.
 */

//function Singleton(name) {
//    this.name = name;
//    this.instance = null;
//}
//
//Singleton.prototype.getName = function() {
//    return this.name;
//};
//
//Singleton.getInstance = function(name) {
//    if(!this.instance) {
//        this.instance = new Singleton(name);
//    }
//    return this.instance;
//}
//
//var single01 = new Singleton('wfyqq');
//var single02 = new Singleton('wfyqq1111');
//
//console.log(single01 === single02);
//
//var single = Singleton.getInstance('gzgqq');
//
//console.log(single.getName());

var Singleton = function(name) {
    this.name = name;
};

Singleton.prototype.getName = function() {
    return this.name;
};

Singleton.getInstance = (function() {
    var instance = null;
    return function(name) {
        if(!instance) {
            instance = new Singleton(name);
        };
        return instance;
    };
})();

var single = Singleton.getInstance('gzgqq');
var single01 = Singleton.getInstance('wfyqq');

console.log(single === single01);
