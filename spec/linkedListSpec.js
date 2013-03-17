describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // describe("linkedList.addToTail", function () {
  //   it("should takle a value and insert it at the end of the list", function() { 

  //   });
  // });

  describe("linkedList.contains", function () {
    it("should take a value that returns true if value is in list, false if not", function() {
      // var node1 = makeNode(1);
      // var node2 = makeNode(2);
      linkedList.addToTail(1);
      linkedList.addToTail(2);
      expect(linkedList.contains(1)).toBe(true);
      expect(linkedList.contains(2)).toBe(true);
      expect(linkedList.contains(3)).toBe(false);
    });
  });
});








