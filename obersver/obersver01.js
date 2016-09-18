/**
 * Created by weifengyan on 16/8/8.
 */
var salesOffice = {};

salesOffice.clienList = {};

salesOffice.listen = function(key, fn) {
    if(!this.clienList[key]) {
        this.clienList[key] = [];
    }
    this.clienList[key].push(fn);
};

salesOffice.trigger = function() {
  var key = Array.prototype.shift.call(arguments);
    fns = this.clienList[key];

    if(!fns || fns.length === 0 ) {
        return false;
    }

    for(var i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments);
    }
};

salesOffice.listen('gzgqq', function(price) {
    console.log('price = ' + price);
});

salesOffice.listen('wfyqq', function(price) {
    console.log('price = ' + price);
});

salesOffice.trigger('gzgqq', 1000);
salesOffice.trigger('wfyqq', 999);

