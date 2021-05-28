/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if(!root){
        return root
    }
    con(root.left,root.right);
    return root
}; 
var con = function(a,b){
    if(!a||!b){
        return 
    }
    con(a.left,a.right)
    con(b.left,b.right)
    con(a.right,b.left)
    a.next = b
}