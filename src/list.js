const createList = value =>{
    return createNode(value);    //{
        //data:value,  //属性：数据
        //next:null   //默认下一个节点是空
    //};//返回节点，用对象表示，节点有两个属性，一个是数据，一个是下一个节点
}; //创建只含一个节点的link_list的示例

const appendList = (list,value) =>{
    const node = createNode(value);  //{
        //data:value,
        //next:null
    //};
    //list.next = node;
    //return node;
    let x = list;
    while(x.next){
        x = x.next;
    }//x.next === null 
    x.next = node; //x是最后一个节点
    return node;
};   //新开一个节点,append就是在后面加东西

const removeFromList = (list,node)=>{
    //debugger;  //可以在网页控制台的Sources,看执行过程
    let x = list;
    let p = node; //上一个节点
    while(x !== node && x !== null){ //对null进行处理，如果Node不在list中，x就可能为null
        p = x;
        x = x.next;
    }
    // console.log(p === null || x的上一个节点)//如果第一个节点就是要删的，那就是等于Null，第一个节点的上一个节点是不存在；x的上一个节点
    // console.log(x === node || x === null) // 循环的时候，x总会找到等于一个节点是跟删掉的节点是相同的；等于Null是因为用户给了一个不存在的节点给删
    if(x === null){ //若x为Null,则不需要删除，直接return，false表示无法删除不在List里的节点
        return false
    }else if(x === p){ //这说明删除的节点是第一个节点
        p = x.next
        return p //如果删除的是第一个节点，那么就要把list的头节点p返回外面，即newList = removeFromList(list,list)
    }else{
    p.next = x.next;
    return list //如果删除的不是第一个节点，返回原来的list即可
    }
};
    //if(list === node){ 
        //如果删除的是第1个节点
        //list = node.next;
    //}else{
        //如果删除的是第2个节点
        //第1个节点的.next = 第2个节点.next
        //if(list.next === node){
            //list.next = node.next;
        //}else{
            //如果删除的是第3个节点
            //第2个节点.next = 第3个节点.next
        //if(list.next.next === node){
            //(list.next).next = node.next;
        //}else{
            //如果删除的是第4个节点
            //第3个节点.next = 第4个节点.next
        //if(list.next.next.next === node){
           // (list.next.next).next = node.next;
        
            //};
        //};
    //};
//};
// removeFromList(list,list);

const createNode = value =>{
    return{
        data:value,
        next:null
        //previous:XXX 遍历找上一个节点，上一个节点是XXX
    };
};

const travelList = (list,fn)=>{
    let x = list;
    while(x !== null){
        fn(x);
        x = x.next;
    }
};//对每一项进行fn操作，直到发现这一项为null，就不操作了

const list = createList(10);
//const node = list //node就是List的第一个节点了现在
//const newList = removeFromList(list,node)//必须用newList获取返回值才能拿到删除了第一个节点的新list
const node2 = appendList(list,20);
const node3 = appendList(list,30);
const node4 = appendList(list,40);
//removeFromList(list,node3); //删除第3个节点：30
travelList(list,node => {
    console.log(node.data);
});
//console.log("node"); //加注释
//console.log(node);   
console.log("list");  //加注释
console.log(list);