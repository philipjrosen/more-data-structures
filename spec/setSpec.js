describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  describe("set.add", function () {
    it("should take a string and add it to the set", function() {
      set.add("john");
      set.add("paul");
      set.add("george");
      set.add("ringo");
    });
  });

  describe("set.contains", function () {
    it("should take a string and add it to the set", function() {
      set.add("john");
      set.add("paul");
      set.add("george");
      set.add("ringo");
      expect(set.contains("john")).toBe(true);
      expect(set.contains("ringo")).toBe(true);
      expect(set.contains("pete")).toBe(false);
    });
  });

  describe("set.remove", function () {
    it("should take a string and add it to the set", function() {
      set.add("john");
      set.add("paul");
      set.add("george");
      set.add("ringo");
      set.add("stuart");
      expect(set.contains("stuart")).toBe(true);
      set.remove("stuart");
      expect(set.contains("stuart")).toBe(false);
    });
  });

});