/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if(!root){
        return;
    }
    flatten(root.left)
    flatten(root.right)
    let a = root.left;
    let b = root.right;
    root.left = null;
    root.right = a;
    let p = root;
    while(p.right!=null){
        p = p.right
    }
    p.right = b;
    return root
};