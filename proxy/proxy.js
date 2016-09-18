/**
 * Created by weifengyan on 16/8/15.
 */
var Flower = function(){};

var Xiaoming = {
    sendFlower: function(target) {
        var flower = new Flower();
        target.receiveFlower(flower);
    }
};

var Zhongjianren = {
    receiveFlower: function(flower) {
        Nvshen.listenGoogMood(function() {
            Nvshen.receiveFlower(flower);
        })
    }
}

var Nvshen = {
    receiveFlower: function(flower) {
        console.log('收到花' + flower);
    },
    listenGoogMood: function(fn) {
        setTimeout(function() {
            fn()
        }, 1000 );
    }
}

Xiaoming.sendFlower(Zhongjianren);