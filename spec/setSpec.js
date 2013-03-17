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
  it("'add', 'contains' and remove should work as you would expect", function() {
    set.add("john");
    set.add("paul");
    set.add("george");
    set.add("ringo");
    expect(set.contains("john")).toBe(true);
    expect(set.contains("ringo")).toBe(true);
    // set.remove("george");
    // expect(set.contains("george")).toBe(false);

  });

});