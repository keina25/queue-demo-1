const createTree = value =>{
    return{
        data:value,
        children:null,
        parent:null,
    };
};

const addChild = (node,value)=>{
    const newNode = {
        data:value,
        children:null,
        parent:node,
        //往一个节点添加儿子的时候，默认把这个儿子的爸爸parent记为这个节点
    };
    node.children = node.children || []
    node.children.push(newNode);
    return newNode
};

const travel = (tree,fn)=>{
    //debugger 
    //有问题可以用这个看一下运行过程
    fn(tree)
    //fn接受是一个节点，而不是一个节点的data
    //遍历根节点
    if(!tree.children){
        return;
    }
    //如果不加这个children不为空的话，输出的时候，会提示有children等于空
    for(let i = 0; i < tree.children.length;i++){
        travel(tree.children[i],fn);
        //传进了children，fn这里是传出去
        //这里再遍历子节点的每一个节点
    };
};

const find = (tree,node) =>{
    if(tree === node){
        return tree
        //如果那个节点有再这个根节点里，就回到tree里
    }else if(tree.children){
        for(let i = 0; i<tree.children.length;i++){
           const result = find(tree.children[i],node)
           if(result){return result};
           //如果有儿子，就回到儿子里面那个结果
        };
        return undefined
        //如果儿子里面都没找到，就回到undefined
    }else{
        return undefined
        //如果不是在根节点和儿子里面，就回到undefined
    };
};

const removeNode = (tree,node) =>{
    const siblings = node.parent.children;
    //siblings是兄弟姐妹等于爸爸的孩子
    //删除节点，就是找到爸爸的儿子们，看看爸爸的儿子排第几
    let index = 0;
    for(let i =1; i<siblings.length;i++){
        if(siblings[i] === node){
           index = i;
        };
    };
    siblings.splice(index,1);
    //然后从数组里面给删掉
};
//删除节点，不是把这个节点搞没，是把这个节点在这个树的里面的地址搞没

const tree = createTree(10);
const node2 = addChild(tree,20);
//在20这个节点在增加新的节点，
//需先返回newNode，然后node2等于这个值（const）后，
//就可以在20后面加新的节点
const node3 = addChild(tree,30);
//删除node3,先遍历，
//确保这个节点在这个数里面const travel = ()
const node4 = addChild(tree,40);
const node5 = addChild(tree,50);
addChild(node2,201);
addChild(node2,202);
addChild(node2,203);
addChild(node2,204);
console.log(tree);

const fn = node =>{
    console.log(node.data)
}
//travel(tree,fn);
//遍历数组,从原本的travel(tree,node =>(console.log(node.data));
//改成了上面const fn = node=>{console.log}
//这样更适合打断点，debugger

//console.log(find(tree,node2));
//在那棵树里，找到那个2，验证是否能找到20

removeNode(tree,node5);
console.log(tree);