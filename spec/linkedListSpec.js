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

  describe("linkedList.addToTail", function () {
    it("should take a value and insert it at the end of the list", function() {
      linkedList.addToTail("a");
      expect(linkedList.tail.value).toEqual("a");
      linkedList.addToTail("b");
      expect(linkedList.tail.value).toEqual("b");
      expect(linkedList.tail.next).toBeNull();
    });
  });

  describe("linkedList.removeHead", function () {
    it("should remove the first node from the list and return its value", function() {
      linkedList.addToTail("a");
      expect(linkedList.removeHead()).toEqual("a");
      expect(linkedList.removeHead()).toBeNull();
      linkedList.addToTail("a");
      linkedList.addToTail("b");
      expect(linkedList.removeHead()).toEqual("a");
      expect(linkedList.head.value).toEqual("b");
    });
  });

  describe("linkedList.contains", function () {
    it("should take a value and return true if value is in list, false if not", function() {
      linkedList.addToTail("a");
      linkedList.addToTail("b");
      expect(linkedList.contains("a")).toBe(true);
      expect(linkedList.contains("b")).toBe(true);
      expect(linkedList.contains("c")).toBe(false);
    });
  });
});








