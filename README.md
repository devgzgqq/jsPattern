# JavaScript Pattern - 设计模式
javascript pattern demo

># 单例模式
>>#### 2, 透明单例
>>#### 3, 惰性单例
>>#### 4, 通用单例
```javascript
var getSingle = function(fn) {
	var result;
	return function() {
		return result || (result = fn.apply(this, arguments));
	}
}
```