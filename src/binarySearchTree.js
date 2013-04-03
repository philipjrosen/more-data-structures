(function () {

  window.makeBinarySearchTree = function(value){
    var bst = {};
    bst.right = null;;
    bst.left = null;
    bst.contains = bstMethods.contains;
    bst.insert = bstMethods.insert;
    bst.value = value;

    return bst;
  } 

  var bstMethods = {};

  //when I add this function it breaks the first spec    
  
  bstMethods.insert = function(value) {
    if(value < this.value) {
      if(this.left === null){
        this.left = makeBinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if(this.right === null){
        this.right = makeBinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  bstMethods.contains = function() {
  }

  bstMethods.depthFirstLog = function() {
  }

}())