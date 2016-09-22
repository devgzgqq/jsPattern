# JavaScript Pattern - 设计模式
javascript pattern demo

# 单例模式
## 1，普通单例
## 2, 透明单例
## 3, 惰性单例
## 4, 通用单例

var getSingle = function(fn) {
	var result;
	return function() {
		return result || (result = fn.apply(this, arguments));
	}
}