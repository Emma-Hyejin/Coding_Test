//Section03_26번 treeDFS
let dfs = function(node){
    const result = [];
    const recursive = function(node){
        if(node.children){
            result.push(node.value);
            for( let i = 0 ; i < node.children.length; i++){
                recursive(node.children[i])
            }
        }else{
            result.push(node.value);
        }
    }
    recursive(node);
    return result;
};

let Node = function(value){
    this.value= value;
    this.children = [];
};

Node.prototype.addChild = function(child){
    this.chldren.push(child);
    return child;
}