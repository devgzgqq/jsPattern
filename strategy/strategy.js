/**
 * Created by weifengyan on 16/8/3.
 */
var Strategy = {
    'A': function() {
        return 'this is A';
    },
    'B': function() {
        return 'this is B';
    },
    'C': function() {
        return 'this is C';
    }
};

function context(type) {
    return Strategy[type]();
}

console.log(context('C'));