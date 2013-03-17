describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
  });

  it("should have methods named 'addChild' and 'contains'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
  });
  it("'addChild' and 'contains' should behave as you would expect", function() {
    tree.addChild(1);
    tree.addChild(2);
    expect(tree.contains(1)).toBe(true);
    expect(tree.contains(2)).toBe(true);
    expect(tree.contains(3)).toBe(false);
  });
  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
});