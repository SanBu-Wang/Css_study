let moveBox = document.getElementsByClassName('moveBox')[0]
//获取鼠标的X和Y坐标
document.onmousemove = function (e) {
    //解决兼容性
    let event = e || window.event;//Event已经被占用了
    console.log(event)
    //moveBox.style.left = event.clientX + -50+ 'px'
    //moveBox.style.top = event.clientY + -50 + 'px'
    moveBox.style.left = event.clientX - moveBox.clientWidth / 2 + 'px'
    moveBox.style.top = event.clientY - moveBox.clientHeight / 2 + 'px'
}