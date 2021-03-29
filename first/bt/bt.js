const tree = {
  val: 'A',
  left: {
    val: 'B',
    right: {
      val: 'C',
      left: {
        val: 'D'
      }
    }
  },
  right: {
    val: 'E',
    right: {
      val: 'F',
      left: {
        val: 'G',
        left: {
          val: 'H'
        },
        right: {
          val: 'K'
        }
      }
    }
  }
};

let str = '';
function preOrder (t) {
  if (t) {
    str += t.val;
    if (t.left) {
      preOrder(t.left);
    }
    if (t.right) {
      preOrder(t.right);
    }
  }
}

function midOrder (t) {
  debugger
  if (t) {
    if (t.left) {
      midOrder(t.left);
    }
    str += t.val;
    if (t.right) {
      midOrder(t.right);
    }
  }
}

function afterOrder (t) {
  if (t) {
    if (t.left) {
      afterOrder(t.left);
    }
    if (t.right) {
      afterOrder(t.right);
    }
    str += t.val;
  }
}

// preOrder(tree);
// midOrder(tree);
afterOrder(tree);
console.log(str);
