/**
 * Created by weifengyan on 16/8/12.
 */

var validator = {
    types: {},

    messages: [],

    config: {},

    validate: function(data) {

        var i, msg, type, checker, result_ok;

        this.messages = [];

        for(i in data) {
            if(data.hasOwnProperty(i)) {
                type = this.config[i];

                checker = this.types[type];

                if(!type) {
                    continue;
                }

                if(!checker) {
                    throw {
                        name: "ValidationError",
                        message: "No handler to validate type " + type
                    };
                }

                result_ok = checker.validate(data[i]);

                if(!result_ok) {
                    msg = "Invalid value for *" + i + "*, " + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }

        return this.hasErrors();

    },

    hasErrors: function() {
        return this.messages.length !== 0;
    }
}

validator.types.isNonEmpty = {
    validate: function (value) {
        return value !== "";
    },
    instructions: "传入的值不能为空"
};

// 验证给定的值是否是数字
validator.types.isNumber = {
    validate: function (value) {
        return !isNaN(value);
    },
    instructions: "传入的值只能是合法的数字，例如：1, 3.14 or 2010"
};

// 验证给定的值是否只是字母或数字
validator.types.isAlphaNum = {
    validate: function (value) {
        return !/[^a-z0-9]/i.test(value);
    },
    instructions: "传入的值只能保护字母和数字，不能包含特殊字符"
};

var data = {
    first_name: "",
    last_name: "Xu",
    age: "unknown",
    username: "TomXu"
};

validator.config = {
    first_name: 'isNonEmpty',
    age: 'isNumber',
    username: 'isAlphaNum'
};

validator.validate(data);

if (validator.hasErrors()) {
    console.log(validator.messages.join("\n"));
}