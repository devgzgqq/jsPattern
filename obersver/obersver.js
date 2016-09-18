/**
 * Created by weifengyan on 16/8/8.
 */
var salesOffices = {}; //定义售楼处

salesOffices.clienList = [];

salesOffices.listen = function(fn) {
    this.clienList.push(fn);
};

salesOffices.trigger = function() {
    for(var i = 0; i < this.clienList.length; i++) {
        this.clienList[i].apply(this, arguments);
    }
}


salesOffices.listen( function( price, squareMeter ){
    console.log( 'price  = ' + price );
    console.log( 'squareMeter= ' + squareMeter );
});

salesOffices.trigger(100, 99);
