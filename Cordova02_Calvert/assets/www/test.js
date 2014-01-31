describe("Converter", function() {
	it("Confirm that tempConverter works", function() {
		var clicker = new Clicker();
		var actual = clicker.tempConvert(59);
		expect(actual).toBe(15);
	});

	it("Confirm that MilesConverter works", function() {
		var clicker = new Clicker();
		var actual = clicker.milesConvert(150);
		expect(actual).toBe(241);
	});

	it("Confirm that sqrConverter works", function() {
		var clicker = new Clicker();
		var actual = clicker.sqrConvert(16);
		expect(actual).toBe(4);
	});

});
