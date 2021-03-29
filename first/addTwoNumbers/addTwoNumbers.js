var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var root = new ListNode(0);
    var cursor = root;
    var carry = 0;
    while (l1 || l2 || carry !== 0) {
        var l1Val = l1 ? l1.val : 0;
        var l2Val = l2 ? l2.val : 0;
        var sum = l1Val + l2Val + carry;
        carry = Math.floor(sum / 10);
        var sumNode = new ListNode(sum % 10);
        cursor.next = sumNode;
        cursor = cursor.next;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    return root.next;
}
var l1Root = new ListNode(2);
var l1 = l1Root;
l1.next = new ListNode(4);
l1 = l1.next;
l1.next = new ListNode(3);
var l2Root = new ListNode(5);
var l2 = l2Root;
l2.next = new ListNode(6);
l2 = l2.next;
l2.next = new ListNode(4);
function printListNode(list) {
    console.log('开始打印');
    while (list) {
        console.log(list.val);
        list = list.next;
    }
}
printListNode(l1Root);
printListNode(l2Root);
var newList = addTwoNumbers(l1Root, l2Root);
printListNode(newList);
