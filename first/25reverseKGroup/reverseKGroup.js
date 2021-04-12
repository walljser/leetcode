function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var reverse = function(head, tail) {
  let pre = tail.next;
  let p = head;
  while (pre !== tail && p) {
    // console.log(p);
    // console.log(p.val);
    const next = p.next;

    p.next = pre;

    pre = p;

    p = next;
  }

  return [tail, head];
}

var reverseKGroup = function(head, k) {
  const hair = new ListNode();
  hair.next = head;
  let pre = hair;
  while (head) {
    let tail = pre;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        return hair.next;
      }
    }
    const next = tail.next;
    [head, tail] = reverse(head, tail);
    pre.next = head;
    tail.next = next;
    pre = tail;
    head = tail.next;
  }
  return hair.next;
}


const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)
const d = new ListNode(4)
const e = new ListNode(5)
const f = new ListNode(6)
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function print(head) {
  if (!head) {
    return
  }
  print(head.next);
  console.log(head.val);
}

print(a);
console.log('----');
// const [dd] = reverse(a, e);
// print(dd);
// const h = reverseKGroup(a, 4);
// print(h);
