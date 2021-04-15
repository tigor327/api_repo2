const { makeItem, updateItem } = require("./");

describe("Creating item", () => {
  it("Item must have a name", () => {
    const item = {
      name: null,
      sub_description: "Item description",
      barcode: 123456789,
      quantity: 9,
      costPerUnit: 20,
      companyname: "Biotech Farms",
    };
    expect(() => makeItem(item).toThrow("Item name can't be blank!"));
  });

  it("Item must have a description", () => {
    const item = {
      name: "Eggs",
      sub_description: "",
      barcode: 123456789,
      quantity: 9,
      costPerUnit: 20,
      companyname: "Biotech Farms",
    };
    expect(() => makeItem(item).toThrow("Item description can't be blank!"));
  });

  it("Item must have a quantity", () => {
    const item = {
      name: "Eggs",
      sub_description: "Is that eggs I smell? BRRRRRAAPPPPP",
      barcode: 123456789,
      quantity: null,
      costPerUnit: 20,
      companyname: "Biotech Farms",
    };
    expect(() => makeItem(item).toThrow("Item quantity can't be blank!"));
  });

  it("Item must have a price", () => {
    const item = {
      name: "Eggs",
      sub_description: "Is that eggs I smell? BRRRRRAAPPPPP",
      barcode: 123456789,
      quantity: 24,
      costPerUnit: null,
      companyname: "Biotech Farms",
    };
    expect(() => makeItem(item).toThrow("Input item price!"));
  });

  it("Item must have a barcode", () => {
    const item = {
      name: "Eggs",
      sub_description: "Is that eggs I smell? BRRRRRAAPPPPP",
      barcode: null,
      quantity: 24,
      costPerUnit: 80,
      companyname: "Biotech Farms",
    };
    expect(() => makeItem(item).toThrow("Invalid item barcode"));
  });

  it("Item must have a supplier", () => {
    const item = {
      name: "Eggs",
      sub_description: "Is that eggs I smell? BRRRRRAAPPPPP",
      barcode: 123456789,
      quantity: 24,
      costPerUnit: 24,
      companyname: "",
    };
    expect(() => makeItem(item).toThrow("Provide a supplier"));
  });
});

describe("Updating item", () => {
  it("Must not update if item id doesn't exists", () => {
    const item = {
      id: null,
      name: "Eggs",
      sub_description: "Is that eggs I smell? BRRRRRAAPPPPP",
      barcode: 123456789,
      quantity: 24,
      costPerUnit: 80,
      companyname: "Biotech Farms",
    };
    expect(() => makeItem(item).toThrow("Invalid item id!"));
  });

  it("Must not update if item name is blank", () => {
    const item = {
      id: 1,
      name: null,
      sub_description: "Is that eggs I smell? BRRRRRAAPPPPP",
      barcode: 123456789,
      quantity: 24,
      costPerUnit: 80,
      companyname: "Biotech Farms",
    };
    expect(() => makeItem(item).toThrow("Please enter a item name"));
  });

  it("Must not update if description is blank", () => {
    const item = {
      id: 1,
      name: "Eggs",
      sub_description: "",
      barcode: 123456789,
      quantity: 24,
      costPerUnit: 80,
      companyname: "Biotech Farms",
    };
    expect(() => makeItem(item).toThrow("Please provide a item description"));
  });

  it("Must not update if item has no barcode", () => {
    const item = {
      id: 1,
      name: "Eggs",
      sub_description: "Is that eggs I smell? BRRRRRAAPPPPP",
      barcode: null,
      quantity: 24,
      costPerUnit: 80,
      companyname: "Biotech Farms",
    };
    expect(() => makeItem(item).toThrow("Please provide a barcode"));
  });

  it("Must not update if item doesn't have a price", () => {
    const item = {
      id: 1,
      name: "Eggs",
      sub_description: "Is that eggs I smell? BRRRRRAAPPPPP",
      barcode: 123456789,
      quantity: 24,
      costPerUnit: null,
      companyname: "Biotech Farms",
    };
    expect(() => makeItem(item).toThrow("Please provide a item price!"));
  });

  it("Must not update if supplier isn't provided", () => {
    const item = {
      id: 1,
      name: "Eggs",
      sub_description: "Is that eggs I smell? BRRRRRAAPPPPP",
      barcode: 123456789,
      quantity: 24,
      costPerUnit: 24,
      companyname: "",
    };
    expect(() => makeItem(item).toThrow("Provide a supplier"));
  });
});
