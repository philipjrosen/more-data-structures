describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(10);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    //expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  describe("binaryTree.insert", function () {
    it("should assign a value to the root when the tree if made", function() {
      expect(binarySearchTree.value).toEqual(10);
    });

    it("should accept a value and place it in the tree in the correct position", function() {
      binarySearchTree.insert(5);
      //binarySearchTree.insert(5);
      //binarySearchTree.insert(15);
      //binarySearchTree.insert(17);
      //binarySearchTree.insert(7);
      //binarySearchTree.insert(12);
      //binarySearchTree.insert(3);
      expect(binarySearchTree.left.value).toEqual(5);
      //expect(binarySearchTree.right.value).toEqual(15);
      //expect(binarySearchTree.right.right.value).toEqual(17);
    });
  });


  // add more tests here to test the functionality of binarySearchTree
});