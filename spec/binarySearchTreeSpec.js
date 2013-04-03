describe("binarySearchTree", function() {
  var bst;

  beforeEach(function() {
    bst = makeBinarySearchTree(10);
  });

  xit("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(bst.insert).toEqual(jasmine.any(Function));
    expect(bst.contains).toEqual(jasmine.any(Function));
    //expect(bst.depthFirstLog).toEqual(jasmine.any(Function));
  });

  describe("binaryTree.insert", function () {
    xit("should assign a value to the root when the tree if made", function() {
      expect(bst.value).toEqual(10);
    });

    //if I insert a number twice, how do I check if it's been done?
    xit("should accept a value and place it in the tree in the correct position", function() {
      bst.insert(5);
      bst.insert(15);
      bst.insert(17);
      bst.insert(7);
      bst.insert(12);
      bst.insert(3);
      expect(bst.left.value).toEqual(5);
      expect(bst.right.value).toEqual(15);
      expect(bst.right.right.value).toEqual(17);
      expect(bst.left.right.value).toEqual(7);
      expect(bst.right.left.value).toEqual(12);
      expect(bst.left.left.value).toEqual(3);
    });
  });

  describe("binaryTree.contains", function () {
    it("should accept a value and return a boolean reflecting whether or not the value is contained in the tree", function() {
      bst.insert(5);
      bst.insert(15);
      bst.insert(17);
      bst.insert(7);
      bst.insert(12);
      bst.insert(3);
      expect(bst.contains(10)).toEqual(true);
      expect(bst.contains(15)).toEqual(true);
      expect(bst.contains(17)).toEqual(true);
      expect(bst.contains(44)).toEqual(false);
    });

  });

  // add more tests here to test the functionality of binarySearchTree
});