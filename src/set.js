var makeSet = function(){
  var set = Object.create(setPrototype); 
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(str){
	var i =0;
	while(i < this._storage.length) {
		if (this._storage[i] === str) {
			return;
		}
		i++;
	}
	this._storage.push(str);
};

setPrototype.contains = function(str){
	var i =0;
	while(i < this._storage.length) {
		if (this._storage[i] === str) {
			return true;
		}
		i++;
	}
	return false;	
};

setPrototype.remove = function(str){
	if(this.contains(str)) {
		var index = this._storage.indexOf(str);
		this._storage.splice(index,1);
	}
	else { 
		alert("The set doesn't contain " + str);
	}
};
