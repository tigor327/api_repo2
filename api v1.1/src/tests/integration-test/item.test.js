// change to test DB
const app = require("../../../app");
var request = require("supertest");
//const { Server } = require("node:http");

describe(`Tests Suites`, () => {
  it("has a module", () => {
    expect(app).toBeDefined();
  });

  beforeAll(() => {});

  afterEach(() => {
    app.close();
  });
  afterAll(async () => {
    let response = await request(app).get("/clear");
    app.close();

    console.log("CLEAR DB RESPONSE: ", response.status);
  });

  describe("item routes test", () => {
    describe("GET /items/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .get("/items/list/")
          .send({
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(200);
      });
    });
    describe("POST /items/list", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .post("/items/list/")
          .send({
            name: "item3",
            barcode: "ab12-cd34",
            description: "item3 description",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });
    describe("PATCH /items/list/3", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .patch("/items/list/3")
          .send({
            name: "item3 patched",
            barcode: "ab12-cd345",
            description: "item3 description patched",
            price: 30,
            quantity: 100,
            itemStatus: "Active",
            supName: "Unregistered Supplier",
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        console.log("response body: ", response.body);
        console.log("response status: ", response.status);

        expect(response.statusCode).toBe(201);
      });
    });
    describe("DELETE /items/list/3", function() {
      it("responds with json", async () => {
        const response = await request(app)
          .delete("/items/list/3")
          .send({
            token:
              "eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k",
          });
        expect(response.statusCode).toBe(200);
        expect(response.body.removeItems).toBe("Item deleted successfully.");
      });
    });
  });
  // test(`Select Items`, async () => {
  //   const res = await routes.selectEmployees({ info });
  //   const data = res;
  //   expect(data).toBe(200);
  // });

  //   test(`Add Employees - All fields have value.`, async () => {
  //     const info = {
  //       firstName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       lastName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       age: 13,
  //     };
  //     const res = await routes.addEmployees({ info });
  //     const data = res.status;
  //     expect(data).toBe(201);
  //   });

  //   test(`Add Employees - Required fields missing.`, async () => {
  //     const info = {
  //       firstName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       lastName: null,
  //       age: 8,
  //     };
  //     const res = await routes.addEmployees({ info });
  //     const data = res.response.status;
  //     expect(data).toBe(400);
  //   });

  //   test(`Update Employees - All fields have value.`, async () => {
  //     const emp = await routes.selectEmployees();
  //     const employees = emp.data.view;
  //     const id = employees[employees.length - 1].id;
  //     const info = {
  //       firstName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       lastName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       age: 9,
  //     };

  //     const res = await routes.updateEmployees({ id, info });
  //     const data = res.status;
  //     expect(data).toBe(200);
  //   });

  //   test(`Update Employees - Required fields are missing.`, async () => {
  //     const emp = await routes.selectEmployees();
  //     const employees = emp.data.view;
  //     const id = employees[employees.length - 1].id;
  //     const info = {
  //       firstName: null,
  //       lastName: randomstring.generate({
  //         length: 12,
  //         charset: "alphabetic",
  //       }), // generate random string
  //       age: 9,
  //     };

  //     const res = await routes.updateEmployees({ id, info });
  //     const data = res.response.status;
  //     expect(data).toBe(400);
  //   });

  //   test(`Delete Employees`, async () => {
  //     const emp = await routes.selectEmployees();
  //     const employees = emp.data.view;
  //     const id = employees[employees.length - 1].id;

  //     const res = await routes.deleteEmployees({ id });
  //     const data = res.status;
  //     expect(data).toBe(201);
  //   });
});
