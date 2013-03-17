var makeTree = function(){
  var tree = {};
  tree.value = null;
  tree.children = [];
  tree.parent = null;
  tree.addChild = treeMethods.addChild;
  tree.contains = treeMethods.contains;
  return tree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var child = makeTree();
	child.value = value;
  	this.children.push(child);
  	child.parent = this;
};

treeMethods.contains = function(value){
	if(this.value === value){
    	return true
  	} 
  else {
    for(child in this.children){
      if(this.children[child].value === value){ 
        return true;
      }   
      else {
      	this.children[child].contains(value); 
      }
    }
    return false;
  }
};