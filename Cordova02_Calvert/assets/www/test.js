describe("Converter", function() {
  it("Confirm that tempConverter works", function() {
  	var inputData = 15;
    expect(MyConverter().tempConvert().outputData3.toEqual(5));
  });
  
  it("One plus one equals two", function() {
    expect(1+1).toBe(2);
  });
  
  it("Call addMe() with 2 + 3 = 5", function() {
    expect(addMe()).toBe(5);
  });
  
  it("Call multiplyMe() with 2 * 3 = 6", function() {
    expect(multiplyMe(2, 3)).toBe(6);
  });
  
});