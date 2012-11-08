// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global describe, it, expect, example */
(function() {
	"use strict";

	describe("Text field validator", function () {

		it("applies 'required' CSS class when field is empty", function() {
			var field = document.createElement("input");
			field.setAttribute("type", "text");

			example.validateTextField(field);

			var cssClass = field.getAttribute("class");
			expect(cssClass).to.equal("example-required");
		});

		it("removes 'required' CSS class when field is not empty", function() {
			var field = document.createElement("input");
			field.setAttribute("type", "text");
			field.setAttribute("class", "example-required");
			field.value = "not empty";

			example.validateTextField(field);

			var cssClass = field.getAttribute("class");
			expect(cssClass).to.be(null);
		});

		// TODO: should preserve existing CSS classes

	});
}());