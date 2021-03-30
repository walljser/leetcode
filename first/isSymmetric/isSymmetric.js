// var isSymmetric = function(root) {
//   var check = function (p, q) {
//     if (!p && !q) {
//       return true;
//     } else if (!p || !q) {
//       return false;
//     } else if (p.val === q.val) {
//       return check(p.left, q.right) && check(p.right, q.left);
//     } else {
//       return false;
//     }
//   }

//   return check(root.left, root.right);
// };

var isSymmetric = function(root) {
  var check = function (p, q) {
    const queue = [];

    queue.push(p);
    queue.push(q);

    while (queue.length > 0) {
      const u = queue.shift();
      const v = queue.shift();

      if (!u && !v) {
        continue
      } else if (!u || !v) {
        return false;
      } else if (u.val !== v.val) {
        return false
      }

      queue.push(u.left);
      queue.push(v.right);

      queue.push(u.right);
      queue.push(v.left);
    }
    return true;
  }

  return check(root, root);
};
