
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1 || l2 || sum){

        if(l1){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};
console.log( addTwoNumbers([2,4,3],[5,6,4]) );