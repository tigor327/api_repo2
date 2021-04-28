const {
  registerSupplierUseCase,
  removeSupplierUseCase,
  updateSupplierUseCase,
} = require("../../use-cases/supplier/index");
const clearDataBase = require("../../use-cases/clearDataBase/index");

afterAll(async () => {
  console.log("CLEAR DB RESPONSE: ", clearDataBase);
  await clearDataBase.clearDataBaseUseCase();
});

describe("Register a supplier", () => {
  it("create a supplier Name already exists", async () => {
    const supplier = {
      supName: "Supplier testtig",
      supContact: "No Contact",
      supAddress: "No boss",
      supStatus: "Active",
    };
    let res = await registerSupplierUseCase(supplier);
    console.log("asdasdasdasdasdasdasdasdasdasdasd: ", res);
    expect(() => registerSupplierUseCase(supplier).status.toBe(201));
  });
});

describe("Update Supplier", function() {
  it("responds with json", async () => {
    supplier = {
      supName: "joker",
      supContact: "80085",
      supAddress: "5 men's Palace",
      supStatus: "Active",
      id: 5,
    };
    expect(() => updateSupplierUseCase(supplier).statusCode.toBe(201));
  });
});

describe("Update Supplier", function() {
  it("responds with json", async () => {
    supplier = {
      supName: "joker",
      supContact: "80085",
      supAddress: "5 men's Palace",
      supStatus: "Active",
      id: 5,
    };
    expect(() => removeSupplierUseCase(supplier).statusCode.toBe(201));
  });
});
// describe("Register a supplier", () => {
//   it("succesfully create a supplier", async () => {
//     const supplier = {
//       supName: "Unregistered Supplier",
//       supContact: "No Contact",
//       supAddress: "No boss",
//       supStatus: "Active",
//     };
//     let res = await updateSupplier(supplier);
//     console.log("asdasdasdasdasdasdasdasdasdasdasd: ", res);
//     expect(() => updateSupplier(supplier).status.toBe(400));
//   });
// });

// describe("POST /suppliers/list with an Existing Name", function() {
//   it("responds with json", async () => {
//     const supplier = {
//       supName: "Unregistered Supplier",
//       supContact: "619",
//       supAddress: "5 Kings Place",
//       supStatus: "Active",
//       token:
//         "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
//     };
//     expect(() => registerSupplierUseCase(supplier).statusCode.toBe(400));
//     expect(() =>
//       registerSupplierUseCase(supplier).body.error.toBe("Name already exists")
//     );
//   });
// });

// describe("POST /suppliers/list", function() {
//   it("responds with json", async () => {
//     const supplier = {
//       supName: "joaquin",
//       supContact: "619",
//       supAddress: "5 Kings Place",
//       supStatus: "Active",
//       token:
//         "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
//     };
//     expect(() => registerSupplierUseCase(supplier).statusCode.toBe(201));
//     expect(() =>
//       registerSupplierUseCase(supplier).body.result.message.toBe(
//         "Supplier registered succesfully!"
//       )
//     );
//   });
// });
// describe("POST /suppliers/list BOUND TO FAIL WITH A NAME THAT LONG", function() {
//   it("responds with json", async () => {
//     const supplier = {
//       supName:
//         "asdfaaassapdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//       supContact: "619",
//       supAddress: "5 Kings Place",
//       supStatus: "Active",
//       token:
//         "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
//     };
//     expect(() => registerSupplierUseCase(supplier).statusCode.toBe(201));
//     expect(() =>
//       registerSupplierUseCase(supplier).body.result.message.toBe(
//         "Failed to register supplier."
//       )
//     );
//   });
// });
// describe("POST /suppliers/list no Name", function() {
//   it("responds with json", async () => {
//     const supplier = {
//       supName: "",
//       supContact: "619",
//       supAddress: "5 Kings Place",
//       supStatus: "Active",
//       token:
//         "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
//     };

//     expect(() => registerSupplierUseCase(supplier).statusCode.toBe(400));
//     expect(() =>
//       registerSupplierUseCase(supplier).body.error.toBe(
//         "Please enter full name"
//       )
//     );
//   });
// });
// describe("POST /suppliers/list invalid char in name", function() {
//   it("responds with json", async () => {
//     const supplier = {
//       supName: "!j04q1n",
//       supContact: "619",
//       supAddress: "5 Kings Place",
//       supStatus: "Active",
//       token:
//         "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
//     };

//     expect(() => registerSupplierUseCase(supplier).statusCode.toBe(400));
//     expect(() =>
//       registerSupplierUseCase(supplier).body.error.toBe(
//         "Invalid chars aren't allowed as name"
//       )
//     );
//   });
// });
// describe("POST /suppliers/list no Contact", function() {
//   it("responds with json", async () => {
//     const supplier = {
//       supName: "joaquin",
//       supContact: "",
//       supAddress: "5 Kings Place",
//       supStatus: "Active",
//       token:
//         "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
//     };

//     expect(() => registerSupplierUseCase(supplier).statusCode.toBe(400));
//     expect(() =>
//       registerSupplierUseCase(supplier).body.error.toBe(
//         "Please enter contact information"
//       )
//     );
//   });
// });
// describe("POST /suppliers/list no Address", function() {
//   it("responds with json", async () => {
//     const supplier = {
//       supName: "joaquin",
//       supContact: "619",
//       supAddress: "",
//       supStatus: "Active",
//       token:
//         "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
//     };
//     expect(() => registerSupplierUseCase(supplier).statusCode.toBe(400));
//     expect(() =>
//       registerSupplierUseCase(supplier).body.error.toBe("Please enter address")
//     );
//   });
// });
