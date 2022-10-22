//拿到学生数据
//用getName函数获取学生姓名
let getName = document.getElementById('stuName')
let getId = document.getElementById('stuId')
let getGender = document.getElementById('stuGender')
let getNum = document.getElementById('stuNum')

//拿到表单
let getForm = document.getElementById('getForm')
//拿到表格
let showData = document.getElementById('showData')

//拿到提交按钮作为事件的入口
let startGet = document.getElementById('startSend')
//利用对象来存储学生信息
let pushToStu = {}
let a = showData.childNodes
let b = '<tr>'

startGet.onclick = () => {
    pushToStu.name = getName.value
    pushToStu.id = getId.value
    pushToStu.dender = getGender.value
    pushToStu.num = getNum.value
    //console.log(pushToStu.name)

    //创建表格
    b+=`<td>${pushToStu.name}</td>
    <td>${pushToStu.id}</td>
    <td>${pushToStu.dender}</td>
    <td>${pushToStu.num}</td>
    `
    b+='</tr>'

    //将表格插入到表格中
    showData.innerHTML += b
}