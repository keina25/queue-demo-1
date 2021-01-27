const divScreen = document.querySelector("#screen")  //大屏幕取这个号码
const btnCreateNumber = document.querySelector("#createNumber")
const btnCallNumber = document.querySelector("#callNumber")
const spanNewNumber = document.querySelector("#newNumber")
const spanQueue = document.querySelector("#queue")

let n = 0  //默认取号从0开始,默认没人排队
let queue = []  //记住所叫过的号码

btnCreateNumber.onclick = () => {
    n +=1
    queue.push(n); //每次叫一个号，就把它放到队列里面，表示它已经再排队了,push表示入队
    // 等同于queue.push.call(queue,n)
    spanNewNumber.innerText = n //把号显示再当前号码后面，告诉你
    spanQueue.innerText = JSON.stringify(queue)  //当前队列显示再这下面，innerText显示的字符串，但是n是数组，
                            //所以要转换成字符串，用queue.toString()表示字符串（不太直观），
                            //或JSON.stringify queue可以把某些对象数组转换成字符串，更像数组的字符串  
}

btnCallNumber.onclick = () =>{
    if(queue.length === 0 ){
        alert("通知没号了")  //这里可以通知没号可以取了
        return;
    }//如果取号数值为0，就默认不要动，不要等于undefine
    const m = queue.shift()  //const m = queue.shift.call(queue)
    divScreen.innerText = `请 ${m} 号就餐`
    spanQueue.innerText = JSON.stringify(queue)
}