var makeLinkedList = function() {
  var linkedList = {};
  linkedList.head = null;
  linkedList.tail = null;

  linkedList.addToTail = function(value) {
    var node = makeNode(value);
    if (linkedList.head === null) {
      linkedList.head = node;
      linkedList.tail = node;
    }
    else {
      linkedList.tail.next = node;
      linkedList.tail = node;
    }
  };

  linkedList.contains = function(value) {
    var current = linkedList.head;
    var bool = false;
    while (current !==null) {
      if(current.value === value) {
        bool = true;
        break;
      }
      else {
        current = current.next;
      }
    }
    return bool;
  };

  linkedList.removeHead = function(){};

  return linkedList;
};

var makeNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  node.removeNextNode = function() {

  };

  return node;
};
