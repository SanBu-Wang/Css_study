# JavaScript

### Array数组

#### 创建数组的方式：

##### 实例化数组

```javascript
new Array(1,2,3,4)//通过new实例的方式创建数组

var nums = new Array(1,2,3,4)

var citys = new Array(5)//表示指定数组的长度为5，并不代表插入值
```

##### 使用[]创建数组（more use）

```js
var weather = ['wind','fine']
var empty = []//创建空数组
var mood = ['sad',,,'happy']	//表示中间插入了两个空元素
```

------



#### 数组的基本操作

##### 数组的长度

Array对象的长度可用通过length获取，数组长度一般是其下标最大值+1；

```js
var nums = [1,2,3,4,5]
console.log(nums.length)//调用length方法获取数组的长度
```

length方法还能设置数组的长度

```js
var arr1 = []//创建空数组
arr1.length = 5
console.log(arr1) //输出5个空值
----------------------------------------
var arr2 = [1,2,3，4]
arr2.length = 2 //设置数组长度小于原来长度
for(let i = 0 ; i < length + 1;i++ ){
    console.log(arr2)	//输出数组时，发现数组长度为2，第三个值及其以后的值被丢弃
}
```



数组的长度不能限制，就算设置了长度，而后进行访问修改数组后，length仍然会发生改变



##### 数组的访问

数组的访问方式：数组名[下标]

```js
console.log(arr1[1]) //访问arr1中下标为1的数组
```

> 数组名[下标] = 1;

可以指定数组下标从而给数组修改添加更换



##### 数组的遍历

1、使用for循环进行遍历

2、使用for……in进行数组遍历

> 两者都是通过下标进行遍历

```js
for ( num in arr1){
    document.write("<p>" + num + '=' + arr1[num] + '</p>')
}//直接输出num并不只是输出数组的值，还会输出数组自带的方法、属性
```

3、在ES6中新增了for of用于直接访问数组的值

```js
for (value of arr1){
	console.log(value)//value就是arr1中的值
}
```

