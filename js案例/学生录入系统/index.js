//拿到学生数据

let getName = document.getElementById('stuName').value
let getStuId = document.getElementById('stuId').value
let getStuGender = document.getElementById('stuGender').value
let getPhoneNumber = document.getElementById('phoneNum').value


//拿到提交按钮作为事件的入口
let startGet = document.getElementById('startSend')
//利用对象来存储学生信息
let pushToStu = {
    name: 'pushToStu',
    id: 'pushToStu',
    gender: 'male',
    phoneNum: '123',
}

startGet.onclick = () => {
    //alert('Start send clicked')
    console.log(getName, getStuId, getStuGender, getPhoneNumber)
    pushToStu.name = getName
    console.log(pushToStu.name)

}