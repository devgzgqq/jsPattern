# JavaScript Pattern - 设计模式
javascript pattern demo

# 单例模式
#### 通用单例
```javascript
var getSingle = function(fn) {
	var result;
	return function() {
		return result || (result = fn.apply(this, arguments));
	}
}
```