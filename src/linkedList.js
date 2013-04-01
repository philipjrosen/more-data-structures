// Note: don't use an array to do this.
var makeLinkedList = function(){
  var linkedList = {  };
  linkedList.head = null;
  linkedList.tail = null;

  linkedList.addToTail = function(value){
    var node = makeNode(value);
    //if the list is empty:
    if(linkedList.head === null){
     linkedList.head = node;
    }else {
      var currNode = linkedList.head;
      var i = 0;
      while(currNode.next !== null){
        currNode = currNode.next;
        i++;
      }
      currNode.next = node;
    }
    linkedList.tail = node; 
  };

  linkedList.removeHead = function(){
    var value = null;
    if(linkedList.head !== null){
      value = linkedList.head.value;
      linkedList.head = linkedList.head.next;
    }
    return value; 
  };
  //should be away to refactor this to not have to do
  //separate checks for head and tail
  linkedList.contains = function(target){
    var i = 0;
    var bool = false;
    var currNode = linkedList.head;
    //what if the value of one of the nodes is 'null'?
      while(currNode.next !== null){
        if(currNode.value === target){
          bool = true;
        }
        currNode = currNode.next;
        i++;
      }
    //either the head is the only node or we're at the tail
    if(currNode.next === null){
      if(currNode.value === target){
          bool = true;
        }
    }
    return bool;
  };

  return linkedList;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  node.removeNextNode = function(){
  };

  return node;
};

