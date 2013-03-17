describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });
  it("'insert' and 'retrieve' should work as you would expect", function() {
    hashTable.insert("john","tennis");
    hashTable.insert("mary", "golf");
    expect(hashTable.retrieve("mary")).toEqual("golf");
    expect(hashTable.retrieve("john")).toEqual("tennis");
  });
  it("'remove' should work as you would expect", function() {
    hashTable.insert("paul","bass");
    hashTable.insert("john", "lead");
    hashTable.insert("george", "rythm");
    hashTable.insert("ringo", "drums");
    hashTable.remove("ringo");
    expect(hashTable.retrieve("ringo")).toEqual(undefined);
  });
  // add more tests here to test the functionality of hashTable
});