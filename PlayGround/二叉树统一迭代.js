const preorderTraversal = (root,ans = []) => {
    const stack = []
    if(root) stack.push(root)
    while(stack.length > 0){
        const node = stack.pop()
        if(node === null){
            ans.push(stack.pop().val)
            continue
        }
        if(node.right)stack.push(node.right)
        if(node.left)stack.push(node.left)
        stack.push(node)
        stack.push(null)
    }
    return ans
}