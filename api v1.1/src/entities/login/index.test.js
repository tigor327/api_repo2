const { makeSales, updateSales } = require("./index");

describe("adding a new sales", () => {
  it("sales must have a name", () => {
    const sales = {
      fullname: null,
      contact: "09081890778",
      address: "Brgy. Lagao",
    };
    expect(() => makeSales(sales).toThrow("Please enter full"));
  });

  it("sales name must not contain invalid chars", () => {
    const sales = {
      fullname: "#@#&@*(#&*(#@&#@&#(*&",
      contact: "09081890778",
      address: "Brgy. Lagao",
    };
    expect(() =>
      makeSales(sales).toThrow("Invalid chars aren't allowed as name")
    );
  });

  it("contact information must not be blank", () => {
    const sales = {
      fullname: "Janele Cabe",
      contact: " ",
      address: "Brgy. Lagao",
    };
    expect(() => makeSales(sales).toThrow("Please enter contact information"));
  });

  it("address must not be blank", () => {
    const sales = {
      fullname: "Janele Cabe",
      contact: "09081890778",
      address: "",
    };
    expect(() => makeSales(sales).toThrow("Please provide address"));
  });
});

describe("updating sales information", () => {
  it("must not update with blank name", () => {
    const sales = {
      fullname: null,
      contact: "09081890778",
      address: "Brgy. Lagao",
    };
    expect(() => updateSales(sales).toThrow("Please enter full name"));
  });

  it("must not update name with special chars", () => {
    const sales = {
      fullname: "!@#$%^&*(",
      contact: "09081890778",
      address: "Brgy. Lagao",
    };
    expect(() =>
      updateSales(sales).toThrow("Invalid chars aren't allowed as name")
    );
  });

  it("must not update with blank contact information", () => {
    const sales = {
      fullname: "Janele Cabe",
      contact: " ",
      address: "Brgy. Lagao",
    };
    expect(() =>
      updateSales(sales).toThrow("Please enter contact information")
    );
  });

  it("must not update with blank address", () => {
    const sales = {
      fullname: "Janele Cabe",
      contact: "09081890778",
      address: "",
    };
    expect(() => updateSales(sales).toThrow("Please provide address"));
  });

  it("must not update if id isn't available", () => {
    const sales = {
      id: null,
      fullname: "Janele Cabe",
      contact: "09081890778",
      address: "",
    };
    expect(() => updateSales(sales).toThrow("Invalid sales id"));
  });
});
