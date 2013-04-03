(function () {

  window.makeBinarySearchTree = function(value){
    var bst = {};
    bst.right = null;
    bst.left = null;
    bst.contains = bstMethods.contains;
    bst.insert = bstMethods.insert;
    bst.value = value;

    return bst;
  } 

  var bstMethods = {};

  //when I add this function it breaks the first spec    
  
  bstMethods.insert = function(value) {
    var side = value < this.value ? 'left' : 'right';
    if(this[side]){
      this[side].insert(value);
    } else {
      this[side] = makeBinarySearchTree(value);
    }
  }

  bstMethods.contains = function(value) {
    //debugger;
    if(this.value === value) {
      return true;
    }
    var side = value < this.value ? 'left' : 'right';
    if(this[side]) {
      if(this[side].contains(value)) {
        return true;
      }
    }
    return false;
  }

  bstMethods.depthFirstLog = function() {
  }

}())