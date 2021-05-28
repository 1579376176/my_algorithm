/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root)
    {
        return root
    }
    invertTree(root.left)
    invertTree(root.right)
    let a = root.left
    root.left = root.right;
    root.right = a;
    return root
};