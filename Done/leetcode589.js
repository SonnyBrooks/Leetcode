var preorder = function(root, result = []) {
    if(!root) return result;
    result.push(root.val);
    
    for(let child of root.children) {
        result = preorder(child, result);
    }
    
    return result;
};