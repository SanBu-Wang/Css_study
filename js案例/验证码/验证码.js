
//数组存储1-9、a-f
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
//随机数
let str = ""

function parse() {
    for (let i = 0; i < 6; i++) {
        let num = Math.round(Math.random() * (15 - 0) + 0)
        //console.log(num)
        str += n[num];
    }
    console.log(str)
}

parse()
//拿到span
let span = document.getElementById("#yzm")
//拿到手动更新验证码的接口
let change = document.querySelector('#change')
//span.innerHTML = str
change.onclick = parse()